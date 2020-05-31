export default {
  beforeCreate () {
    console.log(`route: ${this.$route.path} + homeBMixin: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + homeBMixin: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + homeBMixin: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + homeBMixin: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + homeBMixin: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + homeBMixin: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + homeBMixin: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + homeBMixin: destroyed`)
  }
}
