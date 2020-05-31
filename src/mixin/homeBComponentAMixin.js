export default {
  beforeCreate () {
    console.log(`route: ${this.$route.path} + homeBComponentAMixin: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + homeBComponentAMixin: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + homeBComponentAMixin: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + homeBComponentAMixin: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + homeBComponentAMixin: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + homeBComponentAMixin: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + homeBComponentAMixin: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + homeBComponentAMixin: destroyed`)
  }
}
