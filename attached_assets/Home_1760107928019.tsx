import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-nature.jpg";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-radiance bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Inherit the Light
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto font-light italic animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          "Giving thanks to the Father, who has qualified you to share in the inheritance of the saints in light."
        </p>
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          — Colossians 1:12
        </p>

        <div className="max-w-4xl mx-auto mb-12 space-y-6 text-left animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            We are Children of God. We are Husbands and Fathers, Sons and Brothers, Workers and Leaders, Men of Ministry and Laymen alike. What we strive to be, above all else, is <strong className="text-primary">Men of the Word. Men of God.</strong>
          </p>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Herein lies our journey to be the men that God has intended us to be.
          </p>

          <div className="pl-8 border-l-4 border-primary/50 space-y-3 text-foreground/80">
            <p className="text-lg">We meet with one another.</p>
            <p className="text-lg">We share.</p>
            <p className="text-lg">We confess our flaws to each other.</p>
            <p className="text-lg">We serve and learn to serve the way he serves us.</p>
          </div>

          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic">
            The story of the Prodigal Son was more than the father accepting the son back. The Father <strong>rejoiced</strong> when his son returned. Just as God will rejoice when you return to him.
          </p>

          <p className="text-xl md:text-2xl text-primary font-semibold text-center pt-6">
            Join us on this journey through God's word and into his arms.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm transition-all duration-300"
            asChild
          >
            <Link to="/about">
              Learn More
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Home;