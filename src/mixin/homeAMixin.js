export default {
  beforeCreate () {
    console.log(`route: ${this.$route.path} + homeAMixin: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + homeAMixin: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + homeAMixin: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + homeAMixin: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + homeAMixin: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + homeAMixin: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + homeAMixin: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + homeAMixin: destroyed`)
  }
}
