import React, { useState, useEffect, useRef } from 'react';

// ─── Formspree ID ────────────────────────────────────────────────
const FORMSPREE_ID = 'mkolkgoq';

// ─── Data ─────────────────────────────────────────────────────────
const BANNERS = [
  { img: '/rvs-builders/banner1.png', alt: 'Living Room Interior Design', label: 'Living Room' },
  { img: '/rvs-builders/banner2.png', alt: 'Modular Kitchen Interior Design', label: 'Modular Kitchen' },
  { img: '/rvs-builders/banner3.png', alt: 'Bedroom Wardrobe Interior Design', label: 'Bedroom Wardrobe' },
];

const STATS = [
  { icon: '😊', value: '500+', label: 'Happy Customers' },
  { icon: '🚀', value: '30 Days*', label: 'Delivery & Installation' },
  { icon: '🛡️', value: '5 Years', label: 'Warranty*' },
  { icon: '🎨', value: '10+', label: 'Design Experts' },
  { icon: '🏙️', value: 'Pan Chennai', label: 'Service Coverage' },
  { icon: '📐', value: 'Customize', label: 'Designs for Your Space' },
];

const SERVICES = [
  { title: 'Modular Kitchen', img: '/rvs-builders/projects/a4d1550e351fd3de3a19ab05a58f1b17.jpg' },
  { title: 'Modular Wardrobe', img: '/rvs-builders/projects/baad21b764983983d526d962ba2039e9.jpg' },
  { title: 'False Ceiling', img: '/rvs-builders/projects/98545f49d0d134aa30e79e5be19d9d71.jpg' },
  { title: 'Commercial Office', img: '/rvs-builders/projects/6835d700137a559c3c7681405f09e06f.jpg' },
  { title: 'Pooja Unit', img: '/rvs-builders/projects/b9a4748fa08cefe0ab059a504d33f13d.jpg' },
  { title: 'TV Unit & Living', img: '/rvs-builders/projects/9553211551fadf8045ccc624a049cb0f.jpg' },
];

const HOW_IT_WORKS = [
  { step: '01', icon: '📞', title: 'Book Free Consultation', desc: 'Share your requirements and get a free site visit from our design expert anywhere in Chennai.' },
  { step: '02', icon: '🎨', title: 'Design & Finalize', desc: 'Our expert creates a customized 3D design. Review, suggest changes, and finalize your dream space.' },
  { step: '03', icon: '🔨', title: 'Manufacturing & Execution', desc: 'Work begins with quality materials and skilled craftsmen under personal supervision of our proprietor R Stephen.' },
  { step: '04', icon: '✅', title: 'Delivery & Handover', desc: 'Work completed on time, site cleaned up, and handed over to you with a warranty certificate.' },
];

const PROJECTS = [
  { title: 'Bedroom Wardrobe with LED Ceiling', cat: 'Carpentry', img: '/rvs-builders/projects/98545f49d0d134aa30e79e5be19d9d71.jpg' },
  { title: 'Two-Tone Designer Wardrobe', cat: 'Carpentry', img: '/rvs-builders/projects/baad21b764983983d526d962ba2039e9.jpg' },
  { title: 'Modular Parallel Kitchen', cat: 'Kitchen', img: '/rvs-builders/projects/a4d1550e351fd3de3a19ab05a58f1b17.jpg' },
  { title: 'Corporate Office Fitout', cat: 'Commercial', img: '/rvs-builders/projects/4c2a9421550ffb56b92c1d347dc6e6b1.jpg' },
  { title: 'Grey Gloss Sliding Wardrobe', cat: 'Carpentry', img: '/rvs-builders/projects/9553211551fadf8045ccc624a049cb0f.jpg' },
  { title: 'Open Office Workstations', cat: 'Commercial', img: '/rvs-builders/projects/6835d700137a559c3c7681405f09e06f.jpg' },
  { title: 'Beige & Wood Bedroom Wardrobe', cat: 'Carpentry', img: '/rvs-builders/projects/b9a4748fa08cefe0ab059a504d33f13d.jpg' },
  { title: 'L-Shaped Wooden Kitchen', cat: 'Kitchen', img: '/rvs-builders/projects/d6891d4ffab93b85c8c1c7a7465dba7d.jpg' },
];

