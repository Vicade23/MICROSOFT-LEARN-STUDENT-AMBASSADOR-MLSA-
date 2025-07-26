import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";
import logo from '../assets/students-ambassador-logo.png'
import { useEffect, useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [validatetoken, setValidateToken] = useState<boolean>(false)

  
    const tokenValidation = () => {
  
      return setInterval(() => {
        const jsonToken: any = localStorage.getItem('sb-zxeckrmzphdqrunwgiqy-auth-token')
        const token = JSON.parse(jsonToken)?.access_token;
        token === null || !token ? setValidateToken(false) : setValidateToken(true)
        return token;
      }, 2000);
  
    }
  
    
    useEffect(() => {
      tokenValidation()
    },[validatetoken])



  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Student Hub", path: "/student-hub" },
    { name: "Team", path: "/team" },
  ];

  const resources = [
    { name: "Microsoft Learn", url: "https://learn.microsoft.com" },
    { name: "Azure for Students", url: "https://azure.microsoft.com/free/students/" },
    { name: "GitHub Student Pack", url: "https://education.github.com/pack" },
    { name: "Visual Studio", url: "https://visualstudio.microsoft.com/students/" },
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com", label: "GitHub" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, url: "mailto:contact@mlsa.org", label: "Email" },
  ];

  return (
    <footer className="glass-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="MLSA Logo" 
                className="h-12 w-15"
              />
              <span className="text-xl font-bold text-glow">MLSA</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering students to grow their tech skills and become problem solvers with Microsoft technologies.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="glass"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={validatetoken ? link.path : '/signup'}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {resource.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get In Touch</h3>
            <p className="text-muted-foreground text-sm">
              Ready to join our community? Connect with us and start your journey.
            </p>
            <Button variant="hero" className="w-full">
              Join MLSA Today
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Microsoft Learn Student Ambassador. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}