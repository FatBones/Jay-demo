<template>
  <div>
    <div id="back"></div>
    <router-view v-if="isRouterAlive"></router-view>    
    <MusicIcon />
    <ClientPeople/>

  </div>
</template>

<script>
    import MusicIcon from "./components/MusicIcon.vue";
    import ClientPeople from "./components/ClientPeople.vue";
    export default {
    name: 'App',
    components: {
      ClientPeople, MusicIcon
    },
    // 页面重新加载
    provide(){
      return {
        reload: this.reload
      }
    },
    data(){
      return {
        isRouterAlive: true
      }
    },
    methods:{
      reload() {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      }
    }
};

</script>

<style>

</style>
