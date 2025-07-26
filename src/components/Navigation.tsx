import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "../components/ui/sheet";
import { Menu, X, User, LogIn, UserPlus, LogOut } from "lucide-react";
import { cn } from "../lib/utils";
import logo from '../assets/students-ambassador-logo.png'
import { Storage } from "../Services/Storage";


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [validatetoken, setValidateToken] = useState<boolean>(false)
  // const [token, setToken] = useState<string | null>(null)


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
  
  
  const navItems = validatetoken ? [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Student Hub", path: "/student-hub" },
    { name: "Team", path: "/team" },
  ] : [];

  const authItems = validatetoken ? [ { name: "View Profile", path: "/profile", icon: User }, { name: "Log Out", path: "/", icon: LogOut },] 
  : [
      { name: "Login", path: "/login", icon: LogIn },
      { name: "Sign Up", path: "/signup", icon: UserPlus },
    ];


  const NavLink = ({ item, mobile = false }: { item: typeof navItems[0]; mobile?: boolean }) => (
    <Link
      to={item.path}
      className={cn(
        mobile 
          ? "flex items-center w-full px-4 py-3 text-left rounded-lg transition-colors hover:bg-accent/50 text-foreground" 
          : "nav-link",
        location.pathname === item.path && mobile && "bg-accent text-accent-foreground",
        location.pathname === item.path && !mobile && "active"
      )}
      onClick={() => mobile && setIsOpen(false)}
    >
      {item.name}
    </Link>
  );

  const AuthLink = ({ item, mobile = false }: { item: typeof authItems[0]; mobile?: boolean }) => (
    <>

      <Link
        to={item.path}
        onClick={() => {mobile && setIsOpen(false); localStorage.setItem('sb-zxeckrmzphdqrunwgiqy-auth-token', JSON.stringify(null))}}
      >
        <Button 
          variant={item.name === "Sign Up" || item.name === "Log Out" ? "hero" : "glass"} 
          size={mobile ? "default" : "sm"}
          className={cn(
            mobile && "w-full justify-start h-12 text-left",
            !mobile && "gap-2"
          )}
        >
          <item.icon className="w-4 h-4" />
          {item.name}
        </Button>
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo}
              alt="MLSA Logo" 
              className="h-10 w-12"
            />
            <span className="text-xl font-bold text-glow">MLSA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink key={item.path} item={item} />
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              {authItems.map((item) => (
                <AuthLink key={item.path} item={item} />
              ))}
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="glass" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 glass-card border-r-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation menu with links to pages and authentication options
                </SheetDescription>
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-2 pb-6 border-b border-border">
                    <img 
                      src={logo} 
                      alt="MLSA Logo" 
                      className="h-10 w-12"
                    />
                    <span className="text-xl font-bold text-glow">MLSA</span>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex-1 py-6">
                    <nav className="space-y-1">
                      {navItems.map((item) => (
                        <NavLink key={item.path} item={item} mobile />
                      ))}
                    </nav>
                  </div>

                  {/* Mobile Auth Links */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    {authItems.map((item) => (
                      <AuthLink key={item.path} item={item} mobile />
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}