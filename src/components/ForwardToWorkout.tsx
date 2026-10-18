"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site";

/** Sends the visitor to the same path on the workout tracker's site. Runs once, only in the browser. */
export function ForwardToWorkout() {
  useEffect(() => {
    const { pathname, search, hash } = window.location;
    window.location.replace(`${siteConfig.workoutUrl}${pathname}${search}${hash}`);
  }, []);
  return null;
}
