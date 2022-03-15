<template>

  <div class="bar">
      <img class="icon" src="/img/milk-icon.png" @click="goHome">
      我的博客demo
      <img class="icon" src="/img/open-icon.png" >
      </div>
  <div v-if="isBlock" class="block"></div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import router from '../../router';

export default defineComponent({
  props: {
    isBlock: {
      type: Boolean,
      default: true,
    },
  },
  setup(props: any) {
    const isBlock = computed(() => props.isBlock);

    const goHome = ()=>{
      router.push({name:'home'})
    }

    return {
      isBlock,
      goHome
    };
  },
});
</script>


<style lang="less" scoped>
.bar {
  // z-index:2;
//   padding:0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(233, 236, 241, 0.8);
  width: 100%;
  height: 120px;

  .icon{
      margin:0 40px;
      width:80px;
      height: 80px;
  }
}

.block {
  height: 120px;
}
</style>