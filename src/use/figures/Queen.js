import Figure from '@/use/figures/Figure'
import blackLogo from '@/assets/black-queen.png'
import whiteLogo from '@/assets/white-queen.png'
import { FIGURE_NAMES } from '@/use/CONSANTS'

export default class Queen extends Figure {
  constructor (color, cell) {
    super(color, cell)
    this.logo = color === 'black'
      ? blackLogo
      : whiteLogo
    this.name = FIGURE_NAMES.QUEEN
  }

  canMove (target) {
    if (!super.canMove(target)) {
      return false
    }
    if (this.cell.isEmptyVertical(target)) {
      return true
    }
    if (this.cell.isEmptyHorizontal(target)) {
      return true
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true
    }
    return false
  }
}
