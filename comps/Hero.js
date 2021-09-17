import { Box, Button, Divider, Heading, Text } from "@dracula/dracula-ui";
import styles from "../comps/Hero.module.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.heroBox}>
        <Heading className={styles.heroText} color="white">
          Hello! I'm Jamie,<span className={styles.emoji}> 🧑‍💻 </span>a
          Portland
          <span className={styles.emoji}> 🏔 </span>based iOS
          developer-in-training and new dad
          <span className={styles.emoji}> 🍼 </span> currently learning SwiftUI.
        </Heading>
      </Box>

      <Box className={styles.buttonBox}>
        <Button size="lg" mr="sm" as="button" color="pinkPurple">
          <Link to="aboutMe" spy={true} smooth={true}>
            <Text size="lg" color="black">
              About me
            </Text>
          </Link>
        </Button>

        <Button size="lg" as="button" variant="outline" color="purple">
          Work
        </Button>
      </Box>
      <Divider className={styles.divider} />
    </Box>
  );
};

export default Hero;
