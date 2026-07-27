import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-navy mb-8 text-center">About AL QAMAR OBA</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-maroon mb-6">Our History</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              AL QAMAR Central College Old Boys Association is dedicated to fostering lifelong bonds 
              between alumni and supporting the institution that shaped our futures. Our association 
              brings together generations of alumni who share a common bond through their alma mater.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Since its establishment, the OBA has been instrumental in organizing reunions, 
              supporting educational initiatives, and maintaining the legacy of excellence 
              that AL QAMAR Central College is known for.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-maroon mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To unite and empower alumni, promote excellence, support current students, 
              and contribute to the continuous development of AL QAMAR Central College.
            </p>
            <ul className="text-gray-700 text-lg space-y-3">
              <li>✓ Foster lifelong friendships among alumni</li>
              <li>✓ Support educational excellence and student development</li>
              <li>✓ Organize networking and social events</li>
              <li>✓ Contribute to college infrastructure and projects</li>
              <li>✓ Promote the values and traditions of the college</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-maroon mb-6">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              A global network of distinguished alumni making meaningful contributions to society 
              while upholding the values and traditions of AL QAMAR Central College. We envision 
              a community of successful professionals who remain connected and actively support 
              their alma mater and fellow alumni.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
