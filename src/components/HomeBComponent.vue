<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import homeBComponentAMixin from '@/mixin/homeBComponentAMixin'
import homeBComponentBMixin from '@/mixin/homeBComponentBMixin'

export default {
  name: 'homeBComponent',
  props: {
    msg: String
  },
  mixins: [homeBComponentAMixin, homeBComponentBMixin],
  beforeCreate () {
    console.log(`route: ${this.$route.path} + HomeBComponent: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + HomeBComponent: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + HomeBComponent: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + HomeBComponent: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + HomeBComponent: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + HomeBComponent: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + HomeBComponent: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + HomeBComponent: destroyed`)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
