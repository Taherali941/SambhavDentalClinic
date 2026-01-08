import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function StickyBookingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Link to="/contact">
        <Button variant="cta" size="lg" className="shadow-xl rounded-full px-6">
          <Calendar className="w-5 h-5" />
          Book Now
        </Button>
      </Link>
    </div>
  );
}
