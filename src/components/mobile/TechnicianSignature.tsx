import { PenTool, RotateCcw, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TechnicianSignature() {
  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-sidebar px-5 pb-5 pt-2">
        <h1 className="text-white font-bold text-lg mb-2">Customer Signature</h1>
        <p className="text-sidebar-foreground/60 text-sm">Job #4521 - Final Confirmation</p>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 py-4 flex flex-col">
        {/* Job Summary */}
        <div className="bg-card rounded-xl p-4 border mb-4">
          <h3 className="font-semibold mb-3">Job Completion Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service Type</span>
              <span className="font-medium">HVAC Repair</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Technician</span>
              <span className="font-medium">Mike Johnson</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration</span>
              <span className="font-medium">1.5 hours</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="text-muted-foreground">Total</span>
              <span className="font-bold text-primary">$1,250.00</span>
            </div>
          </div>
        </div>

        {/* Signature Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <PenTool className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Sign Below</h3>
            </div>
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              <RotateCcw className="w-4 h-4" />
              Clear
            </button>
          </div>
          
          <div className="flex-1 rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/20 relative min-h-[200px]">
            {/* Simulated signature */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 150" fill="none">
              <path 
                d="M30 100 Q 50 50, 80 80 T 120 70 Q 140 60, 160 90 T 200 75 L 250 80" 
                stroke="hsl(var(--foreground))" 
                strokeWidth="2" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            
            <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-muted-foreground">
              Draw signature with finger
            </p>
          </div>
          
          <p className="text-xs text-center text-muted-foreground mt-3">
            By signing, customer confirms work has been completed satisfactorily
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="p-5 border-t bg-card space-y-3">
        <Button className="w-full h-12 text-base font-semibold">
          <CheckCircle className="w-5 h-5 mr-2" />
          Complete Job
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          Receipt will be sent to customer's email
        </p>
      </div>
    </div>
  );
}
