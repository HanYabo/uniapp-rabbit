<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel">
      <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
        <swiper-item
          style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
          <navigator class="navigator XtxSwiper--navigator" hover-class="none">
            <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator XtxSwiper--indicator">
        <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPannel">
    <view class="category CategoryPannel--category data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0">
      <navigator class="category-item CategoryPannel--category-item data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0"
        hover-class="none">
        <image class="icon CategoryPannel--icon data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-image"></image>
        <text
          class="text CategoryPannel--text data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-transparent sk-text-14-2857-302 sk-text">居家</text>
      </navigator>
      <navigator class="category-item CategoryPannel--category-item data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0"
        hover-class="none">
        <image class="icon CategoryPannel--icon data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-image"></image>
        <text
          class="text CategoryPannel--text data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-transparent sk-text-14-2857-224 sk-text">锦鲤</text>
      </navigator>
      <navigator class="category-item CategoryPannel--category-item data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0"
        hover-class="none">
        <image class="icon CategoryPannel--icon data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-image"></image>
        <text
          class="text CategoryPannel--text data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-transparent sk-text-14-2857-725 sk-text">服饰</text>
      </navigator>
      <navigator class="category-item CategoryPannel--category-item data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0"
        hover-class="none">
        <image class="icon CategoryPannel--icon data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-image"></image>
        <text
          class="text CategoryPannel--text data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-transparent sk-text-14-2857-451 sk-text">母婴</text>
      </navigator>
      <navigator class="category-item CategoryPannel--category-item data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0"
        hover-class="none">
        <image class="icon CategoryPannel--icon data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-image"></image>
        <text
          class="text CategoryPannel--text data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-transparent sk-text-14-2857-382 sk-text">个护</text>
      </navigator>
      <navigator class="category-item CategoryPannel--category-item data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0"
        hover-class="none">
        <image class="icon CategoryPannel--icon data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-image"></image>
        <text
          class="text CategoryPannel--text data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-transparent sk-text-14-2857-51 sk-text">严选</text>
      </navigator>
      <navigator class="category-item CategoryPannel--category-item data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0"
        hover-class="none">
        <image class="icon CategoryPannel--icon data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-image"></image>
        <text
          class="text CategoryPannel--text data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-transparent sk-text-14-2857-870 sk-text">数码</text>
      </navigator>
      <navigator class="category-item CategoryPannel--category-item data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0"
        hover-class="none">
        <image class="icon CategoryPannel--icon data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-image"></image>
        <text
          class="text CategoryPannel--text data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-transparent sk-text-14-2857-131 sk-text">运动</text>
      </navigator>
      <navigator class="category-item CategoryPannel--category-item data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0"
        hover-class="none">
        <image class="icon CategoryPannel--icon data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-image"></image>
        <text
          class="text CategoryPannel--text data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-transparent sk-text-14-2857-323 sk-text">杂项</text>
      </navigator>
      <navigator class="category-item CategoryPannel--category-item data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0"
        hover-class="none">
        <image class="icon CategoryPannel--icon data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-image"></image>
        <text
          class="text CategoryPannel--text data-v-2d45f2d0 CategoryPannel--data-v-2d45f2d0 sk-transparent sk-text-14-2857-167 sk-text">品牌</text>
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPannel">
    <view class="panel HotPannel--panel hot HotPannel--hot">
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-845 sk-text">特惠推荐</text>
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-763 sk-text">精选全攻略</text>
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image mode="aspectFit" class="sk-image"></image>
          <image mode="aspectFit" class="sk-image"></image>
        </navigator>
      </view>
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-570 sk-text">爆款推荐</text>
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-629 sk-text">最受欢迎</text>
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image mode="aspectFit" class="sk-image"></image>
          <image mode="aspectFit" class="sk-image"></image>
        </navigator>
      </view>
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-438 sk-text">一站买全</text>
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-707 sk-text">精心优选</text>
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image mode="aspectFit" class="sk-image"></image>
          <image mode="aspectFit" class="sk-image"></image>
        </navigator>
      </view>
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-1000 sk-text">新鲜好物</text>
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-672 sk-text">生活加分项</text>
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image mode="aspectFit" class="sk-image"></image>
          <image mode="aspectFit" class="sk-image"></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/XtxGuess" class="r">
    <view class="caption XtxGuess--caption">
      <text class="text XtxGuess--text sk-transparent sk-text-0-0000-714 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.sk-transparent {
  color: transparent !important;
}

.sk-text-3-5714-785 {
  background-image: linear-gradient(transparent 3.5714%, #EEEEEE 0%, #EEEEEE 96.4286%, transparent 0%) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-194 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}

.sk-text-14-2857-302 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-224 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-725 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-451 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-382 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-51 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-870 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-131 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-323 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-167 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-845 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-763 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-570 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-629 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-438 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-707 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-1000 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-672 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-0-0000-714 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 30.7692rpx;
  position: relative !important;
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
