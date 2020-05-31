export default {
  beforeCreate () {
    console.log(`route: ${this.$route.path} + homeBComponentBMixin: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + homeBComponentBMixin: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + homeBComponentBMixin: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + homeBComponentBMixin: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + homeBComponentBMixin: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + homeBComponentBMixin: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + homeBComponentBMixin: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + homeBComponentBMixin: destroyed`)
  }
}
