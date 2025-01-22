import type {Keyboard} from '../../routes/api/keyboards/+server'

export const useDate = (keyboard: Keyboard[]) => {
  if (
    ['TBD', 'N/A'].includes(keyboard[0].date_built_latest) ||
    keyboard[0].build_status === 'Unbuilt'
  ) {
    return {
      label: 'Purchased',
      value: keyboard[0].date_bought,
    }
  }
  return {
    label: 'Built',
    value: keyboard[0].date_built_latest,
  }
}
