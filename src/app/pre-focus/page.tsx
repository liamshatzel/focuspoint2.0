// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import MyTimer from "./timer";

export default function Page() {
  const seconds = 25;
  const timeStamp = new Date(Date.now() + seconds * 1000);
  return (
    <div>
      <MyTimer />
    </div>
  );
}
