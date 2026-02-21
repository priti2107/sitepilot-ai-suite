import { motion } from "framer-motion";
import { Globe2, Plus, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const domains = [
  { domain: "techbridge.com", website: "TechBridge", status: "Connected", ssl: true },
  { domain: "pixelagency.sitepilot.app", website: "PixelAgency", status: "Active", ssl: true },
];

const Domains = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="heading-md text-foreground mb-1">Domains</h1>
        <p className="text-sm text-muted-foreground">Manage custom domains for your websites</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
        className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-display font-semibold text-foreground mb-4">Add Custom Domain</h3>
        <div className="flex gap-3">
          <Input placeholder="yourdomain.com" className="rounded-xl flex-1" />
          <Button className="gradient-primary text-primary-foreground border-0 rounded-xl">
            <Plus className="h-4 w-4 mr-2" /> Add Domain
          </Button>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="font-display font-semibold text-foreground">Your Domains</h3>
        </div>
        <div className="divide-y divide-border">
          {domains.map((d) => (
            <div key={d.domain} className="flex items-center justify-between p-4 px-6">
              <div className="flex items-center gap-3">
                <Globe2 className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{d.domain}</p>
                  <p className="text-xs text-muted-foreground">→ {d.website}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="rounded-full text-xs">{d.ssl ? "SSL ✓" : "No SSL"}</Badge>
                <Badge className="rounded-full text-xs">{d.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Domains;
