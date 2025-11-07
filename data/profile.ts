export interface ProfileData {
  name: string
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
}

export const profile: ProfileData = {
  name: 'Moaaz Elmahi',
  email: 'mstfyrb477@gmail.com',
  phone: '+20 1017877640',
  github: 'https://github.com/moaaz17877640',
  linkedin: 'https://www.linkedin.com/in/moaaz-elmahi/',
  facebook: 'https://www.facebook.com/Moaaz.elmahy',
  // Updated CV Google Drive file id
  resumeId: '1-y3PfxHsfY37ePyXTKLUxUNeZDZgoRIz',
  // LinkedIn About (pasted manually). Use \n between paragraphs.
  about: `Currently serving as an Instructor at the National Telecommunication Institute (NTI), I leverage my knowledge in AWS, DevOps, and cloud services to provide training and share insights with peers and learners. My role reflects my commitment to fostering knowledge transfer and technological growth within the IT sector.

Pursuing a Bachelor’s in Information Technology at Tanta University, I have built a strong foundation in cloud computing and DevOps. I have solid experience in programming with Python, Bash, and Java, and I’m skilled in containerization using Docker and orchestration with Kubernetes.

I’m proficient in Infrastructure as Code tools like Terraform and have hands-on experience with cloud platforms such as AWS and Microsoft Azure. I build and manage CI/CD pipelines using tools like GitHub Actions and Jenkins, and leverage monitoring solutions like Prometheus and Grafana to ensure system stability and performance.

I follow DevOps best practices to improve development workflows, reduce deployment times, and increase system reliability. I’m always eager to learn new technologies and contribute to building scalable, automated infrastructure.`,
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
  skillsSidebarBody: 'A curated set of tools and platforms I use day-to-day.'
}
