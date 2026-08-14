// Centralized project configuration
// All project metadata and image counts live here

export interface Project {
  slug: string
  index: string        // "01", "02", etc.
  title: string
  subtitle: string
  pageCount: number
  description?: string
}

export const projects: Project[] = [
  {
    slug: 'royal-renaissance',
    index: '01',
    title: 'The Royal Renaissance',
    subtitle: 'Tales of the Taj',
    pageCount: 10,
    description:
      'A couture collection drawing from the grandeur of Mughal aesthetics — rich embroidery, architectural silhouettes, and regal opulence reinterpreted for the modern wardrobe.',
  },
  {
    slug: 'sheesh-mahal',
    index: '02',
    title: 'Sheesh Mahal',
    subtitle: 'Where Light Meets Elegance',
    pageCount: 10,
    description:
      'Inspired by the Palace of Mirrors, this collection explores the interplay of reflection and transparency — intricate surface work, crystalline textures, and luminous silhouettes.',
  },
  {
    slug: 'aerostruct',
    index: '03',
    title: 'Aerostruct',
    subtitle: '',
    pageCount: 24,
    description:
      'A structural exploration of form and function — garments engineered with architectural precision, where silhouette becomes sculpture and fabric behaves like material.',
  },
  {
    slug: 'ann',
    index: '04',
    title: 'ANN',
    subtitle: '',
    pageCount: 27,
    description:
      'An introspective collection examining identity and femininity through restraint — minimal lines, considered proportions, and a language of quiet strength.',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

// Generate array of image paths for a project in correct numerical order
export function getProjectImages(project: Project): string[] {
  return Array.from({ length: project.pageCount }, (_, i) => {
    const num = String(i + 1).padStart(2, '0')
    return `/projects/${project.slug}/${num}.webp`
  })
}
