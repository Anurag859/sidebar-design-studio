import { AppSidebar } from "@/components/AppSidebar";

const Index = () => {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <main className="flex-1 bg-background p-8">
        <div className="max-w-4xl">
          <h1 className="text-2xl font-semibold text-primary mb-2">Salary Expenses</h1>
          <p className="text-muted-foreground">Manage salary expenses entries with attachments</p>
        </div>
      </main>
    </div>
  );
};

export default Index;
