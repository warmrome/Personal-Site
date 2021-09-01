import Head from "next/head";
import AboutMe from "../comps/AboutMe";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import TypingEffect from "../comps/TypingEffect";
import { Box } from "@dracula/dracula-ui";

export default function Home() {
  return (
    <Box className="appBox">
      <Head>
        <title>Jamie Hurst</title>
        <meta name="keywords" content="personal site" />
      </Head>

      <Navbar />
      <TypingEffect />
      <AboutMe />
      <Footer />
    </Box>
  );
}
