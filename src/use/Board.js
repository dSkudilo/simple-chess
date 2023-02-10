import Cell from '@/use/Cell'
import { WHITE, BLACK } from '@/use/CONSANTS'
// import Queen from '@/use/figures/Queen'
import Pawn from '@/use/figures/Pawn'
import King from '@/use/figures/King'
import Queen from '@/use/figures/Queen'
import Bishop from '@/use/figures/Bishop'
import Knight from '@/use/figures/Knight'
import Rook from '@/use/figures/Rook'

export default class Board {
  constructor () {
    this.cells = []
    this.lostBlackFigures = []
    this.lostWhiteFigures = []
  }

  initCells () {
    for (let i = 0; i < 8; i++) {
      const row = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, i, j, BLACK, null))
        } else {
          row.push(new Cell(this, i, j, WHITE, null))
        }
      }
      this.cells.push(row)
    }
  }

  highlightCells (selectedCell) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i]
      for (let j = 0; j < 8; j++) {
        const target = row[j]
        target.available = !!selectedCell?.figure?.canMove(target)
      }
    }
  }

  getCopyBoard () {
    const newBoard = new Board()
    newBoard.cells = this.cells
    newBoard.lostBlackFigures = this.lostBlackFigures
    newBoard.lostWhiteFigures = this.lostWhiteFigures
    return newBoard
  }

  getCell (x, y) {
    return this.cells[x][y]
  }

  addKings () {
    // eslint-disable-next-line no-new
    new King(BLACK, this.getCell(4, 0))
    // eslint-disable-next-line no-new
    new King(WHITE, this.getCell(4, 7))
  }

  addQueens () {
    // eslint-disable-next-line no-new
    new Queen(BLACK, this.getCell(3, 0))
    // eslint-disable-next-line no-new
    new Queen(WHITE, this.getCell(3, 7))
  }

  addBishop () {
    // eslint-disable-next-line no-new
    new Bishop(BLACK, this.getCell(2, 0))
    // eslint-disable-next-line no-new
    new Bishop(WHITE, this.getCell(5, 7))
    // eslint-disable-next-line no-new
    new Bishop(BLACK, this.getCell(5, 0))
    // eslint-disable-next-line no-new
    new Bishop(WHITE, this.getCell(2, 7))
  }

  addKnights () {
    // eslint-disable-next-line no-new
    new Knight(BLACK, this.getCell(1, 0))
    // eslint-disable-next-line no-new
    new Knight(WHITE, this.getCell(6, 7))
    // eslint-disable-next-line no-new
    new Knight(BLACK, this.getCell(6, 0))
    // eslint-disable-next-line no-new
    new Knight(WHITE, this.getCell(1, 7))
  }

  addPawns () {
    for (let i = 0; i < 8; i++) {
      // eslint-disable-next-line no-new
      new Pawn(BLACK, this.getCell(i, 1))
      // eslint-disable-next-line no-new
      new Pawn(WHITE, this.getCell(i, 6))
    }
  }

  addRooks () {
    // eslint-disable-next-line no-new
    new Rook(BLACK, this.getCell(0, 0))
    // eslint-disable-next-line no-new
    new Rook(WHITE, this.getCell(7, 7))
    // eslint-disable-next-line no-new
    new Rook(BLACK, this.getCell(7, 0))
    // eslint-disable-next-line no-new
    new Rook(WHITE, this.getCell(0, 7))
  }

  addFigures () {
    this.addKings()
    this.addQueens()
    this.addBishop()
    this.addKnights()
    this.addPawns()
    this.addRooks()
  }
}
