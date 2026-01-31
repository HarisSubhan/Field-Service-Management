import { Brain, Mic, Edit3, CheckCircle, AlertTriangle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function TechnicianAINotes() {
  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-sidebar px-5 pb-5 pt-2">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="w-6 h-6 text-primary" />
          <h1 className="text-white font-bold text-lg">AI Notes</h1>
        </div>
        <p className="text-sidebar-foreground/60 text-sm">Job #4521 - Review & Edit</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-5 py-4 space-y-4">
        {/* Transcribed Voice Notes */}
        <div className="bg-card rounded-xl p-4 border">
          <div className="flex items-center gap-2 mb-3">
            <Mic className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Voice Transcription</h3>
          </div>
          <div className="p-3 bg-muted rounded-lg text-sm text-muted-foreground leading-relaxed">
            "Found the AC unit wasn't cooling due to low refrigerant levels, about 30% below optimal. 
            Also noticed debris around the compressor contacts. Recharged the refrigerant and cleaned 
            the compressor. System is now operating normally and cooling as expected."
          </div>
          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
            <span>Duration: 1:24</span>
            <span>•</span>
            <span className="text-success flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Transcribed
            </span>
          </div>
        </div>

        {/* AI Summary */}
        <div className="bg-primary/5 border-primary/20 rounded-xl p-4 border">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">AI-Generated Summary</h3>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium text-primary mb-1">Key Findings</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  Low refrigerant (30% below optimal)
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  Debris on compressor contacts
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-xs font-medium text-primary mb-1">Work Performed</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  Refrigerant recharged
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  Compressor contacts cleaned
                </li>
              </ul>
            </div>
            
            <div className="p-2 rounded bg-success/10 text-success text-sm">
              ✓ System operating normally
            </div>
          </div>
        </div>

        {/* Editable Notes */}
        <div className="bg-card rounded-xl p-4 border">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Additional Notes</h3>
            </div>
            <span className="text-xs text-muted-foreground">Optional</span>
          </div>
          <Textarea 
            placeholder="Add any additional observations or notes..."
            className="min-h-[80px] resize-none"
            defaultValue="Recommended annual maintenance plan to customer. Unit is 7 years old."
          />
        </div>
      </div>

      {/* Actions */}
      <div className="p-5 border-t bg-card space-y-3">
        <Button className="w-full h-12 text-base font-semibold">
          Approve & Continue
        </Button>
        <Button variant="outline" className="w-full">
          Edit AI Summary
        </Button>
      </div>
    </div>
  );
}
