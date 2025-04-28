export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Security
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How we protect your data and maintain trust
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="prose max-w-none">
            <h2>Our Security Commitment</h2>
            <p>
              At GoGetWell.ai, security is not just a feature—it's a
              foundational principle. We understand that healthcare data is
              among the most sensitive information entrusted to any
              organization, and we take this responsibility seriously. Our
              comprehensive security program is designed to protect your data at
              every level, from infrastructure to application security.
            </p>

            <h2>Infrastructure Security</h2>
            <h3>Cloud Security</h3>
            <p>
              Our infrastructure is hosted on enterprise-grade cloud platforms
              with the highest security certifications:
            </p>
            <ul>
              <li>SOC 2 Type II certified data centers</li>
              <li>ISO 27001, 27017, and 27018 compliance</li>
              <li>Redundant systems across multiple geographic regions</li>
              <li>24/7 monitoring and incident response</li>
            </ul>

            <h3>Network Security</h3>
            <p>
              We implement multiple layers of network security to protect
              against unauthorized access:
            </p>
            <ul>
              <li>
                Enterprise-grade firewalls and intrusion detection systems
              </li>
              <li>Regular vulnerability scanning and penetration testing</li>
              <li>DDoS protection and mitigation</li>
              <li>Network segmentation and isolation</li>
            </ul>

            <h2>Data Security</h2>
            <h3>Encryption</h3>
            <p>All data is encrypted using industry-standard protocols:</p>
            <ul>
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.2+ for all data in transit</li>
              <li>End-to-end encryption for sensitive communications</li>
              <li>Secure key management with regular rotation</li>
            </ul>

            <h3>Access Controls</h3>
            <p>
              We enforce strict access controls to ensure data is only
              accessible to authorized individuals:
            </p>
            <ul>
              <li>Role-based access control (RBAC)</li>
              <li>Multi-factor authentication for all system access</li>
              <li>Principle of least privilege</li>
              <li>Regular access reviews and audits</li>
            </ul>

            <h2>Application Security</h2>
            <h3>Secure Development</h3>
            <p>Security is integrated throughout our development lifecycle:</p>
            <ul>
              <li>Secure coding practices and guidelines</li>
              <li>Regular code reviews and security testing</li>
              <li>Static and dynamic application security testing</li>
              <li>Third-party dependency scanning</li>
            </ul>

            <h3>Authentication and Authorization</h3>
            <p>
              Our platform implements robust authentication and authorization
              mechanisms:
            </p>
            <ul>
              <li>Strong password policies</li>
              <li>Multi-factor authentication</li>
              <li>Session management with automatic timeouts</li>
              <li>Granular permission controls</li>
            </ul>

            <h2>Operational Security</h2>
            <h3>Monitoring and Logging</h3>
            <p>
              Comprehensive monitoring and logging help us detect and respond to
              security events:
            </p>
            <ul>
              <li>Real-time security monitoring</li>
              <li>Centralized log management and analysis</li>
              <li>Automated alerts for suspicious activities</li>
              <li>Regular security reviews and audits</li>
            </ul>

            <h3>Incident Response</h3>
            <p>We maintain a robust incident response program:</p>
            <ul>
              <li>Documented incident response procedures</li>
              <li>Trained incident response team</li>
              <li>Regular tabletop exercises and simulations</li>
              <li>Post-incident analysis and improvement</li>
            </ul>

            <h2>Compliance and Certifications</h2>
            <p>
              GoGetWell.ai maintains compliance with key healthcare and security
              standards:
            </p>
            <ul>
              <li>HIPAA compliance</li>
              <li>SOC 2 Type II certification</li>
              <li>HITRUST CSF certification</li>
              <li>Regular third-party security assessments</li>
            </ul>

            <h2>Employee Security</h2>
            <p>Our security program extends to our team members:</p>
            <ul>
              <li>Background checks for all employees</li>
              <li>Comprehensive security training</li>
              <li>Confidentiality agreements</li>
              <li>Secure remote work policies</li>
            </ul>

            <h2>Reporting Security Concerns</h2>
            <p>
              We encourage responsible disclosure of security vulnerabilities.
              If you believe you've found a security issue in our systems,
              please contact us at security@gogetwell.ai.
            </p>
            <p>We commit to:</p>
            <ul>
              <li>Acknowledging your report within 24 hours</li>
              <li>Providing regular updates as we investigate</li>
              <li>Addressing verified vulnerabilities promptly</li>
              <li>Recognizing your contribution (with your permission)</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              For more information about our security practices or to request
              our security documentation, please contact our security team:
            </p>
            <p>
              Email: security@gogetwell.ai
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
