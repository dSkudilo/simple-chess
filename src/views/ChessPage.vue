<template>
  <div class="chess">
    <div class="chess__wrapper" v-if="board">
      <TheTimer
        :player="currentPlayer"
        @restart="restart"
      />
      <div class="chess__board">
        <div class="chess__board-player" v-if="currentPlayer">
          <h3 class="chess__board-name">
            Текущий игрок: {{currentPlayer.color}}
          </h3>
        </div>
        <TheBoard
          :board="board"
          @updateBoard="updateBoard"
          :player="currentPlayer"
          @swapPlayer="swapPlayer"
        />
      </div>
      <div class="chess__lost">
        <TheLostFigures
          title="Черные фигуры"
          :figures="board.lostBlackFigures"
        />
        <TheLostFigures
          title="Белые фигуры"
          :figures="board.lostWhiteFigures"
        />
      </div>
    </div>
  </div>
</template>
<script>
import TheBoard from '@/components/TheBoard'
import Board from '@/use/Board'
import { Player } from '@/use/Player'
import { BLACK, WHITE } from '@/use/CONSANTS'
import TheLostFigures from '@/components/TheLostFigures'
import TheTimer from '@/components/TheTimer'
export default {
  name: 'ChessPage',
  components: {
    TheTimer,
    TheBoard,
    TheLostFigures
  },
  data () {
    return {
      board: null,
      whitePlayer: new Player(WHITE),
      blackPlayer: new Player(BLACK),
      currentPlayer: null
    }
  },
  mounted () {
    this.restart()
    this.currentPlayer = this.whitePlayer
  },
  methods: {
    swapPlayer () {
      console.log('dadada')
      this.currentPlayer = this.currentPlayer.color === WHITE
        ? this.blackPlayer
        : this.whitePlayer
    },
    updateBoard (val) {
      this.board = val
    },
    restart () {
      const newBoard = new Board()
      newBoard.initCells()
      newBoard.addFigures()
      this.setBoard(newBoard)
    },
    setBoard (val) {
      this.board = val
    }
  }
}
</script>
<style lang="scss" scoped>
.chess {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.chess__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
