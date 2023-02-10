import Figure from '@/use/figures/Figure'
import blackLogo from '@/assets/black-pawn.png'
import whiteLogo from '@/assets/white-pawn.png'
import { BLACK, FIGURE_NAMES } from '@/use/CONSANTS'

export default class Pawn extends Figure {
  isFirstStep = true
  constructor (color, cell) {
    super(color, cell)
    this.logo = color === 'black'
      ? blackLogo
      : whiteLogo
    this.name = FIGURE_NAMES.PAWN
  }

  canMove (target) {
    if (!super.canMove(target)) {
      return false
    }

    const direction = this.cell.figure.color === BLACK ? 1 : -1
    const firstStepDirection = this.cell.figure.color === BLACK ? 2 : -2

    // eslint-disable-next-line no-mixed-operators
    if ((target.y === this.cell.y + direction || this.isFirstStep &&
        (target.y === this.cell.y + firstStepDirection)) &&
        target.x === this.cell.x &&
        this.cell.board.getCell(target.x, target.y).isEmpty()) {
      return true
    }

    if (target.y === this.cell.y + direction &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.cell.isEnemy(target)) {
      return true
    }

    return false
  }

  moveFigure (target) {
    super.moveFigure(target)
    this.isFirstStep = false
  }
}
