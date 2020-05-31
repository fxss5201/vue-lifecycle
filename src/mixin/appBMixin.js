export default {
  beforeCreate () {
    console.log(`route: ${this.$route.path} + appBMixin: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + appBMixin: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + appBMixin: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + appBMixin: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + appBMixin: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + appBMixin: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + appBMixin: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + appBMixin: destroyed`)
  }
}
