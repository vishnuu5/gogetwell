interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-1">
        <p className="text-gray-600 italic mb-4">"{quote}"</p>
      </div>
      <div className="mt-4">
        <p className="font-bold">{author}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
}
