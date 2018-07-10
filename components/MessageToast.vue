<template>
  <div
    class="errorModalWrap"
    :class="{
      'is--fadingOut': fadeOut,
      'is--error': type === 'error'
    }"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
  >
    <button class="errorModal__close" @click="removeSelf"><img src="~/static/icons/gray-x.svg" alt="X"></button>
    <strong class="errorModal__title" v-if="title">{{ title }}</strong>
    <p class="errorModal__text" v-if="text" v-html="text"></p>
  </div>
</template>

<script>
  export default {
    props: {
      title: { type: String, required: false },
      text: { type: String, required: false },
      i: { type: Number, required: true },
      type: { type: String, required: false }
    },
    data () {
      return {
        fadeOut: false,
        fadeOutTimer: null,
        removeTimer: null
      }
    },
    methods: {
      createTimeout () {
        this.fadeOutTimer = setTimeout(() => {
          this.fadeOut = true
          this.removeTimer = setTimeout(() => {
            this.removeSelf()
          }, 2000)
        }, 4000)
      },
      handleMouseOver () {
        this.fadeOut = false
        clearTimeout(this.fadeOutTimer)
        clearTimeout(this.removeTimer)
      },
      handleMouseOut () {
        this.createTimeout()
      },
      removeSelf () {
        this.$emit('remove')
      }
    },
    mounted () {
      this.createTimeout()
    }
  }
</script>

<style scoped>
.errorModalWrap {
  position: relative;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 0 12px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  border: solid 2px var(--color-primary-a60);
  padding: 20px 20px 12px;
  transition: opacity .1s ease;
  text-align: left;
  &.is--fadingOut {
    transition: opacity 2s ease-in;
    opacity: 0;
  }
  &.is--error {
    border: 1px red solid;
  }
}
  .errorModal__close {
    appearance: none;
    border: 0;
    outline: 0;
    box-shadow: 0;
    background: transparent;
    position: absolute;
    right: 12px;
    top: 12px;
    padding: 0;
    margin: 0;
    font-size: 0;
    cursor: pointer;
  }
  .errorModal__title {
    display: block;
    font-size: 18px;
    font-family: var(--font-display);
    font-weight: 500;
    color: var(--color-primary);
    margin-bottom: 8px;
  }
  .errorModal__text {
    font-size: 14px;
    line-height: 24px;
    color: var(--color-black);
    margin-bottom: 8px;
  }
</style>
