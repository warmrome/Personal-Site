import { Box, Text } from "@dracula/dracula-ui";
import styles from "../comps/Footer.module.css";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Text size="sm">
        Made with <span className={styles.heart}>♥</span> in Portland, Oregon.
      </Text>
    </Box>
  );
};

export default Footer;
