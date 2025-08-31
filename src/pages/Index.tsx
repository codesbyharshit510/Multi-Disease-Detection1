import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Activity, Wind, Stethoscope, Shield, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";

const diseaseModels = [
  { name: "Heart Disease", icon: Heart, color: "text-red-500", description: "AI-powered cardiovascular risk assessment" },
  { name: "Alzheimer", icon: Brain, color: "text-purple-500", description: "Early cognitive decline detection" },
  { name: "Brain Tumor", icon: Brain, color: "text-pink-500", description: "Medical imaging analysis" },
  { name: "Diabetes", icon: Activity, color: "text-blue-500", description: "Blood sugar risk evaluation" },
  { name: "Pneumonia", icon: Wind, color: "text-green-500", description: "Chest X-ray analysis" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary-glow/5" />
        <div className="relative container mx-auto px-4 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Stethoscope className="w-4 h-4" />
              Advanced AI Healthcare
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Multi-Disease
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Detection System
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Harness the power of AI to detect and analyze multiple diseases with cutting-edge machine learning models.
              Fast, accurate, and designed for healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg">
                  View Models
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Models Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Powered Disease Detection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced machine learning models for accurate disease detection and analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {diseaseModels.map((model) => (
              <Card key={model.name} className="border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <model.icon className={`w-6 h-6 ${model.color}`} />
                  </div>
                  <CardTitle className="text-xl">{model.name}</CardTitle>
                  <CardDescription>
                    {model.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Advanced Chat Bot</CardTitle>
                <CardDescription>
                  An AI-powered chatbot that provides instant support and information, enhancing user engagement and accessibility.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">EXPLAINABLE AI (XAI)</CardTitle>
                <CardDescription>
                  A branch of AI focused on making model decisions transparent and understandable, helping clinicians trust and interpret predictions with clear visual explanations.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Accurate Results</CardTitle>
                <CardDescription>
                  High precision detection with confidence scores and detailed analysis reports
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%+</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Disease Models</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Analyses Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">AI Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Healthcare with AI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join healthcare professionals worldwide using our AI-powered disease detection platform
            </p>
            <Link to="/auth">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant">
                Start Detecting Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
