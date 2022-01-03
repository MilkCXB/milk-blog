<template>
    <topNavBar></topNavBar>
    <div class="container">
        我的博客
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import topNavBar from '../components/topNavBar/index.vue'

export default defineComponent({
    components:{
        topNavBar
    },
    setup() {
        console.log('HOME');
    },
})
</script>

<style lang="less" scoped>



</style>
