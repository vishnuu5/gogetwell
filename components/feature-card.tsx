import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="inline-flex items-center justify-center p-2 bg-teal-50 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
