import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import retreatBarn from "@/assets/retreat-barn.jpg";

const Gallery = () => {
  // Placeholder for future gallery images
  const galleryItems = [
    {
      title: "Fellowship & Worship",
      description: "Gathering together in faith and celebration"
    },
    {
      title: "Community Service",
      description: "Serving as stewards of God's creation"
    },
    {
      title: "Bible Study",
      description: "Growing together through God's Word"
    },
    {
      title: "Men's Retreat",
      description: "Deepening our faith in nature's beauty",
      image: retreatBarn
    },
    {
      title: "Prayer Circle",
      description: "United in prayer and fellowship"
    },
    {
      title: "Youth Mentorship",
      description: "Passing on faith to the next generation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-radiance bg-clip-text text-transparent">
              Our Journey Together
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Witnessing God's work through fellowship, service, and spiritual growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-nature flex items-center justify-center relative overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <p className="text-primary-foreground font-prosto text-xl text-center px-4">
                      {item.title}
                    </p>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 md:p-12 bg-gradient-subtle border-border/50 shadow-soft max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This gallery will be filled with moments of faith, fellowship, and service as our community grows. 
                Each image will tell a story of God's work in our lives and our journey together.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;