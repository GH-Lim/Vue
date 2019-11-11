<template>
  <div>
    <input type="text" v-on:input="onInput"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  components: {

  },
  methods: {
    onInput: function(event) {
      this.$emit('inputChange', event.target.value) // inputChange 이벤트 발생했음을 알린다. (상위 컴포넌트한테)
    }
  }
}
</script>

<style scoped>
  input {
    width: 75%;
  }
  div {
    text-align: center;
    margin: 20px;
  }
</style>