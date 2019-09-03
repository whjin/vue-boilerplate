<template>
	<div>
		<h1>首页</h1>
		{{count}}
		<button @click="handleIncrement">+1</button>
	</div>
</template>

<script>
  export default {
    name: "index",
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    methods: {
      handleIncrement() {
        this.$store.commit({
          type: 'increment',
          count: 10
        })
      }
    }
  }
</script>

<style scoped>

</style>