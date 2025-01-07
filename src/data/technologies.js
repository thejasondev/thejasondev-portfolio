import Html from "../icons/Tecnologias/Lenguajes/Html.astro";
import Css from "../icons/Tecnologias/Lenguajes/Css.astro";
import Js from "../icons/Tecnologias/Lenguajes/Js.astro";
import Ast from "../icons/Tecnologias/Frameworks_Librerias/Ast.astro";
import Node from "../icons/Tecnologias/Frameworks_Librerias/Node.astro";
import React from "../icons/Tecnologias/Frameworks_Librerias/React.astro";
import Tailwind from "../icons/Tecnologias/Frameworks_Librerias/Tailwind.astro";
import Figma from "../icons/Tecnologias/Herramientas_Adicionales/Figma.astro";
import Git from "../icons/Tecnologias/Herramientas_Adicionales/Git.astro";
import Netlify from "../icons/Tecnologias/Herramientas_Adicionales/Netlify.astro";
import Vercel from "../icons/Tecnologias/Herramientas_Adicionales/Vercel.astro";
import Notion from "../icons/Tecnologias/Herramientas_Adicionales/Notion.astro";

export const TECHNOLOGIES = [
  {
    title: "Lenguajes",
    items: [
      { title: "HTML", icon: Html },
      { title: "CSS", icon: Css },
      { title: "JavaScript", icon: Js },
    ],
  },
  {
    title: "Frameworks y Librerías",
    items: [
      { title: "Astro", icon: Ast },
      { title: "Node.js", icon: Node },
      { title: "React", icon: React },
      { title: "Tailwind CSS", icon: Tailwind },
    ],
  },
  {
    title: "Herramientas Adicionales",
    items: [
      { title: "Figma", icon: Figma },
      { title: "Git", icon: Git },
      { title: "Netlify", icon: Netlify },
      { title: "Vercel", icon: Vercel },
      { title: "Notion", icon: Notion },
    ],
  },
];
