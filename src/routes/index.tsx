// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Cursor from "@/components/layout/Cursor";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova — Premium Design Engineer & Full-Stack Developer" },
      { name: "description", content: "Nova is an independent design engineer crafting premium, futuristic web experiences for ambitious teams worldwide." },
      { property: "og:title", content: "Nova — Premium Design Engineer Portfolio" },
      { property: "og:description", content: "Award-winning portfolio showcasing futuristic UI, motion design and full-stack engineering." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    document.documentElement.classList.add("lp-dark");
    return () => document.documentElement.classList.remove("lp-dark");
  }, []);
  return (
    <div className="lp-app">
      <SmoothScroll />
      <Cursor />
      <div className="lp-blob b1" />
      <div className="lp-blob b2" />
      <div className="lp-blob b3" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
