// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Page() {
  const [isFlowHovered, setIsFlowHovered] = useState(false);
  const [isPreHovered, setIsPreHovered] = useState(false);
  const [isDailyHovered, setIsDailyHovered] = useState(false);
  return (
    <Flex direction="column">
      <Text align={"center"} fontSize={"100px"}>
        How would you like to focus today?
      </Text>
      <Flex
        paddingTop={"10%"}
        direction={"row"}
        justifyContent={"space-around"}
      >
        <Flex
          _hover={{ backgroundColor: "blue.500" }}
          w={"150px"}
          h={"150px"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"5%"}
          onMouseEnter={() => setIsPreHovered(true)}
          onMouseLeave={() => setIsPreHovered(false)}
        >
          <Link
            href="/pre-focus"
            fontSize={"24px"}
            color="black.400"
            _hover={{ color: "white" }}
          >
            Pre Focus
          </Link>
        </Flex>
        <Flex
          _hover={{ backgroundColor: "blue.500" }}
          w={"150px"}
          h={"150px"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"5%"}
          onMouseEnter={() => setIsFlowHovered(true)}
          onMouseLeave={() => setIsFlowHovered(false)}
        >
          <Link
            href="/focus-flow"
            fontSize={"24px"}
            color="black.400"
            _hover={{ color: "white" }}
          >
            Focus Flow
          </Link>
        </Flex>
        <Flex
          _hover={{ backgroundColor: "blue.500" }}
          w={"150px"}
          h={"150px"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"5%"}
          onMouseEnter={() => setIsDailyHovered(true)}
          onMouseLeave={() => setIsDailyHovered(false)}
        >
          <Link
            href="/daily-focus"
            fontSize={"24px"}
            color="black.400"
            _hover={{ color: "white" }}
          >
            Daily Focus
          </Link>
        </Flex>
      </Flex>
      <Flex width={"100%"} justifyContent={"center"}>
        {isPreHovered && (
          <div>
            <Text w={"500px"} align="center" fontSize="x-large" paddingTop="5%">
              Pre-focus is great for getting into the zone before a study
              session. It takes about three minutes and drops you into a state
              of focus to help you get started.
            </Text>
            <Text align="center" paddingTop="5%">
              (Best for quick focus periods or doing on the go)
            </Text>
          </div>
        )}
        {isFlowHovered && (
          <div>
            <Text w={"500px"} align="center" fontSize="x-large" paddingTop="5%">
              Focus flow is for doing a full focus session from pre-focus to
              post-focus. It starts with the prefocus ritual and moves into a
              pomodoro session.
            </Text>
            <Text align="center" paddingTop="5%">
              (Best for long form learning and working)
            </Text>
          </div>
        )}
        {isDailyHovered && (
          <div>
            <Text w={"500px"} align="center" fontSize="x-large" paddingTop="5%">
              Daily focus is a focus trainer that allows you to train your focus
              each day. Login with your user account and it will keep track of
              when you focused and for how long. Progressively making longer
              focus sessions for you.
            </Text>
            <Text align="center" paddingTop="5%">
              (Best for increasing focus over time)
            </Text>
          </div>
        )}
      </Flex>
    </Flex>
  );
}
