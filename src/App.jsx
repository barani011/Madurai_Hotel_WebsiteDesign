import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  ShoppingBag,
  ArrowRight,
  Play,
  Star,
  X,
  Plus,
  Minus,
  Check,
  Sparkles,
  Fuel,
  Calendar,
  Building2,
  Clock,
  Navigation,
  Search,
  Menu as MenuIcon,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight
} from 'lucide-react';

// Exact extracted visual assets from the reference design

const IMAGES = {
  heroDosa: `${import.meta.env.BASE_URL}public/assets/hero_dosa.jpg`,
  storySnacks: `${import.meta.env.BASE_URL}public/assets/story_snacks.jpg`,
  storyMeal: `${import.meta.env.BASE_URL}public/assets/story_meal.jpg`,
  familyDosa: `${import.meta.env.BASE_URL}public/assets/dish_family_dosa.jpg`,
  ravaDosa: `${import.meta.env.BASE_URL}public/assets/dish_rava_dosa.jpg`,
  pongalVada: `${import.meta.env.BASE_URL}public/assets/dish_pongal_vada.jpg`,
  vegMeals: `${import.meta.env.BASE_URL}public/assets/dish_veg_meals.jpg`,
  filterCoffee: `${import.meta.env.BASE_URL}public/assets/dish_filter_coffee.jpg`,
};


const SIGNATURE_DISHES = [
  {
    id: 'family-dosa',
    title: 'Family Dosa',
    description: 'Our famous giant dosa, crisp-edged and made to be shared.',
    category: 'TIFFIN & DOSAS',
    badgeRight: 'HOUSE FAVOURITE',
    price: 240,
    image: IMAGES.familyDosa,
  },
  {
    id: 'rava-dosa',
    title: 'Rava Dosa',
    description: 'Lacy, golden and crackling — served with chutney and sambar.',
    category: 'TIFFIN & DOSAS',
    price: 115,
    image: IMAGES.ravaDosa,
  },
  {
    id: 'pongal-vada',
    title: 'Pongal & Vada Set',
    description: 'Comfort classics on a plate — pepper pongal with crispy vada.',
    category: 'TIFFIN & DOSAS',
    price: 95,
    image: IMAGES.pongalVada,
  },
  {
    id: 'veg-meals',
    title: 'Vegetarian Meals',
    description: 'A generous banana-leaf style thali, refilled till you smile.',
    category: 'WHOLESOME MEALS',
    price: 180,
    image: IMAGES.vegMeals,
  },
  {
    id: 'filter-coffee',
    title: 'Hot Filter Coffee',
    description: 'Frothy, decoction-strong, served the traditional way.',
    category: 'BEVERAGES',
    price: 45,
    image: IMAGES.filterCoffee,
  },
];

const EXTRA_MENU_ITEMS = [
  {
    id: 'jigarthanda',
    title: 'Madurai Jigarthanda',
    description: "The city's iconic cooler — layered, silky and unmistakably Madurai.",
    category: 'BEVERAGES',
    badgeRight: 'ICONIC',
    price: 90,
    image: IMAGES.filterCoffee,
  },
  {
    id: 'ghee-roast',
    title: 'Tirunelveli Ghee Roast',
    description: 'Paper-thin roast drizzled with pure cow ghee and 3 chutneys.',
    category: 'TIFFIN & DOSAS',
    price: 125,
    image: IMAGES.heroDosa,
  },
  {
    id: 'idiyappam-paya',
    title: 'String Hoppers & Veg Kurma',
    description: 'Steamed rice string hoppers served with aromatic coconut milk & kurma.',
    category: 'WHOLESOME MEALS',
    price: 110,
    image: IMAGES.storyMeal,
  },
  {
    id: 'nellai-halwa',
    title: 'Tirunelveli Wheat Halwa & Savouries',
    description: 'Authentic glossy wheat halwa paired with crunchy pepper murukku.',
    category: 'SWEETS & SAVOURIES',
    price: 140,
    image: IMAGES.storySnacks,
  },
];

const ALL_MENU_ITEMS = [...SIGNATURE_DISHES, ...EXTRA_MENU_ITEMS];

const BRANCHES = [
  // Row 1 - CITY
  { id: 1, name: 'Mattuthavani', type: 'CITY', address: 'Opp. Mattuthavani Integrated Bus Stand, Madurai', hours: '5:30 AM – 11:30 PM', features: ['Parent Branch', 'AC Family Dining', 'Sweet Stall'] },
  { id: 2, name: 'Uthangudi', type: 'CITY', address: 'Melur Main Road, Near Uthangudi Junction, Madurai', hours: '6:00 AM – 11:00 PM', features: ['Drive-In Parking', 'Banquet Hall', 'Filter Coffee Bar'] },
  { id: 3, name: 'Bibikulam', type: 'CITY', address: 'New Natham Road, Bibikulam, Madurai', hours: '6:30 AM – 11:00 PM', features: ['Quick Tiffin', 'Family AC Hall', 'Takeaway Counter'] },
  { id: 4, name: 'Teppakulam', type: 'CITY', address: 'Opposite Mariamman Teppakulam, Madurai', hours: '6:00 AM – 11:00 PM', features: ['Heritage Ambience', 'Jigarthanda Counter', 'Valet Parking'] },
  // Row 2 - CITY
  { id: 5, name: 'Surveyor Colony', type: 'CITY', address: '120 Feet Road, Surveyor Colony, K. Pudur, Madurai', hours: '6:00 AM – 11:00 PM', features: ['Party Hall', 'Bakes & Cafe', 'Outdoor Seating'] },
  { id: 6, name: 'Periyar Bus Stand', type: 'CITY', address: 'Near Periyar Bus Terminus & Railway Station, Madurai', hours: '5:00 AM – 11:30 PM', features: ['Traveller Express', 'Luggage Assistance', 'AC Dining'] },
  { id: 7, name: 'Pandikovil Junction', type: 'CITY', address: 'Ring Road, Pandikovil Signal, Madurai', hours: '6:00 AM – 11:30 PM', features: ['Ample Car Parking', 'Play Area', 'Sweets & Savouries'] },
  { id: 8, name: 'Vandiyur Toll Gate', type: 'CITY', address: 'Rameswaram Highway, Vandiyur, Madurai', hours: '24 Hours', features: ['24×7 Dining', 'Shaded Parking', 'EV Fast Charger'] },
  // Row 3 - HIGHWAY
  { id: 9, name: 'NH 44 – Ayyankottai', type: 'HIGHWAY', address: 'Madurai–Dindigul NH 44, Ayyankottai', hours: '24 Hours', features: ['Fuel Station', 'EV Charging', 'Children Park', 'Clean Restrooms'] },
  { id: 10, name: 'NH 44 – Vadipatti', type: 'HIGHWAY', address: 'NH 44 Main Highway, Near Vadipatti', hours: '24 Hours', features: ['Highway Pitstop', 'Shaded Car Park', 'Fuel & Air'] },
  { id: 11, name: 'NH 44 – Sivarakottai', type: 'HIGHWAY', address: 'Madurai–Virudhunagar NH 44, Sivarakottai', hours: '24 Hours', features: ['24×7 Dining', 'EV Supercharger', 'Box Stays', 'Fuel Stop'] },
  { id: 12, name: 'NH 38 – Melur', type: 'HIGHWAY', address: 'Madurai–Trichy NH 38 Bypass, Melur', hours: '24 Hours', features: ['Large Bus Bay', 'Children Play Zone', 'Fresh Juice Bar'] },
  // Row 4 - HIGHWAY
  { id: 13, name: 'NH 38 – Karungalakudi', type: 'HIGHWAY', address: 'NH 38 Trichy Highway, Karungalakudi', hours: '24 Hours', features: ['Fuel & EV Hub', 'Neat Restrooms', 'Family AC Lounge'] },
  { id: 14, name: 'NH 744 – Alampatti', type: 'HIGHWAY', address: 'NH 744 Tirumangalam–Rajapalayam Rd, Alampatti', hours: '6:00 AM – 11:30 PM', features: ['Highway Plaza', 'Sweet Mart', 'Shaded Parking'] },
  { id: 15, name: 'NH 87 – Keeladi', type: 'HIGHWAY', address: 'Madurai–Rameswaram NH 87, Near Keeladi Museum', hours: '6:00 AM – 11:00 PM', features: ['Tourist Favourite', 'Heritage Decor', 'EV Charging'] },
  { id: 16, name: 'Batlagundu By-Pass', type: 'HIGHWAY', address: 'Kodaikanal Ghat Road Bypass, Batlagundu', hours: '5:30 AM – 11:30 PM', features: ['Hill-Station Pitstop', 'Hot Filter Coffee', 'Fuel & EV'] },
];

