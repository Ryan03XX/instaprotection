export default function FooterCTA() {
  return (
    <div className="w-full flex justify-center -mb-20 relative z-10">
      <div className="bg-cyan-100 px-8 py-12 w-full max-w-7xl transition-transform hover:scale-105">
        <div className="flex flex-col text-center md:flex-row justify-between items-center gap-4">
          <h2
            className="font-bold"
            style={{ fontSize: "2.125rem", color: "#0A0842" }}
          >
            Ready to transform your business?
          </h2>
          <button className="relative overflow-hidden border px-4 py-3 text-md cursor-pointer border-cyan-500 group bg-cyan-500">
            <span className="relative font-bold z-10 text-[#0A0842] transition-opacity duration-300 group-hover:opacity-0">
              Get started
            </span>

            <span
              className="absolute left-0 top-0 w-full h-full flex items-center justify-center font-bold
              opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
              style={{ color: "#0A0842" }}
            >
              Get started
            </span>

            <span
              className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 
              origin-left transition-transform duration-600 ease-out group-hover:bg-cyan-600"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}
