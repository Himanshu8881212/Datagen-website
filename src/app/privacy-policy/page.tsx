'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header currentPage="privacy-policy" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Privacy Policy
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Last updated: 26 May 2025
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">

                {/* Introduction */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      DataGen Private Limited ("<strong>DataGen</strong>", "<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <strong>datagen.in</strong> or use any of our products or services, including <strong>SynthEngyne</strong> (collectively, the "<strong>Services</strong>").
                    </p>
                    <p>
                      This Policy is drafted in accordance with the Information Technology Act 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules 2011 ("<strong>SPDI Rules</strong>"), and the Digital Personal Data Protection Act 2023 ("<strong>DPDP Act</strong>").
                    </p>
                  </div>
                </div>

                {/* Scope */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">2. Scope</h2>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Applies to all visitors, users, and others who access or use our Services from anywhere in the world.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Does <strong>not</strong> apply to third‑party websites or services that may be linked to or from our Services.</span>
                    </li>
                  </ul>
                </div>

                {/* Definitions */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">3. Definitions</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-4 pr-8 font-semibold text-foreground">Term</th>
                          <th className="text-left py-4 font-semibold text-foreground">Meaning</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="py-4 pr-8 font-medium text-foreground align-top">Personal Data</td>
                          <td className="py-4 text-muted-foreground leading-relaxed">Any data about an individual who can be identified directly or indirectly, including "Sensitive Personal Data or Information" ("SPDI") as defined under the SPDI Rules.</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-4 pr-8 font-medium text-foreground align-top">Processing</td>
                          <td className="py-4 text-muted-foreground leading-relaxed">Any operation performed on Personal Data, such as collection, storage, use, disclosure, or deletion.</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-4 pr-8 font-medium text-foreground align-top">Data Principal</td>
                          <td className="py-4 text-muted-foreground leading-relaxed">The natural person to whom the Personal Data relates (you).</td>
                        </tr>
                        <tr>
                          <td className="py-4 pr-8 font-medium text-foreground align-top">Data Fiduciary</td>
                          <td className="py-4 text-muted-foreground leading-relaxed">The entity that determines the purpose and means of Processing (DataGen).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Information We Collect */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">4. Information We Collect</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-4 pr-8 font-semibold text-foreground">Category</th>
                          <th className="text-left py-4 pr-8 font-semibold text-foreground">Examples</th>
                          <th className="text-left py-4 font-semibold text-foreground">Legal Basis*</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="py-4 pr-8 font-medium text-foreground align-top">Information you provide</td>
                          <td className="py-4 pr-8 text-muted-foreground leading-relaxed">Name, email, phone, company, job title, billing details, project files</td>
                          <td className="py-4 text-muted-foreground leading-relaxed">Consent / Contract</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-4 pr-8 font-medium text-foreground align-top">Automatically collected data</td>
                          <td className="py-4 pr-8 text-muted-foreground leading-relaxed">IP address, browser type, device ID, pages visited, cookies</td>
                          <td className="py-4 text-muted-foreground leading-relaxed">Legitimate Interest</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-4 pr-8 font-medium text-foreground align-top">Service‑generated data</td>
                          <td className="py-4 pr-8 text-muted-foreground leading-relaxed">Logs, synthetic datasets, model outputs, usage analytics</td>
                          <td className="py-4 text-muted-foreground leading-relaxed">Legitimate Interest / Contract</td>
                        </tr>
                        <tr>
                          <td className="py-4 pr-8 font-medium text-foreground align-top">Sensitive data (SPDI)</td>
                          <td className="py-4 pr-8 text-muted-foreground leading-relaxed">Only if you <strong>explicitly</strong> upload it to SynthEngyne (e.g., proprietary documents)</td>
                          <td className="py-4 text-muted-foreground leading-relaxed">Explicit Consent</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * Under the DPDP Act we rely on (a) your <strong>consent</strong>, (b) necessity for <strong>performance of a contract</strong>, or (c) <strong>legitimate interest</strong> that does not override your rights.
                  </p>
                </div>

                {/* How We Use Your Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">5. How We Use Your Information</h2>
                  <ol className="space-y-3 text-muted-foreground leading-relaxed">
                    <li><strong>1. Provide & improve Services</strong> – create synthetic datasets, fine‑tune models, maintain platform integrity.</li>
                    <li><strong>2. Account management</strong> – registrations, authentication, billing, and customer support.</li>
                    <li><strong>3. Security & fraud prevention</strong> – detect, prevent, and respond to security incidents.</li>
                    <li><strong>4. Analytics & research</strong> – understand usage patterns to enhance features and performance.</li>
                    <li><strong>5. Legal compliance</strong> – comply with applicable laws, regulations, and lawful requests.</li>
                    <li><strong>6. Marketing</strong> – send product updates or event invitations (<strong>opt‑out</strong> anytime).</li>
                  </ol>
                </div>

                {/* Cookies & Tracking Technologies */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">6. Cookies & Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use first‑ and third‑party cookies, log files, and similar technologies to remember your preferences, measure site performance, and analyse traffic patterns. You can manage or delete cookies in your browser settings; disabling cookies may affect functionality.
                  </p>
                </div>

                {/* Sharing & Disclosure */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">7. Sharing & Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do <strong>not</strong> sell or rent your Personal Data. We only share it in the following circumstances:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-4 pr-8 font-semibold text-foreground">Recipient</th>
                          <th className="text-left py-4 pr-8 font-semibold text-foreground">Purpose</th>
                          <th className="text-left py-4 font-semibold text-foreground">Safeguards</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="py-4 pr-8 font-medium text-foreground align-top">Service providers</td>
                          <td className="py-4 pr-8 text-muted-foreground leading-relaxed">Operate and support our Services</td>
                          <td className="py-4 text-muted-foreground leading-relaxed">Contractual data‑processing agreements, industry‑standard security</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-4 pr-8 font-medium text-foreground align-top">Affiliates & group entities</td>
                          <td className="py-4 pr-8 text-muted-foreground leading-relaxed">Internal business operations</td>
                          <td className="py-4 text-muted-foreground leading-relaxed">Same level of protection</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-4 pr-8 font-medium text-foreground align-top">Law‑enforcement / regulators</td>
                          <td className="py-4 pr-8 text-muted-foreground leading-relaxed">When required by law or to protect rights, property, or safety</td>
                          <td className="py-4 text-muted-foreground leading-relaxed">Evaluated case‑by‑case</td>
                        </tr>
                        <tr>
                          <td className="py-4 pr-8 font-medium text-foreground align-top">Business transfers</td>
                          <td className="py-4 pr-8 text-muted-foreground leading-relaxed">In connection with merger, acquisition, or asset sale</td>
                          <td className="py-4 text-muted-foreground leading-relaxed">Prior notice & new policy</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cross‑Border Data Transfers */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">8. Cross‑Border Data Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    DataGen primarily processes and stores data on servers located in India; however, we may transfer data to jurisdictions that offer comparable protection, subject to appropriate safeguards (e.g., standard contractual clauses) and compliance with Sections 16–17 of the DPDP Act.
                  </p>
                </div>

                {/* Data Security */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">9. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement <strong>reasonable security practices and procedures</strong> ("RSPP") per Rule 8 of the SPDI Rules, including encryption in transit and at rest, role‑based access controls, multi‑factor authentication, regular vulnerability assessments, and a documented incident‑response program.
                  </p>
                </div>

                {/* Data Retention */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">10. Data Retention</h2>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Personal Data is retained only as long as necessary for the purposes for which it was collected or as required by law.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Synthetic datasets generated via SynthEngyne are retained for <strong>30 days</strong> by default; you may delete them sooner through your dashboard.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Back‑ups are securely destroyed after a maximum of <strong>180 days</strong>.</span>
                    </li>
                  </ul>
                </div>

                {/* Your Rights */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">11. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Subject to exceptions under Indian law, you may:
                  </p>
                  <ol className="space-y-3 text-muted-foreground leading-relaxed">
                    <li><strong>1. Access</strong> – obtain a copy of your Personal Data.</li>
                    <li><strong>2. Correct</strong> – update inaccurate or incomplete data.</li>
                    <li><strong>3. Delete</strong> – request erasure when data is no longer necessary or upon withdrawal of consent.</li>
                    <li><strong>4. Data Portability</strong> – receive data in a structured, commonly used format.</li>
                    <li><strong>5. Withdraw Consent</strong> – at any time, without affecting prior Processing.</li>
                    <li><strong>6. Grievance Redressal</strong> – lodge a complaint with our Grievance Officer or the Data Protection Board of India.</li>
                  </ol>
                  <p className="text-muted-foreground leading-relaxed">
                    To exercise these rights, email <a href="mailto:info@datagen.in" className="text-primary hover:underline font-medium">info@datagen.in</a>.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">12. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Services are <strong>not</strong> directed to children under 18. We do not knowingly collect Personal Data from children. If you believe a child has provided us data, contact us for immediate deletion.
                  </p>
                </div>

                {/* Third‑Party Links */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">13. Third‑Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to external sites. We are not responsible for their privacy practices. Please review their policies before providing Personal Data.
                  </p>
                </div>

                {/* Changes to This Policy */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">14. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Policy periodically. Material changes will be notified via email or a prominent notice on our website at least <strong>15 days</strong> before the change becomes effective.
                  </p>
                </div>

                {/* Contact & Grievance Officer */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">15. Contact & Grievance Officer</h2>
                  <div className="space-y-4">
                    <p className="text-foreground font-semibold">
                      Grievance Officer (Rule 5(9) SPDI Rules)
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Email: <a href="mailto:info@datagen.in" className="text-primary hover:underline font-medium">info@datagen.in</a>
                    </p>
                  </div>
                </div>

                {/* Final Note */}
                <div className="mt-12 p-6 border border-border rounded-lg bg-card">
                  <p className="text-muted-foreground leading-relaxed text-center">
                    By using our Services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
