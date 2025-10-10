import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isPrayerRequest: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = formData.isPrayerRequest ? "Prayer Request" : "Contact Form";
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:contact@inheritthelight.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening your email client",
      description: "Your message is ready to send!",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-radiance bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you're seeking guidance, wanting to join our community, or need prayer, we're here for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-gradient-subtle border-border/50 shadow-soft animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-radiance shadow-glow">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                    Email Us
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Reach out anytime with questions or to learn more about joining us.
                  </p>
                  <a 
                    href="mailto:contact@inheritthelight.com"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    contact@inheritthelight.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-subtle border-border/50 shadow-soft animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-radiance shadow-glow">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                    Prayer Requests
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Share your prayer needs with us. We believe in the power of prayer.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "The prayer of a righteous person is powerful and effective." — James 5:16
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border/50 shadow-soft animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-foreground text-center">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your thoughts, questions, or prayer requests..."
                  rows={6}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="prayer"
                  checked={formData.isPrayerRequest}
                  onChange={(e) => setFormData({ ...formData, isPrayerRequest: e.target.checked })}
                  className="rounded border-input"
                />
                <Label htmlFor="prayer" className="cursor-pointer">
                  This is a prayer request
                </Label>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;