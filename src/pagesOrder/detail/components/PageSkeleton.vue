<template name="skeleton">
  <view class="sk-container">
    <view class="navbar" style="padding-top:47px">
      <view class="wrap">
        <navigator class="back icon-left sk-pseudo sk-pseudo-circle" open-type="navigateBack"></navigator>
        <view class="title sk-transparent sk-text-14-2857-720 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view :scroll-y="true" class="viewport" id="scroller" :enable-back-to-top="true">
      <view class="overview sk-image" style="padding-top:67px">
        <view class="status icon-clock sk-transparent sk-text-0-0000-684 sk-text sk-pseudo sk-pseudo-circle">等待付款</view>
        <view class="tips sk-transparent">
          <text class="money sk-transparent sk-text-0-0000-925 sk-text">应付金额: ¥ 99.00</text>
          <text class="time sk-transparent sk-text-0-0000-195 sk-text">支付剩余</text> 00 时 29 分 59 秒
        </view>
        <view class="button sk-transparent sk-text-28-7879-329 sk-text" style="background-position-x: 50%;">去支付</view>
      </view>
      <view class="shipment">
        <view class="item sk-image">
          <view class="message sk-transparent sk-text-14-2857-171 sk-text"> 您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。 </view>
          <view class="date sk-transparent sk-text-14-2857-614 sk-text"> 2023-04-14 13:14:20 </view>
        </view>
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-561 sk-text">韩亚博 13613736311</view>
          <view class="address sk-transparent sk-text-14-2857-417 sk-text">河南省 郑州市 金水区文化公园</view>
        </view>
      </view>
      <view class="goods">
        <view class="item">
          <navigator class="navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-819 sk-text">自我态度男式多功能多层格局休闲胸包</view>
              <view class="type sk-transparent sk-text-22-2222-741 sk-text">黑色</view>
              <view class="price">
                <view class="actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-790 sk-text">146</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">1</view>
            </view>
          </navigator>
          <view class="action">
            <view class="button primary sk-transparent sk-text-29-0323-970 sk-text" style="background-position-x: 50%;">
              申请售后</view>
            <navigator class="button sk-transparent sk-text-29-0323-748 sk-text" style="background-position-x: 50%;"> 去评价
            </navigator>
          </view>
        </view>
        <view class="total">
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-622 sk-text">商品总价: </view>
            <view class="symbol sk-transparent sk-text-0-0000-745 sk-text sk-pseudo sk-pseudo-circle">99.00</view>
          </view>
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-212 sk-text">运费: </view>
            <view class="symbol sk-transparent sk-text-0-0000-456 sk-text sk-pseudo sk-pseudo-circle">10.00</view>
          </view>
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-274 sk-text">应付金额: </view>
            <view class="symbol primary sk-transparent sk-text-0-0000-167 sk-text sk-pseudo sk-pseudo-circle">109.00
            </view>
          </view>
        </view>
      </view>
      <view class="detail">
        <view class="title sk-transparent sk-text-0-0000-818 sk-text">订单信息</view>
        <view class="row">
          <view class="item sk-transparent"> 订单编号: 1728374896163033089
            <text class="copy sk-transparent sk-text-0-0000-472 sk-text">复制</text>
          </view>
          <view class="item sk-transparent sk-text-0-0000-433 sk-text">下单时间: 2023-04-14 13:14:20</view>
        </view>
      </view>
      <view is="components/XtxGuess" class="r">
        <view class="caption XtxGuess--caption">
          <text
            class="text XtxGuess--text sk-transparent sk-text-0-0000-645 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
        </view>
        <view class="guess XtxGuess--guess">
          <navigator class="guess-item XtxGuess--guess-item">
            <image class="image XtxGuess--image sk-image" mode="aspectFill"></image>
          </navigator>
          <navigator class="guess-item XtxGuess--guess-item">
            <image class="image XtxGuess--image sk-image" mode="aspectFill"></image>
          </navigator>
        </view>
      </view>
      <view class="toolbar" style="padding-bottom:34px">
        <view class="button primary sk-transparent sk-text-14-2857-491 sk-text"> 去支付 </view>
        <view class="button sk-transparent sk-text-14-2857-235 sk-text"> 取消订单 </view>
      </view>
    </scroll-view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-720 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-0-0000-684 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 34.6154rpx;
  position: relative !important;
}

.sk-text-0-0000-925 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}

.sk-text-0-0000-195 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}

.sk-text-28-7879-329 {
  background-image: linear-gradient(transparent 28.7879%, #EEEEEE 0%, #EEEEEE 71.2121%, transparent 0%) !important;
  background-size: 100% 63.4615rpx;
  position: relative !important;
}

.sk-text-14-2857-171 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-614 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-561 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-417 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-819 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-22-2222-741 {
  background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-790 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-29-0323-970 {
  background-image: linear-gradient(transparent 29.0323%, #EEEEEE 0%, #EEEEEE 70.9677%, transparent 0%) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}

.sk-text-29-0323-748 {
  background-image: linear-gradient(transparent 29.0323%, #EEEEEE 0%, #EEEEEE 70.9677%, transparent 0%) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}

.sk-text-0-0000-622 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 25.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-745 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 25.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-212 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 25.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-456 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 25.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-274 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 25.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-167 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 34.6154rpx;
  position: relative !important;
}

.sk-text-0-0000-818 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 28.8462rpx;
  position: relative !important;
}

.sk-text-0-0000-472 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 19.2308rpx;
  position: relative !important;
}

.sk-text-0-0000-433 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 25.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-645 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 30.7692rpx;
  position: relative !important;
}

.sk-text-14-2857-491 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-235 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
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
