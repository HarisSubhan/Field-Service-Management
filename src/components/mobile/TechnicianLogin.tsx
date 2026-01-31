import { Zap, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TechnicianLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-full flex flex-col bg-sidebar">
      {/* Logo Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="w-20 h-20 rounded-2xl gradient-orange flex items-center justify-center mb-6 shadow-lg">
          <Zap className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">FieldAI Pro</h1>
        <p className="text-sidebar-foreground/60 text-sm">Technician Portal</p>
      </div>

      {/* Login Form */}
      <div className="bg-background rounded-t-[32px] p-8 pt-10">
        <h2 className="text-xl font-bold mb-6">Welcome Back</h2>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Email or Phone</label>
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="h-12 bg-muted border-none"
              defaultValue="mike.johnson@company.com"
            />
          </div>
          
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Password</label>
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="h-12 bg-muted border-none pr-12"
                defaultValue="••••••••"
              />
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="text-sm text-primary">Forgot Password?</button>
          </div>

          <Button className="w-full h-12 text-base font-semibold mt-4">
            Sign In
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-6">
          Secured with enterprise-grade encryption
        </p>
      </div>
    </div>
  );
}
