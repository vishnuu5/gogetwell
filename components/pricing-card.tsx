import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  popular?: boolean;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonLink,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col p-6 ${
        popular ? "bg-teal-50 ring-2 ring-teal-500" : "bg-white"
      } rounded-lg shadow-sm hover:shadow-md transition-shadow relative`}
    >
      {popular && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full">
          Popular
        </div>
      )}
      <div className="mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-500">/month</span>}
      </div>
      <ul className="space-y-3 mb-6 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href={buttonLink}>
        <Button
          className={
            popular ? "bg-teal-600 hover:bg-teal-700 w-full" : "w-full"
          }
          variant={popular ? "default" : "outline"}
          size="lg"
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
}
