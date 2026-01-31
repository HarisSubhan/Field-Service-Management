import { useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminDashboard } from "@/components/admin/screens/AdminDashboard";
import { DispatchScheduling } from "@/components/admin/screens/DispatchScheduling";
import { JobDetails } from "@/components/admin/screens/JobDetails";
import { AIIntelligence } from "@/components/admin/screens/AIIntelligence";
import { QuotesInvoices } from "@/components/admin/screens/QuotesInvoices";
import { JobCostingPayroll } from "@/components/admin/screens/JobCostingPayroll";
import { KPIAnalytics } from "@/components/admin/screens/KPIAnalytics";
import { AdminSettings } from "@/components/admin/screens/AdminSettings";
import { MobileAppDemo } from "@/components/mobile/MobileAppDemo";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderScreen = () => {
    switch (currentScreen) {
      case "dashboard": return <AdminDashboard />;
      case "dispatch": return <DispatchScheduling />;
      case "job-details": return <JobDetails />;
      case "ai-intelligence": return <AIIntelligence />;
      case "invoices": return <QuotesInvoices />;
      case "job-costing": return <JobCostingPayroll />;
      case "analytics": return <KPIAnalytics />;
      case "settings": return <AdminSettings />;
      case "mobile": return <MobileAppDemo />;
      default: return <AdminDashboard />;
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar 
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      {renderScreen()}
    </div>
  );
};

export default Index;
