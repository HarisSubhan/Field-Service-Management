import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechnicianLogin } from "./TechnicianLogin";
import { TechnicianHome } from "./TechnicianHome";
import { TechnicianJobDetail } from "./TechnicianJobDetail";
import { TechnicianOnSite } from "./TechnicianOnSite";
import { TechnicianAINotes } from "./TechnicianAINotes";
import { TechnicianSignature } from "./TechnicianSignature";
import { TechnicianProfile } from "./TechnicianProfile";

const screens = [
  { id: "login", label: "Login" },
  { id: "home", label: "Job List" },
  { id: "job-detail", label: "Job Detail" },
  { id: "on-site", label: "On-Site Work" },
  { id: "ai-notes", label: "AI Notes" },
  { id: "signature", label: "Signature" },
  { id: "profile", label: "Profile" },
];

export function MobileAppDemo() {
  const [currentScreen, setCurrentScreen] = useState("login");
  const currentIndex = screens.findIndex(s => s.id === currentScreen);

  const goNext = () => {
    if (currentIndex < screens.length - 1) {
      setCurrentScreen(screens[currentIndex + 1].id);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentScreen(screens[currentIndex - 1].id);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "login": return <TechnicianLogin />;
      case "home": return <TechnicianHome />;
      case "job-detail": return <TechnicianJobDetail />;
      case "on-site": return <TechnicianOnSite />;
      case "ai-notes": return <TechnicianAINotes />;
      case "signature": return <TechnicianSignature />;
      case "profile": return <TechnicianProfile />;
      default: return <TechnicianLogin />;
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-grey-dark">
      {/* Header */}
      <header className="bg-sidebar p-4 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-white text-center">Mobile App Demo</h1>
        <p className="text-sm text-center text-sidebar-foreground/60 mt-1">Technician Interface Preview</p>
      </header>

      {/* Navigation Pills */}
      <div className="bg-sidebar px-4 py-3 overflow-x-auto">
        <div className="flex gap-2 justify-center min-w-max">
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setCurrentScreen(screen.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                currentScreen === screen.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-sidebar-accent text-sidebar-foreground hover:bg-sidebar-accent/80"
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>
      </div>

      {/* Phone Frame */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="relative">
          {/* Phone container */}
          <div className="w-[375px] h-[812px] bg-black rounded-[50px] p-3 shadow-2xl">
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />
            
            {/* Screen */}
            <div className="w-full h-full bg-background rounded-[38px] overflow-hidden relative">
              {/* Status bar */}
              <div className="h-11 bg-sidebar flex items-center justify-between px-6 text-white text-xs">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    <div className="w-1 h-2 bg-white rounded-sm" />
                    <div className="w-1 h-2.5 bg-white rounded-sm" />
                    <div className="w-1 h-3 bg-white rounded-sm" />
                    <div className="w-1 h-3.5 bg-white rounded-sm" />
                  </div>
                  <span className="ml-1">5G</span>
                  <div className="w-6 h-3 border border-white rounded-sm ml-1 relative">
                    <div className="absolute inset-0.5 bg-white rounded-sm" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
              
              {/* Screen Content */}
              <div className="h-[calc(100%-44px)] overflow-hidden">
                {renderScreen()}
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-sidebar border-sidebar-border text-white hover:bg-sidebar-accent"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goNext}
            disabled={currentIndex === screens.length - 1}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-sidebar border-sidebar-border text-white hover:bg-sidebar-accent"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Screen indicator */}
      <div className="bg-sidebar p-4 text-center">
        <p className="text-sm text-sidebar-foreground">
          Screen {currentIndex + 1} of {screens.length}: <span className="text-primary font-medium">{screens[currentIndex].label}</span>
        </p>
      </div>
    </div>
  );
}
