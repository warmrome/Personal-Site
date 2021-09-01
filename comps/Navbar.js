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
        >
          <Image src="/github.svg" alt="github" width={35} height={35} />
        </Anchor>

        <Anchor
          className={styles.twitter}
          href="https://twitter.com/WarmRome"
          isExternal={true}
          target="_blank"
        >
          <Image src="/twitter.svg" alt="twitter" width={35} height={35} />
        </Anchor>

        <Anchor
          className={styles.linkedIn}
          href="https://www.linkedin.com/in/jameson-hurst/"
          isExternal={true}
          target="_blank"
        >
          <Image src="/linkedin.svg" alt="linkedin" width={35} height={35} />
        </Anchor>
      </Box>
    </Box>
  );
};

export default Navbar;

// Social media icons by Freepik at flaticon.com
