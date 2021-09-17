import Head from "next/head";
import Navbar from "../comps/Navbar";
import AboutMe from "../comps/AboutMe";
import Footer from "../comps/Footer";

import Hero from "../comps/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Jameson Hurst</title>

        <meta
          name="description"
          content="Personal website and developer portfolio for Jameson Hurst"
        />
        <meta
          name="keywords"
          content="apple, swift, swiftUI, iOS, development, developer, portfolio, react, next.js, draculaUI, coding"
        />
      </Head>

      <Navbar />
      <Hero />
      <AboutMe />
      <Footer />
    </>
  );
}
