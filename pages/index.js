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
        <html lang="en" />
        <title>Jamie Hurst</title>

        <meta
          name="description"
          content="Personal website and iOS developer portfolio for Jameson Hurst"
        />
        <meta
          name="keywords"
          content="apple, swift, swiftUI, iOS, development, developer, portfolio, react, next.js, draculaUI, coding"
        />
      </Head>

      <Navbar />
      <TypingEffect />
      <AboutMe />
      <Footer />
    </Box>
  );
}
