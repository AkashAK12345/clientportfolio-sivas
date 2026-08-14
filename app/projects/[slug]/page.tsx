import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProjectBySlug, getProjectImages } from '@/lib/projects'
import ProjectDetail from '@/components/ProjectDetail'

interface Props {
  params: Promise<{ slug: string }>
}

// Generate static params for all known projects
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Not Found' }
  return {
    title: `${project.title} — Sivas S B`,
    description: project.description ?? `Fashion design project by Sivas S B: ${project.title}`,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const images = getProjectImages(project)

  return <ProjectDetail project={project} images={images} />
}
