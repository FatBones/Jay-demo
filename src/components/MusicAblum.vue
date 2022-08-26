<template>
    
    <li class="menu-item">
        <router-link :to="res.AblumPath" :style="{backgroundImage: `url(${res.url})`}" replace></router-link>
    </li>
    
</template>

<script>
export default {
    name:'MusicAblum',
    props:['res'],
    data(){
        return {
            
        }
    }
}
</script>

<style>

</style>