import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { BookOpen, Code, Users, Trophy, Target, Zap, Download, ExternalLink, Star, Calendar } from "lucide-react";

export default function StudentHub() {
  const learningPaths = [
    {
      title: "AI & Machine Learning",
      description: "Master AI fundamentals and build intelligent applications",
      progress: 65,
      modules: 12,
      duration: "8 weeks",
      level: "Intermediate",
      featured: true
    },
    {
      title: "Cloud Development",
      description: "Build scalable applications with Azure services",
      progress: 30,
      modules: 15,
      duration: "10 weeks",
      level: "Beginner"
    },
    {
      title: "Data Science",
      description: "Analyze and visualize data to drive insights",
      progress: 85,
      modules: 10,
      duration: "6 weeks",
      level: "Advanced"
    }
  ];

  const resources = [
    {
      category: "Development Tools",
      items: [
        { name: "Visual Studio Enterprise", description: "Full-featured IDE for any platform", type: "Software" },
        { name: "GitHub Copilot", description: "AI-powered code assistant", type: "Tool" },
        { name: "Azure DevOps", description: "Complete DevOps solution", type: "Platform" }
      ]
    },
    {
      category: "Cloud Services",
      items: [
        { name: "Azure Free Credits", description: "$100 monthly credit for students", type: "Credit" },
        { name: "Azure AI Services", description: "Pre-built AI models and APIs", type: "Service" },
        { name: "Azure App Service", description: "Host web apps and APIs", type: "Platform" }
      ]
    },
    {
      category: "Learning Materials",
      items: [
        { name: "Microsoft Learn", description: "Free interactive learning modules", type: "Course" },
        { name: "Certification Vouchers", description: "Free Azure certification exams", type: "Voucher" },
        { name: "Documentation", description: "Comprehensive technical docs", type: "Resource" }
      ]
    }
  ];

  const achievements = [
    { name: "First Steps", description: "Completed your first learning module", earned: true },
    { name: "Code Warrior", description: "Built and deployed 5 projects", earned: true },
    { name: "Community Leader", description: "Organized a local meetup", earned: false },
    { name: "AI Pioneer", description: "Completed AI learning path", earned: true },
    { name: "Cloud Expert", description: "Earned Azure certification", earned: false }
  ];

  const upcomingDeadlines = [
    { task: "Azure AI Challenge Submission", date: "March 20, 2024", priority: "high" },
    { task: "Monthly Community Report", date: "March 25, 2024", priority: "medium" },
    { task: "Certification Exam", date: "April 2, 2024", priority: "high" }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="glass-card">
              🎓 Your Learning Journey
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-glow">Student</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Learning Hub
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access exclusive resources, track your progress, and accelerate your tech journey with 
              Microsoft's cutting-edge tools and platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-4 glass-card">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="learning" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Learning
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Resources
              </TabsTrigger>
              <TabsTrigger value="community" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Community
              </TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Progress Overview */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>Learning Progress</CardTitle>
                      <CardDescription>Your current learning paths and achievements</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {learningPaths.map((path, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <h4 className="font-medium">{path.title}</h4>
                              {path.featured && <Badge variant="default">Featured</Badge>}
                            </div>
                            <span className="text-sm text-muted-foreground">{path.progress}%</span>
                          </div>
                          <Progress value={path.progress} className="h-2" />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>{path.modules} modules • {path.duration}</span>
                            <span>{path.level}</span>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>Achievements</CardTitle>
                      <CardDescription>Milestones you've unlocked</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {achievements.map((achievement, index) => (
                          <div key={index} className={`flex items-center gap-3 p-3 rounded-lg border ${achievement.earned ? 'border-primary/50 bg-primary/5' : 'border-border'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${achievement.earned ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                              <Trophy className="w-4 h-4" />
                            </div>
                            <div>
                              <h5 className="font-medium text-sm">{achievement.name}</h5>
                              <p className="text-xs text-muted-foreground">{achievement.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Upcoming Deadlines
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {upcomingDeadlines.map((deadline, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                          <div className={`w-3 h-3 rounded-full ${deadline.priority === 'high' ? 'bg-destructive' : 'bg-yellow-500'}`}></div>
                          <div className="flex-1">
                            <h5 className="font-medium text-sm">{deadline.task}</h5>
                            <p className="text-xs text-muted-foreground">{deadline.date}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm">Modules Completed</span>
                        <span className="font-semibold text-primary">23</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Projects Built</span>
                        <span className="font-semibold text-primary">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Community Rank</span>
                        <span className="font-semibold text-primary">#156</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Streak Days</span>
                        <span className="font-semibold text-primary">12</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Learning Tab */}
            <TabsContent value="learning" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {learningPaths.map((path, index) => (
                  <Card key={index} className="glass-card hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge variant={path.level === "Beginner" ? "secondary" : path.level === "Intermediate" ? "default" : "destructive"}>
                          {path.level}
                        </Badge>
                        {path.featured && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
                      </div>
                      <CardTitle>{path.title}</CardTitle>
                      <CardDescription>{path.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} />
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{path.modules} modules</span>
                        <span>{path.duration}</span>
                      </div>
                      <Button variant="hero" className="w-full">
                        {path.progress > 0 ? "Continue Learning" : "Start Path"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6 mt-6">
              <div className="space-y-8">
                {resources.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {category.items.map((item, itemIndex) => (
                        <Card key={itemIndex} className="glass-card hover:scale-105 transition-all duration-300">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg">{item.name}</CardTitle>
                              <Badge variant="secondary">{item.type}</Badge>
                            </div>
                            <CardDescription>{item.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button variant="glass" className="w-full">
                              Access Resource
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Community Tab */}
            <TabsContent value="community" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Community Guidelines</CardTitle>
                    <CardDescription>How to be an effective MLSA member</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary">1</span>
                        </div>
                        <div>
                          <h5 className="font-medium">Share Knowledge</h5>
                          <p className="text-sm text-muted-foreground">Create content and help others learn</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary">2</span>
                        </div>
                        <div>
                          <h5 className="font-medium">Organize Events</h5>
                          <p className="text-sm text-muted-foreground">Host workshops and meetups in your area</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary">3</span>
                        </div>
                        <div>
                          <h5 className="font-medium">Build Projects</h5>
                          <p className="text-sm text-muted-foreground">Create innovative solutions with Microsoft tech</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary">4</span>
                        </div>
                        <div>
                          <h5 className="font-medium">Mentor Others</h5>
                          <p className="text-sm text-muted-foreground">Support fellow students in their journey</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Get Involved</CardTitle>
                    <CardDescription>Ways to contribute to the community</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="hero" className="w-full">
                      <Users className="w-4 h-4" />
                      Join Discord Community
                    </Button>
                    <Button variant="glass" className="w-full">
                      <Code className="w-4 h-4" />
                      Submit a Project
                    </Button>
                    <Button variant="glass" className="w-full">
                      <Calendar className="w-4 h-4" />
                      Propose an Event
                    </Button>
                    <Button variant="glass" className="w-full">
                      <BookOpen className="w-4 h-4" />
                      Write a Blog Post
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}