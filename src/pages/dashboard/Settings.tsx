import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="heading-md text-foreground mb-1">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your workspace settings</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
        className="bg-card rounded-2xl border border-border p-6 space-y-4">
        <h3 className="font-display font-semibold text-foreground">General</h3>
        <div>
          <Label>Workspace Name</Label>
          <Input defaultValue="My Company" className="mt-1.5 rounded-xl max-w-sm" />
        </div>
        <div>
          <Label>Contact Email</Label>
          <Input defaultValue="john@example.com" className="mt-1.5 rounded-xl max-w-sm" />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl border border-border p-6 space-y-4">
        <h3 className="font-display font-semibold text-foreground">Preferences</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-foreground">Email Notifications</p>
            <p className="text-xs text-muted-foreground">Receive updates about deployments</p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-foreground">Two-Factor Auth</p>
            <p className="text-xs text-muted-foreground">Add extra security to your account</p>
          </div>
          <Switch />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="bg-card rounded-2xl border border-destructive/20 p-6">
        <h3 className="font-display font-semibold text-destructive mb-2">Danger Zone</h3>
        <p className="text-sm text-muted-foreground mb-4">Permanently delete your workspace and all its data.</p>
        <Button variant="destructive" className="rounded-xl">Delete Workspace</Button>
      </motion.div>
    </div>
  );
};

export default SettingsPage;
