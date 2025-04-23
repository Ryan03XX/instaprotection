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
              Disclaimer
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
            DISCLAIMER
          </span>
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          The provision of this teaser presentation (“Presentation”) to the
          Recipient is only to assist the Recipient to consider whether to
          participate in the Proposal and does not under any circumstances imply
          that the assets and liabilities, financial position and performance,
          profits and losses and prospects of the Company have been fully or
          correctly stated in this Presentation or have not changed since the
          date of this Presentation.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          By receiving, retaining or in any way using this Presentation the
          Recipient acknowledges and agrees that no responsibility or liability
          (including in negligence) is assumed by InstaProtection or its
          officers, shareholders, related bodies corporate, partners,
          affiliates, employees, agents, representative and advisers (Agents),
          for the contents of this Presentation, including for updating the
          Presentation or informing the Recipient of any new information of
          which they may become aware.{" "}
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Any opinions expressed in this Presentation are based on the knowledge
          and approach of the persons forming the opinion at the date the
          opinion was formed and may not be appropriate in the light of
          subsequent knowledge or attitudes. InstaProtection or its Agents are
          not responsible for any interpretation, opinion or conclusion that the
          Recipient forms as a result of examining the Presentation.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Any forecasts, and financial and operating projections, contained in
          this Presentation have been prepared in accordance with a number of
          economic and other assumptions, and must be interpreted in the context
          of those assumptions, and the risk that they may prove to be incorrect
          or unreasonable. No assurance or representation is made that any
          forecast or projection will be achieved, and nothing contained in this
          Presentation is, or may be relied upon as, a promise, representation,
          or warranty, whether as to the past or the future, that
          InstaProtection will achieve, or is likely to achieve, any particular
          results.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          The Recipient must conduct its own independent investigations,
          analysis and assessment of the Company, its assets, and its prospects.
          InstaProtection and its Agents do not accept any liability or
          responsibility for any reliance placed on the contents of this
          Presentation or any liability or responsibility for any errors in, or
          omissions from, this Presentation. InstaProtection and its Agents do
          not have any responsibility to inform the Recipient of any matter or
          information coming to their attention which may affect any other
          matter or information contained or referred to in this Presentation.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          The provision of this Presentation must not be considered a
          recommendation in relation to the Proposal. The Recipient must not
          treat the contents of this Presentation as advice relating to legal,
          taxation or investment matters and should consult its own advisers and
          seek all necessary independent financial, legal, tax and investment
          advice.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          Information on certain matters may not be included in this
          Presentation for reasons of commercial sensitivity, even though the
          information may be Presentation to the Recipient.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          The Recipient acknowledges and agrees that the Company has the right
          at any time, without notice to the Recipient, to enter into and
          conclude negotiations with any other party, and to terminate
          negotiations with the Recipient or any other person. Additionally, the
          Company may at any time depart from or modify any procedure or course
          of conduct in relation to the Proposal.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          The Recipient is not entitled to receive any indemnity, refund, or
          compensation from the Company or any of its Agents in respect of costs
          incurred by it or on its behalf in relation to participating in the
          Proposal unless that is expressly agreed among them in writing.
        </h1>
        <h1 className="text-md md:text-lg text-[#0A0842] text-left items-center max-w-7xl mx-auto mt-8">
          The information contained in this presentation slides is intended only
          for the use of the individual or entity named above and may contain
          information that is privileged, confidential and exempt from
          disclosure under applicable law. If the reader of this presentation
          slides is not the intended recipient, you are hereby notified that any
          dissemination, distribution or copying of this communication is
          strictly prohibited. If you have received this presentation slides in
          error, please immediately notify the sender and delete the slides
        </h1>
      </section>
      <section className="w-full z-10 bg-gray-100 py-5"></section>
    </div>
  );
}
