<template>
  <div class="spinner">
    <span class="spinner-inner spinner-inner-1"></span>
    <span class="spinner-inner spinner-inner-2"></span>
    <span class="spinner-inner spinner-inner-3"></span>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.spinner {
  position: absolute;
  $offset: calc($size / 2);
  top: calc(50% - #{$offset});
  left: calc(50% - #{$offset});
  width: $size;
  height: $size;
  animation: spinner 0.75s linear infinite;

  &-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    &-1 {
      background: linear-gradient(to right, rgba($primary,0) 0%,rgba($primary,0) 50%,$primary 51%);
    }

    &-2 {
      background: linear-gradient(to top, rgba($white,0) 0%,$white 100%);
    }

    &-3 {
      $offset: $size * 0.1;
      top: $offset;
      left: $offset;
      width: $size - ($offset * 2);
      height: $size - ($offset * 2);
      background: $white;
    }
  }
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
