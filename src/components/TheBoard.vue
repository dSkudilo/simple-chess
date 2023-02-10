<template>
  <div class="board">
        <div v-for="(row, id) in board.cells" :key="id">
          <TheCell
            v-for="cell in row"
            :key="cell.id"
            :cell="cell"
            :isSelected="isCellSelected(cell)"
            @click="selectCell(cell)"
          />
        </div>
  </div>
</template>
<script>
import TheCell from '@/components/TheCell'

export default {
  name: 'TheBoard',
  props: {
    board: {
      require: true
    },
    player: {
      type: Object || null
    }
  },
  components: {
    TheCell
  },
  data () {
    return {
      selectedCell: null
    }
  },
  watch: {
    selectedCell: {
      handler (val) {
        this.highlightCells(val)
      },
      deep: true
    }
  },
  methods: {
    highlightCells () {
      this.board.highlightCells(this.selectedCell)
      // this.updateBoard()
    },
    updateBoard () {
      const newBoard = this.board.getCopyBoard()
      console.log(newBoard)
      this.$emit('updateBoard', newBoard)
    },
    isCellSelected (cell) {
      return cell.x === this.selectedCell?.x && cell.y === this.selectedCell?.y
    },
    selectCell (cell) {
      if (
        this.selectedCell &&
        this.selectedCell !== cell &&
        this.selectedCell?.figure?.canMove(cell)
      ) {
        this.selectedCell.moveFigure(cell)
        this.selectedCell = null
        this.updateBoard()
        this.$emit('swapPlayer')
      } else {
        if (!cell.figure) return
        if (cell.figure?.color === this.player.color) {
          this.selectedCell = cell
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.board {
  width: calc($cell-size * 8);
  height: calc($cell-size * 8);
  display: flex;
  flex-wrap: wrap;
}
</style>
