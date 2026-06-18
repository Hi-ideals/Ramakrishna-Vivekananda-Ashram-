/* =========================================================
   SITE — single source of truth for all text, images, links
   Ramakrishna Vivekananda Ashrama, Bidar
   ========================================================= */

   const SITE = {
    org: {
      name: "Ramakrishna Vivekananda Ashrama, Bidar",
      shortName: "RKVA Bidar",
      tagline: "Atmano Mokshartham Jagad Hitaya Cha",
      taglineTranslation: "For one's own liberation and for the welfare of the world",
      logo: "assets/images/logo.svg", // place your logo file in assets/images/ and update this path/extension (e.g. .png, .webp)
      established: "2004",
      yearsOfService: 21,
      phone: "+91 9449274246",
      phoneHref: "+919449274246",
      email: "rkvabidar@gmail.com",
      address: "Dargah Road, Shivanagar North, Naubad, Bidar, Karnataka 585402, India",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1596.0653462701698!2d77.4947169680478!3d17.927277785187528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec13503564cf7%3A0x5ff17f652693aeba!2sRamakrishna%20Vivekananda%20Ashrama!5e0!3m2!1sen!2sin!4v1756124708694!5m2!1sen!2sin",
      social: {
        facebook: "https://www.facebook.com/rkvabidar/",
        instagram: "#",
        twitter: "#",
        youtube: "https://www.youtube.com/@ramakrishnavivekanandaashr1717/videos"
      },
      externalLink: {
        label: "Aarogyadhama",
        href: "https://rkvaarogyadhama.com/"
      }
    },
  
    nav: [
      { label: "Home", href: "index.html" },
      {
        label: "About", href: "about.html",
        children: [
          {
            label: "Our Inspiration", href: "inspiration.html",
            children: [
              { label: "Sri Ramakrishna", href: "inspiration.html#ramakrishna" },
              { label: "Sri Sarada Devi", href: "inspiration.html#sarada" },
              { label: "Swami Vivekananda", href: "inspiration.html#vivekananda" }
            ]
          },
          { label: "Ramakrishna Order", href: "about.html#order" },
          { label: "History of RKVA", href: "about.html" }
        ]
      },
      { label: "Activities", href: "activities.html" },
      { label: "Events", href: "events.html" },
      {
        label: "Donate", href: "donate.html",
        children: [
          { label: "Donations (Indian Citizens)", href: "donate.html#indian" },
          { label: "Donations (Foreign Citizens)", href: "donate.html#foreign" }
        ]
      },
      { label: "eBooks", href: "https://play.google.com/store/search?q=%23SRKAshramaMysore&c=books&pli=1", external: true },
      {
        label: "Media", href: "gallery.html",
        children: [
          { label: "Photo Gallery", href: "gallery.html#photos" },
          { label: "Video Gallery", href: "gallery.html#videos" }
        ]
      },
      { label: "News & Events", href: "events.html" },
      { label: "Contact", href: "contact.html" },
      { label: "Aarogyadhama ↗", href: "https://rkvaarogyadhama.com/", external: true, highlight: true }
    ],
  
    hero: [
      {
      image: "assets/images/Ashram1.webp",
        heading: "Welcome to Ramakrishna Vivekananda Ashrama",
        subheading: "A hub for meditation, education, and service activities inspired by Vedanta philosophy",
        cta: { label: "Know More", href: "about.html" }
      },
      {
      image: "assets/images/Ashram2.webp",
        heading: "Serving Humanity is Serving God",
        subheading: "Inspired by the teachings of Sri Ramakrishna and Swami Vivekananda",
        cta: { label: "Our Activities", href: "activities.html" }
      },
      {
      image: "assets/images/Ashram3.webp",
        heading: "Spiritual Seekers Welcome",
        subheading: "Join us for daily arati, meditation, scriptural classes, and festivals",
        cta: { label: "Visit Us", href: "contact.html" }
      },
      {
      image: "assets/images/Goshala-14.webp",
        heading: "Empowering Youth Through Education",
        subheading: "Scholarships, value-based programs, and youth camps for a better tomorrow",
        cta: { label: "Learn More", href: "activities.html" }
      },
      {
      image: "assets/images/Screenshot-509.webp",
        heading: "Support Our Sacred Mission",
        subheading: "Your contribution helps educate children and serve the underprivileged",
        cta: { label: "Donate Now", href: "donate.html" }
      }
    ],
  
    pillars: [
      {
        icon: "🕉",
        title: "Spiritual",
        desc: "Spreading the teachings of Sri Ramakrishna and Swami Vivekananda. Inspiring individuals to lead a life of service and harmony."
      },
      {
        icon: "📚",
        title: "Educational",
        desc: "Providing value-based education for intellectual and moral growth. Empowering youth through learning and character development."
      },
      {
        icon: "🏠",
        title: "Vidyarthi Bhavan",
        desc: "A center dedicated to the welfare and guidance of students. Offering mentorship, resources, and a nurturing environment."
      },
      {
        icon: "📖",
        title: "Publication",
        desc: "Publishing books and literature on spirituality and culture. Preserving and promoting the ideals of the Ramakrishna Movement."
      }
    ],
  
    about: {
      heading: "Welcome To Ramakrishna Vivekananda Ashrama, Bidar",
      body: "Ramakrishna Vivekananda Ashrama, Bidar, is a spiritual, educational, and service-oriented center inspired by the life and teachings of Sri Ramakrishna (1836–1886) and Swami Vivekananda (1863–1902). The Ashrama serves as a hub for spiritual seekers, devotees, students, and the general public, offering a serene atmosphere for prayer, meditation, and selfless service.",
      history: "The Ashrama in Bidar was officially established as a registered trust on 25 November 2004, in the Naubad area of Bidar, Karnataka. Founded by a group of devotees deeply inspired by the message of Sri Ramakrishna and Swami Vivekananda, it has since become a beacon of hope for the people of North Karnataka. Over the past two decades, the Ashrama has steadily grown from a small prayer gathering into a multi-faceted institution offering spiritual, educational, and welfare services to thousands of families across the region.",
      extendedHistory: "What began as informal satsangs in a modest rented space has, through the devotion of its founding members and the blessings of the Ramakrishna Order, grown into a permanent campus with a shrine, library, Vidyarthi Bhavan, and Goshala. Each phase of growth was guided by the same founding ideal: that work done in a spirit of service is itself a form of worship.",
      motto: "Atmano Mokshartham Jagad Hitaya Cha",
      mottoTranslation: "For one's own liberation and for the welfare of the world",
      images: [
      "assets/images/Screenshot-525.webp",
      "assets/images/Screenshot-523.webp",
      "assets/images/Screenshot-523.webp"
      ],
      ideals: [
        { title: "Work as Worship", desc: "Serving humanity as a form of divine worship." },
        { title: "Potential Divinity of the Soul", desc: "Belief that every being is inherently divine." },
        { title: "Harmony of Religions", desc: "Promoting unity, respect, and understanding among different faiths." }
      ],
      order: {
        heading: "The Ramakrishna Order",
        body: "The Ramakrishna Math and Ramakrishna Mission, founded by Swami Vivekananda in 1897, together form the Ramakrishna Order — a worldwide spiritual and humanitarian organization. The Math is devoted to the spiritual training of monks and the propagation of Vedanta, while the Mission carries out philanthropic, educational, and medical relief work. Ramakrishna Vivekananda Ashrama, Bidar draws its inspiration and guiding principles directly from the ideals first laid down by the Order."
      }
    },
  
    inspiration: [
      {
        id: "vivekananda",
        name: "Swami Vivekananda",
        years: "1863–1902",
      image: "assets/images/Swami_Vivekananda_Jaipur.webp",
        bio: "Swami Vivekananda was a key figure in the introduction of Indian philosophies of Vedanta and Yoga to the Western world. He was a chief disciple of Sri Ramakrishna and the founder of Ramakrishna Math and Ramakrishna Mission. His message of strength, self-reliance, and service to humanity continues to inspire millions worldwide.",
        extendedBio: "Born Narendranath Datta in Calcutta, he became the foremost disciple of Sri Ramakrishna and carried his master's message of the harmony of religions to the world stage at the 1893 Parliament of Religions in Chicago. He founded the Ramakrishna Mission in 1897 to combine spiritual practice with social service, famously declaring that service to humanity is itself a path to the divine. His writings and lectures remain foundational texts for the modern understanding of Vedanta.",
        quote: "Arise, awake and stop not until the goal is reached."
      },
      {
        id: "ramakrishna",
        name: "Sri Ramakrishna",
        years: "1836–1886",
      image: "assets/images/ramkrishan.webp",
        bio: "Sri Ramakrishna Paramahamsa was a 19th-century Indian mystic and saint who is regarded as a pivotal figure in the revival of Hinduism in modern India. His message emphasized the harmony of all religions and the attainment of God through different paths. He inspired generations with his direct experience of the divine.",
        extendedBio: "A priest at the Dakshineswar Kali Temple near Calcutta, Sri Ramakrishna practiced the disciplines of multiple religious traditions, including Christianity and Islam, and arrived at the realization that all paths lead to the same divine truth. His simple parables and direct spiritual experience drew a circle of devoted disciples, chief among them Narendranath Datta, who would become Swami Vivekananda and carry his teachings to the world.",
        quote: "The winds of grace are always blowing, but you have to raise the sail."
      },
      {
        id: "sarada",
        name: "Sri Sarada Devi",
        years: "1853–1920",
      image: "assets/images/Sri-Sarada-Devi.webp",
        bio: "Sri Sarada Devi, known as the Holy Mother, was the spiritual consort of Sri Ramakrishna. She is revered as the ideal of motherhood, purity, and compassion. Her teachings emphasized love, forgiveness, and the universal motherhood of God. She is considered the spiritual mother of all members of the Ramakrishna Order.",
        extendedBio: "After Sri Ramakrishna's passing, the Holy Mother became the guiding spiritual presence for his disciples, including Swami Vivekananda, who regarded her counsel as essential to the growth of the young Ramakrishna Order. Known for her boundless compassion and quiet strength, she treated all who came to her, regardless of caste or background, as her own children, embodying in practice the ideal of universal motherhood that she taught.",
        quote: "If you want peace, then do not look into the faults of others."
      }
    ],
  
    activities: [
      {
      icon: "assets/images/rkIcon1.png",
        title: "Spiritual Activities",
        shortDesc: "Daily Worship and Aarti, Meditation & Scriptural Classes, Festivals & Observances.",
        fullDesc: "Regular prayers, bhajans, and evening arati are performed at the shrine. Guided meditation sessions, group chanting, and study classes on the Bhagavad Gita, Upanishads, and the Complete Works of Swami Vivekananda. Celebration of Sri Ramakrishna Jayanti, Swami Vivekananda Jayanti (National Youth Day), Holy Mother Sarada Devi Jayanti, Kalpataru Day, Guru Purnima, and other cultural events."
      },
      {
      icon: "assets/images/Goshal-1.webp",
        title: "Goshala",
        shortDesc: "Feeding, medical care, and maintaining a safe environment for every cow.",
        fullDesc: "Our Goshala is a sanctuary for cows, reflecting the ancient Indian tradition of reverence for all life. We provide daily feeding, regular veterinary care, and a safe, clean environment. The Goshala is open to visitors and devotees who wish to participate in cow service as a spiritual practice."
      },
      {
      icon: "assets/images/rkIcon2.png",
        title: "Educational Support",
        shortDesc: "Value-Based Education Programs, Scholarships, Workshops & Youth Camps.",
        fullDesc: "Value-Based Education Programs for students promoting character building, discipline, and moral values. Scholarships and Educational Aid for economically challenged but deserving students. Workshops and Youth Camps to inspire self-confidence, leadership, and patriotism among the youth."
      },
      {
      icon: "assets/images/Social-Welfare-Activities.png",
        title: "Social & Welfare Activities",
        shortDesc: "Free Health Camps, Distribution of essentials, Relief Work.",
        fullDesc: "Free Health Camps in rural areas around Bidar. Distribution of Clothes, Books, and Essentials to underprivileged communities. Relief Work during natural calamities in nearby regions. These activities embody the Ashrama's core belief in serving God through service to mankind."
      },
      {
      icon: "assets/images/rkIcon3.png",
        title: "Book Sales",
        shortDesc: "Spiritual literature including teachings of Sri Ramakrishna, Sarada Devi, and Swami Vivekananda.",
        fullDesc: "The Ashrama provides a wide range of spiritual literature including the teachings of Sri Ramakrishna, Holy Mother Sarada Devi, Swami Vivekananda, and other Vedantic texts. Books are available at the Ashrama premises. These publications serve as a means to spread spiritual knowledge and moral values."
      },
      {
      icon: "assets/images/rkIcon1.png",
        title: "Yoga & Naturopathy Camps",
        shortDesc: "Free yoga and naturopathy camps for holistic health and wellness.",
        fullDesc: "We organize free yoga and naturopathy camps to promote holistic health and wellness for the community. These camps are open to all and are conducted by experienced practitioners in a serene, spiritually uplifting environment at the Ashrama."
      }
    ],
  
    dailyQuote: {
      text: "The moment I have realized God sitting in the temple of every human body, the moment I stand in reverence before every human being and see God in him — that moment I am free from bondage, everything that binds vanishes, and I am free.",
      author: "Swami Vivekananda",
    image: "assets/images/Vivekanada.webp"
    },
  
    aratiTimings: [
      {
        title: "Morning Arati",
        time: "6:00 AM",
        icon: "🌅",
      image: "assets/images/Screenshot-501.webp"
      },
      {
        title: "Evening Arati",
        time: "6:30 PM – 7:00 PM",
        icon: "🪔",
      image: "assets/images/moring.webp"
      },
      {
        title: "Special Days Arati",
        time: "6:00 PM – 7:00 PM",
        icon: "✨",
      image: "assets/images/Arati.webp"
      }
    ],
  
    donate: {
      heading: "Support Our Sacred Mission",
      body: "The ideology of Ramakrishna Vivekananda Ashrama Bidar finds expression through our multifarious activities — whether it be educating students at a school or nursing patients in a medical facility — each is considered a form of worship. All these activities are carried out as service — service to God in man.",
    image: "assets/images/rkvsa-1.webp",
      indian: {
        heading: "Donations – Indian Citizens",
        desc: "Indian donors can contribute via bank transfer, UPI, or cheque. All donations are eligible for tax exemption under 80G of the Income Tax Act.",
        bankDetails: {
          bankName: "State Bank of India",
        branch: "Noubad, Bidar",
          accountName: "Ramakrishna Vivekananda Ashrama Bidar",
        accountNumber: " 30118412023",
        ifsc: "585002402",
          upi: "rkvabidar@sbi"
        }
      },
      foreign: {
        heading: "Donations – Foreign Citizens",
        desc: "Foreign nationals can donate through FCRA-compliant channels. Please contact us directly at rkvabidar@gmail.com for wire transfer details and compliance documentation."
      }
    },
  
    news: [
      {
      image: "assets/images/samilana.webp",
        date: "2018-11-15",
        title: "126th Swami Vivekananda Jayanti Celebration at Bidar",
        excerpt: "The Ramakrishna Vivekananda Ashrama, Shivanagar, Bidar organized the 126th Swami Vivekananda Jayanti with great devotion and enthusiasm.",
        body: "The Ramakrishna Vivekananda Ashrama, Shivanagar, Bidar organized the 126th Swami Vivekananda Jayanti with great devotion and enthusiasm. The celebrations included special pujas at the shrine, devotional bhajans, and talks on the life and teachings of Swami Vivekananda. Devotees from across Bidar district gathered to take part in the day-long programme, which concluded with prasad distribution to all attendees.",
        link: "#"
      },
      {
      image: "assets/images/Vashant-1.webp",
        date: "2023-05-07",
        title: "2nd Batch Vasantha Vihara 2023 – A Nine-Day Spiritual Retreat",
        excerpt: "The Ashrama organized the 2nd Batch of Vasantha Vihara, a nine-day spiritual retreat drawing seekers from across Karnataka.",
        body: "The Ashrama organized the 2nd Batch of Vasantha Vihara, a nine-day spiritual retreat drawing seekers from across Karnataka. The retreat featured daily meditation sessions, scriptural discourses on the Bhagavad Gita, and group discussions on applying Vedantic principles to daily life. Participants stayed on campus for the full duration, following a disciplined daily schedule of prayer, study, and selfless service.",
        link: "#"
      },
      {
      image: "assets/images/adikmass.webp",
        date: "2023-05-13",
        title: "Adhyatmika Pravachana at Ramakrishna Vivekananda Ashrama, Bidar",
        excerpt: "The Ashrama hosted a three-day Adhyatmika Pravachana series featuring senior monks and spiritual scholars.",
        body: "The Ashrama hosted a three-day Adhyatmika Pravachana series featuring senior monks and spiritual scholars from the Ramakrishna Order. Each evening session covered a different theme from Vedantic philosophy, followed by a question-and-answer period for attendees. The series concluded with a special evening arati and community feast.",
        link: "#"
      }
      
    ],
  
    testimonials: [
      {
        name: "Anita R.",
        role: "Teacher",
        avatar: "https://picsum.photos/100/100?random=70",
        text: "The Ashrama has been a source of peace and inspiration in my life. The teachings of Swami Vivekananda and Sri Ramakrishna here have transformed my outlook completely."
      },
      {
        name: "Rajesh K.",
        role: "Entrepreneur",
        avatar: "https://picsum.photos/100/100?random=71",
        text: "I have attended several spiritual retreats here, and every visit leaves me with immense inner strength and clarity. A truly sacred place."
      },
      {
        name: "Dr. Meenakshi P.",
        role: "Social Worker",
        avatar: "https://picsum.photos/100/100?random=72",
        text: "The Ashrama's dedication to serving humanity through education and social welfare is truly commendable. I feel proud to be associated with it."
      },
      {
        name: "Sandeep M.",
        role: "IT Professional",
        avatar: "https://picsum.photos/100/100?random=73",
        text: "Meditation sessions at the Ashrama have brought balance and positivity into my daily life. I encourage everyone to visit at least once."
      },
      {
        name: "Priya S.",
        role: "Homemaker",
        avatar: "https://picsum.photos/100/100?random=74",
        text: "The selfless service rendered by the monks here is a living example of service to God in man. It is deeply inspiring to witness."
      }
    ],
  
    whatWeDo: {
      heading: "What We Do?",
      body: "Inspired by the teachings of Swami Vivekananda, Ramakrishna Vivekananda Ashrama Bidar was established to provide education and support to underprivileged children, especially those from economically backward families, tribal areas, drought-prone regions, and urban slums. The Ashrama's mission is to rehabilitate orphans, semi-orphans, street children, child laborers, and those forced to live in harsh conditions, offering quality education, safe shelter, medical care, nutritious food, and opportunities for overall development in a nurturing and hygienic environment."
    },
  
    gallery: {
      // Each photo is its own entry below. To add/replace a photo:
      // 1) Upload your image file into the assets/images/gallery/ folder
      // 2) Change the "image" line to point to that file, e.g. "assets/images/gallery/photo1.jpg"
      // 3) Change the "caption" line to describe the photo
      // To add a new photo, copy one whole { ... } block (including the comma after it) and paste it before the closing ].
      // To remove a photo, delete its whole { ... } block.
      photos: [
        { image: "https://picsum.photos/600/400?random=80", caption: "Ashrama Activity 1" },
        { image: "https://picsum.photos/600/400?random=81", caption: "Ashrama Activity 2" },
        { image: "https://picsum.photos/600/400?random=82", caption: "Ashrama Activity 3" },
        { image: "https://picsum.photos/600/400?random=83", caption: "Ashrama Activity 4" },
        { image: "https://picsum.photos/600/400?random=84", caption: "Ashrama Activity 5" },
        { image: "https://picsum.photos/600/400?random=85", caption: "Ashrama Activity 6" },
        { image: "https://picsum.photos/600/400?random=86", caption: "Ashrama Activity 7" },
        { image: "https://picsum.photos/600/400?random=87", caption: "Ashrama Activity 8" },
        { image: "https://picsum.photos/600/400?random=88", caption: "Ashrama Activity 9" },
        { image: "https://picsum.photos/600/400?random=89", caption: "Ashrama Activity 10" },
        { image: "https://picsum.photos/600/400?random=90", caption: "Ashrama Activity 11" },
        { image: "https://picsum.photos/600/400?random=91", caption: "Ashrama Activity 12" },
        { image: "https://picsum.photos/600/400?random=92", caption: "Ashrama Activity 13" },
        { image: "https://picsum.photos/600/400?random=93", caption: "Ashrama Activity 14" },
        { image: "https://picsum.photos/600/400?random=94", caption: "Ashrama Activity 15" },
        { image: "https://picsum.photos/600/400?random=95", caption: "Ashrama Activity 16" }
      ],
      videos: [
        { title: "Swami Vivekananda Jayanti 2024", youtubeId: "Qkm4zwVxrK4" },
        { title: "Evening Arati at RKVA Bidar", youtubeId: "IsHpwt8qGhM" },
        { title: "Youth Camp 2023 Highlights", youtubeId: "nhiU1Gk3BZc" },
        { title: "Guru Purnima Celebrations", youtubeId: "haSn5ksVjMg" }
      ]
    },
  
    openingHours: [
      { day: "Monday", hours: "09:00 AM – 10:00 PM" },
      { day: "Tuesday", hours: "09:00 AM – 10:00 PM" },
      { day: "Wednesday", hours: "09:00 AM – 10:00 PM" },
      { day: "Thursday", hours: "09:00 AM – 10:00 PM" },
      { day: "Friday", hours: "09:00 AM – 10:00 PM" },
      { day: "Saturday", hours: "09:00 AM – 10:00 PM" },
      { day: "Sunday", hours: "09:00 AM – 10:00 PM" }
    ],
  
    contact: {
      heading: "Get in Touch",
      body: "We welcome visitors, devotees, and seekers at any time during our opening hours. For specific programme schedules or to arrange a visit, please reach out using the form below or contact us directly.",
      formNote: "This form is for demonstration purposes — please email or call us directly for urgent matters."
    },
  
    footer: {
      description: "The Ashrama serves as a hub for spiritual seekers, devotees, students, and the general public, offering a serene atmosphere for prayer, meditation, and selfless service.",
      quickLinks: [
        { label: "Home", href: "index.html" },
        { label: "About", href: "about.html" },
        { label: "Activities", href: "activities.html" },
        { label: "Donations", href: "donate.html" },
        { label: "Contact", href: "contact.html" },
        { label: "Aarogyadhama", href: "https://rkvaarogyadhama.com/", external: true }
      ],
      copyright: "© 2025 Ramakrishna Vivekananda Ashrama Bidar. All Rights Reserved. Powered By Hi-Ideals"
    }
  };