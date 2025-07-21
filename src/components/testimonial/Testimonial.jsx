// src/components/testimonial/Testimonial.jsx

import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import lokeshImage from '../../Video/lok.jpg'
import { FaStar } from 'react-icons/fa'
import './Testimonial.css'

const testimonials = [
  {
    id: 1,
    name: 'Lokesh Wagh',
    role: 'Senior Product Designer',
    image: lokeshImage,
    review:
      'The product listings are informative, showcasing the diversity of available cattle. Streamlined checkout and responsive design enhance user experience. Consider integrating customer testimonials to build trust and credibility.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rajeshwari',
    role: 'UI Developer',
    image: 'https://cdn-icons-png.flaticon.com/128/2763/2763444.png',
    review:
      'Impressive cattle-selling website, seamlessly crafted with React. Intuitive UI, responsive design, and efficient data handling. Clean codebase ensures optimal performance. Suggest incorporating dynamic features for enhanced user engagement and real-time updates.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rajesh Bhau',
    role: 'Farmer',
    image:
      'https://media.istockphoto.com/id/1453962739/photo/the-middle-aged-indian-farmer-is-smiling-while-showing-his-monthly-income-indian-model.jpg?s=612x612&w=0&k=20&c=YdevYcNxwoQB1efBaOzATJywHHarzzpXAQ7Sd_fTniY=',
    review:
      'Exceptional React-powered cattle website delivering prime livestock and stellar service. Intuitive UI, responsive design, and efficient code. Elevate user trust with dynamic features. A top-tier platform for premium cattle and excellence in service.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Veterinarian',
    image: 'https://cdn-icons-png.flaticon.com/128/2922/2922506.png',
    review:
      'Outstanding platform for cattle trading! The health documentation and breed information are comprehensive. As a veterinarian, I appreciate the detailed health records and transparent breeding history provided for each animal.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Amit Patil',
    role: 'Dairy Farm Owner',
    image: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    review:
      "Best cattle marketplace I've used! Quick transactions, reliable sellers, and excellent customer support. The platform has helped me expand my dairy farm with quality cattle. Highly recommended for serious farmers.",
    rating: 4,
  },
  {
    id: 6,
    name: 'Sunita Devi',
    role: 'Rural Entrepreneur',
    image: 'https://cdn-icons-png.flaticon.com/128/2922/2922561.png',
    review:
      'User-friendly interface makes buying and selling cattle so easy! The mobile-responsive design works perfectly on my phone. Great communication tools and secure payment options. This platform has transformed my business.',
    rating: 5,
  },
]

function Testimonial() {
  const context = useContext(myContext)

  const renderStars = (rating) =>
    [...Array(5)].map((_, idx) => (
      <FaStar
        key={idx}
        className={`w-4 h-4 ${
          idx < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
      />
    ))

  return (
    <section className="mainDiv relative text-white bg-black min-h-screen py-16">
      <div className="container mx-auto px-5 py-10">
        <h1 className="headingTestimonial text-center text-4xl font-bold mb-4">
          Testimonials
        </h1>
        <h2 className="text-center text-2xl font-semibold mb-10">
          What our <span className="text-pink-500">customers</span> are saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="p-6 animate-fadeIn"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="h-full text-center bg-gradient-to-b from-gray-800 to-black rounded-xl shadow-2xl p-6 hover:shadow-[0_0_15px_rgba(255,165,0,0.5)]">
                <img
                  src={t.image}
                  alt={`${t.name} testimonial`}
                  className="w-20 h-20 mb-6 object-cover rounded-full border-4 border-pink-500 shadow-lg transition-transform duration-300 hover:scale-110"
                />
                <div className="flex justify-center mb-4">{renderStars(t.rating)}</div>
                <p className="leading-relaxed text-gray-300 mb-6 text-sm lg:text-base">
                  {t.review}
                </p>
                <span className="inline-block h-1 w-10 rounded bg-gradient-to-r from-pink-600 to-orange-500 mb-4" />
                <h2 className="font-medium title-font tracking-wider text-sm uppercase text-pink-400 mb-1">
                  {t.name}
                </h2>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
