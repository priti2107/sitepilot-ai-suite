import { motion } from "framer-motion";
import { UserPlus, MoreHorizontal, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const members = [
  { name: "John Doe", email: "john@example.com", role: "Owner", avatar: "JD" },
  { name: "Sarah Chen", email: "sarah@example.com", role: "Admin", avatar: "SC" },
  { name: "Marcus Johnson", email: "marcus@example.com", role: "Editor", avatar: "MJ" },
];

const Team = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="heading-md text-foreground mb-1">Team</h1>
        <p className="text-sm text-muted-foreground">Manage your workspace members</p>
      </motion.div>

      {/* Invite */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
        className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-display font-semibold text-foreground mb-4">Invite Member</h3>
        <div className="flex gap-3">
          <Input placeholder="email@example.com" className="rounded-xl flex-1" />
          <Select defaultValue="Editor">
            <SelectTrigger className="w-32 rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Editor">Editor</SelectItem>
            </SelectContent>
          </Select>
          <Button className="gradient-primary text-primary-foreground border-0 rounded-xl">
            <UserPlus className="h-4 w-4 mr-2" /> Invite
          </Button>
        </div>
      </motion.div>

      {/* Members table */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="font-display font-semibold text-foreground">Members ({members.length})</h3>
        </div>
        <div className="divide-y divide-border">
          {members.map((member) => (
            <div key={member.email} className="flex items-center justify-between p-4 px-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {member.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={member.role === "Owner" ? "default" : "secondary"} className="rounded-full">
                  {member.role}
                </Badge>
                {member.role !== "Owner" && (
                  <Button variant="ghost" size="sm" className="text-destructive text-xs">Remove</Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
