// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import React, { useEffect, useState } from "react";
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

export default function PomoTimer({ pomoParams }: { pomoParams: any }) {
  const [minutes, setMinutes] = useState(pomoParams.minutes);

  // Update `minutes` whenever `pomoParams.minutes` changes
  useEffect(() => {
    setMinutes(pomoParams.minutes);
    console.log("Got here: " + pomoParams.minutes);
  }, [pomoParams.minutes]);

  // Calculate `timeStamp` inside useEffect to ensure it uses the latest `minutes`
  const [timeStamp, setTimeStamp] = useState(new Date());

  useEffect(() => {
    const newTimeStamp = new Date();
    newTimeStamp.setMinutes(newTimeStamp.getMinutes() + Number(minutes));
    setTimeStamp(newTimeStamp);
    console.log("timeStamp updated to: ", newTimeStamp.getMinutes());
  }, [minutes]);

  return <MyTimer expiryTimestamp={timeStamp} />;
}
