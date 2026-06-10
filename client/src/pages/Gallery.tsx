import Layout from '@/components/Layout';

const IMAGES = [
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/facility-outdoor-N8diFedVJKrUHMRnotXiwu.webp', label: 'Outdoor Grounds', cat: 'Facility' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-daycare-oRvLUTzHLranWdu3EMfFbK.webp', label: 'Daycare Playtime', cat: 'Dogs' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-boarding-DxQg9FC9s2PsjYzb2MugG6.webp', label: 'Boarding Rooms', cat: 'Facility' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-grooming-9mRvDxCzZ6s8YuZE9XACZK.webp', label: 'Grooming Session', cat: 'Services' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-nutrition-TebHTCNJZTvvMhGF4cP5ZS.webp', label: 'Meal Time', cat: 'Services' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/hero-dogs-RoJWRPAYDCEMGXCqHtPXG9.webp', label: 'Happy Dogs', cat: 'Dogs' },
];

export default function Gallery() {
  return (
    <Layout>
      <section className="section" style={{ background: '#1a1f3c' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a' }}>Life at Paw Paradise</div>
          <h1 className="display-xl text-white animate-fade-up delay-100 mb-6">Gallery</h1>
          <p className="body-lg animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.65)' }}>
            A look inside our facility, our dogs, and the joy we create every day.
          </p>
        </div>
      </section>

      <section className="section max-w-7xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 stagger">
          {IMAGES.map((img, i) => (
            <div key={i} className="reveal break-inside-avoid img-zoom rounded-2xl overflow-hidden relative group shadow-lg">
              <img
                src={img.src}
                alt={img.label}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(26,31,60,0.7) 0%, transparent 50%)' }}>
                <div>
                  <p className="text-white font-600 text-sm" style={{ fontWeight: 600 }}>{img.label}</p>
                  <span className="chip text-xs" style={{ background: 'rgba(88,189,122,0.2)', color: '#58bd7a' }}>{img.cat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
