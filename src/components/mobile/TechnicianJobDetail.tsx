import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/admin/StatusBadge";

const jobData = {
  id: "4521",
  status: "in-progress" as const,
  type: "HVAC Repair",
  customer: {
    name: "Robert Anderson",
    phone: "(512) 555-0123",
    email: "robert.a@email.com",
    address: "1234 Oak Street, Austin, TX 78701"
  },
  description: "AC unit not cooling. Warm air from vents. Unusual noise from outdoor unit.",
  eta: "10:30 AM",
  progress: [
    { step: "Assigned", completed: true },
    { step: "En Route", completed: true },
    { step: "Checked In", completed: false },
    { step: "Completed", completed: false },
  ]
};

export function TechnicianJobDetail() {
  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-sidebar px-5 pb-5 pt-2">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white font-bold text-lg">Job #{jobData.id}</h1>
          <StatusBadge status={jobData.status} />
        </div>
        
        {/* Progress */}
        <div className="flex items-center justify-between">
          {jobData.progress.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step.completed 
                  ? 'bg-success text-success-foreground' 
                  : 'bg-sidebar-accent text-sidebar-foreground/40'
              }`}>
                {step.completed ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-medium">{i + 1}</span>
                )}
              </div>
              <span className={`text-xs mt-1 ${step.completed ? 'text-success' : 'text-sidebar-foreground/40'}`}>
                {step.step}
              </span>
              {i < jobData.progress.length - 1 && (
                <div className={`absolute w-12 h-0.5 ${step.completed ? 'bg-success' : 'bg-sidebar-accent'}`} 
                  style={{ transform: 'translateX(50%)', marginTop: '16px' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-5 py-4 space-y-4">
        {/* Customer Info */}
        <div className="bg-card rounded-xl p-4 border">
          <h3 className="font-semibold mb-3">Customer Details</h3>
          <div className="space-y-3">
            <p className="font-medium">{jobData.customer.name}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              {jobData.customer.phone}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              {jobData.customer.email}
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              {jobData.customer.address}
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-card rounded-xl p-4 border">
          <h3 className="font-semibold mb-2">Job Description</h3>
          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded mb-2">
            {jobData.type}
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">{jobData.description}</p>
        </div>

        {/* ETA */}
        <div className="bg-card rounded-xl p-4 border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expected Arrival</p>
              <p className="font-semibold">{jobData.eta}</p>
            </div>
          </div>
          <Button size="sm" variant="outline">
            <Navigation className="w-4 h-4 mr-1" />
            Navigate
          </Button>
        </div>
      </div>

      {/* Actions */}
      <div className="p-5 border-t bg-card space-y-3">
        <Button className="w-full h-12 text-base font-semibold">
          <CheckCircle className="w-5 h-5 mr-2" />
          Check In
        </Button>
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
          <Button variant="outline" className="flex-1">
            <Navigation className="w-4 h-4 mr-2" />
            Directions
          </Button>
        </div>
      </div>
    </div>
  );
}
