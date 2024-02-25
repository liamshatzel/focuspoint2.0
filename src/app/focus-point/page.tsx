// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import { useTimer } from "react-timer-hook";
import { Text, Flex } from "@chakra-ui/react";
import "../style.css";

function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const { seconds } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center", zIndex: 10, paddingTop: "8%" }}>
      <div style={{ fontSize: "55px" }}>
        <Text zIndex={100} color="white">
          {String(seconds)}s
        </Text>
      </div>
    </div>
  );
}

export default function Page() {
  const seconds = 15;
  const timeStamp = new Date(Date.now() + seconds * 1000);

  return (
    <Flex
      backgroundColor="black"
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"space-around"}
      direction={"column"}
    >
      <Text fontSize={"100px"} color="white">
        Keep your eyes focused on the dot
      </Text>
      <MyTimer expiryTimestamp={timeStamp} />;
      <div className="focus-point"></div>
      <Text fontSize={"100px"} color="white">
        Try not to blink
      </Text>
    </Flex>
  );
}
