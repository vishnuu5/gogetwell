import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Case Studies
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real-world success stories from healthcare providers using
                GoGetWell.ai
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Case study thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Memorial Health System</CardTitle>
                <CardDescription>
                  Large Hospital Network • 1,200+ Providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  How Memorial Health System reduced documentation time by 45%
                  and improved patient satisfaction with GoGetWell.ai.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Documentation
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Patient Satisfaction
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    ROI
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/resources/case-studies/memorial-health">
                  <Button variant="outline">Read Case Study</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Case study thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Westside Family Practice</CardTitle>
                <CardDescription>
                  Primary Care Group • 15 Providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  How a mid-sized primary care practice improved clinical
                  decision-making and reduced provider burnout.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Clinical Decision Support
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Provider Burnout
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Primary Care
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/resources/case-studies/westside-family-practice">
                  <Button variant="outline">Read Case Study</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Case study thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Northeast Cardiology Associates</CardTitle>
                <CardDescription>
                  Specialty Practice • 8 Providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  How a cardiology practice leveraged AI to improve care plan
                  adherence and patient outcomes.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Care Plans
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Patient Outcomes
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Specialty Care
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/resources/case-studies/northeast-cardiology">
                  <Button variant="outline">Read Case Study</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Case study thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Lakeside Pediatrics</CardTitle>
                <CardDescription>
                  Pediatric Practice • 12 Providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  How a pediatric practice streamlined documentation and
                  improved parent satisfaction with GoGetWell.ai.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Pediatrics
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Documentation
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Patient Experience
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/resources/case-studies/lakeside-pediatrics">
                  <Button variant="outline">Read Case Study</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Case study thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Mountain View Mental Health</CardTitle>
                <CardDescription>
                  Mental Health Practice • 20 Providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  How a mental health practice used AI to improve treatment
                  planning and patient monitoring.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Mental Health
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Treatment Planning
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Patient Monitoring
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/resources/case-studies/mountain-view-mental-health">
                  <Button variant="outline">Read Case Study</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Case study thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Riverside Health Partners</CardTitle>
                <CardDescription>ACO • 200+ Providers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  How an Accountable Care Organization used GoGetWell.ai to
                  improve quality metrics and reduce costs.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    ACO
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Quality Metrics
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Cost Reduction
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/resources/case-studies/riverside-health-partners">
                  <Button variant="outline">Read Case Study</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
