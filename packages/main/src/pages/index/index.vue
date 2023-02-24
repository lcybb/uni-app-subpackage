<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <navigator
        style="display: block"
        url="/sub1/pages/index/index"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <button>Sub1</button>
      </navigator>
      <navigator
        style="display: block"
        url="/sub2/pages/index/index"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <button>Sub2</button>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello Main",
    };
  },
  onShow() {
    console.log(wx.$subpackages);
  },
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
