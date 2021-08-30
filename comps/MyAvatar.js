import { Avatar, Box } from "@dracula/dracula-ui";
import styles from "../styles/MyAvatar.module.css";

const MyAvatar = () => {
  return (
    <Box className={styles.container}>
      <Avatar
        title="Count Dracula"
        src="/profile.png"
        alt="profile picture"
        borderVariant="large"
        color="pink"
      />
    </Box>
  );
};

export default MyAvatar;
