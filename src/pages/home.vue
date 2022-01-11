<template>
  <div class="container">
    <topNavBar></topNavBar>
    <div class="content">
      <div class="cover"></div>
      <div class="card">
        <div class="title">我是个标题</div>
        <div class="item-box">
          <div class="item" v-for="(item, index) in 10"></div>
        </div>
      </div>
    </div>
    <!-- <div class="content">
            <div class="card" >
                <div class="card-title">{{index}}</div>
                <div class="card-item"></div>
            </div>
        
        
        </div> -->
  </div>
  <!-- <bottomNavBar></bottomNavBar> -->
</template>


<script lang="ts">
import { defineComponent } from "vue";
import topNavBar from "../components/topNavBar/index.vue";
import bottomNavBar from "../components/bottomNavBar/index.vue";

export default defineComponent({
  components: {
    topNavBar,
    bottomNavBar,
  },
  setup() {
    console.log("HOME");
  },
});
</script>

<style lang="less" scoped>
.container {
  background: url("./img/main-bc.png") no-repeat;
  //   padding: 40px;
  // background: #f0f0f4;
}

.content {
  padding: 40px;
}

.cover {
  height: 442px;
  background: #ffffff;
  box-shadow: -1px 10px 61px 12px #dbdbdb;
  border-radius: 10px 10px 10px 10px;
  opacity: 1;
  margin-bottom: 64px;
}

.card {
  .title {
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .item-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .item {
      //   width: 314px;
      width: 48%;
      height: 300px;
      margin-bottom: 30px;
      background: #fffaf9;
      box-shadow: 0px 3px 24px 3px #cacaca;
      border-radius: 10px 10px 10px 10px;
      opacity: 1;
      // width: 100px;
    }
  }
}
</style>
