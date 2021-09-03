import { Avatar, Box } from "@dracula/dracula-ui";

const MyAvatar = () => {
  return (
    <Box>
      <Avatar
        title="jamie"
        src="/profile.png"
        alt="profile picture"
        borderVariant="large"
        color="green"
      />
    </Box>
  );
};

export default MyAvatar;
