import HeaderLogo from "@/app/components/HeaderLogo";
import DocsSkipLinks from "@/app/components/DocsSkipLinks";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ projectId: string }>;
}

export default async function ProjectLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen items-center z-2">
      <DocsSkipLinks />
      <header className="w-full flex justify-center py-6 z-2">
        <HeaderLogo />
      </header>
      <main className="flex-1 w-full flex items-center justify-center bg-transparent">
        {children}
      </main>
    </div>
  );
}
