import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, FileText, Users, GraduationCap, Stethoscope } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Document Verification",
      description: "Assistance with official documentation, certificates, and government paperwork",
      features: ["Birth Certificates", "Residence Verification", "Income Certificates", "Character Certificates"]
    },
    {
      icon: Users,
      title: "Community Mediation",
      description: "Resolving local disputes and facilitating community dialogue",
      features: ["Conflict Resolution", "Community Meetings", "Grievance Handling", "Local Justice"]
    },
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Promoting educational opportunities and supporting students",
      features: ["Scholarship Programs", "School Development", "Adult Education", "Skill Training"]
    },
    {
      icon: Stethoscope,
      title: "Healthcare Initiatives",
      description: "Improving healthcare access and awareness in the community",
      features: ["Health Camps", "Vaccination Drives", "Medical Assistance", "Health Education"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Services & Support</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive services designed to address the diverse needs of our community members
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-card transition-all duration-300 group">
              <CardHeader className="text-center">
                <service.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Office Hours & Contact</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-muted-foreground">+92 300 1234567</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Office Address</h4>
                  <p className="text-muted-foreground">Community Center, Main Road<br />District Office Complex</p>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-gradient-hero text-white hover:opacity-90">
                  Schedule an Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;