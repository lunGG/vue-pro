<template>
    <div class="detail">
        <div class="nav">
            <ul>
                <li class="l-btn" @click="goback"></li>
            </ul>
        </div>
        <div class="content">
            <div class="header clear">
                <h2><img src="../assets/images/touxiang.jpg" alt=""/></h2>
                <p>作者名字:{{$route.params.id}}</p>
            </div>
            <div class="cont">
                <h3>身未动，心已远。</h3>
                <div class="time">
                    <p>2019年03月31日 20:35:58</p>
                </div>
                <div class="text-box">
                    <li>
                        <p>你写PPT时，阿拉斯加的鳕鱼正跃出水面，你看报表时，梅里雪山的金丝猴刚好爬上树尖。你挤进地铁时，西藏的山鹰一直盘旋云端，你在会议中吵架时，尼泊尔的背包客一起端起酒杯坐在火堆旁。有一些穿高跟鞋走不到的路，有一些喷着香水闻不到的空气，有一些在写字楼里永远遇不见的人。</p>
                        <img src="../assets/images/scenics/scenic_1.png" alt="">
                    </li>
                    <li>
                        <p>有时我们选择改变，并非经过深思熟虑，而更像是听见了天地间冥冥中的呼唤，呼唤你前往另一个地方，过上另一种生活。你并不一定会从此拥有更美好的人生，可你仍然感谢天地和人世所带来的这些变化和发生。不然你大概会一直好奇和不甘吧——家门前的那条小路，到底通向了什么样的远方呢?</p>
                        <img src="../assets/images/scenics/scenic_2.png" alt="">
                    </li>
                    <li>
                        <p>有一种旅行，叫单车旅行。它没有奢侈准备，只是需要垮上后座的勇气和一颗想走即走的心，就算是一辆永久单车也能让你的梦想走很远。一个人骑行，孤单却内省;一群人骑行，壮观而有力。希望有一天，自己也像他们一样，踩着单车上路，经历一种身体下了地狱，眼睛进入天堂，灵魂归入故里。</p>
                        <img src="../assets/images/scenics/scenic_3.png" alt="">
                    </li>
                    <li>
                        <p>人生就像是一场旅行，遇到的既有感人的，也有伤心的，既有令人兴奋的，也有令人灰心的，既有美妙的风景，也会有称不上景只有风的地方。人生就是要感受美丽的善良的，丑恶的病态的。而只有在充满了艰辛的人生旅途中，始终调整好自己观风景的心态，才能做到人在旅途，感悟人生，享受人生。</p>
                        <img src="../assets/images/scenics/scenic_4.png" alt="">
                    </li>
                </div>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
import AppFooter from '../common/AppFooter'
export default {
    components:{AppFooter},
    methods:{
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.detail .nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #e8eaec;
  z-index: 99;
}
.detail .nav ul {
  width: 6.4rem;
  height: 0.45rem;
  padding: 0.15rem;
}
.detail .nav ul li {
  width: 0.29rem;
  height: 0.8rem;
  background: url(../assets/images/back.png) no-repeat 0 0;
  background-size: 100%;
}
.content {
  margin-top: 0.6rem;
  background: #f2f4f5;
  padding-bottom: 0.85rem;
}
.content .header {
  padding: 0.39rem 0.28rem 0.15rem 0.28rem;
  height: auto;
  background: none;
}
.header h2 {
  margin-right: 0.18rem;
}
.header h2 img{
    width: 2rem;
    height: 2rem;
}
.header p {
  margin-top: 0.18rem;
  font-size: 0.3rem;
}
.content .cont {
  padding: 0 0.38rem;
  color: #494d4d;
}
.cont h3 {
  font-size: 0.4rem;
  line-height: 0.6rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #494d4d;
}
.cont .time {
  height: 0.24rem;
  line-height: 0.24rem;
  margin: 0.26rem 0;
  margin-bottom: .5rem;
}
.time p {
  position: relative;
}
.cont .text-box li{
  font-size: 0.5rem;
}
.cont .text-box li p{
  margin: .5rem 0;
  text-indent: 2em;
}
.cont .text-box li img{
  width: 100%;
  height: 100%;
}
</style>
