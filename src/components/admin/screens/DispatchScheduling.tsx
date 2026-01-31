import { MapPin, Clock, User, Filter, Plus, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { ScrollArea } from "@/components/ui/scroll-area";

const jobs = [
  { id: "4521", customer: "Robert Anderson", address: "1234 Oak Street, Austin", type: "HVAC Repair", status: "in-progress" as const, eta: "10:30 AM", technician: "Mike Johnson" },
  { id: "4522", customer: "Emily Davis", address: "567 Pine Avenue, Austin", type: "Plumbing", status: "pending" as const, eta: "11:45 AM", technician: "Unassigned" },
  { id: "4523", customer: "James Wilson", address: "890 Maple Drive, Austin", type: "Electrical", status: "completed" as const, eta: "9:00 AM", technician: "Sarah Williams" },
  { id: "4524", customer: "Lisa Thompson", address: "432 Cedar Lane, Austin", type: "HVAC Install", status: "in-progress" as const, eta: "1:00 PM", technician: "David Brown" },
  { id: "4525", customer: "Michael Clark", address: "765 Elm Street, Austin", type: "Maintenance", status: "pending" as const, eta: "2:30 PM", technician: "Unassigned" },
  { id: "4526", customer: "Jennifer White", address: "321 Birch Road, Austin", type: "Emergency", status: "in-progress" as const, eta: "3:15 PM", technician: "Chris Lee" },
];

const technicians = [
  { id: 1, name: "Mike Johnson", status: "active" as const, jobsToday: 4, currentJob: "4521", location: "On Site" },
  { id: 2, name: "Sarah Williams", status: "active" as const, jobsToday: 3, currentJob: "4527", location: "En Route" },
  { id: 3, name: "David Brown", status: "active" as const, jobsToday: 5, currentJob: "4524", location: "On Site" },
  { id: 4, name: "Chris Lee", status: "active" as const, jobsToday: 2, currentJob: "4526", location: "On Site" },
  { id: 5, name: "Amy Garcia", status: "offline" as const, jobsToday: 0, currentJob: null, location: "Off Duty" },
];

export function DispatchScheduling() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-secondary/30">
      <AdminHeader title="Dispatch & Scheduling" subtitle="Manage job assignments and track technician locations" />
      
      <main className="flex-1 p-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* Job List */}
          <Card className="lg:col-span-2 flex flex-col">
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-lg font-semibold">Job Queue</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  New Job
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden">
              <ScrollArea className="h-[calc(100vh-320px)]">
                <div className="space-y-3">
                  {jobs.map((job) => (
                    <div 
                      key={job.id} 
                      className="p-4 rounded-lg border bg-card hover:shadow-card transition-shadow cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">#{job.id}</span>
                            <span className="text-sm px-2 py-0.5 rounded bg-muted text-muted-foreground">{job.type}</span>
                          </div>
                          <p className="text-sm font-medium mt-1">{job.customer}</p>
                        </div>
                        <StatusBadge status={job.status} />
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.address}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t">
                        <span className="flex items-center gap-1 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-medium">ETA: {job.eta}</span>
                        </span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {job.technician}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-primary" />
                  Live Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 rounded-lg bg-muted flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-grey-light to-muted" />
                  <div className="absolute top-4 left-4 w-3 h-3 bg-success rounded-full animate-pulse-subtle" />
                  <div className="absolute top-12 right-8 w-3 h-3 bg-primary rounded-full animate-pulse-subtle" />
                  <div className="absolute bottom-8 left-12 w-3 h-3 bg-info rounded-full animate-pulse-subtle" />
                  <div className="absolute bottom-16 right-4 w-3 h-3 bg-success rounded-full animate-pulse-subtle" />
                  <p className="text-sm text-muted-foreground z-10">Interactive Map View</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">4 active technicians in field</p>
              </CardContent>
            </Card>

            {/* Technicians Panel */}
            <Card className="flex-1">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">Technician Status</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[calc(100vh-520px)]">
                  <div className="space-y-3">
                    {technicians.map((tech) => (
                      <div key={tech.id} className="p-3 rounded-lg border bg-card hover:shadow-sm transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <User className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium text-sm">{tech.name}</span>
                          </div>
                          <StatusBadge status={tech.status} />
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{tech.jobsToday} jobs today</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {tech.location}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
