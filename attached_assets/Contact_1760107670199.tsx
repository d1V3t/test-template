import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <Card className="p-10 md:p-14 bg-gradient-subtle border-border/50 shadow-soft animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-radiance shadow-glow">
              <Mail className="h-10 w-10 text-primary-foreground" />
            </div>
            
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                Reach Out to Us
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're seeking guidance, wanting to join our community, or simply have a question, 
                we're here to help illuminate your path.
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:contact@inheritthelight.com">
                <Mail className="mr-2 h-5 w-5" />
                contact@inheritthelight.com
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
