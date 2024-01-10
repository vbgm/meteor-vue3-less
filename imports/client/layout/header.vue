<template>
  <nav class="flex items-center">
    <RouterLink :to='{ name: `home` }'>
      Home
    </RouterLink>

    <RouterLink :to='{ name: `about` }'>
      About
    </RouterLink>
  </nav>
</template>
