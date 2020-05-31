export default {
  beforeCreate () {
    console.log(`route: ${this.$route.path} + homeAComponentBMixin: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + homeAComponentBMixin: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + homeAComponentBMixin: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + homeAComponentBMixin: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + homeAComponentBMixin: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + homeAComponentBMixin: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + homeAComponentBMixin: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + homeAComponentBMixin: destroyed`)
  }
}
