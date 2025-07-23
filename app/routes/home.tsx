import type { Route } from "./+types/home";
import Hero from "~/components/landing/Hero";
import Feature1 from "~/components/landing/Feature1";
import Feature2 from "~/components/landing/Feature2";
import Contact from "~/components/landing/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Feature1 />
      <Feature2 />
      <Contact />
    </>
  );
}
