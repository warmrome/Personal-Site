import { Box, Heading } from "@dracula/dracula-ui";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TypingEffect = () => {
  return (
    <Box>
      <Heading color="green">
        <ReactTypingEffect
          className="typingEffect"
          text={["Hi, I'm Jamie."]}
          speed={80}
          eraseDelay={30000}
          typingDelay={500}
        />
      </Heading>

      <Heading color="red">
        <ReactTypingEffect
          className="typingEffect"
          text={[
            "I like to write code.",
            "I'm currently learning SwiftUI.",
            "Let's chat sometime.",
          ]}
          speed={80}
          eraseDelay={2500}
          typingDelay={2500}
        />
      </Heading>
    </Box>
  );
};

export default TypingEffect;
