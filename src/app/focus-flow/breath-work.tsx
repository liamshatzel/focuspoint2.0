"use client";

import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import "../style.css";
import { useRouter } from "next/navigation";
import FocusPoint from "../focus-point/page";

export default function MyTimer() {
  function Timer({ expiryTimestamp }: { expiryTimestamp: Date }) {
    const { seconds } = useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });

    const brSeconds = 60;
    const timeStamp = new Date(Date.now() + brSeconds * 1000);
    const { seconds: finalSeconds } = useTimer({
      expiryTimestamp: timeStamp,
      onExpire: () => {},
    });

    const breatheOutSec = 45;
    const newTime = new Date(Date.now() + breatheOutSec * 1000);
    const { seconds: newSeconds } = useTimer({
      expiryTimestamp: newTime,
      onExpire: () => {},
    });

    if (seconds != 0) {
      return (
        <div>
          <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
            paddingTop="20%"
          >
            <Text fontSize="85px" align="center">
              Breathe out and hold
            </Text>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "100px" }}>
                <Text color="white">{String(seconds).padStart(2, "0")}s</Text>
              </div>
            </div>
            <div className="circle-2"></div>
          </Flex>
        </div>
      );
    } else {
      if (newSeconds != 0) {
        return (
          <div style={{ paddingTop: "20%" }}>
            <Flex
              direction="column"
              align="center"
              justify="center"
              height="100%"
            >
              <Text fontSize="85px" align="center">
                Take a deep breath and hold
              </Text>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "100px" }}>
                  <Text color="white">
                    {String(newSeconds).padStart(2, "0")}s
                  </Text>
                </div>
              </div>
              <div className="circle-3"></div>
            </Flex>
          </div>
        );
      } else {
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
            <div style={{ textAlign: "center", zIndex: 10 }}>
              <div style={{ fontSize: "55px" }}>
                <Text zIndex={100} color="white">
                  {String(finalSeconds)}s
                </Text>
              </div>
            </div>
            <div className="focus-point"></div>
            <Text fontSize={"100px"} color="white">
              Try not to blink
            </Text>
          </Flex>
        );
      }
    }
  }
  const [count, setCount] = useState(25);
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (count > 0) setCount(count - 1);
    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  function Breath({ num }: { num: number }) {
    if (num % 2 != 0) {
      return <Text>Breathe In</Text>;
    } else {
      return <Text>Breathe Out</Text>;
    }
  }
  function BreatheImage({ num }: { num: number }) {
    if (num % 2 != 0) {
      return (
        <Image
          src={require("../resources/breathein.png")}
          alt={""}
          width={200}
        />
      );
    } else {
      return (
        <Image
          src={require("../resources/breatheout.png")}
          alt={""}
          width={200}
        />
      );
    }
  }

  function stateController({ num }: { num: number }) {
    if (num === 0) {
      const seconds = 30;
      const timeStamp = new Date(Date.now() + seconds * 1000);
      return (
        <div style={{}}>
          <Timer expiryTimestamp={timeStamp}></Timer>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "100px" }}>
            <Flex height={500} align="Center" justify="center">
              <BreatheImage num={count} />
            </Flex>
            <Flex align="center" justify="center">
              <Text color="white">{String(count).padStart(2, "0")}</Text>
              <div className="circle"></div>
            </Flex>
            <Breath num={count} />
          </div>
        </div>
      );
    }
  }

  return stateController({ num: count });
}
