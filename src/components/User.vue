<template>
    <div class="user">
        <div class="head">
            <div class="head-img">
                <img src="src">
                <p>
                    <router-link tag="a" to="/login" class="line">{{user.nikename}}</router-link>
                    <a href="javascript:;" @click="logout">注销</a>
                </p>
            </div>
            <div class="bt">
                <p class="bt-lf">{{user.follow}}关注</p>
                <p>{{user.fans}}粉丝</p>
            </div>
        </div>

        <div class="whe">
            <div class="whe-lt whe-br">
                <p class="lf-tp"><img src="../assets/images/person/flag.png">足迹</p>
                <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
            </div>
            <div class="whe-lt">
                <p class="lf-tp"><img src="../assets/images/icon/heart.png">足迹</p>
                <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
            </div>
        </div>
        <div class="whe">
            <div class="whe-lt whe-br">
                <p class="lf-tp"><img src="../assets/images/person/in.png">足迹</p>
                <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
            </div>
            <div class="whe-lt">
                <p class="lf-tp"><img src="../assets/images/person/out.png">足迹</p>
                <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
            </div>
        </div>

        <div class="person">
            <div class="pn-lt">
                <p><img class="img-lf" src="../assets/images/person/lt_1.png">我的行程<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
            </div>
            <div class="pn-lt">
                <p><img class="img-lf" src="../assets/images/person/lt_2.png">我的帖子<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
            </div>
            <div class="pn-lt">
                <p><img class="img-lf" src="../assets/images/person/lt_3.png">我的收藏<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
            </div>
            <div class="pn-lt">
                <p><img class="img-lf" src="../assets/images/person/lt_4.png">我的问答<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
            </div>
            <div class="pn-lt">
                <p><img class="img-lf" src="../assets/images/person/lt_5.png">我的驴友<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
            </div>
            <div class="pn-lt">
                <p><img class="img-lf" src="../assets/images/person/lt_6.png">我的折扣<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
import AppFooter from '../common/AppFooter'
export default {
  components:{AppFooter},
  data(){
    return {
      src:"",
      user:{}
    }
  },
  methods:{
    logout(){
      axios({
        url:'/api/logout'
      }).then(
        res=>{
          if(res.data.error==0){
            this.$router.push('/home')
          }
        }
      )
    }
  },
  beforeRouteEnter(to,from,next){
    //异步请求
    axios({
      url:'/api/user'
    }).then(
      res=>{
        if(res.data.error==0){
          console.log(res.data)
          next(_this=>{_this.user=res.data.data,_this.src=res.data.data.icon});//数据预载
        }else{
          next('/login')
        }
      }
    )
    //next(访问目标组件，把数据传给目标组件)
  }
}
</script>

<style>
@import url(../assets/css/person.css);
</style>

