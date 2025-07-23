import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Github, Linkedin, Twitter, Mail, ExternalLink, MapPin, Calendar } from "lucide-react";
import avatar from '../assets/avarter.png'
import algebra from '../assets/algebra.jpg'
import me from '../assets/emmanuel-victor.jpg'
import lady from '../assets/lady.jpg'

export default function Team() {
  const teamMembers = [
    {
      name: "Abdul Qowiyy",
      role: "Microsoft Learn Student Ambassador - Beta",
      location: "Kwara, Ilorin",
      university: "University of Ilorin",
      major: "Computer Science & Acting Lead",
      joinDate: "September 2022",
      specialties: ["AI/ML", "Azure", "Community Building"],
      bio: "Passionate about democratizing AI education and building inclusive tech communities. Leading AI workshops and hackathons across the Pacific Northwest.",
      image: avatar,
      achievements: [
        "Organized 15+ workshops",
        "Mentored 100+ students",
        "Azure AI Engineer Certified"
      ],
      social: {
        github: "https://github.com/sarahchen",
        linkedin: "https://linkedin.com/in/sarahchen",
        twitter: "https://twitter.com/sarahchen"
      },
      isMicrosoftAmbassador: true
    },
    {
      name: "Robiu Olalere",
      role: "Microsoft Learn Student Ambassador - Beta",
      location: "Kwara, Ilorin",
      university: "University of Ilorin",
      major: "Big Data & ML Engineering",
      joinDate: "January 2020",
      specialties: ["Marchine Learning", "Big Data Analysis", "Open Source"],
      bio: "Data engineer with a passion for cloud technologies and big data analysis practices. Advocates for sustainable software development and green computing.",
      image: algebra,
      achievements: [
        "Contributed to 20+ OSS projects",
        "Azure DevOps Expert",
        "GitHub Campus Expert"
      ],
      social: {
        github: "https://github.com/marcusrod",
        linkedin: "https://linkedin.com/in/marcusrod",
        twitter: "https://twitter.com/marcusrod"
      },
      isMicrosoftAmbassador: true
    },
    {
      name: "Ogundipe Grace",
      role: "Socia Media Manager",
      location: "Kwara, Ilorin",
      university: "University of Ilorin",
      major: "Human-Computer Interaction",
      joinDate: "March 2023",
      specialties: ["Socia Media Manager", "Community Management", "Data Science"],
      bio: "Community builder focused on creating inclusive spaces for underrepresented groups in tech. Organizes diversity and inclusion initiatives.",
      image: lady,
      achievements: [
        "Grew community by 300%",
        "Organized 50+ events",
        "UX Design Certified"
      ],
      social: {
        github: "https://github.com/priyapatel",
        linkedin: "https://linkedin.com/in/priyapatel",
        twitter: "https://twitter.com/priyapatel"
      },
      isMicrosoftAmbassador: false
    },
    {
      name: "Adedokun Victor",
      role: "Software Engineer",
      location: "Kwara, Ilorin",
      university: "University of Ilorin",
      major: "Telecommunication Engineering",
      joinDate: "June 2023",
      specialties: ["Software Development", "AI Research", "Data Science"],
      bio: "Content creator specializing in making complex technical concepts accessible. Creates tutorials, documentation, and educational videos for the community.",
      image: me,
      achievements: [
        "50K+ tutorial views",
        "Published 30+ articles",
        "Data Science Certified"
      ],
      social: {
        github: "https://github.com/Vicade23",
        linkedin: "https://linkedin.com/in/alexkim",
        twitter: "https://twitter.com/alexkim"
      },
      isMicrosoftAmbassador: false
    }
  ];

  const stats = [
    { label: "Combined Events Organized", value: "150+" },
    { label: "Students Impacted", value: "5,000+" },
    { label: "Countries Represented", value: "25+" },
    { label: "Open Source Contributions", value: "200+" }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="glass-card">
              👥 Meet Our Leaders
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-glow">Our</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Amazing Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate individuals leading our Microsoft Learn Student Ambassador community, 
              dedicated to empowering students and fostering innovation in technology.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass-card hover:scale-[1.025] transition-all duration-300">
                <CardHeader>
                  <div className="flex gap-6">
                    <img 
                      src={member.image} 
                      alt={`${member.name} profile`}
                      className="w-24 h-24 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-xl">{member.name}</CardTitle>
                          <CardDescription className="text-sm font-medium text-primary">
                            {member.role}
                          </CardDescription>
                        </div>
                        {member.isMicrosoftAmbassador && (
                          <Badge variant="default" className="bg-primary">
                            MLSA
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {member.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Joined {member.joinDate}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      {member.major} at {member.university}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">About</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-border">
                    <Button variant="glass" size="icon" asChild>
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="glass" size="icon" asChild>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="glass" size="icon" asChild>
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="hero" size="sm" className="ml-auto">
                      <Mail className="w-4 h-4" />
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Want to <span className="text-primary">Join Our Team?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We're always looking for passionate individuals to help grow our community. 
              Whether you're interested in becoming an MLSA or contributing in other ways, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Apply to be an MLSA
                <ExternalLink className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="lg">
                Volunteer Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}