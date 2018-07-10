<template>
  <section class="container">
    <div>
      <PageNavigation />
      <div>
        <button @click="submit" class="button--big">Načti něco</button>
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
          this.$store.commit('toast/CREATE_TOAST', { title: 'Načíst něco se nepovedlo!', text: 'Zkuste to <i>prosím</i> později.' })
        })
    }
  }
}
</script>

<style>
</style>
