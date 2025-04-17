import FaqAccordion from "./faqAccordion";

export default function About() {
  return (
    <div>
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/background1.jpg')" }}
      />
      <main className="flex text-left px-20 w-full min-h-screen flex flex-col items-start justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span
            style={{
              display: "block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            Faqs
          </span>
        </h1>
        <div></div>
        <h3 className="text-xl md:text-2xl text-white z-10 font-bold">
          Frequently asked questions
        </h3>
      </main>
      <section className="px-20 py-20 bg-white relative z-30">
      <FaqAccordion />
      </section>
      <section className="w-full z-10 bg-gray-100 py-5"></section>
    </div>
  );
}
