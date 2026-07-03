import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Hammer, 
  Paintbrush, 
  Layers, 
  Wrench, 
  Zap, 
  Briefcase, 
  Users, 
  Award, 
  Coins, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Star, 
  Check, 
  ArrowRight,
  ArrowUp,
  MessageSquare,
  Building,
  CheckCircle2,
  ChevronDown,
  Info,
  Database,
  Trash2,
  Lock,
  ExternalLink
} from 'lucide-react';

// Service data definition
const SERVICES = [
  {
    id: 1,
    title: "Interior Design & Decoration",
    description: "Transform your living or working space with our custom interior design solutions. From space planning to styling, we create elegant and functional environments.",
    icon: Palette,
    formValue: "Interior Design",
    features: ["Space Planning & Layout", "Modular Kitchen Design", "False Ceiling & Lighting", "Custom Wardrobes"]
  },
  {
    id: 2,
    title: "Full Carpentry Works",
    description: "Premium woodwork and carpentry solutions customized to your needs. We build durable, functional, and stylish furniture for homes and offices.",
    icon: Hammer,
    formValue: "Carpentry Works",
    features: ["Modular Wardrobes", "TV Units & Showcases", "Wooden Doors & Frames", "Custom Furniture Design"]
  },
  {
    id: 3,
    title: "Painting Works (Full Building)",
    description: "High-quality exterior and interior painting services. We use premium paints to ensure long-lasting protection and a flawless finish for your walls.",
    icon: Paintbrush,
    formValue: "Painting Works",
    features: ["Interior Wall Painting", "Exterior Weatherproof Paint", "Texture & Royal Finishes", "Wood Polish & Varnish"]
  },
  {
    id: 4,
    title: "Civil Alteration Works",
    description: "Professional masonry, brickwork, and structural alterations. Whether you want to wall off a space or open up a room, we do it safely.",
    icon: Layers,
    formValue: "Civil Alteration",
    features: ["Wall Demolition & Partition", "Tiling & Granite Fitting", "Balcony & Utility Expansion", "Concrete Structures"]
  },
  {
    id: 5,
    title: "Plumbing Works",
    description: "Comprehensive plumbing installations and repairs. From bathroom sanitary fittings to leak detection and pipe replacement.",
    icon: Wrench,
    formValue: "Plumbing Works",
    features: ["Sanitary & Tap Fittings", "Water Line Pipelines", "Leakage Rectification", "Drainage Systems Setup"]
  },
  {
    id: 6,
    title: "Electrical Works",
    description: "Safe and reliable electrical installations and wiring. We handle load calculations, phase conversions, and new wiring setups for properties.",
    icon: Zap,
    formValue: "Electrical Works",
    features: ["House Wiring & Re-wiring", "DB & Switchboard Fitting", "Inverter & UPS Setup", "AC & Appliance Wiring"]
  },
  {
    id: 7,
    title: "Full Building Renovation",
    description: "Complete makeovers for old buildings. We restore structures, upgrade interior elements, and refresh facades to make them look brand new.",
    icon: Briefcase,
    formValue: "Full Renovation",
    features: ["Structural Strengthening", "Flooring Upgrade", "Modernizing Utility Rooms", "Facade Elevation Works"]
  },
  {
    id: 8,
    title: "Material & Labour Solutions",
    description: "Hassle-free execution where we provide both premium quality construction materials and expert skilled labour, ensuring smooth operations.",
    icon: ShieldCheck,
    formValue: "Materials & Labour",
    features: ["Premium Raw Materials", "Highly Experienced Workforce", "Supervised Quality Checks", "Timely Schedule Adherence"]
  }
];

// Portfolio Projects data
const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Premium Acrylic Modular Kitchen",
    category: "interiors",
    description: "High-gloss seamless finish kitchen with smart storage pull-outs, chimney setup, and double sink quartz slab.",
    location: "Anna Nagar, Chennai",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Custom Veneer Wardrobe & Bed Setup",
    category: "carpentry",
    description: "Solid plywood sliding wardrobe set with matching master bed design in natural oak veneer polish.",
    location: "Adyar, Chennai",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Gypsum Ceiling & Cove Light Design",
    category: "interiors",
    description: "Premium false ceiling installation with indirect LED lighting strips and custom wood paneling ceiling grids.",
    location: "Nungambakkam, Chennai",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Exterior Painting & Weatherproofing Coating",
    category: "painting",
    description: "Anti-fungal and crack-bridging silicon paint protection applied to a newly renovated commercial facade.",
    location: "Velachery, Chennai",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Civil Wall Removal & Open Arch Creation",
    category: "civil",
    description: "Demolished a load-bearing wall partition, reinforced ceiling support, and built a custom granite breakfast table counter.",
    location: "Thiruvanmiyur, Chennai",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Electrical Phase Distribution Panels",
    category: "electrical",
    description: "Comprehensive 3-phase wiring, DB distribution boards configuration, and home automation cabling setups.",
    location: "Arumbakkam, Chennai",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
  }
];

// Testimonials data
const TESTIMONIALS = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Adyar, Chennai",
    rating: 5,
    text: "RVS Builders renovated our living room and kitchen. The carpentry work is top-notch and the design is extremely modern. R Stephen's personal supervision ensured everything was completed strictly on time.",
    initials: "RK"
  },
  {
    id: 2,
    name: "Priya Sundar",
    location: "Anna Nagar, Chennai",
    rating: 5,
    text: "We hired them for full building painting and electrical work. They finished on time and the materials used were of high quality. They clean up the space post-work too, which was very helpful! Highly recommended.",
    initials: "PS"
  },
  {
    id: 3,
    name: "Karthik Raja",
    location: "Velachery, Chennai",
    rating: 5,
    text: "Fantastic civil renovation work. They handled both materials and labour under R Stephen's direct authority, making it completely hassle-free for us. The price was also very reasonable compared to market quotes.",
    initials: "KR"
  }
];

