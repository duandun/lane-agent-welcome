import { createFileRoute } from '@tanstack/react-router';
import Header from '#/components/landing/header';
import Hero from '#/components/landing/hero';
import DemoVideo from '#/components/landing/demo-video';
import Features from '#/components/landing/features';
import Workflow from '#/components/landing/workflow';
import Gallery from '#/components/landing/gallery';
import { Downloads, FinalCta } from '#/components/landing/downloads';
import Footer from '#/components/landing/footer';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh">
      <div className="scroll-progress" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <DemoVideo />
        <Features />
        <Workflow />
        <Gallery />
        <Downloads />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
