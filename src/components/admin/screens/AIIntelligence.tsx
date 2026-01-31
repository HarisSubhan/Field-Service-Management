import { Brain, Mic, FileText, BarChart3, Clock, User, Zap, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

const voiceTranscription = {
  duration: "4:32",
  timestamp: "Jan 15, 2026 - 10:23 AM",
  technician: "Mike Johnson",
  text: `"Arrived at the location at 9:45. Customer Robert reported that the AC unit hasn't been cooling properly for about a week now. Upon inspection of the outdoor unit, I found the refrigerant levels were low - about 30% below optimal. Also noticed some debris around the compressor contacts. 

I've recharged the refrigerant to the proper levels and cleaned the compressor contacts. Running diagnostics now and the system is showing normal operating temperature. Cooling output has improved significantly.

I'm recommending to the customer that they consider our annual maintenance plan to prevent this kind of issue in the future. The unit is about 7 years old and could benefit from regular checkups."`,
};

const aiSummary = {
  title: "Job Summary - HVAC Repair #4521",
  keyFindings: [
    "Low refrigerant levels (30% below optimal)",
    "Debris accumulation on compressor contacts",
    "Unit age: 7 years (maintenance recommended)"
  ],
  actionsPerformed: [
    "Refrigerant recharged to optimal levels",
    "Compressor contacts cleaned",
    "Full system diagnostics completed"
  ],
  recommendation: "Annual maintenance plan recommended",
  sentiment: "positive",
  confidence: 94
};

const structuredNotes = [
  { category: "Diagnosis", content: "Low refrigerant levels, debris on compressor" },
  { category: "Parts Used", content: "R-410A Refrigerant (2 lbs)" },
  { category: "Labor Time", content: "1.5 hours on-site" },
  { category: "Customer Satisfaction", content: "High - system cooling properly" },
  { category: "Follow-up", content: "Annual maintenance plan discussion" },
];

const dispatcherMetrics = [
  { label: "Jobs Processed Today", value: "47", change: "+12%" },
  { label: "Avg Response Time", value: "18 min", change: "-8%" },
  { label: "AI Summaries Generated", value: "42", change: "+15%" },
  { label: "Customer Satisfaction", value: "4.8/5", change: "+0.2" },
];

export function AIIntelligence() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-secondary/30">
      <AdminHeader title="AI Intelligence & Notes" subtitle="Voice transcription, AI summaries, and dispatcher analytics" />
      
      <main className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Voice Transcription */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Mic className="w-5 h-5 text-primary" />
                Voice Transcription
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4 p-3 rounded-lg bg-muted">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{voiceTranscription.technician}</p>
                  <p className="text-xs text-muted-foreground">{voiceTranscription.timestamp}</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {voiceTranscription.duration}
                </div>
              </div>

              {/* Audio Waveform Placeholder */}
              <div className="h-16 mb-4 rounded-lg bg-muted flex items-center justify-center gap-1 px-4">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-primary/60 rounded-full"
                    style={{ height: `${Math.random() * 100}%`, minHeight: '4px' }}
                  />
                ))}
              </div>

              <ScrollArea className="h-48">
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {voiceTranscription.text}
                </p>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* AI Summary */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI-Generated Summary
                <span className="ml-auto flex items-center gap-1 text-sm font-normal text-success">
                  <Zap className="w-4 h-4" />
                  {aiSummary.confidence}% Confidence
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-4">{aiSummary.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Findings</h4>
                  <ul className="space-y-2">
                    {aiSummary.keyFindings.map((finding, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                        {finding}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Actions Performed</h4>
                  <ul className="space-y-2">
                    {aiSummary.actionsPerformed.map((action, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm font-medium text-primary">
                    💡 Recommendation: {aiSummary.recommendation}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Structured Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Structured Job Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {structuredNotes.map((note, i) => (
                  <div key={i} className="p-3 rounded-lg border bg-card">
                    <p className="text-xs font-medium text-primary mb-1">{note.category}</p>
                    <p className="text-sm text-foreground">{note.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dispatcher Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Dispatcher Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {dispatcherMetrics.map((metric, i) => (
                  <div key={i} className="p-4 rounded-lg bg-muted/50">
                    <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                    <div className="flex items-end gap-2">
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <span className={`text-xs font-medium mb-1 ${metric.change.startsWith('+') ? 'text-success' : 'text-info'}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">AI Processing Queue</span>
                  <span className="text-sm font-medium">3/47 pending</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
