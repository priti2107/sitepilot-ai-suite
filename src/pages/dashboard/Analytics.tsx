import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import { Monitor, Smartphone, Tablet, TrendingUp } from "lucide-react";

const trafficData = [
  { date: "Jan", visitors: 1200 }, { date: "Feb", visitors: 1800 },
  { date: "Mar", visitors: 2400 }, { date: "Apr", visitors: 2100 },
  { date: "May", visitors: 3200 }, { date: "Jun", visitors: 3800 },
];

const topPages = [
  { page: "/", views: 4520 }, { page: "/about", views: 2340 },
  { page: "/services", views: 1870 }, { page: "/contact", views: 1240 },
  { page: "/blog", views: 980 },
];

const devices = [
  { name: "Desktop", value: 55, color: "hsl(238, 60%, 55%)" },
  { name: "Mobile", value: 35, color: "hsl(215, 90%, 58%)" },
  { name: "Tablet", value: 10, color: "hsl(152, 60%, 45%)" },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="heading-md text-foreground mb-1">Analytics</h1>
        <p className="text-sm text-muted-foreground">Track your website performance</p>
      </motion.div>

      {/* Summary cards */}
      <div className="grid sm:grid-cols-4 gap-4">
        {[
          { label: "Total Visitors", value: "14,560", change: "+12.3%" },
          { label: "Page Views", value: "42,890", change: "+8.7%" },
          { label: "Avg. Session", value: "2m 34s", change: "+5.1%" },
          { label: "Bounce Rate", value: "38.2%", change: "-2.4%" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl border border-border p-5"
          >
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className="font-display font-bold text-2xl text-foreground">{stat.value}</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-success" />
              <span className="text-xs text-success font-medium">{stat.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Traffic chart */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-2xl border border-border p-6"
      >
        <h3 className="font-display font-semibold text-foreground mb-4">Traffic Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={trafficData}>
            <defs>
              <linearGradient id="analytics-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(238, 60%, 55%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(238, 60%, 55%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 45%)" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 45%)" />
            <Tooltip />
            <Area type="monotone" dataKey="visitors" stroke="hsl(238, 60%, 55%)" fill="url(#analytics-grad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-card rounded-2xl border border-border p-6"
        >
          <h3 className="font-display font-semibold text-foreground mb-4">Top Pages</h3>
          <div className="space-y-3">
            {topPages.map((page, i) => (
              <div key={page.page} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-5">{i + 1}</span>
                  <span className="text-sm text-foreground font-medium">{page.page}</span>
                </div>
                <span className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Device breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-2xl border border-border p-6"
        >
          <h3 className="font-display font-semibold text-foreground mb-4">Device Breakdown</h3>
          <div className="flex items-center gap-8">
            <ResponsiveContainer width={140} height={140}>
              <PieChart>
                <Pie data={devices} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={65} strokeWidth={0}>
                  {devices.map((d) => (
                    <Cell key={d.name} fill={d.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3">
              {devices.map((d) => (
                <div key={d.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-sm text-foreground">{d.name}</span>
                  <span className="text-sm text-muted-foreground ml-auto">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
