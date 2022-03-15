<template>
  <topNavBar></topNavBar>
  <sideNavbar v-model:show="sildeBarObj.show"></sideNavbar>
  <div class="container">
    <div class="content">
      <div class="cover" @click="sildeBarObj.sildeBarShow">
        <img
          src="https://t7.baidu.com/it/u=4240641596,3235181048&fm=193&f=GIF"
        />
      </div>
      <div class="code">
        <div class="title">我的一些感慨</div>
        <div class="item-box">
          <div
            class="item"
            @click="goToDetail"
            v-for="(item, index) in 10"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <!-- <bottomNavBar></bottomNavBar> -->
</template>


<script lang="ts">
import { defineComponent, reactive } from "vue";
import topNavBar from "../components/topNavBar/index.vue";
import sideNavbar from "../components/sideNavbar/index.vue"
import bottomNavBar from "../components/bottomNavBar/index.vue";
import router from "../router";

export default defineComponent({
  components: {
    topNavBar,
    bottomNavBar,
    sideNavbar
  },
  setup() {
    console.log("HOME");
    const goToDetail = () => {
      router.push({ name: "detail" });
    };

    const sildeBarObj = reactive({
      show:false,
      sildeBarShow:()=>{
        sildeBarObj.show = true;
      }
    })

   

    return {
      goToDetail,
      sildeBarObj
    };
  },
});
</script>

<style lang="less" scoped>
.container {
  background: url("/img/main-bc.png");
  //   padding: 40px;
  // background: #f0f0f4;
}

.content {
  padding: 40px;
}

.cover {
  padding: 20px;

  background: #ffffff;
  box-shadow: -1px 10px 61px 12px #dbdbdb;
  border-radius: 10px 10px 10px 10px;
  opacity: 1;
  margin-bottom: 64px;
}

.code {
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
