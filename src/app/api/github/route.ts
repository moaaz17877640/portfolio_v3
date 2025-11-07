import { NextResponse } from 'next/server'

const GITHUB_USER = 'moaaz17877640'

export async function GET() {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'portfolio-app'
  }
  if (process.env.GITHUB_TOKEN) headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`

  const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=9`, { headers, next: { revalidate: 3600 } })
  if (!reposRes.ok) return NextResponse.json([], { status: 200 })
  const repos = await reposRes.json()

  // Include only relevant fields
  const data = (repos || []).map((r: any) => ({
    id: r.id,
    name: r.name,
    html_url: r.html_url,
    description: r.description,
    homepage: r.homepage,
    language: r.language,
    topics: r.topics
  }))

  return NextResponse.json(data)
}
