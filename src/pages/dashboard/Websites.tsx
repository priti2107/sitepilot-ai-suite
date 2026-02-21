import { motion } from "framer-motion";
import { Plus, Globe, ExternalLink, Pencil, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const websites = [
  { id: "1", name: "TechBridge", subdomain: "techbridge.sitepilot.app", status: "Live", updated: "2 hours ago" },
  { id: "2", name: "PixelAgency", subdomain: "pixelagency.sitepilot.app", status: "Draft", updated: "1 day ago" },
  { id: "3", name: "StartupLab", subdomain: "startuplab.sitepilot.app", status: "Live", updated: "3 days ago" },
];

const Websites = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-md text-foreground">Your Websites</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage and publish your websites</p>
        </div>
        <Button className="gradient-primary text-primary-foreground border-0 rounded-xl">
          <Plus className="h-4 w-4 mr-2" /> Create Website
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {websites.map((site, i) => (
          <motion.div
            key={site.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl border border-border overflow-hidden card-hover group"
          >
            {/* Preview area */}
            <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <Globe className="h-12 w-12 text-primary/30" />
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-semibold text-foreground">{site.name}</h3>
                <Badge variant={site.status === "Live" ? "default" : "secondary"} className="rounded-full text-xs">
                  {site.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-1">{site.subdomain}</p>
              <p className="text-xs text-muted-foreground mb-4">Updated {site.updated}</p>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="rounded-xl flex-1 text-xs">
                  <Pencil className="h-3 w-3 mr-1" /> Edit
                </Button>
                <Button size="sm" className="gradient-primary text-primary-foreground border-0 rounded-xl flex-1 text-xs">
                  <ExternalLink className="h-3 w-3 mr-1" /> Publish
                </Button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Empty add card */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center min-h-[280px] hover:border-primary/50 transition-colors cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
            <Plus className="h-6 w-6 text-primary" />
          </div>
          <span className="text-sm font-medium text-muted-foreground">Create New Website</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Websites;
