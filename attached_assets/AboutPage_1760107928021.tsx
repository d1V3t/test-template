import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Book, Heart, Users, Lightbulb, Shield, Sparkles } from "lucide-react";
import switzerlandBg from "@/assets/switzerland-cross.jpg";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Gratitude",
      description: "Living with joyful thanksgiving for God's grace and the inheritance we've received through Christ."
    },
    {
      icon: Users,
      title: "Brotherhood",
      description: "Building authentic relationships where men encourage, challenge, and support one another in faith."
    },
    {
      icon: Lightbulb,
      title: "Spiritual Growth",
      description: "Pursuing deeper understanding of God's Word and strengthening our walk with Him together."
    },
    {
      icon: Book,
      title: "Men of the Word",
      description: "We are committed to studying Scripture and applying its truth to every area of our lives."
    },
    {
      icon: Shield,
      title: "Accountability",
      description: "We confess our flaws to one another and hold each other accountable in love and truth."
    },
    {
      icon: Sparkles,
      title: "Service",
      description: "We learn to serve the way He serves us, reflecting Christ's love in our actions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${switzerlandBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
      </div>
      
      <main className="relative z-10 pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="font-prosto text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary drop-shadow-lg">
              A Men's Group Rooted in Faith
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are men called to walk in the Light — strengthened with power, endurance, and patience through God's Spirit. 
              Together, we give joyous thanks to the Father who has qualified us to share in the inheritance of the saints.
            </p>
          </div>

          <div className="mb-16 max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-subtle border-border/50 shadow-soft">
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We are Children of God. We are Husbands and Fathers, Sons and Brothers, Workers and Leaders, 
                  Men of Ministry and Laymen alike. What we strive to be, above all else, is <strong className="text-primary">Men of the Word. Men of God.</strong>
                </p>
                <p>
                  Through fellowship, accountability, and Scripture, we grow in faith and purpose. 
                  This is our journey to be the men that God has intended us to be.
                </p>
              </div>
            </Card>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-radiance mb-6 shadow-glow">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;