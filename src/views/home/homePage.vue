<template>
  <h2 style="color: red">router-view {{ demo }} {{ demoName }}</h2>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['demo']),
    ...mapGetters(['demoName'])
  },
  mounted() {
    this.setDemoName(1)
    setTimeout(() => {
      this.setDemoName1(100)
    }, 5000)
  },
  methods: {
    ...mapMutations({
      setDemoName: 'DEMO_NAME'
    }),
    ...mapActions({
      setDemoName1: 'updateDemo'
    })
  }
}
</script>
