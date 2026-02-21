import { motion } from "framer-motion";
import { Globe, FileText, Sparkles, HardDrive, TrendingUp, Clock, Activity } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const stats = [
  { label: "Websites", value: "3 / 10", icon: Globe, color: "text-primary" },
  { label: "Pages Used", value: "24", icon: FileText, color: "text-accent" },
  { label: "AI Credits", value: "72 left", icon: Sparkles, color: "text-warning" },
  { label: "Storage", value: "1.2 GB", icon: HardDrive, color: "text-success" },
];

const trafficData = [
  { day: "Mon", visitors: 120 }, { day: "Tue", visitors: 190 },
  { day: "Wed", visitors: 170 }, { day: "Thu", visitors: 240 },
  { day: "Fri", visitors: 310 }, { day: "Sat", visitors: 280 },
  { day: "Sun", visitors: 220 },
];

const deployments = [
  { name: "Jan", count: 4 }, { name: "Feb", count: 7 },
  { name: "Mar", count: 5 }, { name: "Apr", count: 9 },
  { name: "May", count: 12 }, { name: "Jun", count: 8 },
];

const recentActivity = [
  { text: "Published 'TechBridge' website", time: "2 hours ago", icon: Globe },
  { text: "Generated new landing page with AI", time: "5 hours ago", icon: Sparkles },
  { text: "Updated branding for 'PixelAgency'", time: "1 day ago", icon: Activity },
  { text: "Deployed version 3.2", time: "2 days ago", icon: TrendingUp },
];

const DashboardHome = () => {
  return (
    <div className="space-y-6">
      {/* Stats cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl border border-border p-5 card-hover"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <p className="font-display font-bold text-2xl text-foreground">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl border border-border p-6"
        >
          <h3 className="font-display font-semibold text-foreground mb-4">Traffic Overview</h3>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={trafficData}>
              <defs>
                <linearGradient id="traffic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(238, 60%, 55%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(238, 60%, 55%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 45%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 45%)" />
              <Tooltip />
              <Area type="monotone" dataKey="visitors" stroke="hsl(238, 60%, 55%)" fill="url(#traffic)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-card rounded-2xl border border-border p-6"
        >
          <h3 className="font-display font-semibold text-foreground mb-4">Deployments</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={deployments}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 45%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 45%)" />
              <Tooltip />
              <Bar dataKey="count" fill="hsl(215, 90%, 58%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card rounded-2xl border border-border p-6"
      >
        <h3 className="font-display font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">{item.text}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;
