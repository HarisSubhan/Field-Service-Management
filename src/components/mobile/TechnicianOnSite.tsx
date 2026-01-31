import { Camera, Receipt, PenTool, Mic, Plus, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const uploads = [
  { type: "photo", name: "Outdoor_Unit.jpg", size: "2.4 MB" },
  { type: "photo", name: "Compressor.jpg", size: "1.8 MB" },
];

export function TechnicianOnSite() {
  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-sidebar px-5 pb-5 pt-2">
        <h1 className="text-white font-bold text-lg mb-2">On-Site Work</h1>
        <p className="text-sidebar-foreground/60 text-sm">Job #4521 - HVAC Repair</p>
        
        <div className="mt-4">
          <div className="flex justify-between text-xs text-sidebar-foreground/60 mb-1">
            <span>Progress</span>
            <span>60%</span>
          </div>
          <Progress value={60} className="h-2" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-5 py-4 space-y-4">
        {/* Upload Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium">Take Photo</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Receipt className="w-6 h-6 text-muted-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Scan Receipt</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <PenTool className="w-6 h-6 text-muted-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Draw Sketch</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Plus className="w-6 h-6 text-muted-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Upload File</span>
          </button>
        </div>

        {/* Uploaded Files */}
        <div>
          <h3 className="font-semibold mb-3">Uploaded Files</h3>
          <div className="space-y-2">
            {uploads.map((file, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-card rounded-lg border">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.size}</p>
                </div>
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
            ))}
          </div>
        </div>

        {/* Voice Notes */}
        <div>
          <h3 className="font-semibold mb-3">Voice Notes</h3>
          <button className="w-full flex items-center justify-center gap-3 p-6 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Mic className="w-8 h-8 text-primary-foreground" />
            </div>
          </button>
          <p className="text-xs text-center text-muted-foreground mt-2">
            Tap to record voice notes (auto-transcribed)
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="p-5 border-t bg-card">
        <Button className="w-full h-12 text-base font-semibold">
          Continue to AI Summary
        </Button>
      </div>
    </div>
  );
}
