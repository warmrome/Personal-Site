import { Box, Paragraph } from "@dracula/dracula-ui";
import styles from "../styles/AboutMe.module.css";
import MyAvatar from "./MyAvatar";
import Image from "next/image";

const AboutMe = () => {
  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.container}>
        <Box className={styles.leftBox}>
          <MyAvatar />
          <Paragraph className={styles.paragraph}>
            I’ve spent the last 10 years working in various technical support
            roles at a major tech company. I recently left my job to study app
            development full-time and embark on a major career change.
            <br />
            <br />
            I’m currently teaching myself iOS development using Apple’s new
            SwiftUI framework. I’m also doodling with this website built with
            Next.js and Dracula UI. I’m brewing up some cool app ideas in the
            cauldron, and I’m excited to showcase them all here soon. Thanks for
            stopping by!
          </Paragraph>
        </Box>
        <Box className={styles.rightBox}>
          <Box className={styles.cauldronBox}>
            <Image src="/cauldron.svg" height="600px" width="600px"></Image>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;

// Cauldron icon made my Freepik at flaticon.com
