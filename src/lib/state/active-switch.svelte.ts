import type {Switchset} from '../../routes/api/keyboards/+server'

class ActiveSwitchset {
  switchset = $state({} as Switchset)
  indexInDisplayedList = $state(0)

  constructor(switchset: Switchset) {
    this.switchset = switchset
  }
}

export const activeSwitchset = new ActiveSwitchset({} as Switchset)
