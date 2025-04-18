"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import Image from "next/image";
import { CheckIcon, XIcon } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

export default function PricingPage() {
  const [region, setRegion] = useState<"IN" | "INTL" | null>(null);
  const [loading, setLoading] = useState(true);
  const [overrideRegion, setOverrideRegion] = useState<"IN" | "INTL" | null>(null);

  // Location detection
  useEffect(() => {
    async function detectLocation() {
      try {
        // Check localStorage first (expiry: 24h)
        const cached = localStorage.getItem("wingman_region");
        if (cached) {
          const { value, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 5 * 1000) {
            setRegion(value);
            setLoading(false);
            return;
          }
        }

        // Get IP
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        if (!ipResponse.ok) throw new Error("Failed to fetch IP");
        const ipData = await ipResponse.json();

        // Get location
        const locResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        if (!locResponse.ok) throw new Error("Failed to fetch location");
        const locData = await locResponse.json();

        // Set region
        const detectedRegion = locData.country_code === "IN" ? "IN" : "INTL";
        setRegion(detectedRegion);

        // Cache result
        localStorage.setItem(
          "wingman_region",
          JSON.stringify({
            value: detectedRegion,
            timestamp: Date.now(),
          })
        );
      } catch (error) {
        console.error("Location detection failed:", error);
        setRegion("INTL"); // Default fallback
      } finally {
        setLoading(false);
      }
    }

    detectLocation();
  }, []);

  // Get effective region (override or detected)
  const effectiveRegion = overrideRegion || region;

  // Pricing config based on region
  const pricing = {
    student: {
      price: effectiveRegion === "IN" ? "₹0" : "$0",
      period: "/mo",
      yearlyPrice: effectiveRegion === "IN" ? "₹0" : "$0",
    },
    plus: {
      price: effectiveRegion === "IN" ? "₹292" : "$4",
      period: "/mo",
      yearlyPrice: effectiveRegion === "IN" ? "₹3,499/year" : "$49/year",
    },
  };

  // Comparison table features
  const features = [
    {
      category: "Flight Logging",
      items: [
        { name: "Manual Flight Entries", free: true, plus: true },
        { name: "Flight Log Templates", free: true, plus: true },
        { name: "eGCA Import (Indian Pilots)", free: true, plus: true },
        { name: "Unlimited Flights", free: false, plus: true },
        { name: "Instructor Signoff", free: false, plus: true },
      ],
    },
    {
      category: "Reports & Analytics",
      items: [
        { name: "Basic Flight Reports", free: true, plus: true },
        { name: "Flight Time Summary", free: true, plus: true },
        { name: "Duty Time Tracking", free: false, plus: true },
        { name: "CA39 Report Generation", free: false, plus: true },
        { name: "Advanced Analytics", free: false, plus: true },
      ],
    },
    {
      category: "Automation",
      items: [
        { name: "Roster Imports (50/year)", free: true, plus: true },
        { name: "Unlimited Roster Imports", free: false, plus: true },
        { name: "FTL & FDP Monitoring", free: false, plus: true },
        { name: "Automated Logbook Backup", free: false, plus: true },
      ],
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Capt. Aditya Singh",
      role: "A320 Captain, IndiGo",
      avatar: "/testimonials/pilot1.jpg",
      rating: 5,
      quote: "Wingman simplified my flight logging process. I save 3 hours every month.",
    },
    {
      name: "Capt. Priya Sharma",
      role: "B737 First Officer, SpiceJet",
      avatar: "/testimonials/pilot2.jpg", 
      rating: 5,
      quote: "The eGCA import feature is a game-changer for Indian pilots!",
    },
    {
      name: "Capt. James Wilson",
      role: "Training Captain, Emirates",
      avatar: "/testimonials/pilot3.jpg",
      rating: 5,
      quote: "Best logbook app I've used in my 15 years of flying.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">

      <SectionHeader subheader="Pricing" header="Choose the plan that's right for you." />

      {/* Region toggle */}
      {loading && (
        <div className="flex justify-end mb-8">
          <p>Loading region...</p>
        </div>
      )}
      {!loading && (
        <div className="flex justify-end mb-8">          
          <Button
            variant="destructive"
            onClick={() =>
              setOverrideRegion(effectiveRegion === "IN" ? "INTL" : "IN")
            }
            className="text-sm"
          >
            (dev) Toggle {effectiveRegion === "IN" ? "$" : "₹"} Plans
          </Button>          
        </div>
      )}


      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        {/* Student Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <Badge className="w-fit mb-2" variant="outline">
              Free Forever
            </Badge>
            <CardTitle className="text-2xl">Student Plan</CardTitle>
            <CardDescription>
              Perfect for student pilots building hours
            </CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">{pricing.student.price}</span>
              <span className="text-muted-foreground ml-1">
                {pricing.student.period}
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                <span>Up to 250 flight hours total</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                <span>50 roster imports per year</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                <span>Unlimited reports</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                <span>eGCA Integration</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                <span>Basic analytics</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Start Free</Button>
          </CardFooter>
        </Card>

        {/* Wingman Plus */}
        <Card className="flex flex-col border-primary shadow-md">
          <div className="py-1 px-4 bg-primary text-primary-foreground text-sm font-medium text-center rounded-t-lg">
            Most Popular
          </div>
          <CardHeader>
            <Badge className="w-fit mb-2" variant="secondary">
              Unlimited
            </Badge>
            <CardTitle className="text-2xl">Wingman Plus</CardTitle>
            <CardDescription>
              For active pilots who need advanced features
            </CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">{pricing.plus.price}</span>
              <span className="text-muted-foreground ml-1">
                {pricing.plus.period}
              </span>
              <div className="text-sm text-muted-foreground mt-1">
                Billed {pricing.plus.yearlyPrice}
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                <span>Unlimited flight hours</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                <span>Unlimited roster imports</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                <span>FTL & FDP monitoring</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                <span>CA39 &amp; all reports</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                <span>Advanced analytics &amp; alerts</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Upgrade to Plus</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Comparison Table */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Compare Plans
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-center">Student Plan</th>
                <th className="py-4 px-6 text-center">Wingman Plus</th>
              </tr>
            </thead>
            <tbody>
              {features.map((category, idx) => (
                <React.Fragment key={idx}>
                  <tr className="bg-muted/50">
                    <td
                      colSpan={3}
                      className="py-3 px-6 font-medium"
                    >
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((feature, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-4 px-6">{feature.name}</td>
                      <td className="py-4 px-6 text-center">
                        {feature.free ? (
                          <CheckIcon className="w-5 h-5 mx-auto text-green-500" />
                        ) : (
                          <XIcon className="w-5 h-5 mx-auto text-muted-foreground" />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {feature.plus ? (
                          <CheckIcon className="w-5 h-5 mx-auto text-green-500" />
                        ) : (
                          <XIcon className="w-5 h-5 mx-auto text-muted-foreground" />
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Trusted by Pilots Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      {testimonial.name.substring(0, 1)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">How does the student plan work?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>The student plan is completely free until you reach 250 flight hours. Once you exceed 250 hours, you'll need to upgrade to Wingman Plus to continue using the app with your full flight history.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Can I import my flights from eGCA?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Yes! Both plans allow Indian pilots to import their flight logs directly from eGCA. This is a one-click process that saves hours of manual data entry.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Is there a mobile app?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Yes, Wingman is available on iOS and Android. Your data syncs seamlessly between devices, so you can access your logbook anywhere.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Not sure which plan fits you?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Our team is here to help you choose the right solution for your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline">
            Talk to Support
          </Button>
          <Button size="lg">Explore Features</Button>
        </div>
      </div>
    </div>
  );
}