"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Calendar, DollarSign, Sparkles, Star, TrendingUp, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="mediumLargeSizeMediumTitles"
      background="blurBottom"
      cardStyle="soft-shadow"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Orlando Rentals"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Fleet", id: "fleet" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Experience Premium Car Rentals in Orlando"
          description="Fast, affordable, and reliable vehicle rentals for your Florida adventure. Explore Orlando with luxury sedans, spacious SUVs, and convertibles starting at just $29/day."
          background={{ variant: "sparkles-gradient" }}
          tag="Best Rental Rates"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            { text: "Book Your Car Now", href: "#contact" },
            { text: "View Fleet", href: "#fleet" }
          ]}
          buttonAnimation="blur-reveal"
          imageSrc="http://img.b2bpic.net/free-photo/woman-man-leaning-out-from-car-near-lady-with-backpack-near-car-trunk_23-2148039098.jpg"
          imageAlt="luxury sedan car driving Orlando highway"
          className="w-full"
          containerClassName="max-w-7xl mx-auto px-4"
          textBoxClassName="z-10"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg md:text-xl opacity-90"
          buttonContainerClassName="flex gap-4 mt-8"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Why Choose Orlando Rentals"
          description="We offer the best car rental experience with unbeatable prices, exceptional customer service, and a premium fleet of vehicles."
          tag="Our Advantages"
          tagIcon={Star}
          tagAnimation="slide-up"
          features={[
            {
              title: "Best Price Guarantee",              description: "Competitive rates with no hidden fees. Beat any competitor's price or we'll match it.",              imageSrc: "http://img.b2bpic.net/free-photo/family-with-bbay-girl-choosing-car-car-saloon_1303-27407.jpg",              imageAlt: "Best price guarantee"
            },
            {
              title: "24/7 Support",              description: "Round-the-clock customer support available by phone, email, or chat for any assistance.",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-traveling-country-side_23-2149406538.jpg",              imageAlt: "24/7 customer support"
            },
            {
              title: "Well-Maintained Fleet",              description: "Every vehicle is regularly serviced and inspected to ensure your safety and comfort.",              imageSrc: "http://img.b2bpic.net/free-photo/stylish-blonde-girl-wearing-denim-pants-dancing-outdoor-with-hands-up-near-blue-classic-auto_197531-4424.jpg",              imageAlt: "Well-maintained vehicles"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Our Premium Fleet"
          description="Choose from a diverse selection of vehicles to match your needs and budget."
          tag="Available Vehicles"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          products={[
            {
              id: "sedan",              name: "Compact Sedan",              price: "$29/day",              imageSrc: "http://img.b2bpic.net/free-photo/family-with-bbay-girl-choosing-car-car-saloon_1303-27407.jpg",              imageAlt: "silver sedan compact car rental",              initialQuantity: 1
            },
            {
              id: "suv",              name: "Luxury SUV",              price: "$59/day",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-traveling-country-side_23-2149406538.jpg",              imageAlt: "black SUV luxury vehicle rental",              initialQuantity: 1
            },
            {
              id: "coupe",              name: "Sports Convertible",              price: "$79/day",              imageSrc: "http://img.b2bpic.net/free-photo/stylish-blonde-girl-wearing-denim-pants-dancing-outdoor-with-hands-up-near-blue-classic-auto_197531-4424.jpg",              imageAlt: "red sports coupe convertible rental",              initialQuantity: 1
            },
            {
              id: "van",              name: "Passenger Van",              price: "$69/day",              imageSrc: "http://img.b2bpic.net/free-photo/young-adult-using-digital-device-while-travelling_23-2149119716.jpg",              imageAlt: "white passenger van family transport",              initialQuantity: 1
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="All-inclusive rates with no surprises. Choose the perfect rental plan for your needs."
          tag="Affordable Rates"
          tagIcon={DollarSign}
          tagAnimation="slide-up"
          plans={[
            {
              id: "daily",              badge: "Daily",              badgeIcon: Calendar,
              price: "From $29",              subtitle: "Perfect for daily rentals",              buttons: [{ text: "Book Daily", href: "#contact" }],
              features: ["Unlimited mileage", "Full insurance coverage", "Free cancellation", "24/7 roadside support"]
            },
            {
              id: "weekly",              badge: "Weekly",              badgeIcon: Calendar,
              price: "From $169",              subtitle: "Best for week-long stays",              buttons: [{ text: "Book Weekly", href: "#contact" }],
              features: ["Unlimited mileage", "Full insurance coverage", "Free cancellation", "24/7 roadside support", "10% discount applied"]
            },
            {
              id: "monthly",              badge: "Monthly",              badgeIcon: Calendar,
              price: "From $649",              subtitle: "Maximum savings for long-term",              buttons: [{ text: "Book Monthly", href: "#contact" }],
              features: ["Unlimited mileage", "Full insurance coverage", "Free cancellation", "24/7 roadside support", "20% discount applied"]
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Our Customers"
          description="Read what our satisfied clients say about their rental experiences with Orlando Rentals."
          tag="5-Star Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "testimonial-1",              name: "Sarah Johnson",              role: "Business Traveler",              testimonial: "Outstanding service! The booking process was seamless, and the car was in perfect condition. Highly recommended for anyone visiting Orlando.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-posing-outdoors_23-2151038668.jpg",              imageAlt: "happy customer smiling portrait professional",              icon: Star
            },
            {
              id: "testimonial-2",              name: "Michael Chen",              role: "Vacation Visitor",              testimonial: "Great rates and excellent customer support. They helped me find the perfect convertible for exploring the Florida coast. Will rent again!",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-businesswoman-posing-outdoors_23-2148767054.jpg",              imageAlt: "woman smiling customer portrait photo",              icon: Star
            },
            {
              id: "testimonial-3",              name: "Jessica Martinez",              role: "Corporate Client",              testimonial: "Professional and reliable. Our company uses Orlando Rentals for all corporate travel. Their fleet is well-maintained and service is impeccable.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-businessman-model-dressed-elegant-blue-suit-posing-street-background-metrosexual_158538-10540.jpg",              imageAlt: "businessman smiling customer portrait",              icon: Star
            },
            {
              id: "testimonial-4",              name: "Robert Thompson",              role: "Family Vacation",              testimonial: "Perfect for families! The spacious SUV was comfortable for our road trip. The staff was friendly and the prices were competitive.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-business-woman_23-2148603029.jpg",              imageAlt: "woman happy customer testimonial photo",              icon: Star
            },
            {
              id: "testimonial-5",              name: "Emily Rodriguez",              role: "Solo Traveler",              testimonial: "Safe, affordable, and convenient. I felt completely confident renting from Orlando Rentals. Best rental experience I've had!",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-pretty-girl-her-thumb-up-isolated-yellow-wall_141793-78610.jpg",              imageAlt: "man customer smiling portrait photo",              icon: Star
            },
            {
              id: "testimonial-6",              name: "David Wilson",              role: "Event Organizer",              testimonial: "Rented multiple vehicles for our company event. Orlando Rentals provided excellent service and flexibility. Highly professional team!",              imageSrc: "http://img.b2bpic.net/free-photo/emotional-female-portrait-closeup-outdoors_1321-4437.jpg",              imageAlt: "happy female customer portrait photo",              icon: Star
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          title="By The Numbers"
          description="Orlando Rentals: Your trusted partner for premium vehicle rentals since 2015."
          tag="Our Success"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "customers",              title: "Happy Customers",              subtitle: "Satisfied clients worldwide",              category: "Served",              value: "50,000+"
            },
            {
              id: "vehicles",              title: "Premium Vehicles",              subtitle: "Always available for you",              category: "Fleet Size",              value: "250+"
            },
            {
              id: "locations",              title: "Convenient Locations",              subtitle: "Pickup and drop-off points",              category: "Coverage",              value: "8"
            },
            {
              id: "years",              title: "Years of Excellence",              subtitle: "Industry-leading service",              category: "Experience",              value: "9"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="centered"
          useInvertedBackground={false}
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Book Your Orlando Rental Today"
          description="Reserve your perfect vehicle in just a few clicks. Our team is ready to assist you 24/7."
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/people-working-call-center_23-2149288192.jpg"
          imageAlt="customer service representative helping client"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Start Booking"
          termsText="By booking, you agree to our rental terms and privacy policy."
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Orlando Rentals"
          columns={[
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Fleet", href: "#fleet" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "FAQs", href: "#" },
                { label: "Booking Help", href: "#" },
                { label: "Roadside Assistance", href: "#" },
                { label: "Insurance Info", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Rental Agreement", href: "#" },
                { label: "Accessibility", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 Orlando Rentals. All rights reserved."
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>
    </ThemeProvider>
  );
}