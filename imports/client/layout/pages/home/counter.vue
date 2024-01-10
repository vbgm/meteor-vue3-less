<script setup>

  import { ref } from 'vue'

  const count = ref(0)
  function increment() {
    count.value++
  }

</script><template>

  <button @click='increment'>Click Me</button>
  <p>You've pressed the button <strong>{{ count }}</strong> times.</p>

</template><style scoped lang='less'>

  p {
    > strong {
      color: red;
    }
  }

</style>
