import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    arxama,
    passman,
    planetemode,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeur Web",
      icon: web,
    },
    {
      title: "Développeur React Native",
      icon: mobile,
    },
    {
      title: "Développeur back-end",
      icon: backend,
    },
    {
      title: "Créateur de contenus",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Résponsable Logistique",
      company_name: "Planète Mode",
      icon: planetemode,
      iconBg: "#383E56",
      date: "Jan 2007 - Sep 2011",
      points: [
        "Gestion de stocks et de marchandises",
        "Gestions de commandes fournisseurs",
        "Entrée des produits dans le magasin",
        "Étiquetage des produits",
        "Gestion des retours clients",
      ],
    },
    {
      title: "Technicien Informatique",
      company_name: "Passman",
      icon: passman,
      iconBg: "#383E56",
      date: "Jan 2013 - Sep 2017",
      points: [
        "Préparation de commandes",
        "Configuration matériel et logiciel",
        "Configuration équipements réseaux et informatiques",
        "Gestion fin de contrats et retours clients",
      ],
    },
    {
      title: "Développeur Fullstack",
      company_name: "Arxama",
      icon: arxama,
      iconBg: "#383E56",
      date: "Septembre 2017 - Avril 2023",
      points: [
        "Gestion de projet de développement d'application web et de site web.",
        "Intégration de maquettes et conception d'interfaces utilisateur.",
        "Développement sites web et applications web.",
        "Optimisation SEO.",
        "Rédaction de cahier des charges et de spécifications fonctionnelles.",
        "Digitalisation de documents et de sites web.",
        "Formation et conseil aux utilisateurs.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Je pensais qu'il était impossible de créer un site web aussi beau que notre produit, mais Cédric m'a prouvé le contraire.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Je n'ai jamais rencontré un développeur web qui se soucie autant de la réussite de ses clients que Cédric.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Après que Cédric a optimisé notre site web, notre trafic a augmenté de 50 %. Nous ne les remercierons jamais assez !",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Plate-forme basée sur le web qui permet aux utilisateurs de rechercher, de réserver et de gérer des locations de voitures auprès de différents fournisseurs, offrant ainsi une solution pratique et efficace pour les besoins en matière de transport.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Application web qui permet aux utilisateurs de rechercher des offres d'emploi, de visualiser les fourchettes de salaires estimées pour les postes et de localiser les emplois disponibles en fonction de leur localisation actuelle.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "Une plateforme complète de réservation de voyages qui permet aux utilisateurs de réserver des vols, des hôtels et des voitures de location, et qui offre des recommandations sur les destinations les plus populaires.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };