import { User, Phone, Mail, MapPin, Calendar, Clock, FileText, Camera, Receipt, PenTool, Brain, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Separator } from "@/components/ui/separator";

const jobData = {
  id: "4521",
  status: "in-progress" as const,
  type: "HVAC Repair",
  priority: "High",
  customer: {
    name: "Robert Anderson",
    phone: "(512) 555-0123",
    email: "robert.anderson@email.com",
    address: "1234 Oak Street, Austin, TX 78701"
  },
  description: "Air conditioning unit not cooling properly. Customer reports warm air from vents and unusual noise from outdoor unit. Previous service 6 months ago for refrigerant recharge.",
  timeline: [
    { stage: "Created", date: "Jan 15, 2026", time: "8:30 AM", completed: true },
    { stage: "Assigned", date: "Jan 15, 2026", time: "8:45 AM", completed: true },
    { stage: "En Route", date: "Jan 15, 2026", time: "9:15 AM", completed: true },
    { stage: "On Site", date: "Jan 15, 2026", time: "9:45 AM", completed: true },
    { stage: "Completed", date: "-", time: "-", completed: false },
  ],
  technician: {
    name: "Mike Johnson",
    avatar: "MJ"
  },
  aiSummary: "Technician identified low refrigerant levels and a minor compressor issue. Refrigerant recharged and compressor contacts cleaned. System tested and cooling normally. Recommended annual maintenance plan to customer.",
  attachments: [
    { type: "photo", name: "Outdoor Unit.jpg", size: "2.4 MB" },
    { type: "photo", name: "Compressor Detail.jpg", size: "1.8 MB" },
    { type: "receipt", name: "Parts Receipt.pdf", size: "156 KB" },
    { type: "sketch", name: "Wiring Diagram.png", size: "890 KB" },
  ]
};

export function JobDetails() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-secondary/30">
      <AdminHeader title="Job Details" subtitle={`Job #${jobData.id} - ${jobData.type}`} />
      
      <main className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <Card>
              <CardHeader className="flex-row items-center justify-between space-y-0">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Customer Information
                </CardTitle>
                <StatusBadge status={jobData.status} />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium">{jobData.customer.name}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{jobData.customer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{jobData.customer.email}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                      <span>{jobData.customer.address}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Job Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{jobData.type}</span>
                  <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium">Priority: {jobData.priority}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{jobData.description}</p>
              </CardContent>
            </Card>

            {/* AI Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI-Generated Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{jobData.aiSummary}</p>
              </CardContent>
            </Card>

            {/* Attachments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Attachments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {jobData.attachments.map((attachment, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        {attachment.type === "photo" && <Camera className="w-5 h-5 text-primary" />}
                        {attachment.type === "receipt" && <Receipt className="w-5 h-5 text-primary" />}
                        {attachment.type === "sketch" && <PenTool className="w-5 h-5 text-primary" />}
                      </div>
                      <p className="text-sm font-medium truncate">{attachment.name}</p>
                      <p className="text-xs text-muted-foreground">{attachment.size}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Job Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobData.timeline.map((step, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${step.completed ? 'bg-success' : 'bg-muted border-2 border-border'}`} />
                        {index < jobData.timeline.length - 1 && (
                          <div className={`w-0.5 h-8 ${step.completed ? 'bg-success/50' : 'bg-border'}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className={`font-medium text-sm ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>{step.stage}</p>
                        {step.completed && (
                          <p className="text-xs text-muted-foreground mt-0.5">{step.date} at {step.time}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Assigned Technician */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Assigned Technician</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                    {jobData.technician.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{jobData.technician.name}</p>
                    <p className="text-sm text-muted-foreground">HVAC Specialist</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Button className="w-full">View Full Report</Button>
                  <Button variant="outline" className="w-full">Generate Invoice</Button>
                  <Button variant="outline" className="w-full">Contact Customer</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
