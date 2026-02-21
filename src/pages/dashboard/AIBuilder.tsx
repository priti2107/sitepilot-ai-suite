import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, RefreshCw, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const sampleSections = [
  { name: "Hero Section", description: "Bold headline with CTA and product image" },
  { name: "Features Grid", description: "3-column feature cards with icons" },
  { name: "About Section", description: "Company story with team photo" },
  { name: "Testimonials", description: "Customer quotes in carousel" },
  { name: "Contact Form", description: "Name, email, message with map" },
  { name: "Footer", description: "Links, social icons, newsletter" },
];

const AIBuilder = () => {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 glow-primary">
            <Sparkles className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="heading-md text-foreground mb-2">AI Website Builder</h1>
          <p className="text-body max-w-lg mx-auto">
            Describe your business and let AI create a complete website for you.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your business... e.g., 'A modern dental clinic in San Francisco offering cosmetic dentistry, orthodontics, and teeth whitening. Target audience is young professionals.'"
            className="rounded-xl min-h-[120px] resize-none mb-4 text-base"
          />
          <div className="flex justify-end">
            <Button
              onClick={handleGenerate}
              disabled={generating || !prompt.trim()}
              className="gradient-primary text-primary-foreground border-0 rounded-xl h-11 px-8"
            >
              {generating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" /> Generate Website
                </>
              )}
            </Button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {generated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-xl text-foreground">Generated Structure</h2>
              <div className="flex gap-2">
                <Button variant="outline" className="rounded-xl" onClick={() => setGenerated(false)}>
                  <RefreshCw className="h-4 w-4 mr-2" /> Regenerate
                </Button>
                <Button className="gradient-primary text-primary-foreground border-0 rounded-xl">
                  <Check className="h-4 w-4 mr-2" /> Accept & Continue
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {sampleSections.map((section, i) => (
                <motion.div
                  key={section.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl border border-border p-4 flex items-center gap-4 card-hover cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-sm">{section.name}</h4>
                    <p className="text-xs text-muted-foreground">{section.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIBuilder;
