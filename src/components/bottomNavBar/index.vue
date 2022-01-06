<template>
    <div class="bar">
        <div class="bar-item">首页</div>
        <div class="bar-item">杂记</div>
        <div class="bar-item">我的</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>


<style lang="less" scoped>
.bar{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background: rgb(231, 231, 231);
    width: 100%;
    height:120px;
    // box-shadow: -5px -10px gray;
}
</style>