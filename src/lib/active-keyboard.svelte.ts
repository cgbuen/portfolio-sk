import type { Keyboard } from "../routes/api/keyboards/+server";

export function createActiveKeyboard() {
  let activeKeyboard = $state({} as Keyboard)

  return {
    get get() {
      return activeKeyboard
    },
    set(newKeyboard: Keyboard) {
      activeKeyboard = newKeyboard
    }
  }
}

export const activeKeyboard = createActiveKeyboard()