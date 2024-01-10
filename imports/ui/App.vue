<script setup>

  import AppMenu from './AppMenu.vue'

</script><template>

  <div class='app'>
    <AppMenu/>
    <router-view />
    <!-- <div class='test'>Test</div> -->
  </div>

</template>

<style scoped lang='less'>

  .app {
    > .test {
      color: red;
    }
  }

</style>
