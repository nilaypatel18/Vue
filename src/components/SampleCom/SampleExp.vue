<template>
  <div class="hello">
    <div>
      <p v-html="thirdvar"></p>
      <h1 v-if="firstvar" v-bind:class="{ Heart: firstvar, Knife: firstvar }">
        Heart
      </h1>
      <h1 v-else v-bind:class="{ Brain: !firstvar }">Brain</h1>
      <button v-on:click="function_one">Toggal</button>
      <button v-bind:disabled="!firstvar">
        {{ firstvar == true ? "Enabled" : "Disabled" }}
      </button>
    </div>
    <div v-bind:class="[classvar]">
      <h1 class="header_title">Data Table</h1>
      <table v-bind:class="[firstvar ? 'condiclass' : '']">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Occupation</th>
        </tr>
        <tr v-for="user in secondvar" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.Occupation }}</td>
        </tr>
      </table>
    </div>
    <div>
      <p style="white-space: pre-line">Type Here:{{ inputvar }}</p>
      <textarea type="number" v-model="inputvar" />
    </div>
    <div>
      <SampleChild
        v-bind:myArray="myArray"
        v-bind:myVariable="myVariable"
        v-on:sendBoolean="updateBoolean($event)"
      />
      <h1>All Ok? {{myCount}}</h1>
    </div>
  </div>
</template>

<script>
import SampleChild from "./SampleChild.vue";
export default {
  name: "SampleExp",
  props: {
    msg: String,
  },
  data() {
    return {
      firstvar: false,
      secondvar: [
        {
          id: 2811,
          name: "Ravi",
          Occupation: "Developer",
        },
        {
          id: 610,
          name: "Dipu",
          Occupation: "Doctor",
        },
      ],
      thirdvar: "<h1>Hello Vue!</h1>",
      classvar: ["table_data", "tb_data_head"],
      inputvar: "",
      myVariable: "is here",
      myArray: ["Ravi", "Kavi"],
      myCount: 0,
    };
  },
  methods: {
    function_one() {
      this.firstvar = !this.firstvar;
    },
    updateBoolean(count){
      console.log(count)
      this.myCount = count
    }
  },
  components: {
    SampleChild,
  },
};
</script>

<style scoped>
.Heart {
  color: white;
  background: black;
  padding: 15px;
}

.Brain {
  color: black;
  background: lightgray;
  padding: 15px;
}
.table_data {
  text-align: center;
}
.table_data table {
  width: 100%;
  border: 1px solid;
}

.table_data th,
.table_data td {
  padding: 5px;
  width: 300px;
}
</style>
