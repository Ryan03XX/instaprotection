import FadeInOnceFromHorizon from "@/app/horizonFadeIn";
import FadeInOnceFromHorizon2 from "@/app/horizonFadeIn2";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/background1.jpg')" }}
      />
      <main className="flex max-w-7xl mx-auto min-h-screen flex-col items-start justify-center px-6 md:px-0">
        <FadeInOnceFromHorizon2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span
              style={{
                display: "block",
                position: "relative",
                overflow: "hidden",
              }}
            >
              PRIVACY & POLICY
            </span>
          </h1>
        </FadeInOnceFromHorizon2>
      </main>
      <section className="px-10 py-50 bg-white relative z-30">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            PRIVACY & POLICY
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Instaprotection Pte. Ltd, or its affiliates or subsidiaries
          (collectively, “Instaprotection” or “We” or “Us”) own, operate, and
          provide the websites and mobile applications (collectively, the
          “Platforms”), including Igloo self-managed services and services
          related to insurance by our insurance providers and partners through
          the Platforms (the “Services”). This Privacy Policy (the “Policy”)
          applies to information we obtain from you in the course of providing
          access to and use of the Platform, unless otherwise covered by a
          separate instrument.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          BY USING OR ACCESSING OUR SERVICES AND/OR PLATFORMS, YOU ACCEPT AND
          CONSENT TO THE COLLECTION, USE, DISCLOSURE, PROCESS, AND OTHER
          HANDLING OF INFORMATION AS DESCRIBED IN THIS POLICY.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            1. Information That We Obtain
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          In connection with Instaprotecion's provision of the Services and/or
          Platforms, Igloo and/or with its business partners may obtain
          information about you, including but not limited to your name, your
          location, your identification (national ID/passport), phone number,
          email address, date of birth, marital status, family member
          information, payment information, and any other specified data that We
          request for under Services and/or Platforms. Igloo obtains information
          about you and others when you apply for Services, when you or other
          users use or access the Platforms, when We obtain information from
          public records, and when third parties provide information or services
          to Igloo to support Igloo’s provision of the Platforms. Such third
          parties may include insurance companies, reinsurance companies,
          insurance agencies, insurance brokers, and business partners who
          support Instaprotecion's business (“Partners”).
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            2. How We Use and Share Information
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          We may use the information We obtain, and share such information with
          third parties, in connection with the following activities: To carry
          out claim investigation, respond to customer services inquiries,
          respond to product information, develop new services, administer your
          account, send you service-related correspondence, permit you to add
          individuals or an account or policy, fulfill an insurance and/or
          similar services related transaction, to send you an insurance and/or
          similar services documentation, process claim of insurance and/or
          similar services, underwrite and rate a cost of insurance or similar
          services, confirm your identity, communicate with you, and to
          otherwise provide access to the Platforms. To collect, access, read,
          preserve and disclose your data for the purpose to comply with
          regulatory, law enforcement authorities, respond to subpoena or court
          order, and otherwise investigate, establish, exercise, and defend
          legal rights. To facilitate any other activity in connection with the
          creation, development, offering, provision, or servicing of the
          Services. To perform payment processing (directly or indirectly on our
          behalf), to perform our Partners services and/or product. Any such
          further purpose that You agree for us to use such information.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Please have in mind that We are not responsible for the content of
          such third party privacy policies but in certain situations and if
          applicable, we vet these third parties and put in reasonable effort to
          work with the third parties that have a similar level of compliance or
          higher than Us.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          We use commercially reasonable efforts to preserve the integrity and
          security of the collected information. We do not, however, warrant the
          integrity and security of the collected information.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Sometimes, when you are using our Platform in other countries where
          our Platform is also accessible (“Designated Country”), We may
          transfer your Information from the origin country (“Origin Country”)
          to the Designated Country in order to enable and ensure smooth
          customer experience when you are using our Platform abroad.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Your information may also be accessed, stored or processed outside
          your country by our personnel who work for Us in other countries, or
          by our third-party service providers, vendors, suppliers, partners, or
          contractors. We will comply with the applicable laws and regulations
          and use all reasonable endeavors to ensure that our third-party
          service providers provide a level of protection that is comparable to
          our commitments under this Privacy Policy.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          We may use third-party advertising service providers to display ads
          on, in, or through the Platform. Those providers may use their own
          cookies and other technologies to collect information about your
          interaction with the Platform. Those providers may use the information
          they obtain, sometimes in conjunction with similar information
          gathered through other websites or services, to deliver ads on the
          Platform and on other websites or services that participate in the
          providers’ advertising networks. Those ads may be intended to match
          the perceived interests of consumers. Those providers may also use the
          information they obtain to measure and research an advertisement’s
          effectiveness, or for other purposes.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            3. Accuracy of personal information
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          You should ensure that all personal information submitted to us is
          complete, accurate and true. Failure to do so may affect our provision
          of Services to you. If We have any ongoing relationships with you, it
          is important for you to update us of any changes to your personal
          information. We will not be responsible for relying on incomplete,
          inaccurate or false personal information arising from you not updating
          us.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            4. Retention of personal information
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          We may retain your personal information for a period of 7 years (maybe
          less or longer subject to applicable law) and thereafter We may either
          destroy or archive such information.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          We will cease to retain any documents containing your personal
          information, or remove the means by which your personal information
          can be associated with you, as soon as it is reasonable to assume that
          the purpose(s) for which we collected your personal information is no
          longer served by the retention of such personal information, and
          retention is no longer necessary for legal or business purposes.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            5. Your Access To and Control Over Information
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          You may request to review your personal information in our records by
          contacting Us as provided in the “Contact Us” section below. If you
          believe that the information is incomplete or inaccurate, you can
          request that We correct it. We may not, however, be able to provide
          information relating to investigations, claims, litigation, or other
          matters which we are not allowed to disclose them to you. We will be
          happy to make corrections whenever possible. Furthermore, We will
          respond to your requests within a reasonable timeframe. Before
          responding to your request, We may carry out due diligence and
          appropriate measure to verify your identity.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            6. Third Party Sites and Services
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          The Services may include gateways, links, or other functionality that
          allow you to access third party services or websites (“Third Party
          Services”) and third party content and materials (“Third Party
          Materials”). We do not supply and are not responsible for any Third
          Party Services or Third Party Materials, which may be subject to their
          own licenses, end-user agreements, privacy and security policies,
          terms of service, and terms of use.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          We may, now or in the future, allow you to link your account with Us
          to one or more of your Third Party Services accounts (each, a “Linked
          Account”). Igloo is not responsible for any actions that providers of
          such Third Party Services and Third Party Materials may take or any
          information they may collect.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            7. Cookies, other tracking, etc.
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          When you access to our Platforms, we collect certain transaction
          information automatically, using technologies such as cookies, pixel
          tags, browser analysis tools, server logs and web beacons. When you
          visit our website, we place cookies on your computer. Cookies are
          small text files that websites send to your computer or other
          Internet-connected device to uniquely identify your browser or to
          store information or settings in your browser. Cookies allow us to
          recognize you when you return. They also help us provide a customised
          experience and enable us to detect certain kinds of fraud. In many
          cases, you can manage cookie preferences and opt-out of having cookies
          and other data collection technologies used by adjusting the settings
          on your browser.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Our server logs also record the IP address assigned to the device you
          use to connected while browsing our website. An IP address is a unique
          number that devices use to identify and communicate with each other on
          the Internet.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          The information we collect using cookies and other tools is only used
          in a non-identifiable way, without any reference to personal data. In
          some cases, we do associate the information we collect using cookies
          and other technology with your personal data. This Privacy Policy
          applies to the information when we associate it with your personal
          data.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            8. Job Applicants and employees
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          If you apply for a job with us, we will collect from you only the
          personal data you include in the curriculum vitae (CV) that you choose
          to send to us and, if we interview you, any personal data that you
          choose to provide to us during that interview. We will use such
          personal data only for the purpose of deciding whether or not to hire
          you. We will rely on you being deemed to have consented to us
          collecting and using the personal data described above for such
          purpose. If your job application is unsuccessful, we will not retain
          such personal data on a ‘keep in view’ basis without obtaining your
          consent to do so.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          If you accept an offer of employment with us, we will ask you to
          provide us with personal data in addition to the personal data
          referred to here to the extent that we need it for the purpose of
          managing and terminating the employment relationship between you and
          us.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            9. Indemnification
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          You agree to indemnify and hold harmless Us and its Board members,
          directors, officers, employees, agents, contractors and any other
          personnel from Us from and against any and all claims, damages,
          losses, costs (including without limitation reasonable attorneys'
          fees) or other expenses that arise directly or indirectly out of or
          from (a) your breach of any provision of this Agreement; (b) your
          activities in connection with the Platform; or (c) unsolicited
          information you provide to Us through the Platform.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            10. Assignment
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          The Policy, and any rights and permissions granted hereunder, may not
          be transferred or assigned by you, but may be transferred or assigned
          by Igloo without restriction.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            11. Contact Us
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          You can contact Us via email at customerservice@instaprotection.com.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Please include your name, address, and any other information necessary
          to respond to you.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            12. Changes to the Privacy Policy
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          We reserve the right at our discretion to change the Policy at any
          time. We will post the most current version of the Policy to our
          Platform.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          If We make a material change to the Policy, We will notify you by
          posting a notice on our Platform.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Changes will take effect as described in the notice.
        </h1>
      </section>
      <section className="w-full z-10 bg-gray-100 py-5"></section>
    </div>
  );
}
