const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
     {
      name: "Resume",
      link: "https://drive.google.com/file/d/1si7n4_IrWnEqHF7xrjC5dRInRC-GhPPT/view?usp=sharing",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 2, suffix: "+", label: "Satisfied Clients" },
    { value: 100, suffix: "+", label: "Leetcode Questions" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Problem Solving",
      desc: "Skilled at identifying challenges and delivering efficient, scalable solutions through code and system design.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "Fast Execution",
      desc: "Consistently deliver high-impact solutions under tight deadlines.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Gen-AI Engineer ",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Devops Engineer",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review: "Nikhil was an exceptional Cybersecurity Lead at GDSC SVCE. He took initiative, led multiple workshops, and trained over 150 students with clarity and enthusiasm. His leadership, communication skills, and deep understanding of cybersecurity made a lasting impact on our community -- GDSC Lead.",
      imgPath: "/images/GDSC.png",
      logoPath: "/images/GDSClogo.png",
      title: "CyberSecurity Lead",
      date: "September 2022 - October 2023",
      responsibilities: [
        "Led cybersecurity initiatives, increasing student participation by 20% across 5+ events .",
        "Trained 150+ students across 3 workshops on cybersecurity best practices.",
        "Collaborated with cross-functional teams to lead projects and develop tools.",
      ],
    },
    {
      review: "Nikhil’s contributions to our client-facing web applications have been exceptional. His ability to deliver fast, scalable solutions using modern web technologies stood out. He tackled every challenge with a problem-solving mindset and impressive execution speed.",
      imgPath: "/images/motioncut.png",
      logoPath: "/images/motioncutlogo.png",
      title: "Web Development Intern",
      date: "May 2023 - July 2023",
      responsibilities: [
        "Built and deployed a full-stack e-commerce platform using ReactJS, Node.js, and MongoDB, handling 500+ products.",
        "Collaborated in an Agile environment with CI/CD pipelines, ensuring timely project delivery.",
        "Achieved 99.9% uptime through optimized AWS cloud configurations and scalable server deployment.",
      ],
    },

  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Kajal Kumari Gupta(MD - Desi Diva Attire)",
      mentions: "@traveldiaries_bykr",
      review:
        "Nikhil’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional",
      imgPath: "/images/client1.webp",
    },
    {
      name: "Mukul Yadav(System Engineer at CGI)",
      mentions: "@_mukulyadavv_",
      review:
        "Working with Nikhil was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client2.webp",
    },
    {
      name: "Aditi Sharma(GDSC SVCE lead and AI Engineer)",
      mentions: "@aditi.sharma_132",
      review:
        "Collaborating with Nikhil was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nikhil's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client3.webp",
    },
    {
      name: "Aditya Verma(Full Stack Developer at Mavenberg Soln.)",
      mentions: "@godsmith53",
      review:
        "Nikhil was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client4.webp",
    },
    {
      name: "Shivam Thakur(App Developer at Accenture)",
      mentions: "@shivamthakur19102001",
      review:
        "I can’t say enough good things about Nikhil. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding!",
      imgPath: "/images/client5.webp",
    },
    {
      name: "Amanpreet(Writer)",
      mentions: "@fictitious_folk",
      review:
        "Nikhil’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our book website, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client6.webp",
    },
    
  ];
  
  const socialImgs = [
    {
      name: "Github",
      url: "https://github.com/Nikhilgupta1848",
      imgPath: "/images/github.png",
     
    },
    {
      name: "leetcode",
      url: "https://leetcode.com/u/niksnikuNOR/",
      imgPath: "/images/leetcode1.png",
      
    },
    {
      name: "x",
      url: "https://x.com/nikhilkrkanti",
      imgPath: "/images/x.png",
      
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/nikhil-kumar-044960201/",
      imgPath: "/images/linkedin.png",
      
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };