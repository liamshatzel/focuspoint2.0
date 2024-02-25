// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import MyTimer from "./timer";

export default function Page() {
  return (
    <div>
      <MyTimer />
    </div>
  );
}
