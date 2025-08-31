import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Activity, Wind, Calendar, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";

const diseaseModels = [
  { 
    name: "Heart Disease", 
    icon: Heart, 
    path: "/heart-disease", 
    color: "text-red-500",
    description: "Analyze cardiovascular health risks using AI algorithms"
  },
  { 
    name: "Alzheimer", 
    icon: Brain, 
    path: "/alzheimer", 
    color: "text-purple-500",
    description: "Early detection of cognitive decline patterns"
  },
  { 
    name: "Brain Tumor", 
    icon: Brain, 
    path: "/brain-tumor", 
    color: "text-pink-500",
    description: "Medical imaging analysis for tumor detection"
  },
  { 
    name: "Diabetes", 
    icon: Activity, 
    path: "/diabetes", 
    color: "text-blue-500",
    description: "Blood sugar level analysis and risk assessment"
  },
  { 
    name: "Pneumonia", 
    icon: Wind, 
    path: "/pneumonia", 
    color: "text-green-500",
    description: "Chest X-ray analysis for respiratory conditions"
  },
];

const Dashboard = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [recentSessions, setRecentSessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (!session?.user) {
          navigate("/auth");
        }
        setLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/auth");
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Activity className="h-12 w-12 text-primary mx-auto animate-pulse" />
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user.user_metadata?.full_name || user.email}
          </h1>
          <p className="text-muted-foreground">
            Access our AI-powered disease detection models and track your health insights.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Detections</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                No detections yet
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Models Used</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                Different models accessed
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Session</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-</div>
              <p className="text-xs text-muted-foreground">
                No sessions yet
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Disease Detection Models */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Disease Detection Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseaseModels.map((model) => (
              <Card key={model.name} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center`}>
                      <model.icon className={`w-6 h-6 ${model.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{model.name}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>
                    {model.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={model.path}>
                    <Button className="w-full">
                      Start Detection
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest detection sessions and results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No recent activity</p>
              <p className="text-sm">Start using our detection models to see your history here.</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;