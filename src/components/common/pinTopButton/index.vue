<template>
    <div  class="pin-top" @click="onPinTop">

       <svg t="1647396885134" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12729" width="64" height="64"><path d="M123.27 486a32 32 0 0 1 0-45.25L489.46 74.38l0.21-0.2c0.3-0.3 0.61-0.59 0.92-0.87l0.05-0.05 0.54-0.46c0.2-0.17 0.39-0.35 0.59-0.51a0.87 0.87 0 0 1 0.11-0.09c0.21-0.18 0.43-0.34 0.64-0.5l0.48-0.37 0.15-0.12c0.23-0.17 0.46-0.32 0.69-0.48l0.43-0.3 0.2-0.14 0.68-0.42 0.44-0.28 0.22-0.14 0.66-0.36 0.49-0.28 0.23-0.13 0.61-0.3 0.57-0.28 0.23-0.11c0.18-0.09 0.37-0.16 0.55-0.24l0.68-0.3 0.18-0.07 0.5-0.2 0.78-0.29H501.46l0.46-0.15c0.29-0.1 0.58-0.2 0.88-0.28h0.14l0.43-0.12 0.95-0.25h0.07l0.43-0.1c0.32-0.07 0.65-0.15 1-0.21h0.1l0.46-0.08c0.32-0.06 0.65-0.12 1-0.16h0.08l0.56-0.07 0.91-0.1h0.07c0.25 0 0.51 0 0.76-0.06H515.18l1 0.11h0.58l1 0.17 0.36 0.06h0.12l1 0.23 0.27 0.06H519.72l1 0.27 0.24 0.07h0.12l0.15 0.05q0.46 0.13 0.93 0.3c0.09 0 0.19 0 0.28 0.09h0.12l0.18 0.07 0.82 0.31 0.32 0.12h0.13l0.21 0.09 0.72 0.31 0.35 0.16 0.15 0.06 0.23 0.12c0.21 0.09 0.41 0.2 0.62 0.3l0.36 0.18 0.2 0.1 0.24 0.13 0.53 0.3 0.37 0.2 0.24 0.14a1.64 1.64 0 0 1 0.22 0.14l0.49 0.3 0.36 0.22 0.28 0.18 0.19 0.13 0.49 0.34 0.34 0.24c0.09 0.07 0.2 0.13 0.29 0.21l0.15 0.11 0.56 0.43 0.21 0.17 0.36 0.28 0.1 0.08c0.25 0.2 0.49 0.42 0.74 0.64l0.4 0.34q0.6 0.54 1.17 1.11l366 366.38A32 32 0 0 1 855.46 486L544.12 174.34l0.17 580.79a32 32 0 0 1-32 32 32 32 0 0 1-32-32l-0.17-580.89L168.53 486a32 32 0 0 1-45.26 0z m773.41 409H127.32a32 32 0 1 0 0 64h769.36a32 32 0 0 0 0-64z" fill="#8a8a8a" p-id="12730"></path></svg>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const onPinTop =()=>{
            //获取节点平滑滚动
            window.scrollTo({
                top:0,
                behavior:'smooth'

            })

            // document.documentElement.scrollTop = document.body.scrollTop = 0;
            
            //获取具体某个元素 滚动到元素
            // document.querySelector('#top')?.scrollIntoView({
            //     behavior:"smooth"
            // })
            
        }

        return{
        onPinTop
        }
    },
})
</script>


<style lang="less" scoped>
.pin-top{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 80px;
    right: 80px;
    width:80px;
    height: 80px;
    box-shadow: 1px 2px  8px 3px  rgb(196, 195, 195);;
    border-radius: 50%;
    background: white;
    .icon{
        width: 36px;
        height:36px;
    }
}
</style>