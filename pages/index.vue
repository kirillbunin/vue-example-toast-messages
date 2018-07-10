<template>
  <section class="container">
    <div>
      <PageNavigation />
      <div>
        <button @click="submit" class="button--big">Udělej věc</button>
      </div>
    </div>
  </section>
</template>

<script>
import PageNavigation from '~/components/PageNavigation.vue'
export default {
  components: {
    PageNavigation
  },
  methods: {
    submit () {
      this.$axios.get('neexistující stránka')
        .then(respond => {
          console.log(respond)
        })
        .catch(error => {
          this.$store.commit('toast/CREATE_TOAST', { type: 'error', title: 'Něco se porouchalo!', text: 'Věc se nepodařilo udělat. Zkuste to prosím později.' })
        })
    }
  }
}
</script>

<style>
</style>
