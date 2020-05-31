<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import appAMixin from '@/mixin/appAMixin'
import appBMixin from '@/mixin/appBMixin'

export default {
  name: 'App',
  mixins: [appAMixin, appBMixin],
  beforeCreate () {
    console.log(`route: ${this.$route.path} + app: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + app: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + app: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + app: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + app: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + app: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + app: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + app: destroyed`)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
