import { FIGURE_NAMES } from '@/use/CONSANTS'

export default class Figure {
  constructor (color, cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this // используя кольцо можно сразу указать фигуру для клетки
    this.logo = null
    this.name = FIGURE_NAMES
    this.id = Math.random()
  }

  canMove (target) {
    if (target.figure?.color === this.color) {
      return false
    }
    if (target?.figure?.name === FIGURE_NAMES.KING) {
      return false
    }
    return true
  }

  moveFigure (target) {
  }
}
