const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <h3 className="font-serif text-2xl font-semibold bg-gradient-radiance bg-clip-text text-transparent">
            Inherit the Light
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Illuminating paths, inspiring hearts, and building a brighter tomorrow together.
          </p>
          <div className="pt-6 text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Inherit the Light. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
