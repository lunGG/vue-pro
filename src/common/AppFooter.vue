<template>
    <ul class="app-footer">
        <router-link tag="li" to="/home" active-class="act"><img src="../assets/images/foot/ft_1_1.png"><p>推荐</p></router-link>
        <router-link tag="li" to="/detail/1" active-class="act"><img src="../assets/images/foot/ft_2_2.png"><p>目的地</p></router-link>
        <router-link tag="li" to="/"><img src="../assets/images/foot/ft_3_3.png"><p>帖子</p></router-link>
        <router-link tag="li" to="/user" active-class="act"><img src="../assets/images/foot/ft_4_4.png"><p>我的</p></router-link>
    </ul>
</template>
<style scoped>
.app-footer{ position:fixed; bottom:0; width:12.42rem; height:1.58rem; background-color:#f2f2f2; overflow:hidden;}
.app-footer li{ float:left; width:1rem; height:1.2rem; margin:0.15rem 0 0.2rem 1.68rem; text-align:center; overflow:hidden;color:#9c9c9c;}
.app-footer li img{ width:0.7rem; height:0.7rem; margin:0 auto; display:block;}
.app-footer li p{ margin-top:0.15rem; font-size:0.3rem;}
.app-footer li.act{color:#7ecef4;}
</style>
