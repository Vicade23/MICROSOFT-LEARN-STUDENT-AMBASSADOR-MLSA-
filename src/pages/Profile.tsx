import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { 
  User, 
  MapPin, 
  Calendar, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Edit, 
  Settings, 
  Trophy, 
  BookOpen, 
  Users, 
  Target,
  Star,
  Award,
  ExternalLink
} from "lucide-react";
import { Auth } from "../Services/auth";
import { useEffect, useState } from "react";

export default function Profile() {
  const [validatetoken, setValidateToken] = useState<boolean>(false)
  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    university: "Stanford University",
    major: "Computer Science",
    year: "Junior",
    location: "San Francisco, CA",
    joinDate: "September 2023",
    bio: "Passionate about AI and machine learning, with a focus on ethical AI development. Love building applications that make a positive impact on society.",
    profileImage: "/api/placeholder/150/150",
    stats: {
      modulesCompleted: 23,
      projectsBuilt: 8,
      eventsAttended: 12,
      communityRank: 156,
      streakDays: 15
    }
  };

  const achievements = [
    { 
      name: "First Steps", 
      description: "Completed your first learning module", 
      earned: true, 
      date: "Oct 2023",
      icon: Star
    },
    { 
      name: "Code Warrior", 
      description: "Built and deployed 5 projects", 
      earned: true, 
      date: "Nov 2023",
      icon: Award
    },
    { 
      name: "Community Leader", 
      description: "Organized a local meetup", 
      earned: false,
      icon: Users
    },
    { 
      name: "AI Pioneer", 
      description: "Completed AI learning path", 
      earned: true, 
      date: "Dec 2023",
      icon: Trophy
    },
    { 
      name: "Cloud Expert", 
      description: "Earned Azure certification", 
      earned: false,
      icon: Award
    }
  ];

  const learningPaths = [
    {
      title: "AI & Machine Learning",
      progress: 85,
      modules: 12,
      completed: 10,
      status: "In Progress"
    },
    {
      title: "Cloud Development",
      progress: 60,
      modules: 15,
      completed: 9,
      status: "In Progress"
    },
    {
      title: "Data Science",
      progress: 100,
      modules: 10,
      completed: 10,
      status: "Completed"
    }
  ];

  const recentActivity = [
    {
      type: "module",
      title: "Completed: Introduction to Azure AI",
      date: "2 days ago",
      icon: BookOpen
    },
    {
      type: "project",
      title: "Deployed: Smart Home Assistant",
      date: "1 week ago",
      icon: Target
    },
    {
      type: "event",
      title: "Attended: AI Ethics Workshop",
      date: "2 weeks ago",
      icon: Users
    },
    {
      type: "achievement",
      title: "Earned: Code Warrior Badge",
      date: "3 weeks ago",
      icon: Trophy
    }
  ];

  const projects = [
    {
      name: "Smart Campus Navigation",
      description: "AI-powered wayfinding app for university campuses",
      tech: ["React", "Azure AI", "Maps API"],
      status: "Deployed",
      link: "https://github.com/alexj/smart-campus"
    },
    {
      name: "Study Buddy AI",
      description: "Personalized learning assistant using GPT",
      tech: ["Python", "OpenAI API", "Flask"],
      status: "In Development",
      link: "https://github.com/alexj/study-buddy"
    },
    {
      name: "Carbon Footprint Tracker",
      description: "Track and reduce personal carbon emissions",
      tech: ["Next.js", "Azure Functions", "Chart.js"],
      status: "Completed",
      link: "https://github.com/alexj/carbon-tracker"
    }
  ];

  useEffect(() => {
      
    const jsonToken: any = localStorage.getItem('sb-zxeckrmzphdqrunwgiqy-auth-token')
    const token = JSON.parse(jsonToken)?.user;

    Auth.getUserProfile(token).then( async (response) => {
      console.log(response)
    }).catch((error) => {
      console.log('error:', error.message)
    })
  }, [])

  return (
    <div className="min-h-screen py-8">
      {/* Profile Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 flex-1">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={userData.profileImage} alt={userData.name} />
                    <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                      {userData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="text-center md:text-left space-y-4 flex-1">
                    <div>
                      <h1 className="text-3xl font-bold">{userData.name}</h1>
                      <p className="text-muted-foreground">{userData.major} at {userData.university}</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {userData.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Joined {userData.joinDate}
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {userData.email}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground max-w-2xl">{userData.bio}</p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      <Button variant="glass" size="icon">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="glass" size="icon">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="glass" size="icon">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button variant="hero">
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </Button>
                  <Button variant="glass">
                    <Settings className="w-4 h-4" />
                    Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary">{userData.stats.modulesCompleted}</div>
                <div className="text-sm text-muted-foreground">Modules Completed</div>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary">{userData.stats.projectsBuilt}</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary">{userData.stats.eventsAttended}</div>
                <div className="text-sm text-muted-foreground">Events Attended</div>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary">#{userData.stats.communityRank}</div>
                <div className="text-sm text-muted-foreground">Community Rank</div>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary">{userData.stats.streakDays}</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 glass-card">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Your latest achievements and progress</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 rounded-lg border border-border">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <activity.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium">{activity.title}</h5>
                            <p className="text-sm text-muted-foreground">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>Learning Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {learningPaths.map((path, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <h5 className="font-medium text-sm">{path.title}</h5>
                            <Badge variant={path.status === "Completed" ? "default" : "secondary"}>
                              {path.status}
                            </Badge>
                          </div>
                          <Progress value={path.progress} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>{path.completed}/{path.modules} modules</span>
                            <span>{path.progress}%</span>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Learning Tab */}
            <TabsContent value="learning" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {learningPaths.map((path, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{path.title}</CardTitle>
                        <Badge variant={path.status === "Completed" ? "default" : "secondary"}>
                          {path.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {path.completed} of {path.modules} modules completed
                      </div>
                      <Button variant={path.status === "Completed" ? "glass" : "hero"} className="w-full">
                        {path.status === "Completed" ? "Review" : "Continue Learning"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <Badge variant={project.status === "Deployed" ? "default" : project.status === "Completed" ? "secondary" : "destructive"}>
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="glass" className="w-full" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View on GitHub
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className={`glass-card ${achievement.earned ? 'ring-2 ring-primary/50' : 'opacity-60'}`}>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        <achievement.icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-lg">{achievement.name}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </CardHeader>
                    {achievement.earned && achievement.date && (
                      <CardContent className="text-center">
                        <Badge variant="secondary">Earned {achievement.date}</Badge>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}