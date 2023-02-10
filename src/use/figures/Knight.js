import Figure from '@/use/figures/Figure'
import blackLogo from '@/assets/black-knight.png'
import whiteLogo from '@/assets/white-knight.png'
import { FIGURE_NAMES } from '@/use/CONSANTS'

export default class Knight extends Figure {
  constructor (color, cell) {
    super(color, cell)
    this.logo = color === 'black'
      ? blackLogo
      : whiteLogo
    this.name = FIGURE_NAMES.KNIGHT
  }

  canMove (target) {
    if (!super.canMove(target)) {
      return false
    }

    const dx = Math.abs(this.cell.x - target.x)
    const dy = Math.abs(this.cell.y - target.y)

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
  }
}
