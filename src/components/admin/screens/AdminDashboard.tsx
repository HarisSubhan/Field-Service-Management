import { Briefcase, Users, DollarSign, TrendingUp, Clock, MapPin, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { KPICard } from "@/components/admin/KPICard";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";

const revenueData = [
  { month: "Mon", revenue: 4200, payroll: 2800 },
  { month: "Tue", revenue: 5100, payroll: 3200 },
  { month: "Wed", revenue: 4800, payroll: 3000 },
  { month: "Thu", revenue: 6200, payroll: 3800 },
  { month: "Fri", revenue: 5500, payroll: 3400 },
  { month: "Sat", revenue: 3200, payroll: 2000 },
  { month: "Sun", revenue: 2100, payroll: 1200 },
];

const jobsData = [
  { day: "Mon", completed: 12, pending: 3 },
  { day: "Tue", completed: 15, pending: 5 },
  { day: "Wed", completed: 11, pending: 4 },
  { day: "Thu", completed: 18, pending: 2 },
  { day: "Fri", completed: 14, pending: 6 },
  { day: "Sat", completed: 8, pending: 2 },
  { day: "Sun", completed: 4, pending: 1 },
];

const recentActivity = [
  { id: 1, type: "job", message: "Job #4521 completed by Mike Johnson", time: "2 mins ago", status: "completed" as const },
  { id: 2, type: "dispatch", message: "New job assigned to Sarah Williams", time: "8 mins ago", status: "in-progress" as const },
  { id: 3, type: "payment", message: "Invoice #2341 paid - $1,250.00", time: "15 mins ago", status: "paid" as const },
  { id: 4, type: "alert", message: "Technician David delayed - Traffic", time: "22 mins ago", status: "pending" as const },
  { id: 5, type: "job", message: "Job #4520 marked as completed", time: "35 mins ago", status: "completed" as const },
  { id: 6, type: "dispatch", message: "Emergency job created - Priority High", time: "42 mins ago", status: "in-progress" as const },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--primary))",
  },
  payroll: {
    label: "Payroll",
    color: "hsl(var(--muted-foreground))",
  },
  completed: {
    label: "Completed",
    color: "hsl(var(--success))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--warning))",
  },
};

export function AdminDashboard() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-secondary/30">
      <AdminHeader title="Dashboard" subtitle="Welcome back, John. Here's what's happening today." />
      
      <main className="flex-1 p-6 overflow-auto">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <KPICard
            title="Total Jobs Today"
            value="24"
            change="+12%"
            changeType="positive"
            icon={Briefcase}
            iconColor="bg-primary/10 text-primary"
          />
          <KPICard
            title="Active Technicians"
            value="18"
            change="+3"
            changeType="positive"
            icon={Users}
            iconColor="bg-info/10 text-info"
          />
          <KPICard
            title="Revenue Today"
            value="$12,450"
            change="+8.2%"
            changeType="positive"
            icon={DollarSign}
            iconColor="bg-success/10 text-success"
          />
          <KPICard
            title="Avg Profit/Job"
            value="$285"
            change="-2.1%"
            changeType="negative"
            icon={TrendingUp}
            iconColor="bg-warning/10 text-warning"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Revenue vs Payroll Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Revenue vs Payroll</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[280px]">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(var(--primary))" 
                    fill="url(#revenueGradient)"
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="payroll" 
                    stroke="hsl(var(--muted-foreground))" 
                    strokeWidth={2}
                    dot={false}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Jobs Completed vs Pending */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Jobs Completed vs Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[280px]">
                <BarChart data={jobsData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="completed" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="pending" fill="hsl(var(--warning))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Real-Time Activity Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    {activity.type === "job" && <Briefcase className="w-5 h-5 text-primary" />}
                    {activity.type === "dispatch" && <MapPin className="w-5 h-5 text-info" />}
                    {activity.type === "payment" && <DollarSign className="w-5 h-5 text-success" />}
                    {activity.type === "alert" && <AlertCircle className="w-5 h-5 text-warning" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{activity.message}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </p>
                  </div>
                  <StatusBadge status={activity.status} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