const REVIEWS = [
  {
    id: 1,
    text: 'Food taste super Vegetarian Meals Good. Parking Facilities service Good. Children Park Facilities Super. Rooms: 5/5 | Service: 5/5 | Location: 5/5. Hotel highlights: Luxury.',
    author: 'H*****',
    date: 'MAY 11, 2023',
  },
  {
    id: 2,
    text: 'Good food. Nice ambience. Courteous staff. Right on the highway and convenient shaded parking. One of the best hotels in Madurai.',
    author: 'S*****',
    date: 'OCTOBER 5, 2022',
  },
  {
    id: 3,
    text: 'Although they have many branches, I have frequently visited their Madurai-Dindigul highway branch. Very good spot for a pit stop with good vegetarian food, Hot Filter Coffee or Fresh fruit juice. They maintain good service and quality.',
    author: 'M***** A****',
    date: 'JUNE 10, 2024',
  },
  {
    id: 4,
    text: 'We ordered two pongal and vada sets and one rava dosa. Service took a while due to the huge crowd, but everything was good once served.',
    author: 'G******',
    date: 'JANUARY 12, 2023',
  },
  {
    id: 5,
    text: 'Had the authentic Jigarthanda. Superb taste and neat restrooms. Best hotel in Madurai.',
    author: 'V****** *',
    date: 'OCTOBER 15, 2024',
  },
];

const SISTER_CONCERNS = [
  {
    name: 'Temple City Food Products',
    tag: 'RETAIL & EXPORT',
    desc: 'Signature Tirunelveli snacks, spice mixes, idli podi, and traditional sweets packaged fresh for homes worldwide.',
  },
  {
    name: 'Templecity Bakes & Cafe',
    tag: 'BAKERY & ARTISAN CAFE',
    desc: 'Freshly baked eggless pastries, puffs, celebration cakes, and specialty South Indian fusion beverages.',
  },
  {
    name: 'Templecity Residency',
    tag: 'BOUTIQUE HOSPITALITY',
    desc: 'Elegant, comfortable rooms and suites in Madurai designed for pilgrims, families, and business travellers.',
  },
  {
    name: 'Temple City Box Stays',
    tag: 'HIGHWAY TRANSIT PODS',
    desc: 'Smart, air-conditioned luxury transit rooms along major national highways for refreshing pit stops.',
  },
  {
    name: 'Templecity Express',
    tag: 'QUICK SERVICE',
    desc: 'High-speed tiffin counters and takeaway kiosks at bus terminals and busy city hubs.',
  },
  {
    name: 'Temple City Fuel',
    tag: '7+ FUEL & EV HUBS',
    desc: '24×7 highway fuel stations paired with high-speed EV chargers, shaded parking, and spotless restrooms.',
  },
];

