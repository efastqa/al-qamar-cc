import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('')

  const alumni = [
    { id: 1, name: 'Ahmed Hassan', batch: '2015', profession: 'Software Engineer', location: 'Dubai' },
    { id: 2, name: 'Fatima Ali', batch: '2018', profession: 'Doctor', location: 'Cairo' },
    { id: 3, name: 'Muhammad Khalid', batch: '2016', profession: 'Business Owner', location: 'Riyadh' },
    { id: 4, name: 'Aisha Khan', batch: '2017', profession: 'Lawyer', location: 'Jeddah' },
    { id: 5, name: 'Ibrahim Hassan', batch: '2014', profession: 'Engineer', location: 'Abu Dhabi' },
    { id: 6, name: 'Zainab Omar', batch: '2019', profession: 'Teacher', location: 'Doha' },
  ]

  const filtered = alumni.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.batch.includes(searchTerm) ||
    person.profession.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-navy mb-8 text-center">Alumni Directory</h1>
          
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search by name, batch year, or profession..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-navy focus:outline-none focus:border-gold text-gray-800"
            />
            <p className="text-gray-600 text-sm mt-2">
              Found {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {filtered.map((person) => (
              <div key={person.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition border-t-4 border-gold">
                <div className="w-16 h-16 bg-gradient-to-br from-navy to-maroon rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {person.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{person.name}</h3>
                <p className="text-gold font-semibold mb-1">📚 Batch of {person.batch}</p>
                <p className="text-gray-700 mb-2">💼 {person.profession}</p>
                <p className="text-gray-600 text-sm">📍 {person.location}</p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-lg">
              <p className="text-gray-600 text-lg">❌ No alumni found. Try a different search.</p>
            </div>
          )}

          <div className="mt-12 p-8 bg-white rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">Join the Alumni Directory</h2>
            <p className="text-gray-600 mb-6">Register yourself to be part of our alumni network and connect with classmates.</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-navy text-white font-bold rounded hover:bg-opacity-90 transition">
              Register Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
