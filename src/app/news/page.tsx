import FadeInOnceFromHorizon from "../horizonFadeIn";
import NewsSection from "../newsSection";

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
              News
            </span>
          </h1>
          <div></div>
          <FadeInOnceFromHorizon>

          <h3 className="text-xl md:text-2xl text-white z-10 font-bold">
            Read the latest news and update from Instaprotection
          </h3>
          </FadeInOnceFromHorizon>
        </main>

      <section className="-mt-40 z-40 relative px-20 py-40">
        <NewsSection />
      </section>
    </div>
  );
}
