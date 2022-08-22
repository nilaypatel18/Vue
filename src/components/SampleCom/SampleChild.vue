<template>
  <div>
    <h1>All Component</h1>
    <h3 v-for="user in myArray" :key="user">{{ user }} {{ myVariable }}</h3>
    <button v-on:click="myFunction">Add</button>
  </div>
</template>

<script>
export default {
  name: "SampleChild",
  props: {
    myVariable: String,
    myObject: Object,
    myArray: Array,
    myFuncation: Function,
    myBoolean: Boolean,
  },
  data() {
    return {
      myVar: 1,
    };
  },
  methods: {
    myFunction() {
      this.$emit("sendBoolean", this.myVar);
      this.myVar = this.myVar + 1;
    },
  },
};
</script>
