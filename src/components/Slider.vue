<template>
  <div class="banner">
    <ul class="clearfix">
      <li><img src="../assets/images/img_4.jpg" alt=""/>
        <div class="text-box">
          <h2>世界那么大，不如去看看</h2>
          <p>三亚一日游</p>
        </div>
      </li>
      <li><img src="../assets/images/img_2.jpg" alt=""/>
        <div class="text-box">
          <h2>世界那么大，不如去看看</h2>
          <p>塞班岛欢乐一日游</p>
        </div>
      </li>
      <li><img src="../assets/images/img_3.jpg" alt=""/>
        <div class="text-box">
          <h2>世界那么大，不如去看看</h2>
          <p>夏威夷三天自由行</p>
        </div>
      </li>
      <li><img src="../assets/images/img_1.jpg" alt=""/>
        <div class="text-box">
          <h2>还可以降低首付款健身房44</h2>
          <p>日本富士山自驾游</p>
        </div>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  mounted(){
    var mySwipe=new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
}
</script>

<style scoped>
.banner{position: relative;overflow: hidden; z-index: 1}
.banner ul li{width:12.42rem;float:left;position: relative;}
.banner ul li img{ display:block;width:12.42rem; height:6.6rem;}
.banner ul li .text-box{width:12.42rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background: rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.1rem; }
.text-box p{font-size:0.3rem; line-height:100%; margin-bottom:0.1rem;}
.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;}
</style>