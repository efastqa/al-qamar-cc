export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-navy to-maroon text-white py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-6xl mb-4">🕌</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">AL QAMAR Central College</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gold mb-6">Old Boys Association</h2>
        <p className="text-xl mb-8 text-gray-200">
          Uniting Alumni | Empowering Excellence | Building Legacy
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-gold text-navy font-bold rounded hover:bg-opacity-90 transition">
            Join OBA
          </button>
          <button className="px-8 py-3 border-2 border-gold text-gold font-bold rounded hover:bg-gold hover:text-navy transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
