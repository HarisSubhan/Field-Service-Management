import { DollarSign, Users, Wrench, Building, Calculator, PieChart, TrendingUp, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart as RechartsPie, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const jobCostBreakdown = {
  jobId: "#4521",
  customer: "Robert Anderson",
  totalCost: 485,
  totalRevenue: 1250,
  profit: 765,
  profitMargin: 61.2,
  breakdown: [
    { category: "Labor", amount: 255, percentage: 52.6, icon: Users, color: "hsl(var(--primary))" },
    { category: "Materials", amount: 120, percentage: 24.7, icon: Wrench, color: "hsl(var(--info))" },
    { category: "Subcontractors", amount: 0, percentage: 0, icon: Building, color: "hsl(var(--warning))" },
    { category: "Overhead", amount: 110, percentage: 22.7, icon: Calculator, color: "hsl(var(--muted-foreground))" },
  ]
};

const pieData = jobCostBreakdown.breakdown.filter(item => item.amount > 0).map(item => ({
  name: item.category,
  value: item.amount,
  color: item.color
}));

const payrollData = [
  { name: "Mike Johnson", hours: 8, rate: 35, gross: 280, techShare: 196, companyShare: 56, ownerShare: 28 },
  { name: "Sarah Williams", hours: 6, rate: 32, gross: 192, techShare: 134, companyShare: 38, ownerShare: 20 },
  { name: "David Brown", hours: 7.5, rate: 38, gross: 285, techShare: 199, companyShare: 57, ownerShare: 29 },
  { name: "Chris Lee", hours: 5, rate: 30, gross: 150, techShare: 105, companyShare: 30, ownerShare: 15 },
];

const shareDistribution = [
  { name: "Technician (70%)", value: 634, color: "hsl(var(--primary))" },
  { name: "Company (20%)", value: 181, color: "hsl(var(--info))" },
  { name: "Owner (10%)", value: 92, color: "hsl(var(--success))" },
];

const chartConfig = {
  labor: { label: "Labor", color: "hsl(var(--primary))" },
  materials: { label: "Materials", color: "hsl(var(--info))" },
  overhead: { label: "Overhead", color: "hsl(var(--muted-foreground))" },
};

export function JobCostingPayroll() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-secondary/30">
      <AdminHeader title="Job Costing & Payroll" subtitle="Cost breakdown, labor tracking, and payment distribution" />
      
      <main className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Job Cost Breakdown */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-lg font-semibold">Job Cost Breakdown</CardTitle>
              <span className="text-sm text-muted-foreground">Job {jobCostBreakdown.jobId}</span>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Cost Items */}
                <div className="space-y-4">
                  {jobCostBreakdown.breakdown.map((item, i) => (
                    <div key={i} className="p-4 rounded-lg border bg-card">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <span className="font-medium">{item.category}</span>
                        </div>
                        <span className="font-semibold">${item.amount.toFixed(2)}</span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">{item.percentage.toFixed(1)}% of total cost</p>
                    </div>
                  ))}
                </div>

                {/* Pie Chart */}
                <div className="flex flex-col items-center justify-center">
                  <ChartContainer config={chartConfig} className="h-[200px] w-full">
                    <RechartsPie>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </RechartsPie>
                  </ChartContainer>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">Total Cost</p>
                    <p className="text-3xl font-bold">${jobCostBreakdown.totalCost}</p>
                  </div>
                </div>
              </div>

              {/* Profit Summary */}
              <div className="grid grid-cols-3 gap-4 mt-6 p-4 rounded-lg bg-success/10">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <p className="text-xl font-bold">${jobCostBreakdown.totalRevenue}</p>
                </div>
                <div className="text-center border-x border-success/20">
                  <p className="text-sm text-muted-foreground">Profit</p>
                  <p className="text-xl font-bold text-success">${jobCostBreakdown.profit}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Margin</p>
                  <p className="text-xl font-bold text-success">{jobCostBreakdown.profitMargin}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Share Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <PieChart className="w-5 h-5 text-primary" />
                Payroll Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[180px] w-full">
                <RechartsPie>
                  <Pie
                    data={shareDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    dataKey="value"
                    label={({ name, value }) => `$${value}`}
                    labelLine={false}
                  >
                    {shareDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </RechartsPie>
              </ChartContainer>

              <div className="space-y-2 mt-4">
                {shareDistribution.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded bg-muted/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="font-semibold text-sm">${item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Payroll</span>
                  <span className="text-lg font-bold">$907</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payroll Table */}
          <Card className="lg:col-span-3">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Today's Payroll Calculation
              </CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Technician</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Hours</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Rate</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Gross</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Tech Share (70%)</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Company (20%)</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Owner (10%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payrollData.map((row, i) => (
                      <tr key={i} className="border-b hover:bg-muted/50 transition-colors">
                        <td className="py-3 px-4 font-medium">{row.name}</td>
                        <td className="py-3 px-4 text-right">{row.hours}h</td>
                        <td className="py-3 px-4 text-right">${row.rate}/hr</td>
                        <td className="py-3 px-4 text-right font-semibold">${row.gross}</td>
                        <td className="py-3 px-4 text-right text-primary font-medium">${row.techShare}</td>
                        <td className="py-3 px-4 text-right text-info">${row.companyShare}</td>
                        <td className="py-3 px-4 text-right text-success">${row.ownerShare}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-muted/30 font-bold">
                      <td className="py-3 px-4">Total</td>
                      <td className="py-3 px-4 text-right">26.5h</td>
                      <td className="py-3 px-4 text-right">—</td>
                      <td className="py-3 px-4 text-right">$907</td>
                      <td className="py-3 px-4 text-right text-primary">$634</td>
                      <td className="py-3 px-4 text-right text-info">$181</td>
                      <td className="py-3 px-4 text-right text-success">$92</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
