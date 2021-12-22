<template>
  <img class="img" src="/img/logo.png" />
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <div class="card" v-for="item,index in 5" :key="index">
    <van-button type="primary">主要按钮</van-button>
  </div>
  




  <button type="button" @click="count++">count is: {{ count }}</button>
  <!-- <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p> -->
</template>

<script lang="ts">
import { Button } from 'vant';
// import { getActivityDetail } from '../api'
import { defineComponent,ref} from 'vue'

export default defineComponent({
  components:{
    [Button.name]: Button
  },
  props:{
    msg:String
  },
  
  setup() {
    const count = ref(0)
    // getActivityDetail();
    return{
      count
    }
  },
})
</script>


<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

.img{
  width:20px;
}

.card{
  height:300px;
  border:1px solid gray;
}
</style>
