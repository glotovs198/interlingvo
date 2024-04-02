<template>
  <navbar />
  <slot />
</template>

<script>
import { Navbar } from "..";
export default {
  components: { Navbar },
};
</script>
