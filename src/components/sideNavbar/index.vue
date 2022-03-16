<template>
  <transition name="slide">
    <div class="bar" v-show="show">
      <div style="margin-top: -50px">
        <div class="flex-center-center bar-myself">
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F25%2F20200625201612_wdgky.thumb.1000_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649950051&t=127f2e930690e219192a3a2604847649"
            class="bar-myself-avatar"
          />
          <div>Milk</div>
        </div>
        <ul class="flex-center-center bar-nav">
          <li class="bar-nav-item">个人心情</li>
          <li class="bar-nav-item">学习笔记</li>
          <li class="bar-nav-item">音乐心得</li>
          <li class="bar-nav-item">游戏盘点</li>
        </ul>

        <ul class="bar-bottom flex-center-center">
          <li class="bar-bottom-item">
            <svg t="1647395920559" class="img" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9361" width="128" height="128"><path d="M870.314316 877.390274 870.314316 877.390274C870.314316 877.390274 870.314316 877.390274 870.314316 877.390274 777.938121 967.974532 651.551687 1024 512 1024 229.239611 1024 0.017919 794.741738 0.017919 511.98135 0.017919 229.22096 229.239611-0.000731 512-0.000731 794.760389-0.000731 1023.982081 229.22096 1023.982081 511.98135 1023.982081 655.190051 965.067572 784.465527 870.314316 877.390274ZM512 950.859703C615.932362 950.859703 711.30731 914.545545 786.495536 854.131659 746.451223 740.398497 639.446968 658.261944 512 658.261944 384.553032 658.261944 277.548777 740.398497 237.504464 854.131659 312.69269 914.545545 408.067638 950.859703 512 950.859703ZM512 73.176136C269.649625 73.176136 73.158216 269.667545 73.158216 512.017919 73.158216 621.545515 113.53166 721.41859 179.869911 798.325613 237.723886 672.597442 364.512591 585.158216 512 585.158216 659.450839 585.158216 786.276114 672.597442 844.130089 798.325613 910.46834 721.45516 950.841784 621.545515 950.841784 512.017919 950.841784 269.667545 754.350375 73.176136 512 73.176136ZM512 548.588068C410.993249 548.588068 329.149257 466.707505 329.149257 365.737325 329.149257 264.730574 410.993249 182.886582 512 182.886582 612.97018 182.886582 694.850743 264.730574 694.850743 365.737325 694.850743 466.707505 612.97018 548.588068 512 548.588068ZM512 256.026879C451.403264 256.026879 402.289554 305.140589 402.289554 365.700754 402.289554 426.297491 451.403264 475.411201 512 475.411201 572.596736 475.411201 621.710446 426.297491 621.710446 365.700754 621.710446 305.140589 572.596736 256.026879 512 256.026879Z" p-id="9362" fill="#bfbfbf"></path></svg>
            <span>关于我</span>
          </li>
          <li class="bar-bottom-item">
            <svg t="1647395642165" class="img" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6566" width="128" height="128"><path d="M511.957333 21.333333C241.024 21.333333 21.333333 240.981333 21.333333 512c0 216.832 140.544 400.725333 335.573334 465.664 24.490667 4.394667 32.256-10.069333 32.256-23.082667 0-11.690667 0.256-44.245333 0-85.205333-136.448 29.610667-164.736-64.64-164.736-64.64-22.314667-56.704-54.4-71.765333-54.4-71.765333-44.586667-30.464 3.285333-29.824 3.285333-29.824 49.194667 3.413333 75.178667 50.517333 75.178667 50.517333 43.776 75.008 114.816 53.333333 142.762666 40.789333 4.522667-31.658667 17.152-53.376 31.189334-65.536-108.970667-12.458667-223.488-54.485333-223.488-242.602666 0-53.546667 19.114667-97.322667 50.517333-131.669334-5.034667-12.330667-21.930667-62.293333 4.778667-129.834666 0 0 41.258667-13.184 134.912 50.346666a469.802667 469.802667 0 0 1 122.88-16.554666c41.642667 0.213333 83.626667 5.632 122.88 16.554666 93.653333-63.488 134.784-50.346667 134.784-50.346666 26.752 67.541333 9.898667 117.504 4.864 129.834666 31.402667 34.346667 50.474667 78.122667 50.474666 131.669334 0 188.586667-114.730667 230.016-224.042666 242.090666 17.578667 15.232 33.578667 44.672 33.578666 90.453334v135.850666c0 13.141333 7.936 27.605333 32.853334 22.869334C862.250667 912.597333 1002.666667 728.746667 1002.666667 512 1002.666667 240.981333 783.018667 21.333333 511.957333 21.333333z" p-id="6567" fill="#bfbfbf"></path></svg>
            <span>开源</span>
          </li>
        
        </ul>
      </div>
    </div>
  </transition>

  <van-overlay :show="show" @click="onCloseSlide" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Overlay } from "vant";

export default defineComponent({
  components: {
    [Overlay.name]: Overlay,
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const sildebar = ref(null);
    const show = computed({
      get: () => {
        return props.show;
      },
      set: (value) => {
        emit("update:show", value);
      },
    });

    const onCloseSlide = () => {
      show.value = false;
    };

    return {
      show,
      sildebar,
      onCloseSlide,
    };
  },
});
</script>

<style lang="less" scoped>
.flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bar {
  padding: 20px;
  z-index: 2;
  position: fixed;
  bottom: 60px;
  right: 0;
  border-radius: 20px 0 0 20px;
  background: rgb(231, 231, 231);
  width: 48vw;
  height: 85%;

  .bar-myself {
    width: 100%;
    flex-flow: column;
    margin-bottom: 50px;

    .bar-myself-avatar {
      border: 10px solid white;
      border-radius: 50%;
      width: 200px;
      height: 200px;
      background: white;
      margin-bottom: 10px;
    }

    .bar-myself-name {
    }
  }

  .bar-nav {
    flex-flow: column;

    .bar-nav-item {
      font-weight: bold;
      margin-bottom: 40px;
    }
  }

  .bar-bottom {
    position: absolute;
    left: 0px;
    bottom: 20px;
    width: 100%;
    font-size: 30px;
    justify-content: space-evenly;
    .bar-bottom-item{
      display: flex;
      
      flex-flow: column;
      align-items: center;
      .img{
        width: 60px;
        height:60px;
        margin-bottom: 10px;
        border-radius: 50%;

      }
    }
  }
}

.slide-enter-active {
  right: -52vw;
  transition: all 1s ease;
}

.slide-enter-to,
.slide-leave-active {
  right: 0;
  transition: all 1s ease;
}
.slide-leave-to {
  right: -52vw;
  transition: all 1s ease;
}
</style>