// FAQs definition
const FAQS = [
  {
    question: "Do you provide both material and labour?",
    answer: "Yes, we specialize in providing end-to-end solutions. We procure premium-branded materials and employ certified, experienced artisans to execute the project, relieving you of any coordination stress."
  },
  {
    question: "Is there a charge for site visits and quotes?",
    answer: "No. RVS Builders offers free site visits across Chennai. Our team will measure the dimensions, understand your requirement, and provide a transparent itemized quotation at zero cost."
  },
  {
    question: "Who oversees the quality and schedule of the work?",
    answer: "All structural civil changes, electrical installations, and carpentry blueprints are executed under the direct authority and personal supervision of our proprietor, R Stephen, ensuring top-tier quality benchmarks."
  },
  {
    question: "What locations in Chennai do you service?",
    answer: "Our office is in Arumbakkam, and we actively serve all areas in Chennai, including Anna Nagar, Adyar, Velachery, T. Nagar, Tambaram, Porur, Maduravoyal, Koyambedu, and surrounding suburbs."
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // home | services | portfolio | about | contact
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activePortfolioFilter, setActivePortfolioFilter] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [localEnquiries, setLocalEnquiries] = useState([]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  });
  
  // Validation Errors state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Load enquiries from localStorage on mount & when dashboard toggles
  useEffect(() => {
    const loaded = JSON.parse(localStorage.getItem('rvs_enquiries') || '[]');
    setLocalEnquiries(loaded);
  }, [showAdminPanel]);

  // Scroll event and window scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form inputs change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Form validation logic
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Phone validation (Indian number format - 10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.trim().replace(/[-\s]/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    // Email validation (optional but validated if entered)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Service dropdown validation
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Export enquiries to Excel file (xlsx loaded dynamically to avoid startup crash)
  const exportToExcel = async () => {
    if (localEnquiries.length === 0) return;
    try {
      const XLSX = await import('xlsx');
      const rows = localEnquiries.map((item, index) => ({
        'S.No': index + 1,
        'Date & Time': item.date,
        'Customer Name': item.name,
        'Phone Number': item.phone,
        'Email': item.email,
        'Service Type': item.serviceType,
        'Message': item.message,
      }));
      const worksheet = XLSX.utils.json_to_sheet(rows);
      worksheet['!cols'] = [
        { wch: 6 }, { wch: 22 }, { wch: 22 }, { wch: 16 },
        { wch: 28 }, { wch: 22 }, { wch: 50 }
      ];
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'RVS Enquiries');
      const fileName = `RVS_Enquiries_${new Date().toLocaleDateString('en-IN').replace(/\//g, '-')}.xlsx`;
      XLSX.writeFile(workbook, fileName);
    } catch (err) {
      console.error('Excel export failed:', err);
      alert('Could not generate Excel file. Please try again.');
    }
  };

  // ── Formspree Form ID ─────────────────────────────────────────────────────
  // Sign up FREE at https://formspree.io → create a form → paste your ID below
  const FORMSPREE_ID = 'mkolkgoq'; // RVS Builders Enquiry Form

  // Form submit handler – sends data to Formspree (cross-device) + localStorage backup
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    const payload = {
      'Customer Name': formData.name,
      'Phone Number': formData.phone,
      'Email': formData.email || 'Not Provided',
      'Service Type': formData.serviceType,
      'Message': formData.message,
      'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };
    try {
      // Send to Formspree – accessible from any device via formspree.io dashboard
      if (FORMSPREE_ID !== 'YOUR_FORM_ID') {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error('Formspree submission failed');
      }
    } catch (err) {
      console.warn('Formspree error (saving locally as backup):', err);
    } finally {
      // Always save locally as backup too
      const currentData = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        name: formData.name,
        phone: formData.phone,
        email: formData.email || 'Not Provided',
        serviceType: formData.serviceType,
        message: formData.message,
      };
      const existing = JSON.parse(localStorage.getItem('rvs_enquiries') || '[]');
      const updated = [currentData, ...existing];
      localStorage.setItem('rvs_enquiries', JSON.stringify(updated));
      setLocalEnquiries(updated);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', serviceType: '', message: '' });
      setTimeout(() => { setIsSuccess(false); }, 5000);
    }
  };

  // Delete individual enquiry
  const deleteEnquiry = (id) => {
    const updated = localEnquiries.filter(item => item.id !== id);
    localStorage.setItem('rvs_enquiries', JSON.stringify(updated));
    setLocalEnquiries(updated);
  };

  // Clear all enquiries
  const clearAllEnquiries = () => {
    if (window.confirm("Are you sure you want to clear all submitted enquiries?")) {
      localStorage.removeItem('rvs_enquiries');
      setLocalEnquiries([]);
    }
  };

  // Navigate to contact and auto-select service
  const triggerServiceEnquiry = (serviceValue) => {
    setFormData(prev => ({
      ...prev,
      serviceType: serviceValue,
      message: `I would like to enquire about ${serviceValue} services.`
    }));
    setCurrentPage('contact');
  };

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Portfolio items filter logic
  const filteredProjects = activePortfolioFilter === 'all' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === activePortfolioFilter);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-brand-dark bg-brand-light">
      
      {/* Top Banner Contact Info */}
      <div className="bg-brand-subtle/50 text-brand-primary py-2.5 px-4 text-xs border-b border-brand-subtle/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-accent" />
              <span>Arumbakkam, Chennai - 106</span>
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-brand-accent" />
              <a href="mailto:rvsinterior28@gmail.com" className="hover:text-brand-accent transition-colors">rvsinterior28@gmail.com</a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 font-medium">
              <Phone size={14} className="text-brand-accent" />
              <span>Call Us:</span>
              <a href="tel:9710453183" className="text-brand-accent hover:underline font-bold">9710453183</a>
            </span>
            <span className="bg-brand-accent/15 text-brand-primary text-[10px] px-2.5 py-0.5 rounded-full border border-brand-accent/30 font-bold uppercase tracking-wider">
              Chennai & Suburbs
            </span>
          </div>
        </div>
      </div>

      {/* Header / Navigation Bar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-light/95 backdrop-blur-md py-3 shadow-md border-b border-brand-subtle' 
          : 'bg-brand-light py-5 border-b border-brand-subtle/40'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo and Branding */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="bg-brand-primary text-brand-light p-2 rounded-lg shadow-inner flex items-center justify-center transform transition-transform hover:scale-105 duration-300">
                <Building size={24} className="stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold tracking-tight text-brand-dark flex items-center gap-1.5">
                  RVS <span className="text-brand-accent">Builders</span>
                </span>
                <p className="text-[10px] text-brand-primary/80 tracking-widest uppercase font-semibold leading-none mt-0.5">
                  Interiors & Civil
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              {[
                { name: 'Home', val: 'home' },
                { name: 'Services', val: 'services' },
                { name: 'Portfolio', val: 'portfolio' },
                { name: 'About Us', val: 'about' },
                { name: 'Contact', val: 'contact' }
              ].map((item) => (
                <button
                  key={item.val}
                  onClick={() => setCurrentPage(item.val)}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                    currentPage === item.val 
                      ? 'text-brand-primary font-bold' 
                      : 'text-brand-primary/75 hover:text-brand-accent'
                  }`}
                >
                  {item.name}
                  {currentPage === item.val && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent rounded-full"></span>
                  )}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-brand-primary hover:bg-brand-primary/95 text-brand-light font-bold px-5 py-2 rounded-md shadow-md hover:shadow-brand-accent/20 transform hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Get Free Quote
              </button>
            </nav>

            {/* Mobile Hamburger Trigger */}
            <div className="flex items-center md:hidden gap-3">
              <a href="tel:9710453183" className="bg-brand-accent/10 border border-brand-accent/30 p-2 rounded-full text-brand-accent hover:bg-brand-accent/20 transition-colors">
                <Phone size={18} />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-primary hover:text-brand-accent p-2 rounded-md focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`md:hidden absolute left-0 right-0 bg-brand-light/98 border-b border-brand-subtle shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            {[
              { name: 'Home', val: 'home' },
              { name: 'Services', val: 'services' },
              { name: 'Portfolio', val: 'portfolio' },
              { name: 'About Us', val: 'about' },
              { name: 'Contact', val: 'contact' }
            ].map((item) => (
              <button
                key={item.val}
                onClick={() => {
                  setCurrentPage(item.val);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2.5 text-base font-semibold rounded-lg transition-all ${
                  currentPage === item.val 
                    ? 'text-brand-primary bg-brand-subtle/50 font-bold' 
                    : 'text-brand-primary/80 hover:text-brand-accent hover:bg-brand-subtle/20'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 px-4">
              <button 
                onClick={() => {
                  setCurrentPage('contact');
                  setIsMenuOpen(false);
                }}
                className="w-full bg-brand-primary text-brand-light font-bold py-3 rounded-lg text-center shadow-md hover:bg-brand-primary/95 transition-colors"
              >
                Get Free Quote
              </button>
            </div>
            <div className="pt-4 border-t border-brand-subtle/40 text-center text-xs text-slate-500">
              <p>Email: rvsinterior28@gmail.com</p>
              <p className="mt-1 font-semibold text-brand-primary">Call: 9710453183</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Areas */}
      <main className="flex-grow">

        {/* ==================== HOME VIEW ==================== */}
        {currentPage === 'home' && (
          <div>
            
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center bg-brand-light overflow-hidden border-b border-brand-subtle/30">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" 
                  alt="Luxury modern interior renovation" 
                  className="w-full h-full object-cover object-center opacity-20 transform scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-light via-brand-light/95 to-brand-light/45"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(195,163,122,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(195,163,122,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-brand-dark">
                <div className="max-w-3xl fade-in-up">
                  <div className="inline-flex items-center gap-2 bg-brand-accent/15 border border-brand-accent/30 rounded-full px-4 py-1.5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                    <span className="text-xs font-bold tracking-wider text-brand-primary uppercase">
                      Chennai's Premier Interior & Civil Contractor
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-brand-dark">
                    Premium Spaces, <br />
                    <span className="text-brand-accent">Masterfully Crafted</span>
                  </h1>
                  
                  <p className="mt-6 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-light">
                    "All Kinds Of Interior and Building Works Undertaken." Providing robust structural alterations, fine modular carpentry, and full renovative makeovers under the direct authority of R Stephen.
                  </p>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setCurrentPage('contact')}
                      className="bg-brand-primary hover:bg-brand-primary/95 text-brand-light font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-brand-accent/20 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group text-base"
                    >
                      Get Free Quote
                      <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
                    </button>
                    <button 
                      onClick={() => setCurrentPage('services')}
                      className="bg-transparent hover:bg-brand-subtle/30 text-brand-primary border border-brand-accent hover:border-brand-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-base"
                    >
                      Explore Services
                    </button>
                  </div>

                  <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-brand-subtle max-w-xl text-brand-primary">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-brand-accent">100%</h3>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Material Guarantee</p>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-brand-accent">Chennai</h3>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Wide Service Area</p>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-brand-accent">R Stephen</h3>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Direct Supervision</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-16 bg-brand-light transform skew-y-1 origin-bottom-right z-10 pointer-events-none"></div>
            </section>

            {/* Services Preview Section */}
            <section className="py-20 bg-brand-light">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-xs font-bold tracking-widest text-brand-accent uppercase">Our Core Services</h2>
                  <p className="mt-3 text-3xl sm:text-4xl font-bold text-brand-primary tracking-tight">
                    What We Undertake
                  </p>
                  <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {SERVICES.slice(0, 4).map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={service.id} className="bg-white rounded-xl border border-brand-subtle shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300 group">
                        <div>
                          <div className="w-12 h-12 rounded-lg bg-brand-subtle/50 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors duration-300">
                            <IconComponent size={24} className="stroke-[2]" />
                          </div>
                          <h3 className="text-lg font-bold text-brand-primary mt-5 group-hover:text-brand-accent transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                            {service.description.substring(0, 110)}...
                          </p>
                        </div>
                        <button 
                          onClick={() => setCurrentPage('services')}
                          className="mt-6 flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-accent group/btn transition-colors"
                        >
                          Learn More
                          <ArrowRight size={14} className="transform transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 text-center">
                  <button 
                    onClick={() => setCurrentPage('services')}
                    className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/95 text-brand-light font-bold px-8 py-4 rounded-lg shadow-md transition-all text-sm"
                  >
                    View All 8 Services
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-brand-subtle/20 text-brand-dark relative border-y border-brand-subtle/40">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mb-16">
                  <h2 className="text-xs font-bold tracking-widest text-brand-accent uppercase">Why Choose Us</h2>
                  <p className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-brand-primary">
                    Building Excellence with Full Assurance
                  </p>
                  <div className="w-16 h-1 bg-brand-accent mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white border border-brand-subtle rounded-xl p-6 hover:border-brand-accent/40 transition-all duration-300 shadow-sm">
                    <div className="w-12 h-12 bg-brand-accent/15 text-brand-primary rounded-lg flex items-center justify-center mb-5">
                      <ShieldCheck size={26} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-primary mb-2">One-Stop Solution</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We coordinate masonry, tiling, electrical grids, modular cabinets, and polish. You deal with only one point of contact.
                    </p>
                  </div>
                  <div className="bg-white border border-brand-subtle rounded-xl p-6 hover:border-brand-accent/40 transition-all duration-300 shadow-sm">
                    <div className="w-12 h-12 bg-brand-accent/15 text-brand-primary rounded-lg flex items-center justify-center mb-5">
                      <Briefcase size={26} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-primary mb-2">Material + Labour</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We supply top-brand raw materials and skilled tradesmen, removing the stress of material sourcing.
                    </p>
                  </div>
                  <div className="bg-white border border-brand-subtle rounded-xl p-6 hover:border-brand-accent/40 transition-all duration-300 shadow-sm">
                    <div className="w-12 h-12 bg-brand-accent/15 text-brand-primary rounded-lg flex items-center justify-center mb-5">
                      <Coins size={26} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-primary mb-2">Best Market Price</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Optimized estimations and supplier deals allow us to offer competitive rates without cutting material safety corners.
                    </p>
                  </div>
                  <div className="bg-white border border-brand-subtle rounded-xl p-6 hover:border-brand-accent/40 transition-all duration-300 shadow-sm">
                    <div className="w-12 h-12 bg-brand-accent/15 text-brand-primary rounded-lg flex items-center justify-center mb-5">
                      <Users size={26} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-primary mb-2">Expert Supervision</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      All projects are executed under the authority of R Stephen, ensuring top craftsmanship and safety compliance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Teaser */}
            <section className="py-20 bg-slate-50 border-b border-brand-subtle/20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-xs font-bold tracking-widest text-brand-accent uppercase">Testimonials</h2>
                  <p className="mt-3 text-3xl sm:text-4xl font-bold text-brand-primary tracking-tight">
                    Client Satisfaction is Our Guarantee
                  </p>
                  <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TESTIMONIALS.map((test) => (
                    <div key={test.id} className="bg-white rounded-xl shadow-md border border-brand-subtle p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex gap-1 mb-5">
                          {[...Array(test.rating)].map((_, i) => (
                            <Star key={i} size={18} className="fill-brand-accent text-brand-accent" />
                          ))}
                        </div>
                        <p className="text-slate-600 italic text-sm leading-relaxed">
                          "{test.text}"
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-brand-subtle">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-primary to-brand-accent text-white flex items-center justify-center font-bold text-sm shadow-inner shrink-0">
                          {test.initials}
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-primary text-sm">{test.name}</h4>
                          <p className="text-xs text-slate-400">{test.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ==================== SERVICES VIEW ==================== */}
        {currentPage === 'services' && (
          <div>
            
            {/* Header Banner */}
            <section className="bg-brand-subtle text-brand-dark py-16 relative border-b border-brand-subtle/55">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">Our Services</h1>
                <p className="mt-2 text-slate-600 max-w-xl mx-auto text-sm sm:text-base font-light">
                  Explore all kinds of interior and building alteration works undertaken by RVS Builders under the expert direction of R Stephen.
                </p>
                <div className="w-12 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
              </div>
            </section>

            {/* Complete Services List */}
            <section className="py-20 bg-brand-light">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {SERVICES.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={service.id} className="bg-white rounded-xl border border-brand-subtle shadow-md p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                        <div>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-brand-subtle/40 text-brand-primary flex items-center justify-center shrink-0">
                              <IconComponent size={24} className="stroke-[2.2]" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary">
                              {service.title}
                            </h3>
                          </div>
                          
                          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="mt-6">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary/70 mb-3">Key Features:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {service.features.map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                                  <Check size={14} className="text-brand-accent stroke-[3] shrink-0" />
                                  <span>{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-medium text-slate-400">Available across Chennai</span>
                          <button 
                            onClick={() => triggerServiceEnquiry(service.formValue)}
                            className="bg-brand-primary hover:bg-brand-primary/95 text-brand-light text-xs font-bold px-4 py-2.5 rounded transition-all flex items-center gap-1"
                          >
                            <span>Book Consultation</span>
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Material & Labour Policy Callout */}
                <div className="mt-16 bg-brand-subtle/30 rounded-2xl p-8 md:p-12 text-brand-dark shadow-md border border-brand-accent/20">
                  <div className="max-w-3xl">
                    <span className="bg-brand-accent/20 text-brand-primary text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-brand-accent/40">
                      Delivery Standard
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold mt-4 tracking-tight text-brand-primary">
                      Dual Provision: Raw Material & Expert Labour
                    </h3>
                    <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                      We prevent procurement stress by supplying all certified building materials—sand, cement, steel, modular wood veneers, and premium emulsion paints—paired with vetted plumbers, carpenters, painters, and wiremen. All material specs are clearly detailed in the contract beforehand.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <button 
                        onClick={() => setCurrentPage('contact')}
                        className="bg-brand-primary hover:bg-brand-primary/95 text-brand-light font-bold px-6 py-3 rounded-lg shadow-md transition-all text-sm"
                      >
                        Enquire for Material + Labour Quote
                      </button>
                      <a href="tel:9710453183" className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-brand-primary font-bold px-6 py-3 rounded-lg transition-all text-sm">
                        <Phone size={16} />
                        <span>Call 9710453183</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        )}

        {/* ==================== PORTFOLIO VIEW ==================== */}
        {currentPage === 'portfolio' && (
          <div>
            
            {/* Header Banner */}
            <section className="bg-brand-subtle text-brand-dark py-16 relative border-b border-brand-subtle/55">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">Our Completed Projects</h1>
                <p className="mt-2 text-slate-600 max-w-xl mx-auto text-sm sm:text-base font-light">
                  A visual showcase of carpentry, luxury modular interiors, civil structural works, and paint finishes completed in Chennai.
                </p>
                <div className="w-12 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
              </div>
            </section>

            {/* Filterable Gallery */}
            <section className="py-20 bg-brand-light">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                  {[
                    { label: 'All Projects', value: 'all' },
                    { label: 'Interior Design', value: 'interiors' },
                    { label: 'Carpentry', value: 'carpentry' },
                    { label: 'Painting', value: 'painting' },
                    { label: 'Civil Works', value: 'civil' },
                    { label: 'Electrical', value: 'electrical' }
                  ].map(btn => (
                    <button
                      key={btn.value}
                      onClick={() => setActivePortfolioFilter(btn.value)}
                      className={`px-5 py-2.5 rounded-lg text-xs font-bold shadow-sm transition-all ${
                        activePortfolioFilter === btn.value
                          ? 'bg-brand-primary text-brand-accent border border-brand-accent'
                          : 'bg-white text-slate-600 border border-brand-subtle hover:bg-slate-50'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <div 
                      key={project.id}
                      className="bg-white rounded-xl overflow-hidden border border-brand-subtle shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      <div className="h-64 overflow-hidden relative group">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-brand-primary/95 text-brand-accent text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded border border-brand-accent/20">
                          {project.category}
                        </div>
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-brand-primary">
                            {project.title}
                          </h3>
                          <p className="text-slate-500 text-xs flex items-center gap-1 mt-1">
                            <MapPin size={12} className="text-brand-accent" />
                            <span>{project.location}</span>
                          </p>
                          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-6 pt-5 border-t border-slate-100 text-right">
                          <button 
                            onClick={() => triggerServiceEnquiry(project.title)}
                            className="text-xs font-bold text-brand-primary hover:text-brand-accent flex items-center gap-1 ml-auto"
                          >
                            <span>Enquire about similar work</span>
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredProjects.length === 0 && (
                  <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
                    <Info size={36} className="text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500 text-sm">No projects found in this category.</p>
                  </div>
                )}

              </div>
            </section>

          </div>
        )}

        {/* ==================== ABOUT US VIEW ==================== */}
        {currentPage === 'about' && (
          <div>
            
            {/* Header Banner */}
            <section className="bg-brand-subtle text-brand-dark py-16 relative border-b border-brand-subtle/55">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">About RVS Builders</h1>
                <p className="mt-2 text-slate-600 max-w-xl mx-auto text-sm sm:text-base font-light">
                  A legacy of reliability and master craftsmanship in Chennai.
                </p>
                <div className="w-12 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
              </div>
            </section>

            {/* Profile Detail */}
            <section className="py-20 bg-brand-light">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Story */}
                  <div className="lg:col-span-7">
                    <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Our Profile</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary mt-2">
                      Led by R Stephen: Quality Contractors in Chennai
                    </h2>
                    <div className="w-16 h-1 bg-brand-accent mt-4 mb-6 rounded-full"></div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      Established in 2016 in Arumbakkam, RVS Builders has been serving homeowners and commercial clients with absolute transparency. Our proprietor and director, **R Stephen**, holds all administrative authority and personally coordinates every project blueprint, site audit, and material quality assurance.
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed mt-4">
                      Our company slogan, **"All Kinds Of Interior and Building Works Undertaken,"** describes our versatility. Whether you require modular wardrobe units, structural partition walls, concrete modifications, rewiring, or leak repairs, we employ expert carpenters, masons, and technicians to execute the work cleanly.
                    </p>

                    {/* Mission and Core Values Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                      <div className="border border-brand-subtle rounded-lg p-5 bg-white shadow-sm">
                        <h4 className="font-bold text-brand-primary flex items-center gap-2 text-sm">
                          <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                          Our Core Mission
                        </h4>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                          To streamline structural building renovations and carpenters works under one supervisor, eliminating multi-vendor scheduling delays and material cost inflate.
                        </p>
                      </div>

                      <div className="border border-brand-subtle rounded-lg p-5 bg-white shadow-sm">
                        <h4 className="font-bold text-brand-primary flex items-center gap-2 text-sm">
                          <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                          Proprietor's Guarantee
                        </h4>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                          We contractually commit to clear pricing, provide genuine branded raw materials, and maintain full supervision to avoid errors.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Founder Info & Frame */}
                  <div className="lg:col-span-5">
                    <div className="bg-white border border-brand-subtle rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8 relative">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-bl-full pointer-events-none"></div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-brand-primary text-brand-accent flex items-center justify-center font-bold text-xl shadow-md shrink-0">
                          RS
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-brand-primary">R Stephen</h3>
                          <p className="text-xs text-slate-400">Proprietor & Director, RVS Builders</p>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary/80 mb-2">Our Management Authority:</h4>
                        <p className="text-slate-600 text-xs leading-relaxed italic">
                          "Under my direct authority and quality checks, RVS Builders guarantees that every project is completed using high-grade materials and premium skilled labour. We do not sublease works to unvetted agents; my supervisors coordinate directly with you."
                        </p>
                      </div>

                      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-400">Arumbakkam, Chennai</span>
                        <a href="tel:9710453183" className="text-brand-accent font-bold hover:underline">Call Proprietor</a>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </section>

          </div>
        )}

        {/* ==================== CONTACT VIEW ==================== */}
        {currentPage === 'contact' && (
          <div>
            
            {/* Header Banner */}
            <section className="bg-brand-subtle text-brand-dark py-16 relative border-b border-brand-subtle/55">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">Contact Us / Get Quote</h1>
                <p className="mt-2 text-slate-600 max-w-xl mx-auto text-sm sm:text-base font-light">
                  Get a free project estimation. Request a callback from R Stephen.
                </p>
                <div className="w-12 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
              </div>
            </section>

            {/* Layout Contact details + Form */}
            <section className="py-20 bg-brand-light">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Office Contacts</span>
                      <h2 className="text-2xl font-bold text-brand-primary mt-2">Get in Touch</h2>
                      <div className="w-12 h-1 bg-brand-accent mt-3 mb-6 rounded-full"></div>

                      <div className="space-y-6 mt-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-brand-subtle/60 text-brand-accent p-3 rounded-lg border border-brand-subtle shrink-0">
                            <MapPin size={20} className="text-brand-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-primary text-sm">Office Location</h4>
                            <p className="text-slate-500 text-xs mt-1 leading-relaxed max-w-xs">
                              #5/11, Kalainar Street, Rani Anna Nagar, Arumbakkam, Chennai - 106
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-brand-subtle/60 text-brand-accent p-3 rounded-lg border border-brand-subtle shrink-0">
                            <Mail size={20} className="text-brand-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-primary text-sm">Email Address</h4>
                            <p className="text-slate-500 text-xs mt-1">
                              <a href="mailto:rvsinterior28@gmail.com" className="hover:text-brand-accent transition-colors">
                                rvsinterior28@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-brand-subtle/60 text-brand-accent p-3 rounded-lg border border-brand-subtle shrink-0">
                            <Phone size={20} className="text-brand-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-primary text-sm">Call / WhatsApp</h4>
                            <p className="text-slate-500 text-xs mt-1">
                              <a href="tel:9710453183" className="hover:text-brand-accent font-bold transition-colors">
                                9710453183
                              </a>
                            </p>
                            <p className="text-[10px] text-slate-400 mt-0.5">Management Authority: R Stephen</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 border border-brand-subtle bg-white rounded-xl p-5 shadow-sm text-center">
                      <div className="flex items-center justify-center gap-1 text-brand-primary font-semibold text-sm">
                        <MapPin size={16} className="text-brand-accent animate-bounce" />
                        <span>Serving Entire Chennai Metropolitan Area</span>
                      </div>
                      <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                        Arumbakkam, Anna Nagar, Adyar, T. Nagar, Velachery, Porur, Tambaram, and suburban limits.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Form */}
                  <div className="lg:col-span-7">
                    <div className="bg-white rounded-2xl border border-brand-subtle p-6 sm:p-10 shadow-lg relative overflow-hidden">
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-primary">Request Free Estimate</h3>
                      <p className="text-slate-500 text-xs mt-1">Submit your requirement. R Stephen's office will schedule a free site audit.</p>

                      {isSuccess && (
                        <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-800 text-xs flex items-start gap-2.5">
                          <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                          <div>
                            <strong className="font-bold">Query Submitted Successfully!</strong>
                            <p className="mt-0.5">We have received your estimate query. Our engineer/carpenter supervisor will call you shortly.</p>
                          </div>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 bg-slate-50/50 transition-all ${
                              errors.name 
                                ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                                : 'border-slate-300 focus:ring-brand-accent/30 focus:border-brand-accent'
                            }`}
                          />
                          {errors.name && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.name}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                              Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="10-digit mobile number"
                              className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 bg-slate-50/50 transition-all ${
                                errors.phone 
                                  ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                                  : 'border-slate-300 focus:ring-brand-accent/30 focus:border-brand-accent'
                              }`}
                            />
                            {errors.phone && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.phone}</p>}
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                              Email Address <span className="text-slate-400">(Optional)</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Your email address"
                              className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 bg-slate-50/50 transition-all ${
                                errors.email 
                                  ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                                  : 'border-slate-300 focus:ring-brand-accent/30 focus:border-brand-accent'
                              }`}
                            />
                            {errors.email && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.email}</p>}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="serviceType" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                            Select Service Required <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 bg-slate-50/50 transition-all appearance-none ${
                              errors.serviceType 
                                ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                                : 'border-slate-300 focus:ring-brand-accent/30 focus:border-brand-accent'
                            }`}
                            style={{
                              backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3E%3C/svg%3E")',
                              backgroundPosition: 'right 0.75rem center',
                              backgroundSize: '1.25rem',
                              backgroundRepeat: 'no-repeat',
                              paddingRight: '2.5rem'
                            }}
                          >
                            <option value="">-- Choose a Service --</option>
                            <option value="Interior Design">Interior Design & Decoration</option>
                            <option value="Carpentry Works">Full Carpentry Works</option>
                            <option value="Painting Works">Painting Works (Full Building)</option>
                            <option value="Civil Alteration">Civil Alteration Works</option>
                            <option value="Plumbing Works">Plumbing Works</option>
                            <option value="Electrical Works">Electrical Works</option>
                            <option value="Full Renovation">Full Building Renovation & Alteration</option>
                            <option value="Materials & Labour">Both Material & Labour Setup</option>
                            <option value="Other">Other Repairs / Small Works</option>
                          </select>
                          {errors.serviceType && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.serviceType}</p>}
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                            Project Description / Requirements <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Describe your requirement (dimensions, location, timeline, etc.)"
                            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 bg-slate-50/50 transition-all resize-none ${
                              errors.message 
                                ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                                : 'border-slate-300 focus:ring-brand-accent/30 focus:border-brand-accent'
                            }`}
                          ></textarea>
                          {errors.message && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.message}</p>}
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-brand-primary hover:bg-brand-primary/95 text-brand-light font-bold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-150 flex items-center justify-center gap-2"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Processing...</span>
                              </>
                            ) : (
                              <>
                                <span>Submit Estimate Request</span>
                                <ArrowRight size={18} />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                </div>

                {/* FAQ Accordion Section */}
                <div className="max-w-4xl mx-auto mt-20">
                  <h3 className="text-2xl font-bold text-brand-primary text-center mb-8">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white rounded-xl border border-brand-subtle overflow-hidden shadow-sm transition-all animate-fadeIn"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                        >
                          <span className="font-semibold text-brand-primary text-sm sm:text-base">{faq.question}</span>
                          <ChevronDown 
                            size={18} 
                            className={`text-slate-400 shrink-0 transform transition-transform duration-300 ${
                              openFaqIndex === idx ? 'rotate-180 text-brand-accent' : ''
                            }`}
                          />
                        </button>
                        <div 
                          className={`transition-all duration-300 overflow-hidden ${
                            openFaqIndex === idx ? 'max-h-48 border-t border-brand-subtle' : 'max-h-0'
                          }`}
                        >
                          <p className="px-6 py-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section>

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-brand-subtle/40 text-slate-700 pt-16 pb-8 border-t border-brand-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Column 1: About info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-brand-primary text-brand-light p-1.5 rounded flex items-center justify-center">
                  <Building size={18} className="stroke-[2.2]" />
                </div>
                <span className="text-lg font-bold tracking-tight text-brand-dark">
                  RVS <span className="text-brand-accent font-extrabold">Builders</span>
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600">
                Chennai's trusted general building alterations and carpentry partner, led by R Stephen (Proprietor & Authority). Specializing in high-quality structural works and modular interior spaces since 2016.
              </p>
              <div className="mt-5 space-y-2 text-xs">
                <p className="flex items-center gap-2">
                  <Phone size={14} className="text-brand-accent" />
                  <a href="tel:9710453183" className="hover:text-brand-accent transition-colors font-semibold">9710453183</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={14} className="text-brand-accent" />
                  <a href="mailto:rvsinterior28@gmail.com" className="hover:text-brand-accent transition-colors">rvsinterior28@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-5 border-l-2 border-brand-accent pl-3">
                Quick Navigation
              </h4>
              <ul className="space-y-3 text-xs">
                {[
                  { name: 'Home', val: 'home' },
                  { name: 'Services', val: 'services' },
                  { name: 'Portfolio', val: 'portfolio' },
                  { name: 'About Us', val: 'about' },
                  { name: 'Contact Us', val: 'contact' }
                ].map((item) => (
                  <li key={item.val}>
                    <button 
                      onClick={() => setCurrentPage(item.val)}
                      className="hover:text-brand-accent hover:translate-x-1 transition-all text-left font-semibold text-slate-600"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services Shortlist */}
            <div>
              <h4 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-5 border-l-2 border-brand-accent pl-3">
                Key Services
              </h4>
              <ul className="space-y-3 text-xs">
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-brand-accent hover:translate-x-1 transition-all text-left font-semibold text-slate-600">Interior Design</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-brand-accent hover:translate-x-1 transition-all text-left font-semibold text-slate-600">Modular Carpentry</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-brand-accent hover:translate-x-1 transition-all text-left font-semibold text-slate-600">Building Painting</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-brand-accent hover:translate-x-1 transition-all text-left font-semibold text-slate-600">Civil Renovations</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-brand-accent hover:translate-x-1 transition-all text-left font-semibold text-slate-600">Electrical & Plumbing</button></li>
              </ul>
            </div>

            {/* Column 4: Address Details */}
            <div>
              <h4 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-5 border-l-2 border-brand-accent pl-3">
                Office Location
              </h4>
              <div className="flex gap-3 text-xs">
                <MapPin size={16} className="text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-primary">RVS Builders Office</p>
                  <p className="mt-1 leading-relaxed text-slate-500">
                    #5/11, Kalainar Street,<br />
                    Rani Anna Nagar,<br />
                    Arumbakkam, Chennai - 106
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[10px] text-brand-primary bg-brand-accent/15 border border-brand-accent/20 px-3 py-1.5 rounded italic font-semibold">
                "All Kinds Of Interior and Building Works Undertaken"
              </p>
            </div>

          </div>

          {/* Bottom Copyright Area */}
          <div className="pt-8 mt-8 border-t border-brand-subtle/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} RVS Builders. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button 
                onClick={() => setShowAdminPanel(true)} 
                className="hover:text-brand-accent hover:underline transition-colors font-bold text-brand-primary flex items-center gap-1"
              >
                <Lock size={12} />
                <span>Proprietor: R Stephen (Admin Portal)</span>
              </button>
              <a
                href="https://github.com/rameshackk/rvs-builders"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-brand-accent/20 bg-brand-accent/10 px-3 py-2 text-brand-primary font-semibold hover:bg-brand-accent/20 transition-colors"
              >
                <ExternalLink size={14} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Admin Dashboard Modal */}
      {showAdminPanel && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-brand-subtle animate-fadeIn">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-brand-subtle flex justify-between items-center bg-brand-light rounded-t-2xl">
              <div className="flex items-center gap-2 text-brand-primary">
                <Database size={22} className="text-brand-accent" />
                <div>
                  <h3 className="font-bold text-lg leading-tight">Enquiries Admin Portal</h3>
                  <p className="text-[10px] text-slate-500">Local submissions shown below &bull; For all-device access, view at Formspree dashboard</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://formspree.io/forms"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 bg-brand-primary text-white text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-brand-dark transition-all"
                  title="View all submissions from any device"
                >
                  <ExternalLink size={12} />
                  <span>Formspree Dashboard</span>
                </a>
                <button 
                  onClick={() => setShowAdminPanel(false)}
                  className="text-slate-400 hover:text-brand-primary p-1 rounded-lg hover:bg-slate-100 transition-all"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-grow">
              {localEnquiries.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <Database size={48} className="mx-auto mb-4 opacity-30" />
                  <p className="text-sm font-semibold">No Enquiries Received Yet</p>
                  <p className="text-xs mt-1">Submit the contact form on the Contact Page to see mock data populate here.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-500">Total: {localEnquiries.length} submissions</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={exportToExcel}
                        className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shadow-sm"
                        title="Download all enquiries as Excel file"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        Download Excel
                      </button>
                      <button 
                        onClick={clearAllEnquiries}
                        className="text-red-600 hover:text-red-700 text-xs font-bold flex items-center gap-1 transition-colors"
                      >
                        <Trash2 size={14} />
                        <span>Clear All</span>
                      </button>
                    </div>
                  </div>

                  {/* List of Enquiries */}
                  <div className="space-y-4">
                    {localEnquiries.map((item) => (
                      <div key={item.id} className="border border-brand-subtle bg-slate-50/50 rounded-xl p-4 sm:p-5 relative shadow-sm hover:border-brand-accent/40 transition-all">
                        <button 
                          onClick={() => deleteEnquiry(item.id)}
                          className="absolute top-4 right-4 text-slate-400 hover:text-red-600 p-1 rounded-md transition-colors"
                          title="Delete submission"
                        >
                          <Trash2 size={16} />
                        </button>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                          <div>
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Customer Details</span>
                            <p className="font-bold text-brand-dark mt-0.5">{item.name}</p>
                            <p className="text-slate-600 mt-0.5">{item.phone}</p>
                            <p className="text-slate-500 mt-0.5">{item.email}</p>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Enquiry Type</span>
                            <span className="inline-block bg-brand-accent/15 text-brand-primary font-bold border border-brand-accent/30 px-2 py-0.5 rounded mt-1">
                              {item.serviceType}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Submission Time</span>
                            <p className="text-slate-600 mt-1 font-medium">{item.date}</p>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-200/60">
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Requirement message</span>
                          <p className="text-xs text-slate-700 leading-relaxed mt-1 whitespace-pre-wrap italic">
                            "{item.message}"
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-brand-subtle bg-slate-50 flex justify-end rounded-b-2xl">
              <button 
                onClick={() => setShowAdminPanel(false)}
                className="bg-brand-primary text-brand-light font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-brand-primary/95 transition-all shadow"
              >
                Close Portal
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Floating Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 bg-brand-accent text-brand-dark p-3.5 rounded-full shadow-lg border border-white/20 hover:bg-brand-accent/90 hover:shadow-brand-accent/30 active:scale-95 transition-all duration-300 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="stroke-[2.5]" />
      </button>

    </div>
  );
}

// Simple css animation class for react warning
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.4s ease-out forwards;
  }
`;
document.head.appendChild(style);
