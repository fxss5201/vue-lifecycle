<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  beforeCreate () {
    console.log(`route: ${this.$route.path} + about: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + about: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + about: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + about: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + about: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + about: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + about: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + about: destroyed`)
  }
}
</script>
