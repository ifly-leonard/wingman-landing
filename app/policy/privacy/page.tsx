import Link from "next/link"
export default function PolicyPage() {
    return (
        <>
            {/* <SectionHeader header="POLICY" subheader="Privacy" /> */}

            <ol className="flex items-center whitespace-nowrap mt-10 mb-10">
            <li className="inline-flex items-center">
                    <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="#">
                        Home
                    </a>
                    <svg
                        className="shrink-0 mx-2 size-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </li>
                <li className="inline-flex items-center">
                    <Link className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/policy">
                        Policies
                    </Link>
                    <svg
                        className="shrink-0 mx-2 size-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </li>
                <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
                    Privacy
                </li>
            </ol>


            <section id="header" className="p-12 bg-gradient-to-r from-blue-500 to-blue-500/90 rounded-2xl w-full max-w-screen-xl">
                <div className="text-white text-center">
                    <h2 className="text-4xl font-bold">Privacy Policy</h2>
                    <p className="mt-3">Last updated: <strong>8 FEB 2025</strong></p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-screen-xl p-6 text-gray-800 space-y-8">
                <h2 className="text-2xl font-bold">Important Information and Who We Are</h2>
                <p>WINGMAN AVTECH PRIVATE LIMITED (&quot;Wingman&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, transfer, and store your data when you access any of our products, services, or applications. Currently, these include:</p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Wingman Pilot Logbook</li>
                    <li>AirRoster</li>
                    <li>Wingman Canvas</li>
                </ul>
                <p>This policy applies to all current products and will be updated to cover any future products under the Wingman Avtech Pvt Ltd portfolio. By accessing our applications, websites, or services, you agree to the practices described in this Privacy Policy.</p>

                <h2 className="text-2xl font-bold">Purpose of This Privacy Policy</h2>
                <p>This Privacy Policy aims to provide you with clear and comprehensive information on:</p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>The data we collect about you;</li>
                    <li>How we store, process, and secure that data;</li>
                    <li>Your rights regarding your personal data;</li>
                    <li>Our responsibilities in managing your data;</li>
                    <li>How we comply with GDPR and other applicable international data protection laws.</li>
                </ul>
                <p>By accessing our applications or services, you agree to the practices described in this Privacy Policy.</p>

                <h2 className="text-2xl font-bold">Data We Collect</h2>
                <h3 className="text-xl font-semibold">Types of Data Collected</h3>
                <p>We may collect, use, store, and transfer various categories of personal data:</p>
                <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Identity Data:</strong> Full name, username, and login credentials.</li>
                    <li><strong>Contact Data:</strong> Email address, billing address, and phone number.</li>
                    <li><strong>Technical Data:</strong> IP address, device details, app version, browser type, time zone settings, and platform information.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our products and services.</li>
                    <li><strong>Transaction Data:</strong> Records of purchases, payment card details (processed securely through third-party payment processors).</li>
                    <li><strong>Profile Data:</strong> Preferences, feedback, and survey responses.</li>
                </ul>
                <h3 className="text-xl font-semibold">Data Automatically Collected</h3>
                <p>We collect technical data automatically through cookies, server logs, and similar technologies. Consent for non-essential cookies will be obtained in compliance with GDPR.</p>
                <h3 className="text-xl font-semibold">Special Note on Third-Party System Access</h3>
                <p>We may require access to third-party systems, such as airline roster systems or eGCA. You may be required to input credentials, which are stored only in encrypted format and used strictly to automate data retrieval. By using these features, you confirm that you have the right to access such systems and acknowledge that Wingman is not responsible for any breaches of employment or IT usage policies.</p>

                <h2 className="text-2xl font-bold">How We Use Your Data</h2>
                <p>We process your personal data for:</p>
                <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Service Delivery:</strong> Provide core functionalities of our products.</li>
                    <li><strong>User Support:</strong> Address inquiries, troubleshoot issues, and respond to feedback.</li>
                    <li><strong>Enhancement of Services:</strong> Improve product performance, security, and user experience.</li>
                    <li><strong>Legal Compliance:</strong> Comply with regulatory obligations, including GDPR.</li>
                    <li><strong>Marketing and Cookies:</strong> Consent-based communication and personalized offerings.</li>
                </ul>
                <h3 className="text-xl font-semibold">Legal Basis for Processing</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Performance of Contract:</strong> To deliver our services.</li>
                    <li><strong>Legitimate Interests:</strong> Improving services, analyzing usage, maintaining security.</li>
                    <li><strong>Legal Obligation:</strong> Compliance with laws and regulations.</li>
                    <li><strong>Consent:</strong> Required for specific data processing, including marketing and cookies.</li>
                </ul>

                <h2 className="text-2xl font-bold">How We Store and Secure Your Data</h2>
                <h3 className="text-xl font-semibold">Data Storage</h3>
                <p>Most data is stored on your device. Only essential data is securely transmitted to our backend servers, which use redundancy and data integrity checks.</p>
                <h3 className="text-xl font-semibold">Data Encryption</h3>
                <p>Sensitive data (credentials, tokens, passwords) is encrypted using AES-256 for data at rest and TLS 1.2+ for data in transit.</p>
                <h3 className="text-xl font-semibold">Data Backups</h3>
                <p>Backups are stored within India. If data is transferred globally, it will comply with SCCs and GDPR requirements.</p>
                <h3 className="text-xl font-semibold">Incident Response</h3>
                <p>In the event of a breach, we will notify regulatory authorities within 72 hours and inform affected users promptly.</p>
                <h3 className="text-xl font-semibold">Transmission Security</h3>
                <p>All data transmissions use SSL encryption.</p>

                <h2 className="text-2xl font-bold">International Data Transfers</h2>
                <p>If personal data is transferred outside the EU/EEA, we ensure compliance with GDPR via adequacy decisions or SCCs.</p>

                <h2 className="text-2xl font-bold">Data Retention</h2>
                <p>We retain data only as long as necessary for the purposes described in this Privacy Policy. Upon request, personal data will be deleted within 15 days unless otherwise legally required.</p>

                <h2 className="text-2xl font-bold">Your Rights</h2>
                <p>Under GDPR, you have rights to access, rectify, erase, restrict processing, object, request data portability, and withdraw consent. To exercise these rights, contact us at <a className="text-blue-600 hover:underline" href="mailto:support@wingman.zohodesk.com">support@wingman.zohodesk.com</a>.</p>

                <h2 className="text-2xl font-bold">Cookies</h2>
                <p>We use cookies for essential and optional purposes. Consent for non-essential cookies is obtained as required under GDPR.</p>

                <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
                <p>We may update this policy periodically. Changes will be published on our website.</p>

                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p>
                    <strong>WINGMAN AVTECH PRIVATE LIMITED</strong><br />
                    Legal Entity: Wingman Avtech Pvt Ltd<br />
                    Legal Representative: Leonard Selvaraja<br />
                    Email: <a className="text-blue-600 hover:underline" href="mailto:support@wingman.zohodesk.com">support@wingman.zohodesk.com</a>
                </p>
            </section>

        </>
    );
}