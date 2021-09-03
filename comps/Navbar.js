import { Anchor, Box } from "@dracula/dracula-ui";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <Box display="flex">
      <Box className={styles.socialBox}>
        <Anchor
          className={styles.gitHub}
          href="https://github.com/warmrome"
          isExternal={true}
          target="_blank"
          aria-label="GitHub"
        >
          <Image src="/github-green.svg" alt="github" width={35} height={35} />
        </Anchor>

        <Anchor
          className={styles.twitter}
          href="https://twitter.com/WarmRome"
          isExternal={true}
          target="_blank"
          aria-label="Twitter"
        >
          <Image
            src="/twitter-green2.svg"
            alt="twitter"
            width={35}
            height={35}
          />
        </Anchor>

        <Anchor
          className={styles.linkedIn}
          href="https://www.linkedin.com/in/jameson-hurst/"
          isExternal={true}
          target="_blank"
          aria-label="LinkedIn"
        >
          <Image
            src="/linkedin-green.svg"
            alt="linkedin"
            width={35}
            height={35}
          />
        </Anchor>
      </Box>
    </Box>
  );
};

export default Navbar;

// Social media icons by Freepik at flaticon.com
