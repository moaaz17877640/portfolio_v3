export interface ProfileData {
  name: string
  headline: string
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  facebook: string
  resumeId: string
  about?: string
  skillsOverride?: string[]
  // Optional: a curated list of skills to show with logos in the Skills section
  skillsLogos?: Array<{
    name: string
    icon: string // react-icons name, e.g., "SiDocker"
    color?: string
  }>
  // Optional: custom copy for the Skills sidebar when using logos
  skillsSidebarTitle?: string
  skillsSidebarBody?: string
  experience: Array<{
    company: string
    role: string
    period: string
    location: string
    highlights: string[]
  }>
  projects: Array<{
    name: string
    company?: string
    stack: string
    description: string
    highlights: string[]
  }>
  certifications: Array<{
    name: string
    url: string
  }>
}

export const profile: ProfileData = {
  name: 'Moaaz Saeed Elmahi',
  headline: 'Cloud / DevOps Engineer',
  location: 'Cairo, Egypt',
  email: 'moazelmahi39@gmail.com',
  phone: '+20 1017877640',
  github: 'https://github.com/moaaz17877640',
  linkedin: 'https://www.linkedin.com/in/moaaz-elmahi/',
  facebook: 'https://www.facebook.com/Moaaz.elmahy',
  // Updated CV Google Drive file id
  resumeId: '1-y3PfxHsfY37ePyXTKLUxUNeZDZgoRIz',
  // LinkedIn About (pasted manually). Use \n between paragraphs.
  about: `Cloud / DevOps Engineer with hands-on experience across AWS, Terraform, Docker, Ansible, GitHub Actions, and Jenkins. I automate infrastructure provisioning, CI/CD pipelines, server operations, and application deployments with a focus on reliable, repeatable delivery.

At Azzrk, I build and maintain cloud environments and developer tooling for staging and production workflows. I also teach cloud computing at the National Telecommunication Institute, helping learners turn architecture concepts into practical deployments.

I care about clear automation, secure defaults, and systems that are easier for teams to operate.`,
  // Optional manual override list of key skills; if present will be merged with detected GitHub languages
  skillsOverride: ['DevOps', 'CI/CD', 'Terraform', 'CloudFormation', 'Ansible', 'Docker', 'Kubernetes', 'GitHub Actions', 'Linux'],
  // Curated CV skills with brand logos
  skillsLogos: [
    { name: 'AWS', icon: 'SiAmazonaws', color: '#FF9900' },
    { name: 'Microsoft Azure', icon: 'SiMicrosoftazure', color: '#0078D4' },
    { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
    { name: 'Kubernetes', icon: 'SiKubernetes', color: '#326CE5' },
    { name: 'Terraform', icon: 'SiTerraform', color: '#7B42BC' },
    { name: 'Ansible', icon: 'SiAnsible', color: '#EE0000' },
    { name: 'GitHub Actions', icon: 'SiGithubactions', color: '#2088FF' },
    { name: 'Jenkins', icon: 'SiJenkins', color: '#D24939' },
    { name: 'Linux', icon: 'SiLinux', color: '#FCC624' },
    { name: 'Bash', icon: 'SiGnubash', color: '#4EAA25' },
    { name: 'Python', icon: 'SiPython', color: '#3776AB' },
    { name: 'Git', icon: 'SiGit', color: '#F05032' },
    { name: 'Prometheus', icon: 'SiPrometheus', color: '#E6522C' },
    { name: 'Grafana', icon: 'SiGrafana', color: '#F46800' }
  ],
  // Custom text to show instead of "Sources / CV: manual list with logos"
  skillsSidebarTitle: 'Highlights',
  skillsSidebarBody: 'A focused toolkit for infrastructure automation, delivery, and reliable cloud operations.',
  experience: [
    {
      company: 'Azzrk',
      role: 'DevOps Engineer',
      period: 'Nov. 2025 - Present',
      location: 'Mansoura, Dakahlia, Egypt',
      highlights: [
        'Automate build and deployment workflows with GitHub Actions to improve delivery reliability.',
        'Use Ansible, Bash, and Python for server provisioning, configuration, and application deployments.',
        'Maintain repeatable AWS environments across staging and production while supporting availability and security.',
        'Partner with cross-functional teams to improve infrastructure efficiency and control cloud costs.'
      ]
    },
    {
      company: 'National Telecommunication Institute',
      role: 'Cloud Instructor - Part-time',
      period: 'Apr. 2025 - Dec. 2025',
      location: 'Egypt',
      highlights: [
        'Delivered practical training on cloud concepts, architectures, and IaaS, PaaS, and SaaS.',
        'Led hands-on labs covering compute, storage, networking, databases, deployment, and security.',
        'Mentored learners and professionals preparing for industry certifications and real-world projects.',
        'Developed course material aligned with current cloud engineering practices.'
      ]
    }
  ],
  projects: [
    { name: 'Jenkaz', company: 'Azzrk', stack: 'GitHub Actions, Jenkins, CI/CD', description: 'A bridge between GitHub CI workflows and local Jenkins CD pipelines.', highlights: ['Polls Jenkins job status and turns deployment results into workflow gates.', 'Fails workflows automatically when deployments do not succeed.'] },
    { name: 'Hurlaz', company: 'Azzrk', stack: 'TypeScript, GitHub Actions, Hurl', description: 'A reusable API testing action for deployment pipelines.', highlights: ['Runs dynamic Hurl scenarios to validate API workflows and application logic.', 'Automates HTTP request validation and security header checks.'] },
    { name: 'Codeaz', company: 'Azzrk', stack: 'GitHub Actions, Security, RBAC', description: 'Repository authorization automation for safer code changes.', highlights: ['Enforces code-owner permissions and review requirements across critical paths.', 'Automates contributor authorization checks.'] },
    { name: 'Cloudaz', company: 'Azzrk', stack: 'Python, Telegram Bot API, AWS, Hetzner', description: 'Remote infrastructure operations through a Telegram bot.', highlights: ['Manages cloud resources and server operations from chat commands.', 'Integrates provider APIs for resource status and operational alerts.'] },
    { name: 'Dropit', stack: 'Docker, AWS, GitHub Actions, CI/CD', description: 'Containerized delivery workflows for frontend and backend applications.', highlights: ['Automates testing, image builds, and AWS deployments.', 'Applies Infrastructure as Code practices for availability and scalability.'] },
    { name: 'Flareaz', company: 'Azzrk', stack: 'Go, Cloudflare SDK, SQLite, REST APIs', description: 'Multi-tenant Cloudflare and DNS provisioning service.', highlights: ['Automates zones and environment-aware subdomains.', 'Persists tenant metadata and audit trails behind a REST API.'] },
    { name: 'Taco Application', company: 'Azzrk', stack: 'Docker, Justfile, GitHub Actions, Jenkins', description: 'A reproducible development and release workflow.', highlights: ['Automates development and maintenance commands with Justfile.', 'Combines Docker, GitHub Actions, and Jenkins for CI/CD.'] },
    { name: 'Sallamaat Application', company: 'Azzrk', stack: 'CI/CD, RabbitMQ, Bash, Linux', description: 'Reliable campaign processing for long-running workloads.', highlights: ['Built RabbitMQ middleware for high-volume campaign delivery.', 'Implemented persistent job handling for campaigns exceeding 24 hours.'] }
  ],
  certifications: [
    { name: 'AWS Certified Solutions Architect - Associate', url: 'https://www.credly.com/badges/3bb149d1-8c80-4f83-b69e-2b0d36dd2e32' },
    { name: 'AWS Certified Cloud Practitioner', url: 'https://www.credly.com/badges/eb3908da-2a6b-4710-9fe9-954a1b5c9936/linked_in_profile' },
    { name: 'Oracle Cloud Infrastructure 2024 Certified Foundations Associate', url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=5BD86914A6262A377CBE961E491D630F4763C097864553EE3A15C5AA0FE3C590' }
  ]
}
