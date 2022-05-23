<template>
  <div>
    <h2>Hello Vite Vue2</h2>
    <MyChild />
    <div>{{ data }}</div>
  </div>
</template>

<script>
import MyChild from '@comp/myDemo.vue'
import { getBaiduData } from '@api/user'

export default {
  components: { MyChild },
  data() {
    return {
      data: ''
    }
  },
  created() {
    this._getData()
  },
  methods: {
    async _getData() {
      const res = await getBaiduData({
        page: 1,
        rand: 10
      })
      const { data } = res.data
      this.data = data
    }
  }
}
</script>
