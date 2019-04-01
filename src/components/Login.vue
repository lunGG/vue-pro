<template>
    <div class="login">
        <router-link tag="div" to="/home" class="back"></router-link>
        <div class="welcome"><img src="../assets/images/welcome.png"></div>
        <div class="login-form">
            <div class="login-inp"><label>登录</label><input type="text" v-model="username"  placeholder=""></div>
            <div class="login-inp"><label>密码</label><input type="password" v-model="password"  placeholder=""></div>
            <div class="login-inp"><a href="javascript:;" @click="login"  >立即登录</a></div>
        </div>
        <div class="login-txt">
            <router-link to="/reg" class="line">立即注册</router-link>|
            <router-link to="/login" class="line">忘记密码？</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
    return {
      username:'',
      password:'',
      error:''
    }
  },
  methods:{
    login(){
      axios({
        url:'/api/login',
        method:'post',
        data:{username:this.username,password:this.password}
      }).then(
        res=>{
          // console.log(1,res)
          if(res.data.error==0){
            console.log('...',res.data)
            this.$router.push('/user')
            // this.$router.push('/user?data='+res.data.data)
          }else{
            this.error=res.data.msg
          }
        }
      )
    }
  }
}
</script>

<style>
@import url(../assets/css/login.css);
</style>

