import Link from "next/link";
export default function TermsAndConditionsPage() {
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
                    Terms and Conditions
                </li>
            </ol>

            <section id="header" className="p-12 bg-gradient-to-r from-blue-500 to-blue-500/90 rounded-2xl w-full max-w-screen-xl">
                <div className="text-white text-center">
                    <h2 className="text-4xl font-bold">Terms and Conditions</h2>
                    <p className="mt-3">Last updated: <strong>8 FEB 2025</strong></p>
                </div>
            </section>

            <section className="mx-auto max-w-screen-xl p-6 text-gray-800 space-y-6">
                <h1 className="text-3xl font-bold">Terms and Conditions</h1>

                <p>
                    Thank you for choosing to use the products and services (&quot;Services&quot;) provided by Wingman Avtech Private Limited
                    (&quot;Wingman,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions govern the use of all Wingman products and services,
                    including but not limited to:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Wingman Pilot Logbook</li>
                    <li>AirRoster</li>
                    <li>Wingman Canvas</li>
                </ul>
                <p>
                    These terms apply to all current and future products developed by Wingman Avtech Pvt Ltd. By accessing or using any of
                    our Services, you agree to be bound by these Terms.
                </p>
                <p>
                    Additional terms or product requirements (including age requirements) may apply to specific Services. Such additional
                    terms will be made available with the relevant Services and become part of your agreement with us when you use those
                    Services.
                </p>

                <h2 className="text-2xl font-bold">Using Our Services</h2>
                <p>You agree to follow any policies and guidelines made available to you within our Services.</p>

                <h3 className="text-xl font-semibold">Prohibited Use</h3>
                <p>
                    You must not misuse our Services. For example, you must not interfere with the Services, attempt to access them by
                    unauthorized means, or use them in any way other than as permitted by law and these Terms.
                </p>

                <h3 className="text-xl font-semibold">Intellectual Property</h3>
                <p>
                    Using our Services does not grant you ownership of any intellectual property rights in our Services or their content.
                    You may not use any content unless expressly permitted by the owner or by law. This includes branding, logos, and
                    legal notices.
                </p>

                <h3 className="text-xl font-semibold">Third-Party Content</h3>
                <p>
                    Some content in our Services may belong to third parties. Such content is the sole responsibility of its originator.
                    While we reserve the right to review and remove content that violates our policies, we are not obligated to do so.
                </p>
                <p>
                    We may send you service announcements, administrative messages, and other necessary communications. You may opt out
                    of some of these communications.
                </p>
                <p>
                    Some Services are available on mobile devices. Do not use the Services in a manner that distracts you, violates
                    traffic laws, or aviation-related safety regulations.
                </p>

                <h2 className="text-2xl font-bold">Your Wingman Account</h2>
                <p>
                    You may need a Wingman Account to use certain Services. Your account may be created by you or assigned to you by an
                    administrator (e.g., your employer).
                </p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>You are responsible for maintaining the confidentiality of your password and account credentials.</li>
                    <li>You must notify us immediately of any unauthorized access or activity.</li>
                    <li>
                        If your account is assigned by an administrator, different or additional terms may apply. Administrators may have
                        access to and control over your account.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold">Membership and Subscription Plans</h2>
                <h3 className="text-xl font-semibold">Membership</h3>
                <p>
                    Your membership will continue until the &apos;Subscription End Date&apos; and will automatically renew unless canceled.
                    Membership requires an internet connection, a supported device, and a valid payment method.
                </p>
                <p>
                    You authorize us to charge recurring subscription fees to your Payment Method unless you cancel before the next
                    billing cycle.
                </p>
                <p>
                    Plans may vary in features, limitations, and promotional offers, as disclosed at the time of signup.
                </p>

                <h3 className="text-xl font-semibold">Free Trials</h3>
                <p>
                    We may offer free trials to eligible users. Eligibility is determined solely at Wingman’s discretion, and we may
                    revoke or modify eligibility at any time to prevent misuse.
                </p>

                <h3 className="text-xl font-semibold">Billing and Payment Methods</h3>
                <p>
                    Membership fees will be charged on a recurring basis to your chosen Payment Method. If a payment fails, access may
                    be suspended until a valid Payment Method is provided. Local taxes and transaction fees may apply.
                </p>
                <p>Payment details can be managed via the &quot;Account&quot; page.</p>

                <h3 className="text-xl font-semibold">Cancellation</h3>
                <p>
                    You may cancel your membership at any time. Cancellation will take effect at the end of your current billing period.
                    Payments are non-refundable to the extent permitted by law. To cancel, email us at{' '}
                    <a
                        className="text-blue-600 hover:underline"
                        href="mailto:support@wingman.zohodesk.com"
                    >
                        support@wingman.zohodesk.com
                    </a>
                    .
                </p>

                <h2 className="text-2xl font-bold">Access to Third-Party Systems/Websites</h2>
                <p>
                    Some of our Services, may require integration with third-party systems (e.g., airline roster systems). You may be
                    required to input login credentials, which are encrypted and stored securely. By using this feature, you confirm you
                    have the right to access such systems. Wingman is not responsible for any breach of your employment or IT usage
                    terms with third parties.
                </p>
                <p>
                    <strong>Third-Party System Outages:</strong> Wingman shall not be held liable for delays, interruptions, or failures
                    caused by third-party systems or websites. If such outages affect the Service, we will make reasonable efforts to
                    restore functionality but do not guarantee uninterrupted access.
                </p>

                <h2 className="text-2xl font-bold">Your Content in Our Services</h2>
                <p>
                    Some Services allow you to upload, submit, or store content. You retain ownership of the intellectual property
                    rights to your content.
                </p>
                <p>
                    By submitting content, you grant Wingman a worldwide, royalty-free license to host, store, modify, and use it solely
                    for operating and improving our Services. This license remains even after you stop using the Services. You must
                    ensure that you have the rights to the content you upload.
                </p>

                <h2 className="text-2xl font-bold">Software Updates</h2>
                <p>
                    When a Service includes downloadable software, updates may be provided automatically to ensure functionality and
                    security. You may manage auto-updates through device settings.
                </p>

                <h2 className="text-2xl font-bold">Service Updates and Downtime</h2>
                <p>
                    We are continuously improving our Services and may add, remove, or modify features. Wingman reserves the right to
                    schedule downtime for maintenance or updates, and reasonable efforts will be made to notify users in advance of
                    planned interruptions.
                </p>
                <p>
                    Unexpected outages due to technical issues, emergencies, or third-party failures may occur. While we aim to restore
                    Services promptly, Wingman makes no guarantees of uninterrupted availability.
                </p>
                <p>
                    If a Service is discontinued, we will provide reasonable notice to allow you to retrieve your data where feasible.
                </p>

                <h2 className="text-2xl font-bold">Warranties and Disclaimers</h2>
                <p>
                    Our Services are provided &quot;as is&quot; and to the extent permitted by law:
                    <br />
                    We do not make specific guarantees about the reliability, availability, or functionality of the Services. We exclude
                    all warranties, including implied warranties of merchantability, fitness for a particular purpose, and
                    non-infringement.
                </p>

                <h2 className="text-2xl font-bold">Dispute Resolution</h2>
                <p>
                    If you have a dispute with Wingman, we encourage you to contact us first to seek an informal resolution. If the
                    dispute cannot be resolved informally within 30 days, the matter will be referred to binding arbitration in
                    accordance with the Arbitration and Conciliation Act, 1996. The arbitration proceedings shall take place in New
                    Delhi, India, and the decision will be final and enforceable.
                </p>
                <p>
                    Litigation may proceed in courts only if arbitration fails to provide resolution. In such cases, the courts of New
                    Delhi, India shall have exclusive jurisdiction.
                </p>

                <h2 className="text-2xl font-bold">Governing Law and Disputes</h2>
                <p>
                    These Terms are governed by the laws of India, without regard to conflict-of-law rules. Any disputes arising out of
                    these Terms will be litigated exclusively in the courts of New Delhi, India, and you consent to personal
                    jurisdiction in those courts.
                </p>

                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p>
                    <strong>WINGMAN AVTECH PRIVATE LIMITED</strong>
                    <br />
                    Legal Entity: Wingman Avtech Pvt Ltd
                    <br />
                    Legal Representative: Leonard Selvaraja
                    <br />
                    Email:{' '}
                    <a className="text-blue-600 hover:underline" href="mailto:coo@wingmanlog.in">
                        coo@wingmanlog.in
                    </a>
                    <br />
                    Support Requests:{' '}
                    <a className="text-blue-600 hover:underline" href="mailto:support@wingman.zohodesk.com">
                        support@wingman.zohodesk.com
                    </a>
                </p>
            </section>


        </>
    );
}