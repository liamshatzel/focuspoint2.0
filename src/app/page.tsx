// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

export default function Page() {
  return (
    <>
      <Flex direction="column">
        <Text align={"center"} fontSize={"100px"}>
          How would you like to focus today?
        </Text>
        <Flex
          paddingTop={"10%"}
          direction={"row"}
          justifyContent={"space-around"}
        >
          <Box>
            <Link
              href="/pre-focus"
              color="black.400"
              _hover={{ color: "blue.500" }}
            >
              Pre Focus
            </Link>
          </Box>
          <Box>
            <Link
              href="/focus-flow"
              color="black.400"
              _hover={{ color: "blue.500" }}
            >
              Focus Flow
            </Link>
          </Box>
          <Box>
            <Link
              href="/focus-point"
              color="black.400"
              _hover={{ color: "blue.500" }}
            >
              Daily Focus
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
