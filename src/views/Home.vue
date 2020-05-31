<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      点击 home按钮A 使用 v-if 切换 home-a-component 的展示状态
      <button @click="flagA = !flagA">home按钮A</button>
    </div>
    <div>
      点击 home按钮B 使用 v-if 切换 home-b-component 的展示状态
      <button @click="flagB = !flagB">home按钮B</button>
    </div>
    <home-a-component v-if="flagA" msg="vue-lifecycle-a-component"/>
    <home-b-component v-show="flagB" msg="vue-lifecycle-b-component"/>
  </div>
</template>

<script>
// @ is an alias to /src
import homeAComponent from '@/components/HomeAComponent.vue'
import homeBComponent from '@/components/HomeBComponent.vue'

import homeAMixin from '@/mixin/homeAMixin'
import homeBMixin from '@/mixin/homeBMixin'

export default {
  name: 'Home',
  mixins: [homeAMixin, homeBMixin],
  components: {
    homeAComponent,
    homeBComponent
  },
  data () {
    return {
      flagA: true,
      flagB: true
    }
  },
  beforeCreate () {
    console.log(`route: ${this.$route.path} + home: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + home: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + home: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + home: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + home: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + home: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + home: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + home: destroyed`)
  }
}
</script>
