import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Users, Zap, Trophy, Globe, Code, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const benefits = [
    {
      icon: Code,
      title: "Cutting-edge Technology",
      description: "Access Microsoft 365, Visual Studio Enterprise, and Azure to build AI-driven solutions."
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with tech enthusiasts, AI innovators, and aspiring entrepreneurs worldwide."
    },
    {
      icon: Trophy,
      title: "Career Growth",
      description: "Boost your resume, personal growth, and online influence with professional skills."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Participate in AI startup competitions, founders hub, and cutting-edge projects."
    }
  ];

  const features = [
    { icon: Zap, text: "AI-focused leadership development" },
    { icon: Globe, text: "Global networking opportunities" },
    { icon: Users, text: "Mentorship and guidance" },
    { icon: Code, text: "Hands-on technology experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="glass-card text-primary">
              🚀 Empowering the Next Generation of Tech Leaders
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-glow">Microsoft Learn</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Student Ambassador
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join a vibrant global community of students growing their tech skills, solving real-world problems, 
              and shaping the future with Microsoft technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/signup">
                  Join MLSA Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/events">
                  Explore Events
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Join <span className="text-primary">MLSA?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Unlock your potential and accelerate your career in technology with exclusive access to resources, 
              community, and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 lg:py-32 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <Badge variant="secondary" className="mb-4">What to Expect</Badge>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Build the <span className="text-primary">Future</span> with AI
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Develop skills on cutting-edge technology to build AI-driven solutions and unlock leadership 
                    opportunities by sharing your passion and growing your community.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">AI-Driven Innovation</h3>
                      <p className="text-muted-foreground">
                        Learn to build cutting-edge AI solutions using Microsoft's latest technologies and frameworks.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Leadership Development</h3>
                      <p className="text-muted-foreground">
                        Grow your leadership skills through community building, event organization, and mentorship.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                      <p className="text-muted-foreground">
                        Make a lasting impact on your local community and the broader tech ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button variant="hero" size="lg" asChild>
                  <Link to="/student-hub">
                    Explore Student Hub
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="glass-card p-8 space-y-6 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-muted-foreground">Active Community</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Global Members</span>
                      <span className="text-primary font-semibold">50,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Countries</span>
                      <span className="text-primary font-semibold">100+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Events This Year</span>
                      <span className="text-primary font-semibold">5,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Projects Built</span>
                      <span className="text-primary font-semibold">25,000+</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <Badge variant="secondary" className="w-full justify-center">
                      🎉 Join the Movement
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Shape the <span className="text-primary">Future?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students worldwide who are already building tomorrow's technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/signup">
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/team">
                  Meet the Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}