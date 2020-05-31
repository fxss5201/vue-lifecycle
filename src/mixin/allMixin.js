import Vue from 'vue'

Vue.mixin({
  beforeCreate () {
    console.log('allMixin: beforeCreate')
  },
  created () {
    console.log('allMixin: created')
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + allMixin: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + allMixin: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + allMixin: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + allMixin: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + allMixin: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + allMixin: destroyed`)
  }
})
