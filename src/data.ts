import { Project, BlogPost, Testimonial, FAQ, ServiceDetail } from "./types";

export const SERVICES: ServiceDetail[] = [
  {
    id: "ai-launchpad",
    number: "01",
    title: "AI Launchpad",
    description: "A complete visual and technical infrastructure build-out. We design and launch ultra-fast, high-end websites engineered for search engines and direct conversions, fully powered by custom AI integrations.",
    deliverables: [
      "Custom React & Vite Architecture",
      "Conversion Rate Optimization (CRO)",
      "High-converting Landing Pages",
      "Dynamic CRM & Appointment Integrations",
      "Local SEO Kathmandu Optimization",
      "Automated AI Chat Assistant Setup"
    ]
  },
  {
    id: "scale-engine",
    number: "02",
    title: "Scale Engine",
    description: "The ultimate hyper-growth marketing setup. We script, design, and run hyper-targeted Meta Ads and Google Ads campaigns that convert premium traffic into loyal, high-value clients.",
    deliverables: [
      "Meta Ads (Facebook & Instagram) Campaign Setup",
      "Creative Briefing & Ad Copy Writing",
      "Advanced Audience Demographics Mapping",
      "Detailed UTM Tracking & Conversions API",
      "Weekly Performance Analysis & Optimization",
      "A/B Testing Content Frameworks"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "newari-heritage",
    title: "Newari Heritage Dining",
    category: "Web Architecture + Local Scaling",
    image: "/image/work/newari.png",
    description: "Designed a premium culinary booking platform and high-converting local ad campaigns, scaling dine-in covers and weekend catering by 140% for Patan's premier Newari cultural restro.",
    year: "2026",
    client: "Newari Heritage Group",
    location: "Patan, Lalitpur",
    role: "Lead UI/UX Designer & Growth Strategist",
    services: ["UI/UX Redesign", "Vite App Architecture", "Local Meta Ads Strategy", "WhatsApp Lead funnels"],
    results: ["140% Increase in Dine-In Bookings", "3.8x Meta Ads ROAS", "Perfect 100/100 Lighthouse Performance Rating"],
    externalUrl: "https://poetic-croissant-a6d185.netlify.app/"
  },
  {
    id: "thakali-kitchen",
    title: "Jimbu Thakali Kitchen",
    category: "Meta Ads + Conversion Design",
    image: "/image/work/thakali.png",
    description: "Engineered a streamlined, high-speed digital menu ordering system and creative social campaign, boosting weekend reservations and premium takeout requests in Kathmandu.",
    year: "2025",
    client: "Jimbu Thakali Group",
    location: "Kathmandu, Nepal",
    role: "Full-Funnel growth marketer",
    services: ["Conversion-focused interactive Menu", "Local Event Promotion", "Retargeting Meta Campaigns", "Custom UTM Tracking & Analytics"],
    results: ["3x Weekend Table Reservations", "18,000+ Local Organic Brand Reach", "4.2x Paid Social Campaign ROI"],
    externalUrl: "https://aquamarine-travesseiro-11ad44.netlify.app/"
  },
  {
    id: "himalayan-hotel",
    title: "Himalayan Summit Resort",
    category: "High-End Booking Engines",
    image: "/image/work/Hotel.png",
    description: "Constructed an immersive, lightning-fast room booking application and digital visual strategy, raising luxury international reservations by 85% with zero agent commission leakage.",
    year: "2026",
    client: "Himalayan Summit Resorts Ltd.",
    location: "Pokhara / Sarangkot",
    role: "Lead Developer & System Architect",
    services: ["Premium Direct Booking Flows", "Automated Reservation Integrations", "Speed-Optimized Room Showcases", "International Ads Targeting"],
    results: ["85% Growth in Direct Bookings", "Zero Middleman Commission Leakage", "750ms Page Interactive Loading Speed"],
    externalUrl: "https://leafy-pixie-5e430d.netlify.app/"
  },
  {
    id: "nep-photography",
    title: "Nep.Photography Showcase",
    category: "Portfolio + Media CDN",
    image: "/image/work/photography.png",
    description: "An immersive, lightning-fast digital portfolio designed to make high-resolution travel photography load instantly, elevating booking inquiries globally.",
    year: "2025",
    client: "Nimesh Shrestha",
    location: "Kathmandu / Pokhara",
    role: "Web Design & Technical Architect",
    services: ["Media CDN Architecture", "Minimalist Framer Aesthetic", "SEO Portfolio Optimization", "Inbound Booking Funnel"],
    results: ["Interactive Image Galleries", "45% Growth in Overseas Client Inquiries", "100/100 Mobile Speed Rating"],
    externalUrl: "https://photography-demo-web.vercel.app/"
  },
  {
    id: "unique-crafts",
    title: "Unique Himalayan Crafts",
    category: "E-Commerce Scaling",
    image: "/image/work/unique.png",
    description: "Created a gorgeous, minimal e-commerce experience and international ad strategies for premium organic pashmina, copperware, and herbal tea collectors worldwide.",
    year: "2026",
    client: "Unique Crafts Association",
    location: "Kathmandu, Nepal",
    role: "E-Commerce Strategist & UI Designer",
    services: ["Bespoke Storefront Redesign", "International Stripe Integration", "Global Meta Ads Campaign Scaling", "Dynamic Retargeting Funnels"],
    results: ["+110% Year-over-Year Global Orders", "Cart Abandonment Drop of 24%", "Seamless Global Multi-Currency Checkout"],
    externalUrl: "https://bespoke-sopapillas-cd2872.netlify.app/"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Raj completely turned our restaurant's online presence around. We saw a 140% increase in dine-in bookings within two months of launching the new site and Meta Ads campaigns. His strategic advice on digital funnels saved us hours of daily admin.",
    author: "Suman Newa",
    role: "Operations Director",
    company: "Newari Heritage Dining"
  },
  {
    id: "t2",
    quote: "As a photographer, my portfolio is my life. Raj understood exactly how to make my images breathe while optimizing the page load speed to under 1 second. He designed a system that lets clients book and view packages seamlessly.",
    author: "Nimesh Shrestha",
    role: "Founder & Artist",
    company: "Nep.Photography"
  },
  {
    id: "t3",
    quote: "The scaling strategies implemented by Raj grew our table reservations and weekend dining bookings by 3x. Highly recommend his performance marketing expertise. He understands metrics that matter — not just likes, but actual revenue.",
    author: "Sarah Gurung",
    role: "Marketing Manager",
    company: "Jimbu Thakali Kitchen"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "q1",
    question: "What is your main background and where are you based?",
    answer: "I am Raj Shrestha, a senior AI Marketing Expert, Web Designer, and Meta Ads Strategist based in the historic capital Kathmandu, Nepal. I blend high-end visual web development with performance-driven marketing funnels to scale businesses locally and internationally."
  },
  {
    id: "q2",
    question: "What makes AI Launchpad different from regular web design?",
    answer: "AI Launchpad isn't just about setting up a template. We construct custom, lightweight React and Vite applications, optimize them with speed metrics, write high-converting copy using proven psychological frameworks, and integrate AI automations like auto-scheduling and auto-chatbots to convert traffic immediately."
  },
  {
    id: "q3",
    question: "Do you manage Meta (Facebook & Instagram) Ads campaigns?",
    answer: "Yes, under our Scale Engine service, we manage campaigns from start to finish. This includes creative copywriting, ad design briefing, custom audience setup, pixel tracking configuration, and ongoing performance optimization so that you get the highest possible return on investment."
  },
  {
    id: "q4",
    question: "How long does a typical Web Design and Ads setup take?",
    answer: "A standard AI Launchpad web build takes 3 to 4 weeks. If paired with the Scale Engine Meta Ads setup, we usually spend another week on pixel tracking setups, creative scripting, and conversion modeling before launching the first set of campaigns."
  },
  {
    id: "q5",
    question: "Can we track exact conversions and ROI of the campaigns?",
    answer: "Absolutely. I implement full-funnel tracking utilizing Meta's Conversions API and advanced UTM architectures. This means you will see exactly which ad, visual, or landing page variant led to an actual phone call, dental booking, reservation, or purchase."
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "meta-ads-nepal-2026",
    title: "The Future of Meta Ads in Nepal: 2026 Playbook",
    excerpt: "Discover the exact audience tactics and localized copywriting frameworks driving ultra-low CPA for Kathmandu and Pokhara service businesses in 2026.",
    content: `Meta Ads in Nepal are evolving at an incredible pace. What worked in 2024—broad interest targeting with simple poster graphics—no longer yields profitable ROAS. To win in 2026, advertisers must leverage localized storytelling, structured funneling, and direct WhatsApp / Conversion API tracking.

### 1. The Death of Broad-Interest Targeting
With Meta's system becoming highly automated, feeding the algorithm structured, compelling video creatives is much more effective than dialing in complex interest circles. The creative itself IS the targeting. 

### 2. Conversions API vs. Basic Pixel
With standard browser cookies being phased out, a server-side Conversions API integration is crucial. This guarantees you capture 100% of purchase, call, or application events even on newer iOS devices.

### 3. Local Copywriting Frameworks
Nepali audiences respond to authentic, local context. Integrating local colloquialisms, localized humor, and clear payment options (e.g., eSewa, Khalti, Cash on Delivery) directly in the ad image or video hook reduces friction by up to 40%.`,
    date: "June 24, 2026",
    readTime: "5 min read",
    category: "Meta Ads",
    image: "/image/meta.png"
  },
  {
    id: "ai-optimized-web-design",
    title: "Why Kathmandu Businesses Need AI-Optimized Websites",
    excerpt: "Static templates are costing you customers. Learn how custom speed architectures and AI chatbots can double your conversion rate overnight.",
    content: `The majority of local websites in Kathmandu suffer from slow host responses, heavy image templates, and generic copy. In a mobile-first market where internet speeds can fluctuate, every millisecond of lag translates to direct customer drop-off.

### 1. Speed is the Ultimate SEO Ranking Factor
If your website takes more than 2 seconds to load over a standard 4G network in Kathmandu, Google deprioritizes your search presence, and over 50% of your paid traffic clicks away before the landing page renders. Custom React/Vite builds achieve perfect 100/100 Lighthouse scores, loading in under 700ms.

### 2. The Power of Instant AI Appointment Scheduling
Integrating intelligent booking APIs directly on your homepage lets prospects book appointments (e.g., dental sessions, hotel rooms, dinner tables) in under 3 clicks. This eliminates back-and-forth phone calls and secures high-intent leads on the spot.

### 3. Smart Contextual Chatbots
Instead of generic 'contact forms', dynamic contextual chatbots answer frequently asked questions instantly in English or Nepali, qualifying leads 24/7. This creates an interactive client experience that builds immediate trust.`,
    date: "May 18, 2026",
    readTime: "4 min read",
    category: "Web Design",
    image: "/image/why kathmandu.png"
  },
  {
    id: "photography-portfolio-strategy",
    title: "Behind the Code: Portfolio Design for Visual Artists",
    excerpt: "How we engineered Nep.Photography's site to showcase high-res travel photography while keeping page load speeds under 1 second.",
    content: `Visual artists need high-resolution imagery, but browsers hate heavy assets. When designing Nep.Photography, the challenge was clear: preserve breathtaking, pixel-perfect fine art travel shots while keeping page load speeds under 1 second.

### 1. Edge-Cashing CDNs
By decoupling image assets from the main code and deploying them to edge-caching Content Delivery Networks (CDNs), we serve compressed WebP/AVIF images dynamically based on the viewer's device size and connection capability.

### 2. Typographic Sculpting
To match the minimal, editorial tone of high-end travel photography, we relied heavily on negative space and modern typography (Space Grotesk paired with a sleek Inter layout). This created an elegant Aiko aesthetic where the artwork does the heavy lifting.

### 3. The 'Discover' Overlay Pattern
We implemented interactive work cards with a full-bleed overlay hover state. The metadata (title, year, client) is kept off-screen until hover, keeping the viewer's focus solely on the artistic composition.`,
    date: "April 12, 2026",
    readTime: "6 min read",
    category: "Case Studies",
    image: "/image/visual artist.png"
  }
];
