<template>
    <topNavBar></topNavBar>
    <div class="container">
        我的博客

        <div class="content" v-for="item in 5">
            {{item}}
        </div>
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
.content{
    padding:50px;
    border-radius: 20px;
    border: 1px solid gold;

}

</style>
