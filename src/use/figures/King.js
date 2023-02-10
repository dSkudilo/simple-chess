import Figure from '@/use/figures/Figure'
import blackLogo from '@/assets/black-king.png'
import whiteLogo from '@/assets/white-king.png'
import { FIGURE_NAMES } from '@/use/CONSANTS'

export default class King extends Figure {
  constructor (color, cell) {
    super(color, cell)
    this.logo = color === 'black'
      ? blackLogo
      : whiteLogo
    this.name = FIGURE_NAMES.KING
  }

  canMove (target) {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}
