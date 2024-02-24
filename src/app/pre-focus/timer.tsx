import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import "../style.css";

function Timer({ expiryTimestamp }) {
  const { seconds } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{String(seconds).padStart(2, "0")}s</span>
      </div>
    </div>
  );
}

export default function MyTimer() {
  const count = 0;

  //const [count, setCount] = useState(25);
  //useEffect(() => {
  //  //Implementing the setInterval method
  //  const interval = setInterval(() => {
  //    if (count > 0) setCount(count - 1);
  //  }, 3000);

  //  //Clearing the interval
  //  return () => clearInterval(interval);
  //}, [count]);

  function Breath({ num }) {
    if (num % 2 != 0) {
      return <Text>Breathe In</Text>;
    } else {
      return <Text>Breathe Out</Text>;
    }
  }
  function BreatheImage({ num }) {
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

  function stateController({ num }) {
    if (num === 0) {
      const seconds = 30;
      const timeStamp = new Date(Date.now() + seconds * 1000);
      return (
        <div>
          <Text fontSize="85px" align="center">
            Breathe out and hold
          </Text>
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
