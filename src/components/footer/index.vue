<template>
  <a-layout-footer class="footer">
    <b> vue-admin-arco </b>
    &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
    <p
      >本项目目前绝大多数源码均源自字节跳动 Arco Design
      开源仓库，仅用于学习用途，由于字节跳动写的实在太香，故没有太多可以改进的地方。
    </p>
  </a-layout-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: var(--color-text-2);
  text-align: center;

  p {
    font-size: 12px;
  }
}
</style>
