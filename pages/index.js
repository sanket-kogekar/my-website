import Contact from '@/components/Contact';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="p-6 lg:p-10 max-w-4xl m-auto w-full">
        <Hero />
        <div className="p-0 space-y-10">
          <Stack />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}
