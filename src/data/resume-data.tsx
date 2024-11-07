import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "John Steban Lopez Hincapie",
  initials: "JS",
  location: "Medellín, Colombia",
  locationLink: "",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "Desarrollador Web Full Stack con 2 años de experiencia, especializado en el uso de frameworks modernos como Vue.js y React para el frontend, y NestJS con Fastify en el backend. Mi enfoque principal es el desarrollo con Node.js y TypeScript, aunque también tengo experiencia con lenguajes como C++/C#, Java, Rust y Go, además de un interés menor en PHP. A menudo soy responsable de la gestión de herramientas de control de versiones como Git y GitHub, y presto mucha atención al manejo eficiente de bases de datos. Trabajo principalmente en entornos Linux y tengo experiencia con servicios en la nube como AWS y Azure. También he participado en proyectos relacionados con inteligencia artificial, ampliando mis habilidades técnicas y aportando soluciones innovadoras.",
  avatarUrl: "https://avatars.githubusercontent.com/u/104475729?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "js684new@gmail.com",
    tel: "+57 3246714071",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/JohnGolgota",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/john-lopez-27668722b/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "SENA CTGI",
      degree: "Técnico en Programación",
      start: "2022",
      end: "2023",
    },
    {
      school: "Universidad Nacional de Colombia",
      degree: "Matematicas",
      start: "2024-2",
      end: "Actualidad",
    },
  ],
  work: [
    {
      company: "Portada Inmobiliaria S.A.S.",
      link: "https://portadainmobiliaria.com/",
      badges: [],
      title: "DevOps & Full Stack Developer",
      logo: "",
      start: "2023",
      end: null,
      description:
        "Desarrollo de aplicativos web modulares realizadas para la virtuañización de procesos internos de la empresa y soporte técnico nivel 2 dirigido a los prodcuto y procesos internos.",
    },
  ],
  skills: [
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "MySQL",
    "MongoDB",
    "Redis",
    "Docker",
    "NestJS",
    "Fastify",
    "TypeORM",
    "Vue.js",
    "Azure",
    "Git",
    "GitHub Actions",
    "Rust",
    "Go",
    "PHP",
  ],
  projects: [
    {
      title: "A",
      techStack: [
        "CLI",
        "PowerShell",
        "Side Project",
      ],
      description:
        "Bookmark handler for PowerShell",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/JohnGolgota/a-cli",
      },
    },
  ],
} as const;
