import FAQ from "~/components/landing/FAQ";
import type { Route } from "./+types/home";
import Features from "~/components/landing/Features";
import Hero from "~/components/landing/Hero";
import Nav from "~/components/landing/Nav";
import Pricing from "~/components/landing/Pricing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
    </>
  );
}
