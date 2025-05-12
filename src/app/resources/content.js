import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Dino",
  lastName: "Matoš",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Distiller & Driving Instructor",
  avatar: "/images/avatar.jpg",
  email: "jscd1us@gmail.com",
  location: "Europe/Zagreb",
  languages: ["Croatian", "English"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write occasionally about the art of distilling, unique spirits, and share stories from life
      on the road as a professional driver.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jscd1us",
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/@Buslija",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Buslija",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Showcasing my work as a ${person.role}`,
  headline: <>Crafting premium spirits & mastering machines</>,
  featured: {
    display: true,
    title: <>Signature Product: <strong className="ml-4">Šljivovica</strong></>,
    href: "/work/legendary-sljivovica",
  },
  subline: (
    <>
      I'm Dino, a rakija distiller and all-around driver from Vinkovci, Croatia. From creating small-batch
      spirits to instructing on the open road — I do it all.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dino Matoš is a distiller based in Vinkovci, Croatia, producing premium strong spirits like
        his famous šljivovica — made using traditional recipes in small, high-quality batches. When
        not distilling, he's on the road, teaching people how to drive or behind the wheel of a bus
        or truck.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Independent Distillery",
        timeframe: "2015 - Present",
        role: "Head Distiller",
        achievements: [
          <>Created small-batch šljivovica that gained regional acclaim for quality and tradition.</>,
          <>Focused on heritage recipes and modern distillation techniques to achieve exceptional taste.</>,
        ],
        images: [],
      },
      {
        company: "Autoškola Vinkovci",
        timeframe: "2018 - Present",
        role: "Driving Instructor & Professional Driver",
        achievements: [
          <>Licensed for buses and trucks — teaching and driving anything with a motor.</>,
          <>Known for reliable, patient instruction and expert road knowledge.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Tradition & Craftsmanship",
        description: <>Learning passed down through generations of distillers.</>,
      },
      {
        name: "Professional Driving Certifications",
        description: <>Certified in multiple motor vehicle categories and instruction.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Distillation Techniques",
        description: <>Mastering fire, copper, and time for the perfect spirit.</>,
        images: [],
      },
      {
        title: "Driving & Instruction",
        description: <>Expertise in handling and teaching all road vehicles.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Stories from the Road & the Still",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Crafted spirits & road experience by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `Scenes from the distillery and the road by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };


All set! Your code now reflects your personal information, profession, and passions in English. If you'd like, I can also help you deploy it or review any specific section further.

