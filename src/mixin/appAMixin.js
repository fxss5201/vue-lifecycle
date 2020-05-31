export default {
  beforeCreate () {
    console.log(`route: ${this.$route.path} + appAMixin: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + appAMixin: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + appAMixin: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + appAMixin: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + appAMixin: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + appAMixin: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + appAMixin: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + appAMixin: destroyed`)
  }
}
