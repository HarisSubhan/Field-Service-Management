import { Receipt, FileText, Download, Send, Eye, Plus, Filter, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const quotes = [
  { id: "Q-2341", customer: "Robert Anderson", date: "Jan 15, 2026", amount: "$2,450.00", status: "pending" as const, hasChanges: false },
  { id: "Q-2340", customer: "Emily Davis", date: "Jan 14, 2026", amount: "$1,890.00", status: "completed" as const, hasChanges: true },
  { id: "Q-2339", customer: "James Wilson", date: "Jan 13, 2026", amount: "$3,200.00", status: "pending" as const, hasChanges: false },
  { id: "Q-2338", customer: "Lisa Thompson", date: "Jan 12, 2026", amount: "$985.00", status: "completed" as const, hasChanges: false },
];

const invoices = [
  { id: "INV-4521", customer: "Robert Anderson", date: "Jan 15, 2026", amount: "$1,250.00", status: "paid" as const, dueDate: "Jan 30, 2026" },
  { id: "INV-4520", customer: "Emily Davis", date: "Jan 14, 2026", amount: "$2,890.00", status: "pending" as const, dueDate: "Jan 29, 2026" },
  { id: "INV-4519", customer: "James Wilson", date: "Jan 10, 2026", amount: "$1,540.00", status: "overdue" as const, dueDate: "Jan 25, 2026" },
  { id: "INV-4518", customer: "Michael Clark", date: "Jan 08, 2026", amount: "$3,200.00", status: "paid" as const, dueDate: "Jan 23, 2026" },
  { id: "INV-4517", customer: "Jennifer White", date: "Jan 05, 2026", amount: "$890.00", status: "paid" as const, dueDate: "Jan 20, 2026" },
];

const invoicePreview = {
  id: "INV-4520",
  customer: {
    name: "Emily Davis",
    address: "567 Pine Avenue, Austin, TX 78702",
    email: "emily.davis@email.com"
  },
  items: [
    { description: "HVAC System Inspection", qty: 1, rate: "$150.00", amount: "$150.00" },
    { description: "Refrigerant Recharge (R-410A)", qty: 2, rate: "$120.00", amount: "$240.00" },
    { description: "Compressor Repair - Labor", qty: 3, rate: "$85.00", amount: "$255.00" },
    { description: "Replacement Parts", qty: 1, rate: "$450.00", amount: "$450.00" },
  ],
  subtotal: "$1,095.00",
  tax: "$95.00",
  total: "$1,190.00"
};

export function QuotesInvoices() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-secondary/30">
      <AdminHeader title="Quotes, Invoices & Payments" subtitle="Manage billing, quotes, and payment tracking" />
      
      <main className="flex-1 p-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* List Section */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="invoices" className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="invoices">Invoices</TabsTrigger>
                  <TabsTrigger value="quotes">Quotes</TabsTrigger>
                </TabsList>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New
                  </Button>
                </div>
              </div>

              <TabsContent value="invoices" className="flex-1 mt-0">
                <Card className="h-full">
                  <CardContent className="p-0">
                    <ScrollArea className="h-[calc(100vh-280px)]">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Invoice #</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {invoices.map((invoice) => (
                            <TableRow key={invoice.id} className="cursor-pointer hover:bg-muted/50">
                              <TableCell className="font-medium">{invoice.id}</TableCell>
                              <TableCell>{invoice.customer}</TableCell>
                              <TableCell className="text-muted-foreground">{invoice.date}</TableCell>
                              <TableCell className="text-muted-foreground">{invoice.dueDate}</TableCell>
                              <TableCell className="text-right font-semibold">{invoice.amount}</TableCell>
                              <TableCell><StatusBadge status={invoice.status} /></TableCell>
                              <TableCell>
                                <div className="flex gap-1">
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Download className="w-4 h-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="quotes" className="flex-1 mt-0">
                <Card className="h-full">
                  <CardContent className="p-0">
                    <ScrollArea className="h-[calc(100vh-280px)]">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Quote #</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Changes</TableHead>
                            <TableHead></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {quotes.map((quote) => (
                            <TableRow key={quote.id} className="cursor-pointer hover:bg-muted/50">
                              <TableCell className="font-medium">{quote.id}</TableCell>
                              <TableCell>{quote.customer}</TableCell>
                              <TableCell className="text-muted-foreground">{quote.date}</TableCell>
                              <TableCell className="text-right font-semibold">{quote.amount}</TableCell>
                              <TableCell><StatusBadge status={quote.status} /></TableCell>
                              <TableCell>
                                {quote.hasChanges && (
                                  <span className="flex items-center gap-1 text-xs text-warning">
                                    <AlertCircle className="w-3 h-3" />
                                    Change Order
                                  </span>
                                )}
                              </TableCell>
                              <TableCell>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Send className="w-4 h-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            {/* Payment Summary */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">Payment Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-success/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-sm">Paid</span>
                    </div>
                    <span className="font-semibold">$5,340.00</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-warning/10">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-warning" />
                      <span className="text-sm">Pending</span>
                    </div>
                    <span className="font-semibold">$2,890.00</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-destructive" />
                      <span className="text-sm">Overdue</span>
                    </div>
                    <span className="font-semibold">$1,540.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Invoice Preview */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-primary" />
                  Invoice Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-lg border bg-card">
                  <div className="text-center mb-4 pb-4 border-b">
                    <h3 className="font-bold text-lg">A1 Phoenix Plumbing</h3>
                    <p className="text-xs text-muted-foreground">{invoicePreview.id}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground">Bill To:</p>
                    <p className="text-sm font-medium">{invoicePreview.customer.name}</p>
                    <p className="text-xs text-muted-foreground">{invoicePreview.customer.address}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    {invoicePreview.items.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex justify-between text-xs">
                        <span className="text-muted-foreground truncate flex-1 mr-2">{item.description}</span>
                        <span className="font-medium">{item.amount}</span>
                      </div>
                    ))}
                    <p className="text-xs text-muted-foreground">+ 2 more items...</p>
                  </div>

                  <div className="border-t pt-3 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>{invoicePreview.subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Tax</span>
                      <span>{invoicePreview.tax}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t">
                      <span>Total</span>
                      <span className="text-primary">{invoicePreview.total}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Send className="w-4 h-4 mr-2" />
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
