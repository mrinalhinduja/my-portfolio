import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { LinkedInPost } from "./components/LinkedInPost";
import { InteractiveSimplifier } from "./components/InteractiveSimplifier";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <LinkedInPost />
        <InteractiveSimplifier />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}