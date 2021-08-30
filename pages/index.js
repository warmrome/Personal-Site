import Head from "next/head";
import AboutMe from "../comps/AboutMe";
import Footer from "../comps/Footer";
import MyAvatar from "../comps/MyAvatar";
import Navbar from "../comps/Navbar";
import TypingEffect from "../comps/TypingEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jameson Hurst | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <Navbar />

      {/* Simulates typing effect on the screen */}
      <TypingEffect />

      <MyAvatar />

      <AboutMe />

      <Footer />
    </>
  );
}
