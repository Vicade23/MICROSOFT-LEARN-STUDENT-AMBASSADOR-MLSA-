import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, Users, Clock, ExternalLink, Zap, Trophy, Globe } from "lucide-react";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI Startup Competition 2024",
      description: "Pitch your AI-driven startup ideas and compete for funding and mentorship opportunities.",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Microsoft Campus, Redmond",
      attendees: 200,
      category: "Competition",
      status: "Open for Registration",
      featured: true
    },
    {
      id: 2,
      title: "Founders Hub Meetup",
      description: "Connect with fellow entrepreneurs and learn about Microsoft's Founders Hub program.",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      attendees: 150,
      category: "Networking",
      status: "Registration Closing Soon"
    },
    {
      id: 3,
      title: "Azure AI Workshop",
      description: "Hands-on workshop building AI solutions with Azure Cognitive Services.",
      date: "April 5, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "University of Washington",
      attendees: 80,
      category: "Workshop",
      status: "Open for Registration"
    },
    {
      id: 4,
      title: "Community Tech Talks",
      description: "Monthly tech talks featuring MLSA members presenting their latest projects.",
      date: "April 12, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Virtual Event",
      attendees: 300,
      category: "Community",
      status: "Open for Registration"
    }
  ];

  const pastEvents = [
    {
      title: "Global MLSA Summit 2023",
      attendees: 5000,
      location: "Virtual & 50+ Cities"
    },
    {
      title: "AI Ethics Symposium",
      attendees: 800,
      location: "MIT Campus"
    },
    {
      title: "Microsoft Build Student Zone",
      attendees: 1200,
      location: "Seattle Convention Center"
    }
  ];

  const eventTypes = [
    {
      icon: Zap,
      title: "AI Competitions",
      description: "Showcase your AI skills and compete with peers globally"
    },
    {
      icon: Users,
      title: "Community Meetups",
      description: "Network with fellow students and industry professionals"
    },
    {
      icon: Trophy,
      title: "Hackathons",
      description: "Build innovative solutions in collaborative sprints"
    },
    {
      icon: Globe,
      title: "Virtual Conferences",
      description: "Access world-class content from anywhere"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="glass-card">
              🎯 Empowering Through Events
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-glow">MLSA</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Events & Workshops
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our global community events, workshops, and competitions designed to accelerate your tech journey 
              and connect you with like-minded innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Event Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <type.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Button variant="glass">
              View All Events
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className={`glass-card hover:scale-105 transition-all duration-300 ${event.featured ? 'ring-2 ring-primary/50' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={event.status === "Registration Closing Soon" ? "destructive" : "secondary"}>
                      {event.status}
                    </Badge>
                    {event.featured && (
                      <Badge variant="default" className="bg-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="hero" className="flex-1">
                      Register Now
                    </Button>
                    <Button variant="glass" size="icon">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="glass-card text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{event.attendees.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Attendees</div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Don't Miss Out on <span className="text-primary">Amazing Events</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Subscribe to our newsletter and be the first to know about upcoming events, workshops, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Subscribe to Updates
              </Button>
              <Button variant="glass" size="lg">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}