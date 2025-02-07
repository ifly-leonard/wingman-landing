import { PricingTable } from "@/components/ui/pricing-table";
import SectionHeader from "@/components/ui/section-header";

const features = [
    { name: "Basic Analytics", included: "starter" },
    { name: "Up to 5 team members", included: "starter" },
    { name: "Basic support", included: "starter" },
    { name: "Advanced Analytics", included: "pro" },
    { name: "Up to 20 team members", included: "pro" },
    { name: "Priority support", included: "pro" },
    { name: "Custom integrations", included: "all" },
    { name: "Unlimited team members", included: "all" },
    { name: "24/7 phone support", included: "all" },
];

const plans = [
    {
        name: "Forever Free",
        price: { monthly: 0, yearly: 0 },
        level: "starter",
    },
    {
        name: "Pro",
        price: { monthly: 299, yearly: 1999 },
        level: "pro",
        popular: true,
    },
    {
        name: "Bundle (AirRoster + WM Logbook)",
        price: { monthly: 899, yearly: 5999 },
        level: "all",
    },
];

export default function AirrosterProductPricingTable() {
    return (
        <section>

            <SectionHeader header="pricing" subheader="Headaches solved for prices > than 🍽️" />

            <PricingTable
                features={features}
                plans={plans}
                defaultPlan="pro"
                defaultInterval="monthly"
                onPlanSelect={(plan) => console.log("Selected plan:", plan)}
                containerClassName=""
                buttonClassName="bg-primary hover:bg-primary/90"
            />
        </section>
    );
}

