import { requireRole } from "@/lib/auth";
import ProjectManagementWorkspace from "@/components/projects/ProjectManagementWorkspace";

export const dynamic = "force-dynamic";

export default async function ClientProjectsPage() {
  const session = await requireRole("client");

  return <ProjectManagementWorkspace role="client" sessionUserId={session.user.id} canEditTasks={false} />;
}
