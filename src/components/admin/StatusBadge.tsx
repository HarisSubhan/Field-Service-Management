import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "pending" | "in-progress" | "completed" | "paid" | "overdue" | "active" | "offline";
  className?: string;
}

const statusConfig = {
  "pending": {
    label: "Pending",
    className: "bg-warning/10 text-warning border-warning/20"
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-info/10 text-info border-info/20"
  },
  "completed": {
    label: "Completed",
    className: "bg-success/10 text-success border-success/20"
  },
  "paid": {
    label: "Paid",
    className: "bg-success/10 text-success border-success/20"
  },
  "overdue": {
    label: "Overdue",
    className: "bg-destructive/10 text-destructive border-destructive/20"
  },
  "active": {
    label: "Active",
    className: "bg-success/10 text-success border-success/20"
  },
  "offline": {
    label: "Offline",
    className: "bg-muted text-muted-foreground border-border"
  }
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span 
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border",
        config.className,
        className
      )}
    >
      <span className={cn(
        "w-1.5 h-1.5 rounded-full mr-1.5",
        status === "pending" && "bg-warning",
        status === "in-progress" && "bg-info animate-pulse-subtle",
        status === "completed" && "bg-success",
        status === "paid" && "bg-success",
        status === "overdue" && "bg-destructive",
        status === "active" && "bg-success animate-pulse-subtle",
        status === "offline" && "bg-muted-foreground"
      )} />
      {config.label}
    </span>
  );
}
