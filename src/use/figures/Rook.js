import Figure from '@/use/figures/Figure'
import blackLogo from '@/assets/black-rook.png'
import whiteLogo from '@/assets/white-rook.png'
import { FIGURE_NAMES } from '@/use/CONSANTS'

export default class Rook extends Figure {
  constructor (color, cell) {
    super(color, cell)
    this.logo = color === 'black'
      ? blackLogo
      : whiteLogo
    this.name = FIGURE_NAMES.ROOK
  }

  canMove (target) {
    if (!super.canMove(target)) {
      return false
    }
    if (this.cell.isEmptyHorizontal(target)) {
      return true
    }
    if (this.cell.isEmptyVertical(target)) {
      return true
    }
    return false
  }
}
