<template>
  <a-layout-footer class="footer">
    Vue Admin Arco
    <span style="margin-left: 3px">© {{ currentYear }}</span>
    <p style="margin-left: 10px">
      Powered by
      <a href="https://vuejs-core.cn/store" target="_blank" style="color: #4d8af0; text-decoration: none">Shop Vite 模板市场</a>
    </p>
  </a-layout-footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: var(--color-text-2);
  text-align: center;
}
</style>
