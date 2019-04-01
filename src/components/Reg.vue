<template>
    <div class="login">
        <router-link tag="div"  to="/home" class="back"></router-link>
        <div class="welcome"><img src="../assets/images/register.png"></div>
        <div class="login-form">
            <div class="login-inp"><label>昵称</label><input type="text" v-model="nikename" placeholder=""></div>
            <div class="login-inp"><label>账号</label><input type="text" v-model="username" placeholder=""></div>
            <div class="login-inp"><label>密码</label><input type="text" v-model="password" placeholder=""></div>
            <div class="login-inp"><a href="javascript:;" @click="reg">立即注册</a></div>
        </div>
        <div class="login-txt">
            <router-link to="/login" class="line">已有密码，立即登录</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
    return {
      nikename:'',
      username:'',
      password:'',
    }
  },
  methods:{
    reg(){
      var form_data = new FormData();
      form_data.append('nikename',this.nikename);
      form_data.append('username',this.username);
      form_data.append('password',this.password);
      axios({
        url:'/api/reg',
        method:'post',
        data:form_data
      }).then(
        res=>{
          console.log(1,res)
          if(res.data.error==0){
            this.$router.push('/login')
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
