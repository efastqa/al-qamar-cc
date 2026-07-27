import Link from 'next/link'

export default function Events() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-navy mb-12 text-center">Upcoming Events</h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gold hover:shadow-xl transition">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-2">Annual Alumni Reunion</h3>
                <p className="text-maroon font-semibold mb-2">December 15, 2024</p>
                <p className="text-gray-700">Join fellow alumni for a memorable gathering and networking session</p>
              </div>
              <span className="text-4xl">🎉</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gold hover:shadow-xl transition">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-2">Mentorship Program Launch</h3>
                <p className="text-maroon font-semibold mb-2">January 20, 2025</p>
                <p className="text-gray-700">Connect current students with successful alumni mentors</p>
              </div>
              <span className="text-4xl">👨‍🏫</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/events" className="inline-block btn-primary">
            View All Events
          </Link>
        </div>
      </div>
    </div>
  )
}
