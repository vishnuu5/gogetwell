import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HelpCenterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Help Center
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to your questions about GoGetWell.ai
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="sticky top-20 space-y-4">
                <h3 className="font-bold text-lg">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#getting-started"
                      className="text-teal-600 hover:underline"
                    >
                      Getting Started
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#account"
                      className="text-teal-600 hover:underline"
                    >
                      Account & Billing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="text-teal-600 hover:underline"
                    >
                      Features & Usage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#integrations"
                      className="text-teal-600 hover:underline"
                    >
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#troubleshooting"
                      className="text-teal-600 hover:underline"
                    >
                      Troubleshooting
                    </Link>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold mb-2">Need more help?</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Our support team is available to assist you with any
                    questions or issues.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Contact Support
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 space-y-12">
              <div id="getting-started" className="space-y-4">
                <h2 className="text-2xl font-bold">Getting Started</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How do I create an account?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        To create an account, click on the "Sign Up" button in
                        the top right corner of the homepage. Fill out the
                        registration form with your information and follow the
                        verification steps sent to your email.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      What are the system requirements?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        GoGetWell.ai works on any modern web browser (Chrome,
                        Firefox, Safari, Edge) and requires a stable internet
                        connection. For optimal performance, we recommend using
                        the latest version of Chrome or Firefox.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      How do I set up my practice profile?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        After logging in, navigate to the "Settings" section and
                        select "Practice Profile." Fill out all the required
                        information about your practice, including specialties,
                        provider information, and practice details.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div id="account" className="space-y-4">
                <h2 className="text-2xl font-bold">Account & Billing</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How do I upgrade my subscription?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        To upgrade your subscription, go to "Settings" &gt;
                        "Billing & Subscription" and click on "Upgrade Plan."
                        Select your desired plan and follow the payment
                        instructions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How do I add or remove users?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        To manage users, go to "Settings" &gt; "User
                        Management." From there, you can invite new users by
                        entering their email addresses or remove existing users
                        by clicking the "Remove" button next to their name.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      What payment methods do you accept?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        We accept all major credit cards (Visa, Mastercard,
                        American Express, Discover) as well as ACH bank
                        transfers for annual subscriptions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div id="features" className="space-y-4">
                <h2 className="text-2xl font-bold">Features & Usage</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How does the AI documentation assistant work?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        The AI documentation assistant uses natural language
                        processing to analyze patient encounters (either from
                        audio recordings or text notes) and generates structured
                        clinical documentation following standard medical
                        formats. You can edit and approve the generated notes
                        before finalizing them.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How accurate is the clinical decision support?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        Our clinical decision support is based on the latest
                        evidence-based guidelines and has been validated with a
                        95% accuracy rate compared to specialist
                        recommendations. However, it's designed to be a support
                        tool, not a replacement for clinical judgment.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Can I customize the care plans?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        Yes, all care plans generated by the system can be fully
                        customized. You can add, remove, or modify any elements
                        of the care plan before sharing it with patients.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div id="integrations" className="space-y-4">
                <h2 className="text-2xl font-bold">Integrations</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Which EHR systems do you integrate with?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        GoGetWell.ai integrates with major EHR systems including
                        Epic, Cerner, Allscripts, athenahealth, eClinicalWorks,
                        and NextGen. We also offer a generic API for custom
                        integrations with other systems.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How do I set up an EHR integration?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        To set up an EHR integration, go to "Settings" &gt;
                        "Integrations" and select your EHR system from the list.
                        Follow the step-by-step instructions for your specific
                        EHR. For some EHRs, you may need to contact your EHR
                        administrator to complete the integration.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Can I integrate with my practice management software?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        Yes, GoGetWell.ai integrates with popular practice
                        management systems including Kareo, AdvancedMD, and
                        DrChrono. For other systems, please contact our support
                        team to discuss integration options.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div id="troubleshooting" className="space-y-4">
                <h2 className="text-2xl font-bold">Troubleshooting</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      I forgot my password. How do I reset it?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        On the login page, click "Forgot Password" and enter the
                        email address associated with your account. You'll
                        receive an email with instructions to reset your
                        password.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      The AI documentation is not generating correctly. What
                      should I do?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        First, ensure that your audio recording is clear and the
                        patient encounter includes all necessary clinical
                        information. If the issue persists, try refreshing the
                        page or using the "Regenerate" button. If problems
                        continue, please contact our support team.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      My EHR integration is not working. How can I fix it?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500">
                        Check that your EHR credentials are correct and that
                        your EHR system is online. Verify that your EHR
                        administrator has granted the necessary permissions for
                        the integration. If issues persist, contact our support
                        team with details about the error messages you're
                        seeing.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
