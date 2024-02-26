// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import { useTimer } from "react-timer-hook";
import { Flex, Text } from "@chakra-ui/react";

function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <Flex direction="column" height="100%">
      <Flex direction={"column"} height="10%">
        <Text align="center" fontSize={"100px"}>
          Focus Timer
        </Text>
      </Flex>
      <Flex
        direction="column"
        justifyContent={"center"}
        alignItems={"center"}
        height="90%"
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "100px" }}>
            <span>{String(days).padStart(2, "0")}</span>:
            <span>{String(hours).padStart(2, "0")}</span>:
            <span>{String(minutes).padStart(2, "0")}</span>:
            <span>{String(seconds).padStart(2, "0")}</span>
          </div>
          <p>{isRunning ? "Running" : "Not running"}</p>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={resume}>Resume</button>
          <button
            onClick={() => {
              // Restarts to 5 minutes timer
              const newTimeStamp = new Date(Date.now() + 300 * 1000);
              restart(newTimeStamp, false);
            }}
          >
            Restart
          </button>
        </div>
      </Flex>
    </Flex>
  );
}

export default function PomoTimer() {
  const minutes = 25;
  const timeStamp = new Date();
  timeStamp.setMinutes(timeStamp.getMinutes() + minutes);
  return <MyTimer expiryTimestamp={timeStamp} />;
}
