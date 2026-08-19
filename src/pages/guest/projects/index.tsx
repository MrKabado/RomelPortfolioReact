import ProjectHeader from "../../../components/features/projects/project-header";
import ProjectHolder from "../../../components/features/projects/projects-holder";

export default function ProjectsPage() {
  return (
    <div>
      <ProjectHeader />
      <ProjectHolder limit={false} isHome={false} />
    </div>
  )
}