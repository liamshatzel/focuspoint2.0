// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import PomoTimer from "./pomo";
import PomoSetup from "./pomo-setup";
import BreathWork from "./breath-work";

export default function Page() {
  return (
    <div>
      <div
        style={{ height: "100vh", overflow: "hidden", position: "relative" }}
      >
        <BreathWork />
      </div>
      <div style={{ height: "100vh" }}>
        <PomoSetup />
      </div>
      <div style={{ height: "100vh" }}>
        <PomoTimer />
      </div>
    </div>
  );
}
