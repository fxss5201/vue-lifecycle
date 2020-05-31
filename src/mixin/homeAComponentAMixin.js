export default {
  beforeCreate () {
    console.log(`route: ${this.$route.path} + homeAComponentAMixin: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + homeAComponentAMixin: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + homeAComponentAMixin: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + homeAComponentAMixin: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + homeAComponentAMixin: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + homeAComponentAMixin: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + homeAComponentAMixin: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + homeAComponentAMixin: destroyed`)
  }
}
