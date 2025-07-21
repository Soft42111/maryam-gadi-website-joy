import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Gadi Maryam</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>office@gadimaryam.gov.pk</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Community Center, Main Road<br />District Office Complex</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Office Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5" />
                <div>
                  <p>Monday - Friday</p>
                  <p className="text-sm opacity-80">9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5" />
                <div>
                  <p>Saturday</p>
                  <p className="text-sm opacity-80">9:00 AM - 2:00 PM</p>
                </div>
              </div>
              <p className="text-sm opacity-80 mt-4">
                Emergency services available 24/7
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Get Updates</h3>
            <p className="mb-4 opacity-90">
              Stay informed about community developments, new initiatives, and important announcements.
            </p>
            <Button variant="secondary" className="w-full">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="opacity-80">
            © 2024 Office of Gadi Maryam. Serving our community with dedication and integrity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;