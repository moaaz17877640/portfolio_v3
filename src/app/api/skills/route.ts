import { NextResponse } from 'next/server'
import { profile } from '@/data/profile'

const GITHUB_USER = 'moaaz17877640'
const PERSONAL_REPO = 'moaaz17877640/moaaz17877640'

async function fetchRepos(headers: HeadersInit) {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=12`, { headers: headers as any, cache: 'no-store' })
  if (!res.ok) return []
  return res.json()
}

async function fetchLanguages(url: string, headers: HeadersInit) {
  const res = await fetch(url, { headers: headers as any, cache: 'no-store' })
  if (!res.ok) return {}
  return res.json()
}

export async function GET() {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'portfolio-app'
  }
  const source = { github: true, linkedin: true, personalReadme: true }
  if (process.env.GITHUB_TOKEN) headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`

  const repos = await fetchRepos(headers)
  const langTotals: Record<string, number> = {}
  for (const r of repos) {
    if (!r.languages_url) continue
    const langs = await fetchLanguages(r.languages_url, headers)
    for (const [lang, bytes] of Object.entries(langs)) {
      langTotals[lang] = (langTotals[lang] || 0) + (bytes as number)
    }
  }
  const totalBytes = Object.values(langTotals).reduce((a, b) => a + b, 0)
  let aggregated = Object.entries(langTotals)
    .map(([name, bytes]) => ({ name, score: Math.round(((bytes as number) / Math.max(1, totalBytes)) * 100) }))
    .sort((a, b) => b.score - a.score)

  // Parse personal README for explicit skill tokens (simple heuristic)
  try {
    const readmeRes = await fetch(`https://raw.githubusercontent.com/${PERSONAL_REPO}/main/README.md`, { headers })
    if (readmeRes.ok) {
      const text = await readmeRes.text()
      const tokens = text.match(/[A-Za-z+#\.\-]{3,}/g) || []
      const interest = new Set<string>(tokens.filter(t => /^(Docker|Kubernetes|Terraform|CloudFormation|Ansible|Python|JavaScript|TypeScript|React|Node|CI|CD|Linux|AWS|GitHub|DevOps)$/i))
      for (const raw of interest) {
        const name = raw.replace(/^[A-Z]+$/,(s)=>s) // keep as-is
        if (!aggregated.find(s => s.name.toLowerCase() === name.toLowerCase())) {
          aggregated.push({ name, score: 55 })
        }
      }
    }
  } catch {}

  // Merge optional profile.skillsOverride with medium score
  if (profile.skillsOverride) {
    for (const s of profile.skillsOverride) {
      if (!aggregated.find(a => a.name.toLowerCase() === s.toLowerCase())) {
        aggregated.push({ name: s, score: 50 })
      }
    }
  }

  // Merge with LinkedIn fallback skills
  try {
    // @ts-ignore - using dynamic import of JSON
    const fallback = (await import('../../../../data/skills.json')).default as { skills: string[] }
    for (const s of fallback.skills) {
      if (!aggregated.find((x) => x.name.toLowerCase() === s.toLowerCase())) {
        aggregated.push({ name: s, score: 60 })
      }
    }
  } catch {}

  return NextResponse.json({ aggregated: aggregated.sort((a,b)=> b.score - a.score), source })
}
