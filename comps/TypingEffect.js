import { Box } from "@dracula/dracula-ui";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TypingEffect = () => {
  return (
    <Box>
      <Box>
        <ReactTypingEffect
          className="typingEffect1"
          text={["Hi, I'm Jamie."]}
          cursorRenderer={(cursor) => (
            <h1 style={{ fontFamily: "fira code" }}>{cursor}</h1>
          )}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={
                        i >= 0
                          ? {
                              fontFamily: "fira code",
                            }
                          : {}
                      }
                    >
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
          speed={80}
          eraseDelay={30000}
          typingDelay={500}
        />
      </Box>

      <Box>
        <ReactTypingEffect
          className="typingEffect2"
          text={[
            "I like to write code.",
            "I'm learning SwiftUI.",
            "Let's chat sometime.",
          ]}
          cursorRenderer={(cursor) => (
            <h1 style={{ fontFamily: "fira code" }}>{cursor}</h1>
          )}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={
                        i >= 0
                          ? {
                              fontFamily: "fira code",
                            }
                          : {}
                      }
                    >
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
          speed={80}
          eraseDelay={2500}
          typingDelay={2500}
        />
      </Box>
    </Box>
  );
};

export default TypingEffect;
