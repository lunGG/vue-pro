<template>
    <div>
        <div class="menu">
            <div class="nav">
                <img src="../assets/images/menu/nav_1.png">
                <p>看攻略</p>
            </div>
            <div class="nav">
                <img src="../assets/images/menu/nav_2.png">
                <p>抢折扣</p>
            </div>
            <div class="nav">
                <img src="../assets/images/menu/nav_3.png">
                <p>定酒店</p>
            </div>
            <div class="nav">
                <img src="../assets/images/menu/nav_4.png">
                <p>找附近</p>
            </div>
        </div>
        <div class="name">
            <p>折扣游</p>
        </div>
        <div class="favorable">
            <div class="fb">
                <div class="fb-lt">
                    <img src="../assets/images/scenics/scenic_3.png">
                    <p class="fb-name">塞班岛5-6天（欢乐自由 行）</p>
                    <p class="price">
                        <span class="discount">4.7折</span>
                        <span class="num"><big>5699</big>元起</span>
                    </p>
                </div>
            </div>
            <div class="fb">
                <div class="fb-lt">
                    <img src="../assets/images/scenics/scenic_4.png">
                    <p class="fb-name">夏威夷7天6晚 （三天跟团三天自由行）</p>
                    <p class="price">
                        <span class="discount">8.7折</span>
                        <span class="num"><big>11799</big>元起</span>
                    </p>
                </div>
            </div>
            <div class="fb">
                <div class="fb-lt">
                    <img src="../assets/images/scenics/scenic_5.png">
                    <p class="fb-name">体验全球最长的过山车15天超爽旅游</p>
                    <p class="price">
                        <span class="discount">6.2折</span>
                        <span class="num"><big>21099</big>元起</span>
                    </p>
                </div>
            </div>
            <div class="fb">
                <div class="fb-lt">
                    <img src="../assets/images/scenics/scenic_6.png">
                    <p class="fb-name">美国纽约曼哈顿5天游（体验不一样的风情）</p>
                    <p class="price">
                        <span class="discount">2.8折</span>
                        <span class="num"><big>2889</big>元起</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.menu{ width:12.42rem; height:3.03rem; border-bottom:5px solid #d9d9d9; background-color:#e0e0e0;}
.menu .nav{ float:left; width:1.42rem; height:2.2rem; margin:0.43rem 0.51rem 0 1.04rem; overflow:hidden; font-size:0.4rem; text-align:center;}
.menu .nav img{ width:1.42rem; height:1.42rem;}
.menu .nav p{ font-size:0.4rem;}
.name{ width:12.42rem; height:1.05rem; font-size:0.38rem; line-height:1.3rem; border-bottom:1px solid #e1e1e1;}
.name p{ margin-left:0.47rem;}
.favorable{ width:12.42rem; height:100%; overflow:hidden;}
.fb:nth-child(odd){ float:left; width:6.18rem; height:6.7rem; border-right:1px solid #e1e1e1; border-bottom:1px solid #e1e1e1; overflow:hidden;}
.fb:nth-child(even){ float:left; width:6.18rem; height:6.7rem; border-bottom:1px solid #e1e1e1; overflow:hidden;}
.cbr{ border-right:none;}
.fb-lt{ width:5.9rem; height:6.5rem; margin:0.3rem 0.14rem 0 0.14rem;}
.fb-lt img{ width:5.9rem; height:3.8rem; display:block;}
.fb-lt p.fb-name{ margin-top:0.3rem; font-size:0.48rem;}
.fb-lt p.price{ margin-top:0.2rem; font-size:0.3rem;}
.fb-lt p span{ font-size:0.3rem; color:#d7d7d7;}
.fb-lt p span.discount{ float:left; margin:0.2rem 0 0 0.5rem; color:#f46b29;}
.fb-lt p span.num{ float:right; margin-right:0.5rem;}
.fb-lt p span big{ font-size:0.5rem; color:#ff3500;}
</style>

