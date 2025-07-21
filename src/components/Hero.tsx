import { Button } from "@/components/ui/button";
import maryamPortrait from "@/assets/maryam-portrait.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Serving the
              <span className="text-primary block">Community</span>
              with Dedication
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              As your Gadi, I am committed to representing your voice, addressing your concerns, 
              and working tirelessly for the development and prosperity of our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero text-white hover:opacity-90 shadow-elegant">
                Learn About My Work
              </Button>
              <Button variant="outline" size="lg">
                Contact Office
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-2xl opacity-20 transform rotate-3"></div>
              <img 
                src={maryamPortrait} 
                alt="Gadi Maryam" 
                className="relative rounded-2xl shadow-card w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;