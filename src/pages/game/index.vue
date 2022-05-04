<template>
  <topNavBar></topNavBar>
  <div class="container" id="top">game</div>
  <pinTopButton></pinTopButton>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import topNavBar from "../../components/topNavBar/index.vue";
import bottomNavBar from "../../components/bottomNavBar/index.vue";
import pinTopButton from "../../components/common/pinTopButton/index.vue";
import router from "../../router";

export default defineComponent({
  components: {
    topNavBar,
    bottomNavBar,
    pinTopButton,
  },
  setup() {
    const goToDetail = () => {
      router.push({ name: "Detail" });
    };

    return {
      goToDetail,
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
