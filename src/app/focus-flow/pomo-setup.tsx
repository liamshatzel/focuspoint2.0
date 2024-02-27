// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Select,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useTimer } from "react-timer-hook";

export default function PomoSetup({
  pomoParams,
  setPomoParams,
}: {
  pomoParams: any;
  setPomoParams: (params: any) => void;
}) {
  function onSubmit() {
    console.log(pomoParams);
    //Grab all input values and set them to the pomoParams
  }

  function updateFocusTime(e: { target: { value: any } }) {
    setPomoParams({ ...pomoParams, minutes: e.target.value });
  }

  function updateBreakTime(e: { target: { value: any } }) {
    setPomoParams({ ...pomoParams, break: e.target.value });
  }

  function updateReps(e: { target: { value: any } }) {
    setPomoParams({ ...pomoParams, reps: e.target.value });
  }
  const minutes = 25;
  const timeStamp = new Date();
  timeStamp.setMinutes(timeStamp.getMinutes() + minutes);
  return (
    <div>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text align="center" fontSize={"100px"}>
          Set up your focus session
        </Text>
        {/* Timer Emoji */}
        <Flex direction="column" width="80%" justifyContent={"space-around"}>
          <FormControl>
            <Text fontWeight={"black"} fontSize={"24px"} paddingTop={"10%"}>
              Focus Time:
            </Text>
            <Select onChange={updateFocusTime} placeholder="Set focus time">
              <option value="25">25 minutes</option>
              <option value="50">50 minutes</option>
              <option value="90">90 minutes</option>
            </Select>
            <Text fontWeight={"black"} fontSize={"24px"} paddingTop={"10%"}>
              Break Time:
            </Text>
            <Select onChange={updateBreakTime} placeholder="Set break time">
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="30">30 minutes</option>
            </Select>
            <Text fontWeight={"black"} fontSize={"24px"} paddingTop={"10%"}>
              Repetitions:
            </Text>
            <NumberInput defaultValue={4} onChange={updateReps}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <div style={{ paddingTop: "4%" }}></div>
            <Button type="submit" onClick={onSubmit}>
              Start Timer!
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </div>
  );
}