// Gopuram (Temple Tower) Logo SVG matching the reference header & footer
function GopuramLogo({ scrolled = false }) {
  return (
    <div
      className={`w-9 h-9 rounded-[9px] flex items-center justify-center shrink-0 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#581c23] shadow-xs'
          : 'bg-[#5c2027] border border-[#d8ad60]/25'
      }`}
    >
      <svg viewBox="0 0 32 32" className="w-[22px] h-[22px]" aria-hidden="true">
        {/* Gold Kalasam Spire & 3 Gopuram Tiers */}
        <path
          fill="#c8a055"
          d="M16 4.2l1.2 2.6h-2.4L16 4.2zm-3.8 4.1h7.6l.8 2.1h-9.2l.8-2.1zm-1.4 3.5h10.4l.9 2.2H9.9l.9-2.2zm-1.4 3.6h13.2l.9 2.2H8.5l.9-2.2z"
        />
        {/* Crisp Cream/White Base Plinth & Gateway Pillars */}
        <path
          fill="#fcf5ef"
          d="M7.5 19.3h17v2.1h-17v-2.1zm1.8 3.3h5.1v3.6H9.3v-3.6zm8.3 0h5.1v3.6h-5.1v-3.6z"
        />
      </svg>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerModeOverride, setHeaderModeOverride] = useState('auto'); // 'auto' | 'dark' | 'light'
  const [activeNav, setActiveNav] = useState('HOME');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modals & Drawers
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [menuCategory, setMenuCategory] = useState('ALL');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState({
    'family-dosa': 1,
    'filter-coffee': 2,
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [branchFilter, setBranchFilter] = useState('ALL'); // 'ALL' | 'CITY' | 'HIGHWAY'
  const [adModalOpen, setAdModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState(null); // 'FUEL' | 'SISTER' | 'EVENTS' | 'STORY'

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const useLightNavbar =
    headerModeOverride === 'light' || (headerModeOverride === 'auto' && isScrolled);

  const scrollToSection = (sectionId, navLabel) => {
    if (navLabel) setActiveNav(navLabel);
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (item) => {
    setActiveNav(item.label);
    setMobileMenuOpen(false);
    if (item.modal) {
      setInfoModal(item.modal);
      return;
    }
    scrollToSection(item.target, item.label);
  };

  const updateCart = (id, delta) => {
    setOrderPlaced(false);
    setCart((prev) => {
      const next = { ...prev };
      const count = (next[id] || 0) + delta;
      if (count <= 0) {
        delete next[id];
      } else {
        next[id] = count;
      }
      return next;
    });
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = ALL_MENU_ITEMS.find((d) => d.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const navItems = [
    { label: 'HOME', target: 'home' },
    { label: 'ABOUT US', target: 'about' },
    { label: 'FOOD MENU', target: 'menu' },
    { label: 'LOCATIONS', target: 'locations' },
    { label: 'FUEL', target: 'locations', modal: 'FUEL' },
    { label: 'SISTER CONCERNS', target: 'footer', modal: 'SISTER' },
    { label: 'EVENTS', target: 'visit-cta', modal: 'EVENTS' },
    { label: 'REVIEWS', target: 'reviews' },
    { label: 'CONTACT', target: 'footer' },
  ];

  const filteredBranches =
    branchFilter === 'ALL'
      ? BRANCHES
      : BRANCHES.filter((b) => b.type === branchFilter);

  const filteredMenu =
    menuCategory === 'ALL'
      ? ALL_MENU_ITEMS
      : ALL_MENU_ITEMS.filter((m) => m.category === menuCategory);

  return (
    <div className="min-h-screen font-sans antialiased selection:bg-[#c59b52] selection:text-[#2c0f13] text-[#1e1214]">
      {/* Google Fonts & Custom Design Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Noto+Sans+Tamil:wght@500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .font-serif-display {
          font-family: 'Playfair Display', Georgia, serif;
        }
        .font-serif-editorial {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .font-sans-ui {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .font-tamil {
          font-family: 'Noto Sans Tamil', sans-serif;
        }

        /* Exact Dark Maroon Dotted Pattern from Screenshots 1, 2, 5, 7 */
        .bg-maroon-dotted {
          background-color: #4b1920;
          background-image: radial-gradient(rgba(216, 173, 96, 0.16) 1.15px, transparent 1.15px);
          background-size: 22px 22px;
        }

        /* Exact Light Cream Dotted Pattern from Screenshots 3, 4, 6, 7 */
        .bg-cream-story {
          background-color: #fcf5ef;
          background-image: radial-gradient(rgba(165, 120, 75, 0.11) 1.1px, transparent 1.1px);
          background-size: 22px 22px;
        }

        .bg-cream-Warm {
          background-color: #f4eade;
          background-image: radial-gradient(rgba(155, 110, 68, 0.12) 1.1px, transparent 1.1px);
          background-size: 22px 22px;
        }

        /* Outlined inline display typography for "FOOD CHAIN" in Hero */
        .text-food-chain-outline {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1.5px #c59b52;
          letter-spacing: 0.04em;
          text-shadow: 2px 2px 0px rgba(197, 155, 82, 0.18);
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marqueeScroll 34s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ===================================================================
          STICKY HEADER (Matches both Dark Hero Header & Light Scrolled Header)
      =================================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useLightNavbar
            ? 'bg-[#fbf5ed]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(44,15,19,0.08)] border-b border-[#e5d9c8]'
            : 'bg-[#3f151b]/95 backdrop-blur-md border-b border-[#d8ad60]/10'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between gap-3">
          {/* Brand Logo Lockup — single line, exact proportions from image_2da0c6.png */}
          <button
            type="button"
            onClick={() => scrollToSection('home', 'HOME')}
            className="flex items-center gap-2.5 text-left group focus:outline-none shrink-0"
          >
            <GopuramLogo scrolled={useLightNavbar} />
            <div className="whitespace-nowrap">
              <div
                className={`font-serif-display text-[14.5px] sm:text-[15.5px] tracking-[0.06em] font-medium leading-none transition-colors ${
                  useLightNavbar ? 'text-[#581c23]' : 'text-[#fcf5ef]'
                }`}
              >
                HOTEL TEMPLE CITY
              </div>
              <div
                className={`font-sans-ui text-[8.5px] tracking-[0.22em] uppercase mt-1 font-medium leading-none ${
                  useLightNavbar ? 'text-[#b58942]' : 'text-[#d8ad60]'
                }`}
              >
                MADURAI · TAMIL NADU
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links — single-line, exact 10.5px uppercase tracking */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 font-sans-ui text-[10px] xl:text-[10.5px] font-medium tracking-[0.13em] whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={`relative py-1 transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? useLightNavbar
                        ? 'text-[#b58942]'
                        : 'text-[#d8ad60]'
                      : useLightNavbar
                      ? 'text-[#2c181b] hover:text-[#b58942]'
                      : 'text-[#f2e6da]/90 hover:text-[#d8ad60]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute -bottom-0.5 left-0 right-0 h-[1.5px] ${
                        useLightNavbar ? 'bg-[#b58942]' : 'bg-[#d8ad60]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA: Order Online Pill — single-line, exact proportions from image_2da0c6.png */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="bg-[#c19e5c] hover:bg-[#cca966] text-[#4b1920] font-sans-ui text-[10px] xl:text-[10.5px] font-semibold tracking-[0.14em] uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 whitespace-nowrap transition shadow-xs cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 stroke-[1.9] text-[#4b1920] shrink-0" />
              <span>ORDER ONLINE</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className={`lg:hidden p-2 rounded-lg border ${
                useLightNavbar
                  ? 'border-[#541b22]/20 text-[#541b22]'
                  : 'border-[#d8ad60]/30 text-[#fcf5ef]'
              }`}
            >
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden px-6 pt-3 pb-5 border-t ${
              useLightNavbar
                ? 'bg-[#fbf5ed] border-[#e5d9c8] text-[#3a1d21]'
                : 'bg-[#381318] border-[#d8ad60]/15 text-[#fcf5ef]'
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-sans-ui text-xs font-semibold tracking-wider">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={`text-left py-2 px-3 rounded-lg ${
                    activeNav === item.label
                      ? 'bg-[#c4a05a]/20 text-[#c4a05a]'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ===================================================================
          SECTION 1: HERO SECTION & MARQUEE TICKER (Screenshots 1 & 2)
      =================================================================== */}
      <section
        id="home"
        className="relative bg-maroon-dotted pt-[104px] pb-0 overflow-hidden text-[#fcf5ef]"
      >
        {/* Decorative background large arch ring on right (from Screenshot 1) */}
        <div
          aria-hidden="true"
          className="hidden lg:block pointer-events-none absolute -right-28 top-16 w-[520px] h-[640px] rounded-t-full border border-[#d8ad60]/15"
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-12 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Typography, CTAs, Stats */}
            <div className="lg:col-span-7 z-10">
              {/* Tamil Tagline */}
              <p className="font-tamil text-[#d8ad60] text-[15px] sm:text-[16.5px] font-medium tracking-wide">
                நித்திரை இல்லா நகரில் முத்திரை பதிக்கும் உணவகம்
              </p>
              <p className="font-sans-ui text-[10.5px] tracking-[0.24em] uppercase text-[#c49f80] mt-1.5 mb-5">
                HOTEL TEMPLE CITY · MADURAI
              </p>

              {/* Main 3-Line Display Heading */}
              <div className="leading-[0.98] select-none">
                <div className="font-serif-display italic font-normal text-[#d5a858] text-[52px] sm:text-[68px] lg:text-[74px] tracking-tight">
                  Madurai&apos;s
                </div>
                <div className="font-serif-display font-extrabold text-[#fcf5ef] text-[56px] sm:text-[74px] lg:text-[82px] tracking-[0.01em] mt-1">
                  LARGEST
                </div>
                <div className="text-food-chain-outline text-[50px] sm:text-[68px] lg:text-[76px] mt-1.5">
                  FOOD CHAIN
                </div>
              </div>

              {/* Description Paragraph */}
              <p className="font-sans-ui text-[#e8d8c8]/90 text-[15px] sm:text-[16px] leading-[1.68] max-w-[540px] mt-7 font-normal">
                Nearly two decades of authentic South Indian cuisine in the City of
                Temples — the flavours of Tirunelveli and Madurai, served with warm
                hospitality at 18 restaurants in and around the city.
              </p>

              {/* Action Buttons & Phone */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => scrollToSection('menu', 'FOOD MENU')}
                  className="bg-[#c4a05a] hover:bg-[#d2af68] text-[#2c0f13] font-sans-ui text-[11.5px] font-bold tracking-[0.14em] uppercase px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition shadow-md cursor-pointer"
                >
                  <span>EXPLORE OUR MENU</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('locations', 'LOCATIONS')}
                  className="border border-[#d8ad60]/35 hover:border-[#d8ad60] bg-[#4b1920]/50 text-[#fcf5ef] font-sans-ui text-[11.5px] font-bold tracking-[0.14em] uppercase px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#d8ad60]" />
                  <span>FIND A LOCATION</span>
                </button>

                <a
                  href="tel:+916384899333"
                  className="inline-flex items-center gap-2 text-[#e8d8c8] hover:text-[#d8ad60] font-sans-ui text-[13.5px] font-medium px-2 py-2 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d8ad60]" />
                  <span>+91 63848 99333</span>
                </a>
              </div>

              {/* Subtle Horizontal Rule */}
              <div className="border-t border-[#d8ad60]/18 my-9 max-w-[590px]" />

              {/* 3 Stats Columns */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-[560px]">
                <div>
                  <div className="font-serif-display text-[28px] sm:text-[32px] text-[#fcf5ef] leading-none">
                    18<span className="text-[#d8ad60] text-[20px] align-top ml-0.5">+</span>
                  </div>
                  <div className="font-sans-ui text-[9.5px] sm:text-[10px] tracking-[0.15em] uppercase text-[#c49f80] mt-2 leading-relaxed">
                    RESTAURANTS IN &amp;<br />AROUND MADURAI
                  </div>
                </div>

                <div>
                  <div className="font-serif-display text-[28px] sm:text-[32px] text-[#fcf5ef] leading-none">
                    2<span className="text-[#d8ad60] text-[20px] align-top ml-0.5">+</span>
                  </div>
                  <div className="font-sans-ui text-[9.5px] sm:text-[10px] tracking-[0.15em] uppercase text-[#c49f80] mt-2 leading-relaxed">
                    DECADES OF EXCELLENCE
                  </div>
                </div>

                <div>
                  <div className="font-serif-display text-[28px] sm:text-[32px] text-[#fcf5ef] leading-none">
                    7<span className="text-[#d8ad60] text-[20px] align-top ml-0.5">+</span>
                  </div>
                  <div className="font-sans-ui text-[9.5px] sm:text-[10px] tracking-[0.15em] uppercase text-[#c49f80] mt-2 leading-relaxed">
                    FUEL &amp; EV STOPS ON THE<br />HIGHWAYS
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Arch-Framed Hero Dosa Photo + Floating Review Card */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-8">
              <div className="relative w-full max-w-[445px]">
                {/* Offset Thin Gold Arch Border Frame (bottom-right offset as in Screenshot 1 & 2) */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3.5 translate-y-4 rounded-t-[240px] border border-[#d8ad60]/25 pointer-events-none"
                />

                {/* Main Arch Image Container */}
                <div className="relative rounded-t-[240px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)] bg-[#2c0f13] aspect-[449/458]">
                  <img
                    src={IMAGES.heroDosa}
                    alt="Crispy South Indian Dosa served on a fresh banana leaf with sambar and chutneys"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating White Google Review Badge (Bottom-Left Overlap) */}
                <button
                  type="button"
                  onClick={() => scrollToSection('reviews', 'REVIEWS')}
                  className="absolute -left-3 sm:-left-10 bottom-6 sm:bottom-9 bg-[#fcf5ef] text-[#4b1920] rounded-2xl px-5 py-4 shadow-[0_14px_34px_rgba(0,0,0,0.38)] text-left max-w-[195px] hover:scale-[1.02] transition cursor-pointer"
                >
                  <p className="font-serif-editorial italic text-[15.5px] leading-[1.35] text-[#581c23] font-medium">
                    &ldquo;One of the best hotels in Madurai.&rdquo;
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 font-sans-ui text-[9.5px] font-bold tracking-[0.15em] uppercase text-[#5c4938]">
                    <span className="text-[#c59b52] text-xs">★</span>
                    <span>GOOGLE REVIEW</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Center Bottom SCROLL Indicator (from Screenshot 2) */}
          <div className="mt-10 pb-2 flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => scrollToSection('about', 'ABOUT US')}
              className="group flex flex-col items-center gap-2 text-[#c49f80] hover:text-[#d8ad60] transition cursor-pointer"
            >
              <span className="font-sans-ui text-[9.5px] tracking-[0.28em] uppercase">
                SCROLL
              </span>
              <span className="w-[1px] h-7 bg-gradient-to-b from-[#d8ad60]/60 to-transparent" />
            </button>
          </div>
        </div>

        {/* Bottom Marquee Ticker Bar (Screenshot 2) */}
        <div className="border-t border-b border-[#d8ad60]/20 bg-[#43151b]/90 py-3.5 overflow-hidden">
          <div className="animate-marquee-slow flex items-center">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center">
                {[
                  'Pongal & Vada',
                  'Rava Dosa',
                  'The Family Dosa',
                  'Vegetarian Meals',
                  'Sweets & Savouries',
                  'Highway Dining, 24×7',
                  'Hot Filter Coffee',
                  'Madurai Jigarthanda',
                ].map((item) => (
                  <span
                    key={`${dup}-${item}`}
                    className="inline-flex items-center font-serif-editorial italic text-[17px] sm:text-[18.5px] text-[#f5ebe1] tracking-wide mx-5"
                  >
                    <span>{item}</span>
                    <span className="text-[#c59b52] text-[11px] ml-10 not-italic">★</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 2: OUR STORY & 3 PILLARS (Screenshot 3)
      =================================================================== */}
      <section id="about" className="bg-cream-story py-20 lg:py-28">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Story Copy */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-[1px] bg-[#c59b52]" />
                <span className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase text-[#a67c38]">
                  OUR STORY
                </span>
              </div>

              <h2 className="font-serif-display text-[38px] sm:text-[46px] leading-[1.12] text-[#1e1214] font-normal">
                Rooted in Tirunelveli.
                <span className="block font-serif-display italic text-[#651d25] font-normal mt-0.5">
                  Blooming in Madurai.
                </span>
              </h2>

              <p className="font-sans-ui text-[#5a4d46] text-[15px] sm:text-[15.5px] leading-[1.75] mt-6">
                Temple City Hotels has been serving authentic South Indian cuisine for
                nearly two decades — a blend of rich culinary heritage, quality food and
                warm hospitality. Located in the city of Temples, our inviting restaurants
                are perfect for any occasion, featuring dishes crafted with fresh
                ingredients by talented chefs.
              </p>

              <p className="font-sans-ui text-[#5a4d46] text-[15px] sm:text-[15.5px] leading-[1.75] mt-4">
                Enjoy the diverse flavours of Tirunelveli and Madurai in a cozy atmosphere
                — whether for a quiet dinner or a lively gathering.
              </p>

              <button
                type="button"
                onClick={() => setInfoModal('STORY')}
                className="mt-7 inline-flex items-center gap-2.5 font-sans-ui text-[11.5px] font-bold tracking-[0.16em] uppercase text-[#4b1920] pb-2 border-b border-[#c59b52] hover:text-[#a67c38] transition cursor-pointer"
              >
                <span>DISCOVER OUR JOURNEY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right Column: Dual Staggered Arch Images (Screenshot 3) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-5 items-start">
                {/* Left Arch Card (Higher, with white bottom bar as in Screenshot 3) */}
                <div className="rounded-t-full bg-white shadow-[0_12px_35px_rgba(44,15,19,0.08)] overflow-hidden pb-9">
                  <img
                    src={IMAGES.storySnacks}
                    alt="Traditional Tirunelveli snacks and murukku"
                    className="w-full aspect-[254/348] object-cover"
                  />
                </div>

                {/* Right Arch Card (Shifted Down ~40px as in Screenshot 3) */}
                <div className="mt-8 sm:mt-10 rounded-t-full bg-white shadow-[0_12px_35px_rgba(44,15,19,0.08)] overflow-hidden">
                  <img
                    src={IMAGES.storyMeal}
                    alt="Traditional South Indian meal served on banana leaf"
                    className="w-full aspect-[254/358] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3 Numbered Feature Cards (01 Innovation, 02 Tradition, 03 Quality & Freshness) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-20">
            {[
              {
                num: '01',
                title: 'Innovation',
                desc: 'We push culinary boundaries, from unique flavors to innovative techniques, aiming to deliver unforgettable experiences.',
              },
              {
                num: '02',
                title: 'Tradition',
                desc: 'Our dishes honor heritage, perfected with recipes passed down through generations, celebrating timeless flavors.',
              },
              {
                num: '03',
                title: 'Quality & Freshness',
                desc: 'We serve food with the freshest local ingredients, ensuring each bite reflects our commitment to quality and delight.',
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="bg-white rounded-2xl border border-[#ece2d6] p-7 sm:p-8 shadow-[0_4px_20px_rgba(44,15,19,0.03)] hover:shadow-[0_10px_28px_rgba(44,15,19,0.07)] transition"
              >
                <div className="font-serif-display text-[13px] tracking-[0.18em] text-[#c59b52] font-semibold">
                  {pillar.num}
                </div>
                <h3 className="font-serif-display text-[21px] text-[#1e1214] mt-3 font-medium">
                  {pillar.title}
                </h3>
                <p className="font-sans-ui text-[13.5px] text-[#665952] leading-[1.68] mt-2.5">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 3: SIGNATURE FLAVOURS (Screenshot 4)
      =================================================================== */}
      <section id="menu" className="bg-cream-Warm py-20 lg:py-24">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-[1px] bg-[#c59b52]" />
                <span className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase text-[#a67c38]">
                  SIGNATURE FLAVOURS
                </span>
              </div>
              <h2 className="font-serif-display text-[38px] sm:text-[46px] leading-[1.1] text-[#1e1214] font-normal">
                Made to be{' '}
                <span className="italic text-[#651d25] font-normal">remembered</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => setMenuModalOpen(true)}
                className="bg-[#581c23] hover:bg-[#6e232c] text-[#fcf5ef] font-sans-ui text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition shadow-sm cursor-pointer"
              >
                <span>EXPLORE FULL MENU</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setCartOpen(true)}
                className="border border-[#581c23]/30 hover:border-[#581c23] bg-transparent text-[#3a161b] font-sans-ui text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#581c23]" />
                <span>ORDER ONLINE</span>
              </button>
            </div>
          </div>

          {/* 3x2 Grid: 5 Dish Cards + 1 Dark Maroon Jigarthanda Feature Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIGNATURE_DISHES.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setMenuModalOpen(true)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e6dacb] shadow-[0_4px_18px_rgba(44,15,19,0.04)] hover:shadow-[0_14px_32px_rgba(44,15,19,0.10)] transition flex flex-col cursor-pointer"
              >
                {/* Dish Image with Overlay Pill Badges */}
                <div className="relative h-[196px] overflow-hidden bg-[#2c0f13]">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {/* Top-Left Category Pill */}
                  <span className="absolute top-3.5 left-3.5 bg-[#541e22]/90 backdrop-blur-xs text-[#fcf5ef] font-sans-ui text-[9.5px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full">
                    {dish.category}
                  </span>
                  {/* Optional Top-Right Pill (HOUSE FAVOURITE) */}
                  {dish.badgeRight && (
                    <span className="absolute top-3.5 right-3.5 bg-[#b89758]/95 text-[#2c0f13] font-sans-ui text-[9.5px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full">
                      {dish.badgeRight}
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-[21px] text-[#1e1214] font-medium">
                      {dish.title}
                    </h3>
                    <p className="font-sans-ui text-[13.5px] text-[#665952] leading-[1.6] mt-2">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* 6th Card: Dark Maroon Madurai Jigarthanda Quote Card (Screenshot 4 bottom-right) */}
            <div
              onClick={() => setMenuModalOpen(true)}
              className="bg-maroon-dotted rounded-2xl p-7 text-[#fcf5ef] flex flex-col justify-between shadow-[0_10px_28px_rgba(44,15,19,0.18)] cursor-pointer hover:scale-[1.01] transition"
            >
              <div>
                {/* Outlined Gold Quote Mark */}
                <div className="text-[#c59b52] font-serif-display text-3xl leading-none mb-4 select-none">
                  <svg className="w-7 h-7 stroke-[#c59b52] fill-none stroke-[1.6]" viewBox="0 0 24 24">
                    <path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7c0 2.21-1.79 4-4 4" />
                    <path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7c0 2.21-1.79 4-4 4" />
                  </svg>
                </div>

                <p className="font-serif-editorial italic text-[20px] leading-[1.45] text-[#fcf5ef]">
                  &ldquo;Had the authentic Jigarthanda. Superb taste. Best hotel in
                  Madurai.&rdquo;
                </p>

                <div className="flex items-center gap-1.5 mt-4 font-sans-ui text-[10px] font-bold tracking-[0.18em] uppercase text-[#d8ad60]">
                  <span>★</span>
                  <span>GOOGLE REVIEW</span>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-[#d8ad60]/20">
                <h3 className="font-serif-display text-[21px] text-[#fcf5ef] font-medium">
                  Madurai Jigarthanda
                </h3>
                <p className="font-sans-ui text-[13px] text-[#d9c5b2] leading-[1.55] mt-1.5">
                  The city&apos;s iconic cooler — layered, silky and unmistakably Madurai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 4: OUR BRANCHES (Screenshot 5)
      =================================================================== */}
      <section id="locations" className="bg-maroon-dotted py-20 lg:py-24 text-[#fcf5ef]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-11">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-[1px] bg-[#d8ad60]" />
                <span className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase text-[#d8ad60]">
                  OUR BRANCHES
                </span>
              </div>
              <h2 className="font-serif-display text-[36px] sm:text-[46px] leading-[1.1] text-[#fcf5ef] font-normal">
                Find us across the{' '}
                <span className="italic text-[#d8ad60] font-normal">
                  city &amp; highways
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Filter Pills + All 16 Locations CTA matching Screenshot 5 */}
              {branchFilter !== 'ALL' && (
                <button
                  type="button"
                  onClick={() => setBranchFilter('ALL')}
                  className="text-xs font-sans-ui uppercase tracking-wider text-[#d8ad60] underline mr-2 cursor-pointer"
                >
                  Reset Filter
                </button>
              )}
              <button
                type="button"
                onClick={() =>
                  setBranchFilter((prev) =>
                    prev === 'ALL' ? 'CITY' : prev === 'CITY' ? 'HIGHWAY' : 'ALL'
                  )
                }
                className="bg-[#c4a05a] hover:bg-[#d2af68] text-[#2c0f13] font-sans-ui text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition shadow-md cursor-pointer"
              >
                <span>
                  {branchFilter === 'ALL'
                    ? 'ALL 16 LOCATIONS'
                    : branchFilter === 'CITY'
                    ? 'SHOWING 8 CITY BRANCHES'
                    : 'SHOWING 8 HIGHWAY STOPS'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4x4 Grid of 16 Branch Cards (Exact match to Screenshot 5) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredBranches.map((branch) => (
              <button
                key={branch.id}
                type="button"
                onClick={() => setSelectedBranch(branch)}
                className="group text-left rounded-xl border border-[#d8ad60]/20 bg-[#521c23]/75 hover:bg-[#5e2129] hover:border-[#d8ad60]/55 px-5 py-4.5 flex items-center justify-between transition cursor-pointer"
              >
                <div>
                  <div className="font-serif-display text-[16.5px] text-[#fcf5ef] group-hover:text-[#d8ad60] transition font-medium">
                    {branch.name}
                  </div>
                  <div className="font-sans-ui text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#c49f80] mt-1.5">
                    {branch.type}
                  </div>
                </div>
                <MapPin className="w-4 h-4 text-[#d8ad60]/80 group-hover:text-[#d8ad60] group-hover:scale-110 transition shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 5: GUEST REVIEWS (Screenshot 6)
      =================================================================== */}
      <section id="reviews" className="bg-cream-Warm py-20 lg:py-24">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-[1px] bg-[#c59b52]" />
                <span className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase text-[#a67c38]">
                  GUEST REVIEWS
                </span>
              </div>
              <h2 className="font-serif-display text-[36px] sm:text-[46px] leading-[1.1] text-[#1e1214] font-normal">
                What Madurai{' '}
                <span className="italic text-[#651d25] font-normal">says about us</span>
              </h2>
            </div>

            {/* Watch Our Advertisement Button (Screenshot 6 top-right) */}
            <button
              type="button"
              onClick={() => setAdModalOpen(true)}
              className="group inline-flex items-center gap-3.5 text-left cursor-pointer"
            >
              <span className="w-11 h-11 rounded-full bg-[#581c23] group-hover:bg-[#6e232c] text-[#fcf5ef] flex items-center justify-center shadow-md transition group-hover:scale-105">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </span>
              <span className="font-sans-ui text-[11px] font-bold tracking-[0.16em] uppercase text-[#2c1216] group-hover:text-[#651d25] transition">
                WATCH OUR ADVERTISEMENT
              </span>
            </button>
          </div>

          {/* 3x2 Grid of 5 White Review Cards + 1 Dark Maroon Summary Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl border border-[#ece2d6] p-7 flex flex-col justify-between shadow-[0_4px_18px_rgba(44,15,19,0.03)]"
              >
                <div>
                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1 text-[#c59b52] text-[14px] mb-4">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <p className="font-sans-ui text-[13.5px] text-[#524640] leading-[1.7]">
                    {rev.text}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 mt-4">
                  <span className="font-serif-display text-[14.5px] font-bold text-[#1e1214]">
                    {rev.author}
                  </span>
                  <span className="font-sans-ui text-[10px] font-semibold tracking-[0.14em] uppercase text-[#8c7e75]">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}

            {/* 6th Card: Dark Maroon Google Reviews Card (Screenshot 6 bottom-right) */}
            <div className="bg-maroon-dotted rounded-2xl p-7 sm:p-8 text-[#fcf5ef] flex flex-col justify-between shadow-[0_10px_28px_rgba(44,15,19,0.18)]">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-[1px] bg-[#d8ad60]" />
                  <span className="font-sans-ui text-[10.5px] font-semibold tracking-[0.22em] uppercase text-[#d8ad60]">
                    GOOGLE REVIEWS
                  </span>
                </div>
                <p className="font-serif-editorial italic text-[24px] sm:text-[26px] leading-[1.35] text-[#fcf5ef]">
                  Vegetarian dining, loved by travellers and locals alike.
                </p>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => scrollToSection('locations', 'LOCATIONS')}
                  className="inline-flex items-center gap-2 font-sans-ui text-[11px] font-bold tracking-[0.16em] uppercase text-[#fcf5ef] pb-2 border-b border-[#d8ad60] hover:text-[#d8ad60] transition cursor-pointer"
                >
                  <span>READ ALL REVIEWS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d8ad60]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 6: VISIT · ORDER · CELEBRATE CTA BANNER (Screenshot 7 Top)
      =================================================================== */}
      <section
        id="visit-cta"
        className="bg-cream-Warm border-t border-[#e2d6c5] py-16 lg:py-20"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-[580px]">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-[1px] bg-[#c59b52]" />
                <span className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase text-[#a67c38]">
                  VISIT · ORDER · CELEBRATE
                </span>
              </div>

              <h2 className="font-serif-display text-[36px] sm:text-[46px] leading-[1.12] text-[#1e1214] font-normal">
                Hunger has an address.{' '}
                <span className="italic text-[#651d25] font-normal">
                  Eighteen of them.
                </span>
              </h2>

              <p className="font-sans-ui text-[15px] text-[#5a4d46] leading-[1.68] mt-4">
                Walk in for a meal, order online from our food products store, or plan
                your celebration with us.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => scrollToSection('locations', 'LOCATIONS')}
                className="bg-[#581c23] hover:bg-[#6e232c] text-[#fcf5ef] font-sans-ui text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-4 rounded-full inline-flex items-center gap-2.5 transition shadow-sm cursor-pointer"
              >
                <span>FIND A LOCATION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setCartOpen(true)}
                className="border border-[#581c23]/30 hover:border-[#581c23] bg-transparent text-[#2c1216] font-sans-ui text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-4 rounded-full inline-flex items-center gap-2 transition cursor-pointer"
              >
                <span>ORDER ONLINE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 7: FOOTER (Screenshot 7 Bottom)
      =================================================================== */}
      <footer id="footer" className="bg-maroon-dotted text-[#fcf5ef] pt-16 pb-10">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14">
            {/* Column 1: Brand, Tamil Quote, Bio, Social Icons */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <GopuramLogo scrolled={false} />
                <div>
                  <div className="font-serif-display text-[17.5px] tracking-[0.06em] font-semibold text-[#fcf5ef]">
                    HOTEL TEMPLE CITY
                  </div>
                  <div className="font-sans-ui text-[9.5px] tracking-[0.22em] uppercase text-[#d8ad60] mt-0.5">
                    MADURAI · TAMIL NADU
                  </div>
                </div>
              </div>

              <p className="font-tamil text-[#d8ad60] text-[14.5px] leading-[1.6] mt-5">
                நித்திரை இல்லா நகரில் முத்திரை
                <br />
                பதிக்கும் உணவகம்
              </p>
              <p className="font-sans-ui italic text-[12px] text-[#c49f80] mt-1">
                the restaurant that leaves its mark on the sleepless city
              </p>

              <p className="font-sans-ui text-[13px] text-[#dfcfc0]/85 leading-[1.68] mt-4 max-w-[310px]">
                Madurai&apos;s Largest Food Chain — nearly two decades of authentic South
                Indian hospitality in the City of Temples.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-2.5 mt-6">
                {[
                  { label: 'Facebook', icon: Facebook },
                  { label: 'Instagram', icon: Instagram },
                  { label: 'LinkedIn', icon: Linkedin },
                  { label: 'YouTube', icon: Youtube },
                ].map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <button
                      key={soc.label}
                      type="button"
                      onClick={() => setAdModalOpen(true)}
                      aria-label={soc.label}
                      className="w-9 h-9 rounded-full border border-[#d8ad60]/25 hover:border-[#d8ad60] text-[#e8d8c8] hover:text-[#d8ad60] flex items-center justify-center transition cursor-pointer"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 2: EXPLORE */}
            <div className="lg:col-span-2">
              <h3 className="font-serif-display text-[12px] tracking-[0.2em] uppercase text-[#d8ad60] mb-4">
                EXPLORE
              </h3>
              <ul className="space-y-2.5 font-sans-ui text-[13.5px] text-[#e8d8c8]/90">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className="hover:text-[#d8ad60] transition cursor-pointer"
                    >
                      {item.label
                        .toLowerCase()
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: OUR FAMILY */}
            <div className="lg:col-span-3">
              <h3 className="font-serif-display text-[12px] tracking-[0.2em] uppercase text-[#d8ad60] mb-4">
                OUR FAMILY
              </h3>
              <ul className="space-y-2.5 font-sans-ui text-[13.5px] text-[#e8d8c8]/90">
                {SISTER_CONCERNS.map((sc) => (
                  <li key={sc.name}>
                    <button
                      type="button"
                      onClick={() => setInfoModal('SISTER')}
                      className="hover:text-[#d8ad60] transition text-left cursor-pointer"
                    >
                      {sc.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: REACH US */}
            <div className="lg:col-span-3">
              <h3 className="font-serif-display text-[12px] tracking-[0.2em] uppercase text-[#d8ad60] mb-4">
                REACH US
              </h3>
              <div className="space-y-3.5 font-sans-ui text-[13.5px] text-[#e8d8c8]/90">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#d8ad60] shrink-0 mt-1" />
                  <span>
                    Parent branch — Opp. Mattuthavani Integrated Bus Stand, Madurai,
                    Tamil Nadu
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#d8ad60] shrink-0" />
                  <a href="tel:+916384899333" className="hover:text-[#d8ad60] transition">
                    +91 63848 99333
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCartOpen(true)}
                className="mt-6 bg-[#c4a05a] hover:bg-[#d2af68] text-[#2c0f13] font-sans-ui text-[11px] font-bold tracking-[0.14em] uppercase px-6 py-3 rounded-full inline-flex items-center gap-2 transition shadow-sm cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>ORDER ONLINE</span>
              </button>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="border-t border-[#d8ad60]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans-ui text-[11.5px] text-[#c49f80]/80">
            <div>© 2026 Hotel Temple City, Madurai. All rights reserved.</div>
            <div>Design concept prepared for presentation to the business owner.</div>
          </div>
        </div>
      </footer>

      {/* ===================================================================
          INTERACTIVE MODAL 1: FULL FOOD MENU MODAL
      =================================================================== */}
      {menuModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fcf5ef] rounded-3xl max-w-4xl w-full max-h-[88vh] flex flex-col overflow-hidden shadow-2xl border border-[#d8ad60]/30">
            <div className="bg-maroon-dotted px-6 py-5 text-[#fcf5ef] flex items-center justify-between">
              <div>
                <span className="font-sans-ui text-[10px] tracking-[0.22em] uppercase text-[#d8ad60] block">
                  HOTEL TEMPLE CITY · MADURAI
                </span>
                <h3 className="font-serif-display text-2xl mt-0.5">
                  Signature South Indian Menu
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setMenuModalOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="px-6 py-3.5 bg-[#f4eade] border-b border-[#e2d6c5] flex flex-wrap gap-2">
              {[
                'ALL',
                'TIFFIN & DOSAS',
                'WHOLESOME MEALS',
                'BEVERAGES',
                'SWEETS & SAVOURIES',
              ].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setMenuCategory(cat)}
                  className={`px-4 py-1.5 rounded-full font-sans-ui text-[11px] font-bold tracking-wider uppercase transition cursor-pointer ${
                    menuCategory === cat
                      ? 'bg-[#581c23] text-[#fcf5ef]'
                      : 'bg-white text-[#581c23] hover:bg-[#e9dccb]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Dish List */}
            <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMenu.map((item) => {
                const qty = cart[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-4 border border-[#e6dacb] flex gap-4 items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-serif-display text-lg text-[#1e1214] font-medium truncate">
                          {item.title}
                        </h4>
                        <span className="font-sans-ui font-bold text-sm text-[#651d25]">
                          ₹{item.price}
                        </span>
                      </div>
                      <p className="font-sans-ui text-xs text-[#665952] line-clamp-2 mt-1">
                        {item.description}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[10px] font-sans-ui uppercase tracking-wider text-[#a67c38] font-semibold">
                          {item.category}
                        </span>
                        {qty === 0 ? (
                          <button
                            type="button"
                            onClick={() => updateCart(item.id, 1)}
                            className="bg-[#c4a05a] hover:bg-[#d2af68] text-[#2c0f13] font-sans-ui text-[11px] font-bold px-3.5 py-1 rounded-full cursor-pointer"
                          >
                            + ADD
                          </button>
                        ) : (
                          <div className="inline-flex items-center gap-2 bg-[#581c23] text-white px-2.5 py-1 rounded-full text-xs">
                            <button
                              type="button"
                              onClick={() => updateCart(item.id, -1)}
                              className="cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-bold">{qty}</span>
                            <button
                              type="button"
                              onClick={() => updateCart(item.id, 1)}
                              className="cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="px-6 py-4 bg-[#f4eade] border-t border-[#e2d6c5] flex items-center justify-between">
              <div className="font-sans-ui text-sm text-[#3a161b]">
                <span className="font-bold">{cartCount} items</span> in order · Total{' '}
                <span className="font-bold text-[#651d25]">₹{cartTotal}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMenuModalOpen(false);
                  setCartOpen(true);
                }}
                className="bg-[#581c23] hover:bg-[#6e232c] text-white font-sans-ui text-xs font-bold tracking-wider uppercase px-6 py-2.5 rounded-full cursor-pointer"
              >
                PROCEED TO ORDER →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          INTERACTIVE MODAL 2: ONLINE ORDER CART DRAWER
      =================================================================== */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="bg-[#fcf5ef] w-full max-w-md h-full flex flex-col shadow-2xl">
            <div className="bg-maroon-dotted px-6 py-5 text-[#fcf5ef] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-[#d8ad60]" />
                <h3 className="font-serif-display text-xl">Order Online</h3>
              </div>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              {orderPlaced ? (
                <div className="bg-white rounded-2xl p-6 border border-[#c59b52] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#581c23] text-[#d8ad60] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-display text-2xl text-[#1e1214]">
                    Order Confirmed!
                  </h4>
                  <p className="font-sans-ui text-sm text-[#665952]">
                    Your freshly prepared South Indian meal from Hotel Temple City
                    (Mattuthavani Parent Branch) is being readied.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setOrderPlaced(false);
                      setCartOpen(false);
                    }}
                    className="mt-2 bg-[#c4a05a] text-[#2c0f13] font-sans-ui text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : Object.keys(cart).length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <p className="font-serif-display text-xl text-[#5a4d46]">
                    Your basket is empty
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setCartOpen(false);
                      setMenuModalOpen(true);
                    }}
                    className="bg-[#581c23] text-white font-sans-ui text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full cursor-pointer"
                  >
                    Browse Signature Menu
                  </button>
                </div>
              ) : (
                Object.entries(cart).map(([id, qty]) => {
                  const dish = ALL_MENU_ITEMS.find((d) => d.id === id);
                  if (!dish) return null;
                  return (
                    <div
                      key={id}
                      className="bg-white rounded-xl p-4 border border-[#e6dacb] flex items-center justify-between gap-3"
                    >
                      <img
                        src={dish.image}
                        alt={dish.title}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-serif-display font-medium text-[#1e1214]">
                          {dish.title}
                        </div>
                        <div className="font-sans-ui text-xs text-[#665952]">
                          ₹{dish.price} × {qty} = ₹{dish.price * qty}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-[#f4eade] px-2.5 py-1 rounded-full text-xs font-bold">
                        <button
                          type="button"
                          onClick={() => updateCart(id, -1)}
                          className="cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span>{qty}</span>
                        <button
                          type="button"
                          onClick={() => updateCart(id, 1)}
                          className="cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {!orderPlaced && Object.keys(cart).length > 0 && (
              <div className="p-6 bg-[#f4eade] border-t border-[#e2d6c5] space-y-3">
                <div className="flex items-center justify-between font-sans-ui text-sm">
                  <span className="text-[#5a4d46]">Total Payable</span>
                  <span className="font-bold text-lg text-[#581c23]">₹{cartTotal}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setOrderPlaced(true)}
                  className="w-full bg-[#c4a05a] hover:bg-[#d2af68] text-[#2c0f13] font-sans-ui text-xs font-bold tracking-[0.15em] uppercase py-3.5 rounded-full transition shadow-md cursor-pointer"
                >
                  PLACE INSTANT ORDER · ₹{cartTotal}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===================================================================
          INTERACTIVE MODAL 3: BRANCH DETAILS MODAL
      =================================================================== */}
      {selectedBranch && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fcf5ef] rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-[#d8ad60]/40">
            <div className="bg-maroon-dotted p-6 text-[#fcf5ef] flex items-start justify-between">
              <div>
                <span className="font-sans-ui text-[10px] font-bold tracking-[0.2em] uppercase text-[#d8ad60]">
                  {selectedBranch.type} BRANCH
                </span>
                <h3 className="font-serif-display text-2xl mt-1">
                  {selectedBranch.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBranch(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4 font-sans-ui text-sm text-[#4a3e38]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#651d25] shrink-0 mt-1" />
                <span>{selectedBranch.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#651d25] shrink-0" />
                <span>Open Daily: {selectedBranch.hours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#651d25] shrink-0" />
                <span>+91 63848 99333</span>
              </div>
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#a67c38] mb-2">
                  Branch Highlights
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedBranch.features.map((f) => (
                    <span
                      key={f}
                      className="bg-[#f4eade] text-[#581c23] text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedBranch(null);
                    setCartOpen(true);
                  }}
                  className="bg-[#581c23] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full cursor-pointer"
                >
                  Order from this Branch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          INTERACTIVE MODAL 4: ADVERTISEMENT & SISTER CONCERNS / FUEL / EVENTS
      =================================================================== */}
      {adModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-maroon-dotted border border-[#d8ad60]/40 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl text-[#fcf5ef]">
            <div className="px-6 py-4 border-b border-[#d8ad60]/20 flex items-center justify-between">
              <span className="font-sans-ui text-xs tracking-[0.2em] uppercase text-[#d8ad60]">
                HOTEL TEMPLE CITY · COMMERCIAL SHOWCASE
              </span>
              <button
                type="button"
                onClick={() => setAdModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-8 text-center space-y-5">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#2c0f13] border border-[#d8ad60]/25">
                <img
                  src={IMAGES.heroDosa}
                  alt="Hotel Temple City Brand Film"
                  className="w-full h-full object-cover opacity-65"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-[#2c0f13] via-transparent to-transparent">
                  <p className="font-tamil text-[#d8ad60] text-lg font-medium">
                    நித்திரை இல்லா நகரில் முத்திரை பதிக்கும் உணவகம்
                  </p>
                  <h4 className="font-serif-display text-2xl sm:text-3xl mt-2">
                    20 Years of Madurai&apos;s Finest Hospitality
                  </h4>
                  <p className="font-sans-ui text-xs text-[#e8d8c8] mt-2 max-w-md">
                    From our parent branch opposite Mattuthavani Bus Stand to 18 landmark
                    locations across city &amp; national highways.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setAdModalOpen(false)}
                className="bg-[#c4a05a] text-[#2c0f13] font-sans-ui text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {infoModal && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fcf5ef] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#d8ad60]/30">
            <div className="bg-maroon-dotted px-6 py-5 text-[#fcf5ef] flex items-center justify-between">
              <div>
                <span className="font-sans-ui text-[10px] tracking-[0.2em] uppercase text-[#d8ad60] block">
                  HOTEL TEMPLE CITY FAMILY
                </span>
                <h3 className="font-serif-display text-2xl mt-0.5">
                  {infoModal === 'FUEL' && '7+ Highway Fuel & EV Supercharging Hubs'}
                  {infoModal === 'SISTER' && 'Our Sister Concerns & Hospitality Family'}
                  {infoModal === 'EVENTS' && 'Banquet Halls & Celebration Catering'}
                  {infoModal === 'STORY' && 'Our Culinary Journey: Tirunelveli to Madurai'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInfoModal(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
              {infoModal === 'SISTER' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SISTER_CONCERNS.map((sc) => (
                    <div
                      key={sc.name}
                      className="bg-white p-4 rounded-xl border border-[#e6dacb]"
                    >
                      <span className="text-[10px] font-sans-ui font-bold tracking-widest text-[#a67c38] uppercase">
                        {sc.tag}
                      </span>
                      <h4 className="font-serif-display text-lg text-[#1e1214] mt-1">
                        {sc.name}
                      </h4>
                      <p className="font-sans-ui text-xs text-[#665952] mt-1.5 leading-relaxed">
                        {sc.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {infoModal === 'FUEL' && (
                <div className="space-y-3 font-sans-ui text-sm text-[#4a3e38]">
                  <p>
                    Travelling across Tamil Nadu? Our 7+ Highway Plazas along NH 44, NH
                    38, NH 744, and NH 87 pair 24×7 pure vegetarian dining with:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>High-speed DC Fast EV Chargers &amp; 24×7 Fuel Stations</li>
                    <li>Shaded parking bays for cars &amp; tourist coaches</li>
                    <li>Clean, attendant-maintained luxury restrooms &amp; Children Parks</li>
                    <li>Temple City Box Stays for quick highway overnight rest</li>
                  </ul>
                </div>
              )}
              {infoModal === 'EVENTS' && (
                <div className="space-y-3 font-sans-ui text-sm text-[#4a3e38]">
                  <p>
                    Host weddings, family celebrations, and corporate gatherings across
                    our AC Banquet Halls in Mattuthavani, Uthangudi, and Surveyor Colony.
                  </p>
                  <p className="font-semibold text-[#581c23]">
                    Direct Event &amp; Catering Helpline: +91 63848 99333
                  </p>
                </div>
              )}
              {infoModal === 'STORY' && (
                <div className="space-y-3 font-sans-ui text-sm text-[#4a3e38] leading-relaxed">
                  <p>
                    Founded nearly two decades ago with deep roots in Tirunelveli&apos;s
                    legendary culinary traditions, Hotel Temple City blossomed in Madurai
                    with a singular promise: uncompromising quality, generous banana-leaf
                    hospitality, and spotless dining around the clock.
                  </p>
                  <p>
                    Today, with 18 branches across Madurai city and surrounding national
                    highways, we proudly serve thousands of families, pilgrims, and
                    highway travellers every single day.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
