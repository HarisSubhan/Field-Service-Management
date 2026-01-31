import { Settings, Users, Shield, Lock, Bell, Database, Globe, Key, Plus, Edit, Trash2, MoreVertical, Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/admin/StatusBadge";

const users = [
  { id: 1, name: "John Smith", email: "john.smith@company.com", role: "Administrator", status: "active" as const, lastLogin: "2 hours ago" },
  { id: 2, name: "Sarah Johnson", email: "sarah.j@company.com", role: "Dispatcher", status: "active" as const, lastLogin: "5 mins ago" },
  { id: 3, name: "Mike Williams", email: "mike.w@company.com", role: "Dispatcher", status: "active" as const, lastLogin: "1 hour ago" },
  { id: 4, name: "Emily Davis", email: "emily.d@company.com", role: "Viewer", status: "offline" as const, lastLogin: "3 days ago" },
];

const roles = [
  { name: "Administrator", users: 2, permissions: ["Full Access", "User Management", "Billing", "Settings"] },
  { name: "Dispatcher", users: 5, permissions: ["Job Management", "Scheduling", "Technician Assignment"] },
  { name: "Viewer", users: 3, permissions: ["View Jobs", "View Reports"] },
  { name: "Accountant", users: 1, permissions: ["Invoices", "Payments", "Reports"] },
];

const auditLogs = [
  { action: "User Login", user: "John Smith", timestamp: "Jan 15, 2026 10:30 AM", ip: "192.168.1.100" },
  { action: "Job Created", user: "Sarah Johnson", timestamp: "Jan 15, 2026 10:25 AM", ip: "192.168.1.101" },
  { action: "Settings Updated", user: "John Smith", timestamp: "Jan 15, 2026 09:45 AM", ip: "192.168.1.100" },
  { action: "Invoice Generated", user: "Mike Williams", timestamp: "Jan 15, 2026 09:30 AM", ip: "192.168.1.102" },
  { action: "User Created", user: "John Smith", timestamp: "Jan 14, 2026 04:15 PM", ip: "192.168.1.100" },
];

const settingsOptions = [
  { label: "Two-Factor Authentication", description: "Require 2FA for all admin users", enabled: true },
  { label: "Session Timeout", description: "Auto-logout after 30 minutes of inactivity", enabled: true },
  { label: "IP Whitelisting", description: "Restrict access to approved IP addresses", enabled: false },
  { label: "Email Notifications", description: "Send email alerts for critical events", enabled: true },
  { label: "API Access Logging", description: "Log all API requests for auditing", enabled: true },
];

export function AdminSettings() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-secondary/30">
      <AdminHeader title="Admin Settings" subtitle="User management, security, and system configuration" />
      
      <main className="flex-1 p-6 overflow-auto">
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="system">System Config</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader className="flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    User Management
                  </CardTitle>
                  <CardDescription>Manage user accounts and access</CardDescription>
                </div>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-xs text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="px-2 py-1 rounded bg-muted text-sm">{user.role}</span>
                        </TableCell>
                        <TableCell><StatusBadge status={user.status} /></TableCell>
                        <TableCell className="text-muted-foreground text-sm">{user.lastLogin}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Roles Tab */}
          <TabsContent value="roles">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roles.map((role, i) => (
                <Card key={i}>
                  <CardHeader className="flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle className="text-lg font-semibold">{role.name}</CardTitle>
                      <CardDescription>{role.users} users assigned</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">Permissions:</p>
                    <div className="flex flex-wrap gap-2">
                      {role.permissions.map((perm, j) => (
                        <span key={j} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {perm}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Security Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {settingsOptions.map((option, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                        <div>
                          <p className="font-medium text-sm">{option.label}</p>
                          <p className="text-xs text-muted-foreground">{option.description}</p>
                        </div>
                        <Switch checked={option.enabled} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Audit Logs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Audit Logs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {auditLogs.map((log, i) => (
                      <div key={i} className="p-3 rounded-lg bg-muted/30 text-sm">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{log.action}</span>
                          <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{log.user}</span>
                          <span>IP: {log.ip}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Config Tab */}
          <TabsContent value="system">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Database
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="text-success font-medium">Connected</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size</span>
                      <span>2.4 GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Last Backup</span>
                      <span>2 hours ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    API Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Version</span>
                      <span>v2.1.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rate Limit</span>
                      <span>1000/min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Uptime</span>
                      <span className="text-success">99.9%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <Bell className="w-5 h-5 text-primary" />
                    Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email Provider</span>
                      <span>SendGrid</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">SMS Provider</span>
                      <span>Twilio</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Push</span>
                      <span className="text-success">Enabled</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
