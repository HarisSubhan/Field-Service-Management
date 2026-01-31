import { MapPin, Clock, ChevronRight, Bell, User } from "lucide-react";
import { StatusBadge } from "@/components/admin/StatusBadge";

const jobs = [
  { id: "4521", customer: "Robert Anderson", address: "1234 Oak Street", type: "HVAC Repair", eta: "10:30 AM", status: "in-progress" as const, distance: "2.3 mi" },
  { id: "4522", customer: "Emily Davis", address: "567 Pine Avenue", type: "Plumbing", eta: "1:00 PM", status: "pending" as const, distance: "4.1 mi" },
  { id: "4523", customer: "James Wilson", address: "890 Maple Drive", type: "Electrical", eta: "3:30 PM", status: "pending" as const, distance: "5.8 mi" },
];

export function TechnicianHome() {
  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-sidebar px-5 pb-6 pt-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              MJ
            </div>
            <div>
              <p className="text-white font-medium text-sm">Good morning,</p>
              <p className="text-white font-bold">Mike Johnson</p>
            </div>
          </div>
          <button className="relative p-2">
            <Bell className="w-6 h-6 text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </button>
        </div>
        
        {/* Stats */}
        <div className="flex gap-3">
          <div className="flex-1 bg-sidebar-accent rounded-xl p-3">
            <p className="text-sidebar-foreground/60 text-xs">Today's Jobs</p>
            <p className="text-white text-xl font-bold">3</p>
          </div>
          <div className="flex-1 bg-sidebar-accent rounded-xl p-3">
            <p className="text-sidebar-foreground/60 text-xs">Completed</p>
            <p className="text-white text-xl font-bold">0</p>
          </div>
          <div className="flex-1 bg-sidebar-accent rounded-xl p-3">
            <p className="text-sidebar-foreground/60 text-xs">Hours</p>
            <p className="text-white text-xl font-bold">0h</p>
          </div>
        </div>
      </div>

      {/* Job List */}
      <div className="flex-1 overflow-auto px-5 py-4">
        <h2 className="font-semibold text-lg mb-4">Assigned Jobs</h2>
        
        <div className="space-y-3">
          {jobs.map((job, index) => (
            <div 
              key={job.id}
              className={`p-4 rounded-xl border transition-all ${
                index === 0 
                  ? 'border-primary bg-primary/5 shadow-sm' 
                  : 'bg-card'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">#{job.id}</span>
                    {index === 0 && (
                      <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                        Next
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium mt-1">{job.customer}</p>
                </div>
                <StatusBadge status={job.status} />
              </div>
              
              <p className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded inline-block mb-3">
                {job.type}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {job.address}
                </span>
                <span className="text-xs text-muted-foreground">{job.distance}</span>
              </div>
              
              <div className="flex items-center justify-between mt-3 pt-3 border-t">
                <span className="flex items-center gap-1 text-sm font-medium text-primary">
                  <Clock className="w-4 h-4" />
                  ETA: {job.eta}
                </span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="border-t bg-card px-6 py-3">
        <div className="flex justify-around">
          <button className="flex flex-col items-center gap-1 text-primary">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium">Jobs</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground">
            <div className="w-6 h-6 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs">History</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground">
            <div className="w-6 h-6 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
