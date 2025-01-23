import type {Keyboard} from '../../routes/api/keyboards/+server'

class ActiveKeyboard {
  keyboard = $state([] as Keyboard[])
  buildActive = $state(0)
  indexInDisplayedList = $state(0)

  constructor(keyboard: Keyboard[]) {
    this.keyboard = keyboard
  }
}

export const activeKeyboard = new ActiveKeyboard([])
