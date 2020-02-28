import { START_CLOCK, TICK_CLOCK } from "./types";
export function startClock() {
  return { type: START_CLOCK };
}

export function tickClock(isServer) {
  return {
    type: TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
}