const TESTIMONIALS = [
  { name: 'Ramesh Kumar', loc: 'Adyar, Chennai', rating: 5, text: 'RVS Builders renovated our living room and kitchen. The carpentry work is top-notch and the design is extremely modern. R Stephen\'s personal supervision ensured everything was completed strictly on time.', initials: 'RK' },
  { name: 'Priya Sundar', loc: 'Anna Nagar, Chennai', rating: 5, text: 'We hired them for full building painting and electrical work. They finished on time and the materials used were of high quality. They clean up the space post-work too. Highly recommended!', initials: 'PS' },
  { name: 'Karthik Raja', loc: 'Velachery, Chennai', rating: 5, text: 'Fantastic civil renovation work. They handled both materials and labour under R Stephen\'s direct authority, making it completely hassle-free. The price was very reasonable too.', initials: 'KR' },
];

const FAQS = [
  { q: 'Do you provide both material and labour?', a: 'Yes, we provide end-to-end solutions. We procure premium materials and employ certified craftsmen to execute the project — no coordination stress for you.' },
  { q: 'Is there a charge for site visits and quotes?', a: 'No. RVS Builders offers completely free site visits across Chennai. Our team will measure, understand your needs, and provide a transparent itemized quotation at zero cost.' },
  { q: 'How long does a typical interior project take?', a: 'A standard modular kitchen or wardrobe takes 15–30 days. Full home interiors typically take 45–60 days depending on the scope. We commit to timelines and honour them.' },
  { q: 'What areas in Chennai do you service?', a: 'We actively serve all areas in Chennai including Anna Nagar, Adyar, Velachery, T. Nagar, Tambaram, Porur, Maduravoyal, Koyambedu, Arumbakkam, and all surrounding suburbs.' },
];

const PROJECT_CATS = ['All', 'Carpentry', 'Kitchen', 'Commercial'];

