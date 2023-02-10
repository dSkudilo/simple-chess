<template>
  <div class="timer">
    <div class="timer__restart">
      <button @click="handlerRestart">Restart game</button>
    </div>
    <h2>Черные - {{blackTime}}</h2>
    <h2>Белые - {{whiteTime}}</h2>
  </div>
</template>
<script>
import { BLACK } from '@/use/CONSANTS'

export default {
  name: 'TheTimer',
  props: {
    player: {
      type: Object || null
    }
  },
  data () {
    return {
      blackTime: 1500,
      whiteTime: 1500,
      timer: null
    }
  },
  watch: {
    player: {
      handler () {
        this.startTimer()
      },
      deep: true
    }
  },
  mounted () {
    this.startTimer()
  },
  methods: {
    startTimer () {
      if (this.timer) {
        clearInterval(this.timer)
      }

      const callback = this.player?.color === BLACK
        ? this.decrementBlackTimer
        : this.decrementWhiteTimer

      this.timer = setInterval(callback, 1000)
    },
    decrementBlackTimer () {
      this.blackTime -= 1
    },
    decrementWhiteTimer () {
      this.whiteTime -= 1
    },
    handlerRestart () {
      this.blackTime = 1500
      this.whiteTime = 1500
      this.$emit('restart')
    }
  }
}
</script>
