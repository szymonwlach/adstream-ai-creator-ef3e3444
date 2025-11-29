import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Upload, Wand2, Rocket, Play, CheckCircle2 } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Upload,
      title: "Upload & Describe",
      description: "Upload your product photo and add a description — or let our AI generate one automatically from the image.",
      details: ["Drag & drop images", "AI auto-descriptions", "Bulk uploads supported"],
    },
    {
      icon: Wand2,
      title: "AI Generates Videos",
      description: "Our AI instantly creates multiple video styles: UGC-style ads, trending formats, and educational content.",
      details: ["Multiple video styles", "Platform optimization", "Custom branding"],
    },
    {
      icon: Rocket,
      title: "Select & Schedule",
      description: "Choose your platforms, set your posting frequency, and let AdStreamAI handle the rest automatically.",
      details: ["Choose platforms", "Flexible scheduling", "Auto-optimized captions"],
    },
  ];

  const platforms = [
    { name: "TikTok", icon: "🎵" },
    { name: "Instagram", icon: "📸" },
    { name: "Facebook", icon: "👥" },
    { name: "YouTube Shorts", icon: "▶️" },
    { name: "LinkedIn", icon: "💼" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              <span className="text-foreground">AdStream</span>
              <span className="text-primary">AI</span>
            </h1>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#platforms" className="text-muted-foreground hover:text-foreground transition-colors">
                Platforms
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <Button variant="ghost" onClick={() => navigate("/dashboard")}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Continuous Stream of AI-Generated Ads</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stream Your Ads to{" "}
            <span className="text-primary">Every Platform</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload a product photo, let AI create stunning videos, and automatically post to your selected platforms based on your schedule.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button size="lg" onClick={() => navigate("/dashboard")} className="gap-2">
              Start Your Ad Stream
              <Rocket className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Setup in 2 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Automated scheduling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Three Steps to <span className="text-primary">Ad Automation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From product photo to multi-platform campaigns in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-primary transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-muted-foreground/20 mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Post Everywhere, <span className="text-primary">Effortlessly</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            One click cross-posting with automatic optimization for each platform
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {platforms.map((platform) => (
              <Card key={platform.name} className="p-6 bg-card border-border hover:border-primary transition-all text-center">
                <div className="text-4xl mb-3">{platform.icon}</div>
                <p className="font-medium">{platform.name}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">⚡ Average setup time: 90 seconds</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to streamline your ad creation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Create once, post everywhere, and let the AI handle the work.
          </p>
          <Button size="lg" onClick={() => navigate("/dashboard")} className="gap-2">
            Get Started Free
            <Rocket className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">
                <span className="text-foreground">AdStream</span>
                <span className="text-primary">AI</span>
              </h3>
              <p className="text-sm text-muted-foreground">© 2024 All rights reserved</p>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
