<template>
    <topNavBar></topNavBar>
    <div class="container">
        <div class="content" v-for="item in 12">
            {{item}} 芜湖
        </div>
    
    </div>
    <bottomNavBar></bottomNavBar>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import topNavBar from '../components/topNavBar/index.vue'
import bottomNavBar from '../components/bottomNavBar/index.vue'

export default defineComponent({
    components:{
        topNavBar,
        bottomNavBar
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