// ─── Component ────────────────────────────────────────────────────
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '', pincode: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error
  const [activeCat, setActiveCat] = useState('All');
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [enquiries, setEnquiries] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const sliderRef = useRef(null);

  // Auto-slide
  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(s => (s + 1) % BANNERS.length), 4500);
    return () => clearInterval(t);
  }, []);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Load enquiries
  useEffect(() => {
    setEnquiries(JSON.parse(localStorage.getItem('rvs_enquiries') || '[]'));
  }, []);

  const filteredProjects = activeCat === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === activeCat);

  const handleForm = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormStatus('submitting');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Hero Form', time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) }),
      });
      if (res.ok) {
        const entry = { id: Date.now(), date: new Date().toLocaleString(), ...formData, serviceType: 'General Enquiry', message: `Pincode: ${formData.pincode}` };
        const updated = [entry, ...enquiries];
        localStorage.setItem('rvs_enquiries', JSON.stringify(updated));
        setEnquiries(updated);
        setFormData({ name: '', phone: '', pincode: '' });
        setFormStatus('success');
        setTimeout(() => setFormStatus('idle'), 4000);
      } else { setFormStatus('error'); setTimeout(() => setFormStatus('idle'), 3000); }
    } catch { setFormStatus('error'); setTimeout(() => setFormStatus('idle'), 3000); }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: '#fff', color: '#333' }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* ── TOP BAR ── */}
      <div style={{ background: '#f9f8f2', borderBottom: '1px solid #e8e2d9', padding: '8px 0', display: 'none' }} className="topbar-desktop">
      </div>

      {/* ── HEADER ── */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fff', boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.06)', transition: 'box-shadow 0.3s' }}>
        {/* Top utility bar */}
        <div style={{ background: '#f7f4ef', borderBottom: '1px solid #ede8de', padding: '6px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#666' }}>
          <span>✨ Chennai's #1 Trusted Interior & Construction Partner</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="tel:+919710453183" style={{ color: '#8B5E3C', textDecoration: 'none', fontWeight: 600 }}>📞 +91-9710453183</a>
            <a href="mailto:rvsinterior28@gmail.com" style={{ color: '#666', textDecoration: 'none' }}>✉ rvsinterior28@gmail.com</a>
          </div>
        </div>
        {/* Main nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 32px', maxWidth: '1300px', margin: '0 auto' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setMenuOpen(false)}>
            <div style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg,#8B5E3C,#C8956C)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '18px' }}>R</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '17px', color: '#2c1810', letterSpacing: '0.5px' }}>RVS Builders</div>
              <div style={{ fontSize: '10px', color: '#8B5E3C', letterSpacing: '1.5px', fontWeight: 500 }}>INTERIORS & CONSTRUCTION</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            {['Home Interior', 'Modular Kitchen', 'Wardrobes', 'How It Works', 'Projects'].map(n => (
              <a key={n} href={`#${n.toLowerCase().replace(/ /g, '-')}`}
                style={{ textDecoration: 'none', color: '#444', fontWeight: 500, fontSize: '14px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#8B5E3C'}
                onMouseLeave={e => e.target.style.color = '#444'}>{n}</a>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a href="#contact-form"
              style={{ background: '#8B5E3C', color: '#fff', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', transition: 'background 0.2s' }}
              onMouseEnter={e => e.target.style.background = '#6b4428'}
              onMouseLeave={e => e.target.style.background = '#8B5E3C'}>Get Free Estimate</a>
            <button onClick={() => setAdminOpen(true)}
              style={{ background: 'none', border: '1px solid #ddd', padding: '9px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', color: '#888' }}>⚙</button>
          </div>
        </div>
      </header>

      {/* ── HERO SLIDER + FORM ── */}
      <section id="home-interior" style={{ position: 'relative', overflow: 'hidden', height: 'min(620px, 90vw)', minHeight: '400px' }}>
        {/* Slides */}
        {BANNERS.map((b, i) => (
          <div key={i} style={{ position: 'absolute', inset: 0, transition: 'opacity 0.8s ease', opacity: i === currentSlide ? 1 : 0, zIndex: i === currentSlide ? 1 : 0 }}>
            <img src={b.img} alt={b.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.15) 60%,transparent 100%)' }} />
          </div>
        ))}

        {/* Slide indicators */}
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
          {BANNERS.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              style={{ width: i === currentSlide ? '28px' : '8px', height: '8px', borderRadius: '4px', background: i === currentSlide ? '#C8956C' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }} />
          ))}
        </div>

        {/* Lead Form */}
        <div id="contact-form" style={{ position: 'absolute', top: '50%', left: 'clamp(16px, 5vw, 80px)', transform: 'translateY(-50%)', zIndex: 10, background: '#fff', borderRadius: '16px', padding: '28px 24px', width: 'min(340px, 90vw)', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}>
          <h2 style={{ margin: '0 0 4px', fontSize: 'clamp(16px, 2.5vw, 22px)', fontWeight: 700, color: '#2c1810' }}>Design your</h2>
          <h2 style={{ margin: '0 0 6px', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: '#8B5E3C' }}>Beautiful Dream Space</h2>
          <p style={{ fontSize: '13px', color: '#666', margin: '0 0 12px' }}>Work 1:1 with expert interior designers in Chennai</p>
          <div style={{ width: '48px', height: '3px', background: '#C8956C', borderRadius: '2px', margin: '0 0 18px' }} />

          {formStatus === 'success' ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>✅</div>
              <p style={{ color: '#16a34a', fontWeight: 600, fontSize: '15px' }}>Thank you! We'll call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleForm} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} placeholder="Full Name *" required
                style={{ padding: '11px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }} />
              <input value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} placeholder="Phone Number *" required type="tel" maxLength={10}
                style={{ padding: '11px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }} />
              <input value={formData.pincode} onChange={e => setFormData(p => ({ ...p, pincode: e.target.value }))} placeholder="Pin Code"
                style={{ padding: '11px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }} />
              <button type="submit" disabled={formStatus === 'submitting'}
                style={{ background: formStatus === 'submitting' ? '#aaa' : '#8B5E3C', color: '#fff', border: 'none', padding: '13px', borderRadius: '8px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', letterSpacing: '0.5px', transition: 'background 0.2s', fontFamily: 'inherit' }}>
                {formStatus === 'submitting' ? 'Sending...' : 'Book a FREE Consultation'}
              </button>
              <p style={{ fontSize: '10px', color: '#aaa', textAlign: 'center', margin: 0 }}>By submitting, I agree to be contacted by RVS Builders.</p>
            </form>
          )}
        </div>

        {/* Hero badge */}
        <div style={{ position: 'absolute', bottom: '50px', right: '40px', zIndex: 10, color: '#fff', textAlign: 'right' }}>
          <p style={{ fontSize: '12px', letterSpacing: '2px', opacity: 0.8, textTransform: 'uppercase', margin: 0 }}>Chennai's #1</p>
          <p style={{ fontSize: '22px', fontWeight: 700, margin: 0 }}>Interior Design Service</p>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="how-it-works" style={{ background: '#f9f8f2', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#2c1810', margin: '0 0 8px' }}>Why Choose RVS Builders?</h2>
            <p style={{ color: '#888', fontSize: '15px', margin: 0 }}>For Your Interior Design & Construction Needs in Chennai</p>
            <div style={{ width: '60px', height: '3px', background: '#C8956C', borderRadius: '2px', margin: '16px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
            {/* Stats */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#2c1810', marginBottom: '8px' }}>Chennai's Trusted Brand for Home Interior Design</h3>
              <p style={{ color: '#888', fontSize: '14px', marginBottom: '24px' }}>Creating home interiors that reflect your lifestyle.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {STATS.map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '28px' }}>{s.icon}</span>
                    <div>
                      <strong style={{ display: 'block', fontSize: '16px', fontWeight: 700, color: '#2c1810' }}>{s.value}</strong>
                      <span style={{ fontSize: '12px', color: '#888' }}>{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#contact-form" style={{ display: 'inline-block', marginTop: '28px', background: '#8B5E3C', color: '#fff', padding: '12px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>How We Work →</a>
            </div>

            {/* Image */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '340px', height: '340px', borderRadius: '50%', background: '#ede8de', zIndex: 0 }} />
              <img src="/rvs-builders/projects/98545f49d0d134aa30e79e5be19d9d71.jpg" alt="Interior Design"
                style={{ width: '100%', maxWidth: '440px', borderRadius: '24px', objectFit: 'cover', aspectRatio: '4/3', position: 'relative', zIndex: 1, boxShadow: '0 16px 48px rgba(0,0,0,0.15)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE CATEGORIES ── */}
      <section style={{ padding: '60px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 700, color: '#2c1810', margin: '0 0 8px' }}>Your One-Stop Destination For Home Interiors</h2>
            <p style={{ color: '#888', fontSize: '14px' }}>From expert design to flawless installation — everything under one roof</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {SERVICES.map((s, i) => (
              <a key={i} href="#projects"
                style={{ position: 'relative', display: 'block', width: 'clamp(140px, 30%, 280px)', flexGrow: 1, maxWidth: '320px', borderRadius: '14px', overflow: 'hidden', cursor: 'pointer', textDecoration: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', transition: 'transform 0.25s, box-shadow 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.18)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)'; }}>
                <img src={s.img} alt={s.title} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '12px', left: '14px', color: '#fff' }}>
                  <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600 }}>{s.title}</h3>
                </div>
                <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: '#8B5E3C' }}>↗</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works-steps" style={{ background: 'linear-gradient(135deg, #2c1810 0%, #4a2c1a 100%)', padding: '64px 24px', color: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>How It Works</h2>
            <p style={{ color: '#C8956C', fontSize: '15px', margin: 0 }}>Simple, transparent, and hassle-free process</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {HOW_IT_WORKS.map((h, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '28px 20px', background: 'rgba(255,255,255,0.07)', borderRadius: '16px', border: '1px solid rgba(200,149,108,0.25)', backdropFilter: 'blur(8px)' }}>
                <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#C8956C', fontWeight: 600, marginBottom: '8px' }}>STEP {h.step}</div>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{h.icon}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 10px', color: '#fff' }}>{h.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0 }}>{h.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="#contact-form" style={{ display: 'inline-block', background: '#C8956C', color: '#fff', padding: '14px 36px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '15px', letterSpacing: '0.5px' }}>Book Free Consultation Today</a>
          </div>
        </div>
      </section>

      {/* ── PROJECTS GALLERY ── */}
      <section id="projects" style={{ padding: '64px 24px', background: '#f9f8f2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#2c1810', margin: '0 0 8px' }}>Our Completed Projects</h2>
            <p style={{ color: '#888', fontSize: '14px' }}>Real work, real results — from Chennai homes and offices</p>
            <div style={{ width: '60px', height: '3px', background: '#C8956C', borderRadius: '2px', margin: '16px auto 24px' }} />
            {/* Filter */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {PROJECT_CATS.map(c => (
                <button key={c} onClick={() => setActiveCat(c)}
                  style={{ padding: '8px 20px', borderRadius: '30px', border: activeCat === c ? '2px solid #8B5E3C' : '2px solid #ddd', background: activeCat === c ? '#8B5E3C' : '#fff', color: activeCat === c ? '#fff' : '#555', fontWeight: 600, fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit' }}>{c}</button>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {filteredProjects.map((p, i) => (
              <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', background: '#fff', transition: 'transform 0.25s, box-shadow 0.25s', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.18)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)'; }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '210px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '14px 16px' }}>
                  <span style={{ fontSize: '11px', color: '#8B5E3C', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{p.cat}</span>
                  <h3 style={{ margin: '4px 0 0', fontSize: '14px', fontWeight: 600, color: '#2c1810' }}>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: '#2c1810', margin: '0 0 8px' }}>What Our Customers Say</h2>
            <p style={{ color: '#888', fontSize: '14px' }}>500+ happy families across Chennai</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: '#f9f8f2', borderRadius: '16px', padding: '28px 24px', border: '1px solid #ede8de', position: 'relative' }}>
                <div style={{ fontSize: '32px', color: '#C8956C', lineHeight: 1, marginBottom: '12px' }}>"</div>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#555', margin: '0 0 20px' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg,#8B5E3C,#C8956C)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '15px' }}>{t.initials}</div>
                  <div>
                    <strong style={{ fontSize: '14px', color: '#2c1810', display: 'block' }}>{t.name}</strong>
                    <span style={{ fontSize: '12px', color: '#888' }}>{t.loc}</span>
                  </div>
                  <div style={{ marginLeft: 'auto', color: '#f59e0b', fontSize: '16px' }}>{'★'.repeat(t.rating)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '64px 24px', background: '#f9f8f2' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: '#2c1810', margin: '0 0 8px' }}>Frequently Asked Questions</h2>
            <p style={{ color: '#888', fontSize: '14px' }}>Everything you need to know before starting your project</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((f, i) => (
              <div key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ background: '#fff', borderRadius: '12px', border: '1px solid #ede8de', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#2c1810' }}>{f.q}</h3>
                  <span style={{ color: '#8B5E3C', fontSize: '20px', transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none', flexShrink: 0, marginLeft: '12px' }}>+</span>
                </div>
                {openFaq === i && (
                  <div style={{ padding: '0 20px 18px', fontSize: '14px', color: '#666', lineHeight: 1.7, borderTop: '1px solid #f0ebe3' }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: 'linear-gradient(135deg,#8B5E3C,#C8956C)', padding: '64px 24px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, margin: '0 0 16px' }}>Ready to Transform Your Space?</h2>
        <p style={{ fontSize: '16px', opacity: 0.9, margin: '0 0 32px' }}>Get a free site visit and customized quote from our expert team in Chennai.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+919710453183" style={{ background: '#fff', color: '#8B5E3C', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '15px' }}>📞 Call: +91-9710453183</a>
          <a href="https://wa.me/919710453183" target="_blank" rel="noreferrer" style={{ background: '#25D366', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '15px' }}>💬 WhatsApp Us</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#1a0f0a', color: 'rgba(255,255,255,0.75)', padding: '48px 24px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg,#8B5E3C,#C8956C)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '16px' }}>R</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#fff' }}>RVS Builders</div>
                  <div style={{ fontSize: '10px', color: '#C8956C', letterSpacing: '1.5px' }}>INTERIORS & CONSTRUCTION</div>
                </div>
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.7, margin: '0 0 16px' }}>Chennai's trusted interior design and construction partner. Transforming homes and offices with premium craftsmanship since 2010.</p>
              <p style={{ fontSize: '13px', color: '#C8956C', margin: 0, fontWeight: 600 }}>Proprietor: R Stephen</p>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '14px', margin: '0 0 16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Our Services</h4>
              {['Modular Kitchen', 'Modular Wardrobe', 'False Ceiling', 'Home Painting', 'Electrical Work', 'Civil Alterations', 'Commercial Interior', 'Full Home Interior'].map(s => (
                <div key={s} style={{ fontSize: '13px', marginBottom: '8px', opacity: 0.75 }}>• {s}</div>
              ))}
            </div>

            {/* Areas */}
            <div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '14px', margin: '0 0 16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Service Areas</h4>
              {['Anna Nagar', 'Adyar', 'Velachery', 'T. Nagar', 'Tambaram', 'Porur', 'Maduravoyal', 'Koyambedu', 'Arumbakkam', 'All Chennai'].map(a => (
                <div key={a} style={{ fontSize: '13px', marginBottom: '8px', opacity: 0.75 }}>• {a}</div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '14px', margin: '0 0 16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Contact Us</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                <span>📍 Arumbakkam, Chennai – 600106</span>
                <a href="tel:+919710453183" style={{ color: '#C8956C', textDecoration: 'none', fontWeight: 600 }}>📞 +91-9710453183</a>
                <a href="mailto:rvsinterior28@gmail.com" style={{ color: '#C8956C', textDecoration: 'none' }}>✉ rvsinterior28@gmail.com</a>
                <span>🕐 Mon–Sat: 9:00 AM – 7:00 PM</span>
              </div>
              <div style={{ marginTop: '20px' }}>
                <button onClick={() => setAdminOpen(true)} style={{ background: 'none', border: '1px solid rgba(200,149,108,0.4)', color: '#C8956C', padding: '7px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '11px', fontFamily: 'inherit' }}>
                  ⚙ Admin Portal
                </button>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '12px' }}>
            <span>© 2026 RVS Builders. All rights reserved.</span>
            <a href="https://github.com/rameshackk/rvs-builders" target="_blank" rel="noreferrer" style={{ color: '#C8956C', textDecoration: 'none' }}>View on GitHub ↗</a>
          </div>
        </div>
      </footer>

      {/* ── ADMIN MODAL ── */}
      {adminOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#fff', borderRadius: '16px', width: '100%', maxWidth: '700px', maxHeight: '85vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 24px 64px rgba(0,0,0,0.3)' }}>
            {/* Admin header */}
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #f0ebe3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f9f8f2' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 700, color: '#2c1810' }}>Enquiries Admin Portal</h3>
                <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#888' }}>Total: {enquiries.length} submissions</p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a href="https://formspree.io/forms" target="_blank" rel="noreferrer"
                  style={{ background: '#8B5E3C', color: '#fff', padding: '7px 14px', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: 600 }}>Formspree Dashboard ↗</a>
                <button onClick={() => setAdminOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#888', padding: '4px 8px' }}>✕</button>
              </div>
            </div>
            {/* Admin body */}
            <div style={{ overflowY: 'auto', padding: '20px 24px', flex: 1 }}>
              {enquiries.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 0', color: '#aaa' }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>📭</div>
                  <p style={{ fontWeight: 600 }}>No enquiries yet</p>
                  <p style={{ fontSize: '13px' }}>Submit the form on the website to see enquiries here.</p>
                </div>
              ) : enquiries.map((e, i) => (
                <div key={i} style={{ padding: '16px', borderRadius: '10px', border: '1px solid #f0ebe3', marginBottom: '12px', background: '#fdf9f6' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <strong style={{ fontSize: '15px', color: '#2c1810' }}>{e.name}</strong>
                    <span style={{ fontSize: '11px', color: '#aaa' }}>{e.date}</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#666', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <span>📞 {e.phone}</span>
                    {e.pincode && <span>📍 {e.pincode}</span>}
                    {e.email && e.email !== 'Not Provided' && <span>✉ {e.email}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── FLOATING WHATSAPP ── */}
      <a href="https://wa.me/919710453183" target="_blank" rel="noreferrer"
        style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999, background: '#25D366', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.5)', textDecoration: 'none', fontSize: '26px', animation: 'pulse 2s infinite' }}>
        💬
      </a>

      <style>{`
        @keyframes pulse { 0%,100%{transform:scale(1);} 50%{transform:scale(1.08);} }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #C8956C; border-radius: 3px; }
      `}</style>
    </div>
  );
}
