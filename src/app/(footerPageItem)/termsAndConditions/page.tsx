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
              Terms & Conditions
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
            Terms & Conditions
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          These Terms of Service constitute a legally binding agreement made
          between you, whether personally or on behalf of an entity (“You”) and
          Instaprotection Pte. Ltd, and its subsidiaries, affiliates and
          appointed third party (collectively, Instaprotection or “We” or “Us”)
          which own, operate and provide the websites and mobile applications
          (collectively, the “Platform”), including Igloo self-managed services
          and services related to insurance by our insurance providers and
          partners through the Platform (the “Services”). You agree that by
          accessing the Platform, you have read, understood, and agreed to be
          bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL
          OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM
          USING THE PLATFORM AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          Supplemental terms and conditions or documents that may be posted on
          the Platform (and or at the end of this Terms of Service) from time to
          time are hereby expressly incorporated herein by reference. We reserve
          the right, in our sole discretion, to make changes or modifications to
          these Terms of Service at any time and for any reason. We will alert
          you about any changes, but it is your responsibility to periodically
          review these Terms of Service to stay informed of updates. You will be
          subject to and will be deemed to have been made aware of and to have
          accepted, the changes in any revised Terms of Service by your
          continued use of the Platform after the date such revised Terms of
          Service are posted. The information provided on the Platform is not
          intended for distribution to or use by any person or entity in any
          jurisdiction or country where such distribution or use would be
          contrary to law or regulation or which would subject us to any
          registration requirement within such jurisdiction or country.
          Accordingly, those persons who choose to access the Platform from
          other locations do so on their own initiative and are solely
          responsible for compliance with local laws, if and to the extent local
          laws are applicable.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            1. INTELLECTUAL PROPERTY RIGHTS
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Unless otherwise indicated, the Platform is our proprietary property
          and all source codes, databases, functionality, software, website
          designs, audio, video, text, photographs, graphics and other such
          content capable of giving rise to copyright protection (including
          derivative works thereof) on the Platform (collectively, the
          “Content”) and the trademarks, service marks, and logos contained
          therein (the “Marks”) are owned or controlled by us or licensed to us,
          and are protected by copyright and trademark laws and various other
          intellectual property rights. The Content and the Marks are provided
          on the Platform “AS IS” for your information and personal use only.
          Content or Marks may not, whether in full or in part, be copied,
          reproduced, aggregated, republished, uploaded, posted, publicly
          displayed, encoded, translated, transmitted, distributed, sold,
          licensed, or otherwise exploited for any commercial purpose
          whatsoever, without our express prior written permission.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            2. YOUR DATA
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          All data you provide to us through the Platform ("Your Data") will
          remain your or your licensors’ exclusive property. Please review our
          Privacy Policy for more information on what data of yours we collect,
          and how we use and process that data.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            3. USER REPRESENTATIONS
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          By using the Platform, You represent and warrant that: (1) all
          information you submit is true, accurate, current, and complete; (2)
          You will maintain the accuracy of such information and promptly update
          such information as necessary; (3) You have the legal capacity, and
          you agree to comply with these Terms of Service; (4) You will not use
          the Platform for any illegal or unauthorized purpose including but not
          limited to, any intellectual property, cybersecurity and privacy laws;
          and (5) Your use of the Platform will not violate any applicable law
          or regulation.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          If you are using the Platform for your insurance agencies activities,
          You represent and warrant that: (1) You are a registered insurance
          agent and your agency license is valid when doing agency activities,
          (2) You have received any form of consent from the candidate of
          policyholder and/or insurer in closing the sales of insurance product
          and activating the insurance product through this Platform, (3) You
          are comply with your agency agreement and all policy issued by
          insurer, (4) You will not abuse your position as an insurance agent
          which will be resulted in damages to Igloo or the customer, and (5)
          You are fully aware that We are act as the tech solution provider and
          We will not be responsible for any dispute between You and the
          Insurer.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Platform.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            4. USER REGISTRATION
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          You may be required to register with the Platform and when you create
          an account with us, you must provide us information that is accurate,
          complete, and current at all times. Failure to do so constitutes a
          breach of the Terms of Service, which may result in immediate
          termination of your account on our Platform. You are responsible for
          safeguarding the password that you use to access the Platform and for
          any activities or actions under your password, whether your password
          is with our Platform or a third-party service. You agree not to
          disclose your password to any third party. You must notify us
          immediately upon becoming aware of any breach of security or
          unauthorized use of your account. You may not use as a username the
          name of another person or entity or that is not lawfully available for
          use, a name or trade mark that is subject to any rights of another
          person or entity other than you without appropriate authorization, or
          a name that is otherwise offensive, vulgar or obscene. You agree to
          keep your password confidential and will be responsible for all use of
          your account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            5. PURCHASES AND PAYMENT
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Sometimes and if we opted to, to get a product you refer we will ask
          you to purchase through a payment provider in selected currencies and
          your purchase may sometimes be subject to applicable tax. You
          represent and warrant that you will provide current, complete, and
          accurate purchase and account information for all purchases made via
          the Platform. Prices will be specified clear during the order process.
          You agree to pay all charges at the prices then in effect for your
          purchases and any applicable shipping fees, and you authorize us to
          charge your chosen payment provider for any such amounts upon placing
          your order. We reserve the right to correct any errors or mistakes in
          pricing, even if We have already requested or received payment. We
          reserve the right to refuse any order placed through the Platform. We
          may, at our sole discretion, limit or cancel quantities purchased per
          person, or per order. These restrictions may include orders placed by
          or under the same customer account, the same payment method, and/or
          orders that use the same billing or shipping address. We reserve the
          right to limit or prohibit orders that, in our sole judgment, appear
          to be placed by dealers, resellers, or distributors.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            6. INSURANCE PRODUCT, UNDERWRITING AND CLAIM
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          All quotes generated by the Platform are based upon the information
          you provided and are not a contract, binder, or agreement to extend
          insurance coverage. Any coverage descriptions provided on our Platform
          are general descriptions of available coverages and are not a
          statement of contract or an offer to contract. All applications are
          subject to underwriting approval. Coverages,availability, and the
          applicable premiums may vary, and the final coverages will be
          indicated in the insurance policy which will be issued by the
          insurance company. You understand that Igloo is not an insurance
          company which is responsible for your protection. Igloo will not be
          responsible for any failures in the operation of the Platform caused
          by errors or negligence made by insurer. All decisions in the
          underwriting and claim process which are processed in our Platform are
          full responsibility of the Insurance Partner, including but not
          limited to the decision of approval or rejection of insurance
          acceptance and/or claim payments. Igloo shall be not responsible for
          any losses arising from the decision of the claim or claim payment
          made based on the directions and guidelines of the Insurance Partner.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            7. REFUND POLICY
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Unless otherwise indicated, all sales are final and no refund will be
          issued, except as required by applicable law and regulation.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            8. PROHIBITED ACTIVITIES
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          You may not access or use the Platform for any purpose other than that
          for which we make the Platform available. The Platform may not be used
          in connection with any commercial endeavors except those that are
          specifically endorsed or approved by us. As a user of the Platform,
          You agree not to: send any information that is abusive, threatening,
          obscene, defamatory, libelous, or racially, sexually, religiously, or
          otherwise objectionable and offensive; use the Platform for any
          unlawful purpose or for the promotion of illegal activities; attempt
          to, or harass, abuse or harm another person or group; use another
          user’s account without permission; provide false or inaccurate
          information when registering an account; attempt to impersonate
          another user or person; interfere or attempt to interfere with the
          proper functioning of the Service; make any automated use of the
          system, or take any action that we deem to impose or to potentially
          impose an unreasonable or disproportionately large load on - our
          servers or network infrastructure; bypass any robot exclusion headers
          or other measures we take to restrict access to the Platform or use
          any software, technology, or device to scrape, spider, or crawl the
          Platform or harvest or manipulate or extract data; or publish or a
          to malicious content intended to damage or disrupt another user’s
          browser or computer.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            9. THIRD-PARTY WEBSITES AND CONTENT
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          The Platform may contain (or you may be sent via the Platform) as
          to other websites ("Third-Party Websites") as well as articles,
          photographs, text, graphics, pictures, designs, music, sound, video,
          information, applications, software, and other content or items
          belonging to or originating from third parties ("Third-Party
          Content"). Such Third-Party Websites and Third-Party Content are not
          investigated, monitored, or checked for accuracy, appropriateness, or
          completeness by us, and we are not responsible for any Third Party
          Websites accessed through the Platform or any Third-Party Content
          posted on, available through, or installed from the Platform,
          including the content, accuracy, offensiveness, opinions, reliability,
          privacy practices, or other policies of or contained in the
          Third-Party Websites or the Third-Party Content. Inclusion of, aing
          to, or permitting the use or installation of any Third-Party Websites
          or any Third-Party Content on the Platform does not imply approval or
          endorsement thereof by us. If you decide to leave the Platform and
          access the Third-Party Websites or to use or install any Third-Party
          Content, you do so at your own risk, and you should be aware these
          Terms of Service no longer govern. You should review the applicable
          terms and policies, including privacy and data gathering practices, of
          any website to which you navigate from the Platform or relating to any
          applications you use or install from the Platform. Any purchases you
          make through Third-Party Websites will be through other websites and
          from other companies, and we take no responsibility whatsoever in
          relation to such purchases which are exclusively between you and the
          applicable third party. You agree and acknowledge that we do not
          endorse the products or services offered on Third-Party Websites and
          you shall hold us harmless from any harm caused by your purchase of
          such products or services. Additionally, you shall hold us harmless
          from any losses sustained by you or harm caused to you relating to or
          resulting in any way from any Third-Party Content or any contact with
          Third-Party Websites.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            10. SITE MANAGEMENT
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          We reserve the right, but are under no obligation, to: (1) monitor the
          Platform for violations of these Terms of Service; (2) take
          appropriate legal action against anyone who, in our sole discretion,
          violates the law or these Terms of Service, including without
          limitation, reporting such user to law enforcement authorities; (3) in
          our sole discretion and without limitation, refuse, restrict access
          to, limit the availability of, or disable (to the extent
          technologically feasible) any of your contributions or any portion
          thereof; (4) in our sole discretion and without limitation, notice, or
          liability, to remove from the Platform or otherwise disable all files
          and content that are excessive in size or are in any way burdensome to
          our systems; and (5) otherwise manage the Platform in a manner
          designed to protect our rights and property and to facilitate the
          proper functioning of the Platform.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            11. PRIVACY POLICY
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          We care about data privacy and security. Please review our Privacy
          Policy. By using the Platform, you agree to be bound by our Privacy
          Policy, which is incorporated into these Terms of Service.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            12. TERM AND TERMINATION
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          These Terms of Service begin on the date you first access or use the
          Platform and continue for the longer of: (a) as you access them, or
          (b) as long as you have an account with us. WITHOUT LIMITING ANY OTHER
          PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR
          SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
          USE OF THE PLATFORM (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY
          PERSON FOR ANY REASON WHATSOEVER, INCLUDING WITHOUT LIMITATION FOR
          BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE
          TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
          TERMINATE YOUR USE OR PARTICIPATION IN THE PLATFORM OR DELETE YOUR
          ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME,
          WITHOUT WARNING, IN OUR SOLE DISCRETION. All provisions of these Terms
          of Service, which by their nature should survive termination shall
          survive termination, including ownership provisions, warranty
          disclaimers, indemnification obligations, and limitations of
          liability. If we terminate or suspend your account for any reason, you
          are prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil,
          criminal, and injunctive redress.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            13. MODIFICATIONS AND INTERRUPTIONS
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          We reserve the right to change, modify, or remove the contents of the
          Platform at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Platform. We also reserve the right to modify or discontinue all
          or part of the Platform without notice at any time. We will not be
          liable to you or any third party for any modification, price change,
          suspension, or discontinuance of the Platform. We cannot guarantee the
          Platform will be available at all times. We may experience hardware,
          software, or other problems or need to perform maintenance related to
          the Platform, resulting in interruptions, delays, or errors. We
          reserve the right to change, revise, update, suspend, discontinue, or
          otherwise modify the Platform at any time or for any reason without
          notice to you. You agree that we have no liability whatsoever for any
          loss, damage, or inconvenience caused by your inability to access or
          use the Platform during any downtime, discontinuance, disrupted use or
          otherwise such unavailability of the Platform. Nothing in these Terms
          of Service will be construed to obligate us to maintain and support
          the Platform or to supply any corrections, updates, or releases in
          connection therewith.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            14. CORRECTIONS
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          There may be information on the Platform that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Platform at any time, without prior notice.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            15. DISCLAIMER
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          THE PLATFORM IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
          THAT YOUR USE OF THE PLATFORM WILL BE AT YOUR SOLE RISK. TO THE
          FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
          OR IMPLIED, IN CONNECTION WITH THE PLATFORM AND YOUR USE THEREOF,
          INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
          ACCURACY OR COMPLETENESS OF THE PLATFORM’S CONTENT OR THE CONTENT OF
          ANY WEBSITES aED TO THE PLATFORM AND WE WILL ASSUME NO LIABILITY OR
          RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
          CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY
          NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
          PLATFORM, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS
          AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
          STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO
          OR FROM THE PLATFORM, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
          LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE PLATFORM BY ANY THIRD
          PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS
          OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE
          OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA
          THE PLATFORM. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
          RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A
          THIRD PARTY THROUGH THE PLATFORM, ANY HYPERaED WEBSITE, OR ANY
          WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER
          ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
          RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
          THIRD-PARTY PROVIDERS OF PRODUCTS OR PLATFORM. AS WITH THE PURCHASE OF
          A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU
          SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            16. LIMITATIONS OF LIABILITY
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE PLATFORM, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
          HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS
          OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT
          PAID, IF ANY, BY YOU TO US DURING THE ONE (1) MONTH PERIOD PRIOR TO
          ANY CAUSE OF ACTION. CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON
          IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES.
          IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR
          LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            17. INDEMNIFICATION
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, appointed third party or partners and all of
          our respective officers, agents, partners, and employees, from and
          against any loss, damage, liability, claim, or demand, including
          reasonable attorneys’ fees and expenses, made by any third party due
          to or arising out of: (1) use of the Platform; (2) breach of these
          Terms of Service; (3) any breach of your representations and
          warranties set forth in these Terms of Service; (4) any claims that
          your data violates of the rights of a third party, including
          intellectual property rights or rights of privacy; (5) violation of
          applicable law, or (6) any overt harmful act toward any other user of
          the Platform with whom you connected via the Platform. Notwithstanding
          the foregoing, we reserve the right, at your expense, to assume the
          exclusive defense and control of any matter for which you are required
          to indemnify us, and you agree to cooperate, at your expense, with our
          defense of such claims. We will use reasonable efforts to notify you
          of any such claim, action, or proceeding which is subject to this
          indemnification upon becoming aware of it.
        </h1>
        <h1 className="text-md md:text-lg font-bold text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            18. MISCELLANEOUS
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          These Terms of Service and any policies or operating rules posted by
          us on the Platform or in respect to the Platform constitute the entire
          agreement and understanding between you and us. Our failure to
          exercise or enforce any right or provision of these Terms of Service
          shall not operate as a waiver of such right or provision. These Terms
          of Service operate to the fullest extent permissible by law. We may
          assign any or all of our rights and obligations to others at any time.
          We shall not be responsible or liable for any loss, damage, delay, or
          failure to act caused by any cause beyond our reasonable control. If
          any provision or part of a provision of these Terms of Service is
          determined to be unlawful, void, or unenforceable, that provision or
          part of the provision is deemed severable from these Terms of Service
          and does not affect the validity and enforceability of any remaining
          provisions. There is no joint venture, partnership, employment or
          agency relationship created between you and us as a result of these
          Terms of Service or use of the Platform. You agree that these Terms of
          Service will not be construed against us by virtue of us having
          drafted them. You hereby waive any and all defenses you may have based
          on the electronic form of these Terms of Service and the lack of
          signing by the parties hereto to execute these Terms of Service. These
          terms of service will be updated or amended as necessary from time to
          time.
        </h1>
      </section>
      <section className="w-full z-10 bg-gray-100 py-5"></section>
    </div>
  );
}
