// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { Flex, Text, Button } from "@chakra-ui/react";

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
          <Button onClick={start}>Start</Button>
          <Button onClick={pause}>Pause</Button>
          <Button onClick={resume}>Resume</Button>
          <Button
            onClick={() => {
              // Restarts to 5 minutes timer
              const newTimeStamp = new Date(Date.now() + 1500 * 1000);
              restart(newTimeStamp, false);
            }}
          >
            Restart
          </Button>
        </div>
      </Flex>
    </Flex>
  );
}

export default function PomoTimer({ pomoParams }: { pomoParams: any }) {
  useEffect(() => {
    console.log(pomoParams);
  }, [pomoParams]);
  const minutes = pomoParams.minutes;
  const timeStamp = new Date();
  timeStamp.setMinutes(timeStamp.getMinutes() + minutes);
  return <MyTimer expiryTimestamp={timeStamp} />;
}
