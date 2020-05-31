<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      点击 按钮1 使用 v-if 切换 show content1 的展示状态
      <button @click="flag1 = !flag1">按钮1</button>
    </div>
    <div>
      点击 按钮2 使用 v-show 切换 show content2 的展示状态
      <button @click="flag2 = !flag2">按钮2</button>
    </div>
    <div v-if="flag1">show content1</div>
    <div v-show="flag2">show content2</div>
  </div>
</template>

<script>
import homeAComponentAMixin from '@/mixin/homeAComponentAMixin'
import homeAComponentBMixin from '@/mixin/homeAComponentBMixin'

export default {
  name: 'homeAComponent',
  props: {
    msg: String
  },
  mixins: [homeAComponentAMixin, homeAComponentBMixin],
  data () {
    return {
      flag1: true,
      flag2: true
    }
  },
  beforeCreate () {
    console.log(`route: ${this.$route.path} + HomeAComponent: beforeCreate`)
  },
  created () {
    console.log(`route: ${this.$route.path} + HomeAComponent: created`)
  },
  beforeMount () {
    console.log(`route: ${this.$route.path} + HomeAComponent: beforeMount`)
  },
  mounted () {
    console.log(`route: ${this.$route.path} + HomeAComponent: mounted`)
  },
  beforeUpdate () {
    console.log(`route: ${this.$route.path} + HomeAComponent: beforeUpdate`)
  },
  updated () {
    console.log(`route: ${this.$route.path} + HomeAComponent: updated`)
  },
  beforeDestroy () {
    console.log(`route: ${this.$route.path} + HomeAComponent: beforeDestroy`)
  },
  destroyed () {
    console.log(`route: ${this.$route.path} + HomeAComponent: destroyed`)
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
