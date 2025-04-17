import Timeline from "./timeLine";

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
            Milestones
          </span>
        </h1>
        <div></div>
        <h3 className="text-xl md:text-2xl text-white z-10 font-bold">
          Discover our journey from inception to becoming a trusted InsurTech
          leader
        </h3>
        <h3 className="text-xl md:text-2xl text-white z-10 font-bold">
          in South-East Asia. Explore key moments, achievements,{" "}
        </h3>
        <h3 className="text-xl md:text-2xl text-white mb-8 z-10 font-bold">
          and innovations that define Instaprotection's success story
        </h3>
      </main>
      <section className="px-20 py-20 bg-white relative z-30">
        <Timeline />
      </section>
      <section className="w-full z-10 bg-gray-100 py-5"></section>
    </div>
  );
}
