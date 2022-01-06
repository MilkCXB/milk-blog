<template>
    <div class="bar">
        我的博客demo
    </div>
    <div v-if="isBlock" class="block"></div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    props:{
      isBlock:{
          type:Boolean,
          default:true
      }
    },
    setup(props:any) {
        const isBlock = computed(() => props.isBlock)

        return {
            isBlock
        }
    },
})
</script>


<style lang="less" scoped>
.bar{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(231, 231, 231);
    width: 100%;
    height:100px;
    // box-shadow: -5px -10px gray;
}

.block{
    height:100px;
}
</style>