// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import React, { useEffect, useState } from "react";
import PomoTimer from "./pomo";
import PomoSetup from "./pomo-setup";
import BreathWork from "./breath-work";
import "../style.css";

export default function Page() {
  const [pomoParams, setPomoParams] = useState({
    minutes: 25,
    break: 5,
    reps: 4,
  });
  useEffect(() => {
    console.log(pomoParams);
  }, [pomoParams]);

  return (
    <div className="scroller">
      <div
        style={{ height: "100vh", overflow: "hidden", position: "relative" }}
        className="section"
      >
        <BreathWork />
      </div>
      <div style={{ height: "100vh" }} className="section">
        <PomoSetup pomoParams={pomoParams} setPomoParams={setPomoParams} />
      </div>
      <div style={{ height: "100vh" }} className="section">
        <PomoTimer pomoParams={pomoParams} />
      </div>
    </div>
  );
}
