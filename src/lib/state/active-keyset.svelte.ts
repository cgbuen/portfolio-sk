import type {Keyset} from '../../routes/api/keyboards/+server'

class ActiveKeyset {
  keyset = $state({} as Keyset)
  indexInDisplayedList = $state(0)

  constructor(keyset: Keyset) {
    this.keyset = keyset
  }
}

export const activeKeyset = new ActiveKeyset({} as Keyset)
