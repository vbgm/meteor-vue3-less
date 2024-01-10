<script setup>

  import { ref } from 'vue'

  const count = ref(0)
  function increment() {
    count.value++
  }

</script><template>

  <div class='counter'>
    <button @click='increment'>Click Me</button>
    <p>You've pressed the button <strong>{{ count }}</strong> times.</p>
  </div>

</template><style scoped lang='less'>

  .counter {
    > p {
      > strong {
        color: red;
      }
    }
  }

</style>
