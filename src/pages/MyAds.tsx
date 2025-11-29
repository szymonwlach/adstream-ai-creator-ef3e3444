import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Plus, PlayCircle, Calendar, TrendingUp } from "lucide-react";

const MyAds = () => {
  const navigate = useNavigate();

  const mockCampaigns = [
    {
      id: 1,
      name: "Wireless Headphones Campaign",
      status: "active",
      platforms: ["TikTok", "Instagram", "YouTube"],
      views: 12540,
      engagement: "8.4%",
      nextPost: "2 hours",
    },
    {
      id: 2,
      name: "Smart Watch Promotion",
      status: "scheduled",
      platforms: ["Facebook", "LinkedIn"],
      views: 0,
      engagement: "0%",
      nextPost: "Tomorrow at 9:00 AM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              <span className="text-foreground">AdStream</span>
              <span className="text-primary">AI</span>
            </h1>
            <nav className="flex items-center gap-6">
              <Button variant="ghost" onClick={() => navigate("/my-ads")}>
                My Ads
              </Button>
              <Button variant="ghost">Billing</Button>
              <Button variant="ghost">Sign Out</Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">My Campaigns</h2>
            <p className="text-muted-foreground">Manage and monitor your ad campaigns</p>
          </div>
          <Button onClick={() => navigate("/dashboard")} className="gap-2" size="lg">
            <Plus className="w-5 h-5" />
            New Campaign
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Views</span>
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <p className="text-3xl font-bold">12,540</p>
            <p className="text-xs text-primary mt-1">+23% this week</p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Active Campaigns</span>
              <PlayCircle className="w-4 h-4 text-primary" />
            </div>
            <p className="text-3xl font-bold">1</p>
            <p className="text-xs text-muted-foreground mt-1">2 scheduled</p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Avg Engagement</span>
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <p className="text-3xl font-bold">8.4%</p>
            <p className="text-xs text-primary mt-1">+1.2% vs last month</p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Next Post</span>
              <Calendar className="w-4 h-4 text-primary" />
            </div>
            <p className="text-2xl font-bold">2 hours</p>
            <p className="text-xs text-muted-foreground mt-1">Auto-scheduled</p>
          </Card>
        </div>

        {/* Campaigns List */}
        <div className="space-y-4">
          {mockCampaigns.map((campaign) => (
            <Card key={campaign.id} className="p-6 bg-card border-border hover:border-primary transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{campaign.name}</h3>
                    <Badge
                      variant={campaign.status === "active" ? "default" : "secondary"}
                      className={campaign.status === "active" ? "bg-primary/20 text-primary border-primary" : ""}
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Platforms: {campaign.platforms.join(", ")}</span>
                    <span>•</span>
                    <span>Next post: {campaign.nextPost}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Views</p>
                  <p className="text-2xl font-bold">{campaign.views.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Engagement Rate</p>
                  <p className="text-2xl font-bold text-primary">{campaign.engagement}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Videos Generated</p>
                  <p className="text-2xl font-bold">{campaign.platforms.length * 3}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State for first time users */}
        {mockCampaigns.length === 0 && (
          <Card className="p-12 text-center bg-card border-border border-dashed">
            <div className="max-w-md mx-auto">
              <PlayCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">No campaigns yet</h3>
              <p className="text-muted-foreground mb-6">
                Create your first AI-powered ad campaign in just a few clicks
              </p>
              <Button onClick={() => navigate("/dashboard")} size="lg" className="gap-2">
                <Plus className="w-5 h-5" />
                Create First Campaign
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyAds;
