<template>
  <div id="app">
    <img src="./assets/logo.png" style="width:200px;height:200px">
    <router-view/>
    <quick-menu :menu-count="count" :icon-class="icons" :menu-url-list='list' :position='position'>
    </quick-menu>

  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
<script>
  import quickMenu from 'vue-quick-menu'
  import 'font-awesome/css/font-awesome.min.css'

  export default {
    name: 'App',
    components: {
      quickMenu
    },
    data() {
      return {
        count: 4,
        icons: ["fa fa-home", "fa fa-coffee",
          "fa fa-car", "fa fa-meetup"
        ],
        list: [{
          isLink: true,
          url: "/"
        }, {
          isLink: true,
          url: "/content"
        }, {
          isLink: true,
          url: "/playground"
        }, {
          isLink: true,
          url: "/about"
        }],
        backgroundColor: '#42A5F5',
        color: '#eee',
        position: 'bottom-right',
        isOpenNewTab: false
      }
    }
  }

</script>
