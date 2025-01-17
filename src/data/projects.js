import Html from "../icons/Tecnologias/Lenguajes/Html.astro";
import Css from "../icons/Tecnologias/Lenguajes/Css.astro";
import Tailwind from "../icons/Tecnologias/Frameworks_Librerias/Tailwind.astro";
import Js from "../icons/Tecnologias/Lenguajes/Js.astro";
import React from "../icons/Tecnologias/Frameworks_Librerias/React.astro";

export const TAGS = {
  Html: {
    name: "Html",
    class: "bg-[#963419] text-white",
    icon: Html,
  },
  Css: {
    name: "Css",
    class: "bg-[#07436b] text-white",
    icon: Css,
  },
  Tailwind: {
    name: "Tailwind",
    class: "bg-[#1c7777] text-white",
    icon: Tailwind,
  },
  Js: {
    name: "Js",
    class: "bg-[#a39535] text-white",
    icon: Js,
  },
  React: {
    name: "React",
    class: "bg-[#1c7777] text-white",
    icon: React,
  },
};

export const PROJECTS = [
  {
    title: "The Jason Store - Tienda online",
    description:
      "The Jason Store ofrece productos de calidad: tecnología, ropa, y más. Compra fácil y rápido online.",
    vercel: "https://the-jason-store.vercel.app/",
    image: "projects/proyecto1.webp",
    tags: [TAGS.Html, TAGS.Css, TAGS.Tailwind, TAGS.Js, TAGS.React],
  },
  {
    title: "Aplicacion del Clima",
    description:
      "Pagina creada con el objetivo de usar API del clima y probar su funcionamiento. Se utilizo Html, Css y JS",
    vercel: "",
    image: "projects/proyecto2.webp",
    tags: [TAGS.Html, TAGS.Css, TAGS.Js],
  },
];
