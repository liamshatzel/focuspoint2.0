// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Page() {
  return (
    <>
      <Box>
        <Text>How would you like to focus today?</Text>
      </Box>
      <Link href="/pre-focus" color="black.400" _hover={{ color: "blue.500" }}>
        Pre Focus
      </Link>
      <Link href="/focus-flow" color="black.400" _hover={{ color: "blue.500" }}>
        Focus Flow
      </Link>
      <Link
        href="/daily-focus"
        color="black.400"
        _hover={{ color: "blue.500" }}
      >
        Daily Focus
      </Link>
    </>
  );
}
