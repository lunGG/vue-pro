<template>
    <div class="app-header">
        <i class="logo"></i>
        <a href="#">
            <div class="sch">
                <input type="text" placeholder="搜索目的地、帖子、景点">
                <!-- <img src="@/assets/images/icon/sch.png"> -->
            </div>
        </a>
    </div>
</template>
<style scoped>
.app-header{ width:12.42rem; height:1.35rem; background-color:#7ecef4;}
.app-header i.logo{ float:left; display:block; width:0.85rem; height:0.8rem; margin:0.24rem 0 0.24rem 0.18rem; background:url(../assets/images/icon/logo.png) no-repeat; background-size:0.85rem 0.8rem;}
.app-header .sch{ float:left; }
.app-header .sch input{display: block;border:0;width:11rem; height:0.8rem; margin:0.24rem 0 0.24rem 0.18rem; border-radius:0.1rem; background-color:#68b2d5; text-align:center;color: #fff}
</style>

