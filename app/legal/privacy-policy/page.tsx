export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Privacy Policy
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Last updated: May 1, 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="prose max-w-none">
            <h2>Introduction</h2>
            <p>
              GoGetWell.ai ("we", "our", or "us") is committed to protecting the
              privacy of our users. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our
              website and services.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using
              our services, you acknowledge that you have read, understood, and
              agree to be bound by all the terms of this Privacy Policy.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you provide to us, such
              as:
            </p>
            <ul>
              <li>Name, email address, and contact information</li>
              <li>Billing information and payment details</li>
              <li>Professional credentials and practice information</li>
              <li>User preferences and settings</li>
            </ul>

            <h3>Protected Health Information</h3>
            <p>
              As a healthcare technology provider, we may process Protected
              Health Information (PHI) as defined by the Health Insurance
              Portability and Accountability Act (HIPAA). We maintain compliance
              with HIPAA and other applicable healthcare privacy laws.
            </p>

            <h3>Usage Information</h3>
            <p>
              We may automatically collect certain information about how you
              access and use our services, including:
            </p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and settings</li>
              <li>Usage patterns and feature utilization</li>
              <li>Log data and analytics information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes,
              including:
            </p>
            <ul>
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and managing your account</li>
              <li>
                Responding to your inquiries and providing customer support
              </li>
              <li>Sending administrative information and service updates</li>
              <li>
                Personalizing your experience and delivering relevant content
              </li>
              <li>Analyzing usage patterns to enhance our services</li>
              <li>Protecting against fraudulent or unauthorized activity</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect the security, confidentiality, and integrity of your
              information. These measures include encryption, access controls,
              regular security assessments, and employee training.
            </p>
            <p>
              However, no method of transmission over the Internet or electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your information, we cannot guarantee
              its absolute security.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your information for as long as necessary to fulfill the
              purposes outlined in this Privacy Policy, unless a longer
              retention period is required or permitted by law. When determining
              the appropriate retention period, we consider the nature and
              sensitivity of the data, potential risks, and applicable legal
              requirements.
            </p>

            <h2>Disclosure of Your Information</h2>
            <p>
              We may disclose your information in the following circumstances:
            </p>
            <ul>
              <li>With service providers who perform services on our behalf</li>
              <li>With your consent or at your direction</li>
              <li>
                To comply with legal obligations or respond to legal process
              </li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>
                In connection with a business transaction, such as a merger or
                acquisition
              </li>
            </ul>

            <h2>Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul>
              <li>Accessing, correcting, or deleting your information</li>
              <li>Restricting or objecting to certain processing activities</li>
              <li>
                Requesting a copy of your information in a portable format
              </li>
              <li>Withdrawing consent where processing is based on consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              provided in the "Contact Us" section below.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the new Privacy Policy on this page and updating the "Last
              updated" date.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to
              stay informed about how we are protecting your information.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our privacy practices, please contact us at:
            </p>
            <p>
              Email: privacy@gogetwell.ai
              <br />
              Address: 123 Health Tech Blvd, San Francisco, CA 94107
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
