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

        <div></div>
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

.flex-center-center{
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


  .bar-nav{
      flex-flow: column;

      .bar-nav-item{
          font-weight: bold;
          margin-bottom: 40px;
      }
  }
}

.slide-enter-active {
  right: -48vw;
  transition: all 1s ease;
}

.slide-enter-to,
.slide-leave-active {
  right: 0;
  transition: all 1s ease;
}
.slide-leave-to {
  right: -48vw;
  transition: all 1s ease;
}
</style>