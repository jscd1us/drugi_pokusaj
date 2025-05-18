import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Dino",
  lastName: "Matoš",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Master Distiller & Professional Driver",
  avatar: "/images/avatar.jpg", // Zamijeni s tvojom slikom ako imaš
  email: "jscd1us@gmail.com",
  location: "Europe/Zagreb", // IANA zona za Hrvatsku, blizu Vinkovaca
  languages: ["Croatian", "English"], // Dodano prema pretpostavci
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about rakija production, driving tips, and share insights from my craft and travels.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jscd1us/drugi_pokusaj",
  },
  {
    name: "YouTube",
    icon: "youtube", // Pretpostavljam da podržava YouTube ikonu
    link: "https://youtube.com/@Buslija",
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
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting rakija and mastering the roads</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Buslija Rakija</strong></>,
    href: "/work/buslija-rakija-craft",
  },
  subline: (
    <>
      I'm Dino, a rakija distiller from Vinkovci and a driving instructor for buses and trucks, where I blend
      <br /> tradition with skill. After hours, I share my journey.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Vinkovci`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/dino-matos", // Zamijeni s tvojim linkom ako imaš
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dino is a Vinkovci-based rakija distiller, famous for his legendary sljivovica made with old recipes in small batches.
        He’s also a skilled driving instructor and truck/bus driver, combining craftsmanship with a passion for the road.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Moonshine Spirit",
        timeframe: "2000 - Present",
        role: "Master Distiller",
        achievements: [
          <>
            Produced award-winning sljivovica using traditional methods, meeting high demand with limited batches.
          </>,
          <>
            Expanded brand recognition through YouTube and local markets.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/mocan_kazan_1440x810.jpg",
            alt: "Buslija Rakija",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Drove Around",
        timeframe: "1998 - Present",
        role: "Driving High class Pussy",
        achievements: [
          <>
            Trained hundreds of students for bus and truck licenses with a 95% pass rate.
          </>,
          <>
            Certified to drive all motor vehicles, showcasing versatility.
          </>,
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
        name: "Local Craft School",
        description: <>Studied traditional distillation techniques.</>,
      },
      {
        name: "Driving Academy",
        description: <>Certified in heavy vehicle operation.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Distillation",
        description: <>Expert in crafting high-quality rakija with traditional methods.</>,
        images: [
          {
            src: "/images/projects/project-01/high_vol_1440x810.jpg",
            alt: "Distillation Process",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Driving",
        description: <>Proficient in operating buses, trucks, and all motor vehicles.</>,
        images: [
          {
            src: "/images/projects/project-01/kurto_i_ja_bus_1440x810.jpg",
            alt: "Driving Skills",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: `Writing about rakija and roads...`,
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Rakija and driving projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Rakija Distillery",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Driving Lessons",
      orientation: "horizontal",
    },
    // Dodaj više slika ako imaš
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
