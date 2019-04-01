<template>
    <div class="home">
        <search></search>
        <slider></slider>
        <list></list>
        <app-footer></app-footer>
    </div>
</template>
<script>
import Search from './Search';
import Slider from './Slider';
import List from './List';
import AppFooter from '../common/AppFooter'
export default {
    components:{Search,Slider,List,AppFooter}
}
</script>

<style scoped>
    .home{ margin-bottom:2rem;}
</style>
