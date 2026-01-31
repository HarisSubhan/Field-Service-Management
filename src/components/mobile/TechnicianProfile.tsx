import { User, Clock, Briefcase, Star, ChevronRight, LogOut, Settings, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const weeklyData = [
  { day: "Mon", hours: 8, jobs: 4 },
  { day: "Tue", hours: 7.5, jobs: 3 },
  { day: "Wed", hours: 8, jobs: 5 },
  { day: "Thu", hours: 6, jobs: 3 },
  { day: "Fri", hours: 0, jobs: 0 },
];

const recentJobs = [
  { id: "4520", type: "HVAC Repair", date: "Today", rating: 5 },
  { id: "4518", type: "Maintenance", date: "Yesterday", rating: 5 },
  { id: "4515", type: "Installation", date: "Jan 13", rating: 4 },
];

export function TechnicianProfile() {
  const totalHours = weeklyData.reduce((sum, d) => sum + d.hours, 0);
  const totalJobs = weeklyData.reduce((sum, d) => sum + d.jobs, 0);

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-sidebar px-5 pb-6 pt-2">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
            MJ
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">Mike Johnson</h1>
            <p className="text-sidebar-foreground/60 text-sm">HVAC Specialist</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-white font-medium text-sm">4.9</span>
              <span className="text-sidebar-foreground/60 text-xs">(127 reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-5 py-4 space-y-4">
        {/* Weekly Summary */}
        <div className="bg-card rounded-xl p-4 border">
          <h3 className="font-semibold mb-4">This Week</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-primary/10 rounded-lg">
              <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-2xl font-bold">{totalHours}h</p>
              <p className="text-xs text-muted-foreground">Worked</p>
            </div>
            <div className="text-center p-3 bg-success/10 rounded-lg">
              <Briefcase className="w-5 h-5 text-success mx-auto mb-1" />
              <p className="text-2xl font-bold">{totalJobs}</p>
              <p className="text-xs text-muted-foreground">Jobs Done</p>
            </div>
          </div>

          {/* Daily Breakdown */}
          <div className="space-y-2">
            {weeklyData.map((day, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs w-8 text-muted-foreground">{day.day}</span>
                <div className="flex-1">
                  <Progress value={(day.hours / 8) * 100} className="h-2" />
                </div>
                <span className="text-xs text-muted-foreground w-12 text-right">
                  {day.hours}h / {day.jobs}j
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Jobs */}
        <div className="bg-card rounded-xl p-4 border">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Recent Jobs</h3>
            <button className="text-xs text-primary">View All</button>
          </div>
          
          <div className="space-y-2">
            {recentJobs.map((job, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                <div>
                  <p className="text-sm font-medium">#{job.id} - {job.type}</p>
                  <p className="text-xs text-muted-foreground">{job.date}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm">{job.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between p-4 bg-card rounded-xl border">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 bg-card rounded-xl border">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Help & Support</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="p-5 border-t bg-card">
        <Button variant="outline" className="w-full text-destructive border-destructive/30 hover:bg-destructive/10">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
