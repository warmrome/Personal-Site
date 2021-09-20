import { Box, Heading, Paragraph } from "@dracula/dracula-ui";
import styles from "../comps/AboutMe.module.css";

const AboutMe = () => {
  return (
    <>
      <Box className={styles.headingBox} id="aboutMe">
        <Heading className={styles.heading} as="h2" color="purple">
          About me
        </Heading>
      </Box>

      <Box className={styles.container}>
        <Paragraph className={styles.paragraphL} m="none">
          I recently left my job at Apple to study iOS development full-time and
          embark on a major career change. Before I left, I built two Safari
          extensions to enhance a web app my team used. One added dark mode
          (essential); the other measured daily productivity. It was cool to see
          most of the team use them in their daily workflow. Solving real
          problems with code and made me realize I'd rather build apps for a
          living.
        </Paragraph>
        <Paragraph className={styles.paragraphR} m="none">
          I’m currently teaching myself iOS development with a primary focus on
          Apple’s SwiftUI framework. I'm doing the #100DaysOfSwiftUI challenge
          and will be posting progress updates on Twitter. I’m also doodling
          with this website built with Next.js and Dracula UI. I’m brewing up
          some cool app ideas, and I’m excited to showcase them all here. Thanks
          for stopping by!
        </Paragraph>
      </Box>
    </>
  );
};

export default AboutMe;
