import { Avatar, Box, Paragraph } from "@dracula/dracula-ui";
import styles from "../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.leftBox}>
        <Paragraph className={styles.paragraph} size="lg">
          Phasellus id dolor luctus risus facilisis fringilla et et turpis.
          Donec convallis ornare feugiat. Nam a sapien vitae nunc facilisis
          convallis in facilisis quam. Nam in odio rhoncus enim vulputate
          blandit in et lacus. Sed interdum sodales risus eu volutpat. Duis
          lobortis scelerisque purus at maximus.
          <br />
          <br />
          In tincidunt mi dolor, a finibus dui tristique lacinia. Aenean a purus
          lorem. Aliquam quis lobortis velit. Cras rutrum, eros at consectetur
          rutrum, nisi magna eleifend lorem, auctor porttitor dolor orci et
          risus. Sed lorem leo, faucibus nec facilisis non, aliquam a sem.
          Praesent luctus odio orci. Donec vulputate volutpat mauris ultrices
          gravida.
          <br />
          <br />
          YLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          mattis, diam ut consectetur sagittis, nisl orci pulvinar elit, in
          molestie magna massa vitae arcu. Quisque blandit feugiat porta.
          Pellentesque ut sagittis risus. Quisque tempor sem id consectetur
          euismod. Sed id consequat turpis, sed faucibus ligula. Praesent sit
          amet ligula gravida, rhoncus augue et, eleifend nunc.
        </Paragraph>
      </Box>
      <Box className={styles.rightBox}>
        <Paragraph className={styles.paragraph} size="lg">
          Phasellus id dolor luctus risus facilisis fringilla et et turpis.
          Donec convallis ornare feugiat. Nam a sapien vitae nunc facilisis
          convallis in facilisis quam. Nam in odio rhoncus enim vulputate
          blandit in et lacus. Sed interdum sodales risus eu volutpat. Duis
          lobortis scelerisque purus at maximus.
          <br />
          <br />
          In tincidunt mi dolor, a finibus dui tristique lacinia. Aenean a purus
          lorem. Aliquam quis lobortis velit. Cras rutrum, eros at consectetur
          rutrum, nisi magna eleifend lorem, auctor porttitor dolor orci et
          risus. Sed lorem leo, faucibus nec facilisis non, aliquam a sem.
          Praesent luctus odio orci. Donec vulputate volutpat mauris ultrices
          gravida.
          <br />
          <br />
          YLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          mattis, diam ut consectetur sagittis, nisl orci pulvinar elit, in
          molestie magna massa vitae arcu. Quisque blandit feugiat porta.
          Pellentesque ut sagittis risus. Quisque tempor sem id consectetur
          euismod. Sed id consequat turpis, sed faucibus ligula. Praesent sit
          amet ligula gravida, rhoncus augue et, eleifend nunc.
        </Paragraph>
      </Box>
    </Box>
  );
};

export default AboutMe;
