'use client'

import Image from 'next/image'
import { overviewImage } from '../lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'


/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopLeftRadius: '18px' },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

const infoItems = [
  { label: 'Status',             value: 'New Launch', bgColor: '#FDF8F6' },
  { label: 'Land Parcel',        value: '40+ Acres', bgColor: '#FFFDF2' },
  { label: 'Configuration',      value: '1, 2, 3 & 4 BHK', bgColor: '#F4FAF4' },
  { label: 'Floors',             value: '53 Floors', bgColor: '#F2FAFD' },
]

const Overview = ({ setIsOpen }) => {
  return (
    <section
      id="overview"
      style={{ background: '#fff', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}
    >
      <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
      
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        
        {/* ── Left Side: Text Content ── */}
        <div className="w-full lg:w-1/2">
          
          {/* ── Section Heading ── */}
          <div style={{ marginBottom: '40px', textAlign: 'left' }}>
            <h2 data-aos="flip-right" data-aos-delay="500" style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
              color: '#3A2A0E', letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '0 0 10px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'
            }}>
              Brigade New Launch In Kadugodi
            </h2>
            <h3 style={{
              fontFamily: F_JOST, fontWeight: '600', fontSize: '16px',
              color: '#C9A96E', letterSpacing: '0.05em',
              textTransform: 'capitalize', margin: 0,
            }}>
              At Whitefield , Kadugodi
            </h3>
          </div>
          
          {/* Paragraphs */}
          <p data-aos="flip-down" data-aos-delay="500" style={{
            fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
            lineHeight: 1.9,
            marginTop: 0, marginBottom: '24px',
            textAlign: 'justify',
          }}>
            Brigade New Launch In Kadugodi is a premium residential community located on the Whitefield Hoskote Road at Sannatammanahalli in East Bangalore. The project enjoys a strategic location with excellent connectivity to Whitefield, one of Bangalore’s leading IT and business hubs. Residents benefit from easy access to major roads, metro connectivity, educational institutions, healthcare facilities, shopping malls, and entertainment destinations, making everyday living convenient and hassle-free.
          </p>

          {/* Info Box */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="0"
            style={{
              position: 'relative',
              border: '1px solid #D5C2A8',
              overflow: 'hidden',
            }}
          >
            <CurvedCorners />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-[1px]" style={{ background: '#D5C2A8' }}>
            {infoItems.map((item, i) => (
              <div key={i} className="flex flex-col justify-center" style={{
                background: item.bgColor || '#fff',
                padding: '20px 16px',
                textAlign: 'left',
              }}>
                <div data-aos="fade" data-aos-delay={600 + i * 150} data-aos-duration="800" data-aos-once="true">
                  <p style={{
                    fontFamily: F_JOST, fontSize: '10px', fontWeight: '500',
                    color: '#b5a99a', letterSpacing: '0.18em',
                    textTransform: 'uppercase', margin: '0 0 8px',
                  }}>
                    {item.label}:
                  </p>
                  <p className="whitespace-normal" style={{
                    fontFamily: F_JOST, fontSize: '12px', fontWeight: '700',
                    color: '#3A2A0E', letterSpacing: '0.05em',
                    textTransform: 'uppercase', margin: 0,
                  }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>

        </div>

        {/* ── Right Side: Image ── */}
        <div className="hidden lg:block lg:w-1/2" data-aos="fade-left">
          <div className="relative w-full flex justify-center items-center">
            <Image 
              src={overviewImage} 
              alt="Brigade New Launch In Kadugodi Overview" 
              width={1000}
              height={1200}
              className="rounded-lg shadow-lg"
              style={{ width: '75%', height: 'auto', objectFit: 'contain', margin: '0 auto' }}
            />
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Overview
