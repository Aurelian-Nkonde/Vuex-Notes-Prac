<template>
  <div class="home">
    <h1>{{title}}</h1>

    <form @submit.prevent="senddata">
      <input type="text" v-model="name" placeholder="name">
      <input type="number" v-model="age" placeholder="age">
      <button>submit</button>
    </form>

    <hr>

    <h2>{{heading}}</h2>
    <div class="" v-if="devs.length > 0">
      <h4>we got {{devslength}} devs</h4>
      <br>
      <div class="" v-for="(dev, i) in devs" :key="i">

          <h1>{{ i }}:  <strong>{{ dev.name }}</strong> </h1>
          <h2> <strong> {{ dev.age }}</strong></h2>

      </div>
    </div>
    <div class="" v-else>
      <p>Oops no devs</p>
    </div>

  </div>
</template>

<script>
import {mapState} from "vuex";
import {mapGetters} from "vuex";

export default {
  name: "Home",
  data: () => {
    return {
      name: "",
      age: null
    }
  },
  computed: {
    ...mapState({
      title: "title"
    }),
    heading(){
      return this.$store.state.heading
    },
    ...mapGetters([
      'devs'
    ]),
    devslength(){
      return this.devs.length;
    }
  },
  methods: {
    senddata(){
      if (this.name.length > 3 && this.age != null){
        this.$store.dispatch('datasend', {
          name: this.name,
          age: this.age,
        })
        this.name = "",
        this.age = null
        console.log("submiited");
      } else {
        alert("put enough text")
        console.log("errors asekur");
      }
    }
  }
};
</script>
