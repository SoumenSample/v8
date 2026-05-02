import { requireRole } from "@/lib/auth";
import ProjectManagementWorkspace from "@/components/projects/ProjectManagementWorkspace";

export const dynamic = "force-dynamic";

export default async function EmployeeProjectsPage() {
  const session = await requireRole("employee");

  return <ProjectManagementWorkspace role="employee" sessionUserId={session.user.id} canEditTasks />;
}
