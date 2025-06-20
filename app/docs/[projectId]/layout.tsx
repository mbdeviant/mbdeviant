// import { projects } from "@/public/data/projects-data";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ projectId: string }>;
}

export default async function ProjectLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen items-center">
      <main className="flex-1 flex items-center justify-center bg-transparent">
        {children}
      </main>
    </div>
  );
}
