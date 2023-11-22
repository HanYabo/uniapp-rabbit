<template name="skeleton">
  <view class="sk-container">
    <scroll-view :scroll-y="true" class="viewport" :enable-back-to-top="true">
      <view class="goods">
        <view class="preview">
          <swiper :circular="true" :current="0" :autoplay="false">
            <swiper-item
              style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
              <image mode="aspectFill" class="sk-image"></image>
            </swiper-item>
          </swiper>
          <view class="indicator">
            <text class="current sk-transparent sk-opacity">1</text>
            <text class="split sk-transparent sk-opacity">/</text>
            <text class="total sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta">
          <view class="price">
            <text class="symbol sk-transparent sk-opacity">¥</text>
            <text class="number sk-transparent sk-text-14-2857-424 sk-text">168.00</text>
          </view>
          <view class="name ellipsis sk-transparent sk-text-14-2857-755 sk-text">梅乃宿梅酒720毫升</view>
          <view class="desc sk-transparent sk-text-0-0000-983 sk-text">小藏手工酿造，百年名酒app</view>
        </view>
        <view class="action">
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-832 sk-text">选择</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-410 sk-text"> 请选择商品规格 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-861 sk-text">送至</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-102 sk-text"> 请选择收获地址 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-60 sk-text">服务</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-169 sk-text"> 无忧退 快速退款 免费包邮 </text>
          </view>
          <view is="node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup" class="r"></view>
        </view>
      </view>
      <view class="detail panel">
        <view class="title">
          <text class="sk-transparent sk-text-0-0000-484 sk-text">详情</text>
        </view>
        <view class="content">
          <view class="properties">
            <view class="item">
              <text class="label sk-transparent sk-text-25-0000-947 sk-text">品名</text>
              <text class="value sk-transparent sk-text-25-0000-839 sk-text">梅乃宿梅酒</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar" style="padding-bottom:34px">
      <view class="icons">
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle">
          <text class="icon-heart sk-pseudo sk-pseudo-circle"></text>收藏</button>
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle" open-type="contact">
          <text class="icon-handset sk-pseudo sk-pseudo-circle"></text>客服 </button>
        <navigator class="icons-button sk-transparent" open-type="switchTab">
          <text class="icon-cart sk-pseudo sk-pseudo-circle"></text>购物车
        </navigator>
      </view>
      <view class="buttons">
        <view class="addcart sk-transparent sk-text-32-4324-334 sk-text" style="background-position-x: 50%;"> 加入购物车
        </view>
        <view class="buynow sk-transparent sk-text-32-4324-301 sk-text" style="background-position-x: 50%;"> 立即购买 </view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-424 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 78.0769rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-755 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-0-0000-983 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 23.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-832 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-410 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-861 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-102 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-60 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-169 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-484 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}

.sk-text-25-0000-947 {
  background-image: linear-gradient(transparent 25.0000%, #EEEEEE 0%, #EEEEEE 75.0000%, transparent 0%) !important;
  background-size: 100% 50.0000rpx;
  position: relative !important;
}

.sk-text-25-0000-839 {
  background-image: linear-gradient(transparent 25.0000%, #EEEEEE 0%, #EEEEEE 75.0000%, transparent 0%) !important;
  background-size: 100% 50.0000rpx;
  position: relative !important;
}

.sk-text-32-4324-334 {
  background-image: linear-gradient(transparent 32.4324%, #EEEEEE 0%, #EEEEEE 67.5676%, transparent 0%) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}

.sk-text-32-4324-301 {
  background-image: linear-gradient(transparent 32.4324%, #EEEEEE 0%, #EEEEEE 67.5676%, transparent 0%) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}

.sk-button {
  color: #EFEFEF !important;
  background: #EFEFEF !important;
  border: none !important;
  box-shadow: none !important;
}

.sk-image {
  background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #EFEFEF !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
