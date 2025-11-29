import { useState } from "react";
import { Upload, Sparkles, Wand2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

type Step = "upload" | "generate" | "schedule";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>("upload");
  const [productImage, setProductImage] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const videoStyles = [
    { id: "ugc", name: "UGC Style", desc: "User-generated content feel" },
    { id: "trend", name: "Trending", desc: "Based on current trends" },
    { id: "educational", name: "Educational", desc: "Informative content" },
  ];

  const platforms = [
    { id: "tiktok", name: "TikTok", icon: "🎵" },
    { id: "instagram", name: "Instagram", icon: "📸" },
    { id: "facebook", name: "Facebook", icon: "👥" },
    { id: "youtube", name: "YouTube Shorts", icon: "▶️" },
    { id: "linkedin", name: "LinkedIn", icon: "💼" },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateDescription = () => {
    setDescription("Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals.");
  };

  const toggleStyle = (styleId: string) => {
    setSelectedStyles(prev =>
      prev.includes(styleId)
        ? prev.filter(id => id !== styleId)
        : [...prev, styleId]
    );
  };

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

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
        {/* Progress Steps */}
        <div className="mb-12 flex justify-center">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${currentStep === "upload" ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep === "upload" ? "border-primary bg-primary/20" : "border-muted"}`}>
                1
              </div>
              <span className="font-medium">Upload</span>
            </div>
            <div className="w-16 h-0.5 bg-border"></div>
            <div className={`flex items-center gap-2 ${currentStep === "generate" ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep === "generate" ? "border-primary bg-primary/20" : "border-muted"}`}>
                2
              </div>
              <span className="font-medium">Generate</span>
            </div>
            <div className="w-16 h-0.5 bg-border"></div>
            <div className={`flex items-center gap-2 ${currentStep === "schedule" ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep === "schedule" ? "border-primary bg-primary/20" : "border-muted"}`}>
                3
              </div>
              <span className="font-medium">Schedule</span>
            </div>
          </div>
        </div>

        {/* Step 1: Upload */}
        {currentStep === "upload" && (
          <Card className="max-w-3xl mx-auto p-8 bg-card border-border">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Upload & Describe</h2>
                <p className="text-muted-foreground">Upload your product photo and add a description</p>
              </div>

              {/* Image Upload */}
              <div>
                <Label htmlFor="product-image" className="text-base mb-3 block">Product Photo</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer bg-muted/30">
                  <input
                    id="product-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="product-image" className="cursor-pointer">
                    {productImage ? (
                      <img src={productImage} alt="Product" className="max-h-64 mx-auto rounded-lg" />
                    ) : (
                      <div className="flex flex-col items-center gap-3">
                        <Upload className="w-12 h-12 text-muted-foreground" />
                        <p className="text-muted-foreground">Click to upload or drag & drop</p>
                        <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Description */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Label htmlFor="description" className="text-base">Product Description</Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleGenerateDescription}
                    className="gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    AI Generate
                  </Button>
                </div>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your product or let AI generate a description from the image..."
                  className="min-h-32 resize-none"
                />
              </div>

              <Button
                onClick={() => setCurrentStep("generate")}
                className="w-full"
                size="lg"
                disabled={!productImage || !description}
              >
                Continue to Video Generation
              </Button>
            </div>
          </Card>
        )}

        {/* Step 2: Generate Videos */}
        {currentStep === "generate" && (
          <Card className="max-w-3xl mx-auto p-8 bg-card border-border">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">AI Generates Videos</h2>
                <p className="text-muted-foreground">Select video styles for your ad campaign</p>
              </div>

              <div className="grid gap-4">
                {videoStyles.map((style) => (
                  <Card
                    key={style.id}
                    className={`p-6 cursor-pointer transition-all hover:border-primary ${
                      selectedStyles.includes(style.id) ? "border-primary bg-primary/5" : "border-border"
                    }`}
                    onClick={() => toggleStyle(style.id)}
                  >
                    <div className="flex items-start gap-4">
                      <Checkbox checked={selectedStyles.includes(style.id)} className="mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{style.name}</h3>
                        <p className="text-muted-foreground">{style.desc}</p>
                      </div>
                      <Wand2 className="w-5 h-5 text-primary" />
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary font-medium">✨ AI will generate {selectedStyles.length || 0} video(s)</span> optimized for your selected platforms
                </p>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setCurrentStep("upload")} className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={() => setCurrentStep("schedule")}
                  className="flex-1"
                  disabled={selectedStyles.length === 0}
                >
                  Continue to Scheduling
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Step 3: Schedule & Platforms */}
        {currentStep === "schedule" && (
          <Card className="max-w-3xl mx-auto p-8 bg-card border-border">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Select & Schedule</h2>
                <p className="text-muted-foreground">Choose platforms and set your posting schedule</p>
              </div>

              {/* Platform Selection */}
              <div>
                <Label className="text-base mb-4 block">Select Platforms</Label>
                <div className="grid grid-cols-2 gap-3">
                  {platforms.map((platform) => (
                    <Card
                      key={platform.id}
                      className={`p-4 cursor-pointer transition-all hover:border-primary ${
                        selectedPlatforms.includes(platform.id) ? "border-primary bg-primary/5" : "border-border"
                      }`}
                      onClick={() => togglePlatform(platform.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox checked={selectedPlatforms.includes(platform.id)} />
                        <span className="text-2xl">{platform.icon}</span>
                        <span className="font-medium">{platform.name}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Schedule Options */}
              <div className="space-y-4">
                <Label className="text-base">Schedule Settings</Label>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="start-date" className="text-sm mb-2 block text-muted-foreground">Start Date</Label>
                    <Input id="start-date" type="datetime-local" />
                  </div>
                  <div>
                    <Label htmlFor="frequency" className="text-sm mb-2 block text-muted-foreground">Posting Frequency</Label>
                    <select
                      id="frequency"
                      className="w-full px-3 py-2 bg-background border border-input rounded-md"
                    >
                      <option value="daily">Daily</option>
                      <option value="twice-daily">Twice Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <Card className="p-4 bg-muted/50 border-border">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Video styles:</span>
                    <span className="font-medium">{selectedStyles.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platforms:</span>
                    <span className="font-medium">{selectedPlatforms.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total posts per cycle:</span>
                    <span className="font-medium text-primary">{selectedStyles.length * selectedPlatforms.length}</span>
                  </div>
                </div>
              </Card>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setCurrentStep("generate")} className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={() => navigate("/my-ads")}
                  className="flex-1 gap-2"
                  disabled={selectedPlatforms.length === 0}
                >
                  <Calendar className="w-4 h-4" />
                  Start Campaign
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
