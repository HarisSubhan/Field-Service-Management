import { BarChart3, TrendingUp, Users, DollarSign, Clock, Target, Zap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { KPICard } from "@/components/admin/KPICard";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, AreaChart, Area, ResponsiveContainer } from "recharts";
import { Progress } from "@/components/ui/progress";

const dispatcherEfficiency = [
  { name: "John D.", score: 94, jobs: 156 },
  { name: "Mary S.", score: 91, jobs: 142 },
  { name: "Tom B.", score: 88, jobs: 138 },
  { name: "Lisa K.", score: 85, jobs: 124 },
];

const technicianProductivity = [
  { name: "Mike J.", completed: 45, avgTime: 1.2, rating: 4.9 },
  { name: "Sarah W.", completed: 42, avgTime: 1.4, rating: 4.8 },
  { name: "David B.", completed: 38, avgTime: 1.1, rating: 4.7 },
  { name: "Chris L.", completed: 35, avgTime: 1.5, rating: 4.6 },
  { name: "Amy G.", completed: 32, avgTime: 1.3, rating: 4.8 },
];

const profitData = [
  { week: "W1", profit: 12500, revenue: 28000, cost: 15500 },
  { week: "W2", profit: 14200, revenue: 31000, cost: 16800 },
  { week: "W3", profit: 11800, revenue: 26500, cost: 14700 },
  { week: "W4", profit: 15600, revenue: 34000, cost: 18400 },
];

const payrollVsRevenue = [
  { month: "Jan", payroll: 45000, revenue: 98000 },
  { month: "Feb", payroll: 48000, revenue: 105000 },
  { month: "Mar", payroll: 52000, revenue: 118000 },
  { month: "Apr", payroll: 49000, revenue: 112000 },
  { month: "May", payroll: 54000, revenue: 125000 },
  { month: "Jun", payroll: 58000, revenue: 135000 },
];

const chartConfig = {
  profit: { label: "Profit", color: "hsl(var(--success))" },
  revenue: { label: "Revenue", color: "hsl(var(--primary))" },
  cost: { label: "Cost", color: "hsl(var(--muted-foreground))" },
  payroll: { label: "Payroll", color: "hsl(var(--info))" },
  completed: { label: "Completed", color: "hsl(var(--primary))" },
};

export function KPIAnalytics() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-secondary/30">
      <AdminHeader title="KPI & Analytics Dashboard" subtitle="Performance metrics and business intelligence" />
      
      <main className="flex-1 p-6 overflow-auto">
        {/* Top KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <KPICard
            title="Dispatcher Efficiency"
            value="89.5%"
            change="+2.3%"
            changeType="positive"
            icon={Zap}
            iconColor="bg-primary/10 text-primary"
          />
          <KPICard
            title="Avg Jobs/Tech/Day"
            value="4.2"
            change="+0.5"
            changeType="positive"
            icon={Target}
            iconColor="bg-info/10 text-info"
          />
          <KPICard
            title="Profit Margin"
            value="38.2%"
            change="+1.8%"
            changeType="positive"
            icon={DollarSign}
            iconColor="bg-success/10 text-success"
          />
          <KPICard
            title="Avg Job Time"
            value="1.3h"
            change="-12min"
            changeType="positive"
            icon={Clock}
            iconColor="bg-warning/10 text-warning"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Payroll vs Revenue */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Payroll vs Revenue (6 months)</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[280px]">
                <AreaChart data={payrollVsRevenue}>
                  <defs>
                    <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="payrollGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--info))" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="hsl(var(--info))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fill="url(#revenueGrad)" strokeWidth={2} />
                  <Area type="monotone" dataKey="payroll" stroke="hsl(var(--info))" fill="url(#payrollGrad)" strokeWidth={2} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Profit per Job */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Weekly Profit Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[280px]">
                <BarChart data={profitData}>
                  <XAxis dataKey="week" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="cost" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="profit" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Dispatcher Efficiency */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Dispatcher Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dispatcherEfficiency.map((dispatcher, i) => (
                  <div key={i} className="p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                          #{i + 1}
                        </div>
                        <span className="font-medium">{dispatcher.name}</span>
                      </div>
                      <span className="text-lg font-bold text-primary">{dispatcher.score}%</span>
                    </div>
                    <Progress value={dispatcher.score} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">{dispatcher.jobs} jobs processed this month</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technician Productivity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Technician Productivity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {technicianProductivity.map((tech, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {tech.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{tech.name}</p>
                      <p className="text-xs text-muted-foreground">{tech.completed} jobs • {tech.avgTime}h avg</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold">{tech.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
