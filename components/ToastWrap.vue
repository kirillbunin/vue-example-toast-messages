<template>
  <div class="toastWrap">
    <div class="toast__itemWrap" v-for="(toast, i) in toastArray" :key="i">
      <MessageToast
        :title="toast.title"
        :text="toast.text"
        :i="i"
        :type="toast.type"
        @remove="$emit('remove', i)"
      />
    </div>
  </div>
</template>

<script>
  import MessageToast from '~/components/MessageToast.vue'
  export default {
    components: {
      MessageToast
    },
    props: {
      toastArray: { type: Array, required: true }
    }
  }
</script>

<style scoped>
  .toastWrap {
    position: fixed;
    left: 40px;
    right: 40px;
    bottom: 40px;
    max-width: 400px;
    z-index: 50;
  }
    .toast__itemWrap {
      margin-bottom: 40px;
    }
    .toast__itemWrap:last-child {
      margin-bottom: 0;
    }
</style>
