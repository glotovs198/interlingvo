<template>
  <div class="wrapper">
    <navbar />
    <main>
      <slot />
    </main>
    <layout-footer />
  </div>
</template>

<script>
import { Navbar, Footer as LayoutFooter } from "..";
export default {
  components: { Navbar, LayoutFooter },
};
</script>

<style>
.wrapper {
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.wrapper main {
  flex: 1;
}
</style>
