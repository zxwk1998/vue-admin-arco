<template>
  <div class="container">
    <div class="logo">
      <img alt="logo" src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image" />
      <div class="logo-text">vue-admin-arco</div>
    </div>
    <LoginBanner />
    <div class="content">
      <div class="content-inner">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginBanner from './components/banner.vue'
import LoginForm from './components/login-form.vue'

export default defineComponent({
  components: {
    LoginBanner,
    LoginForm,
  },
})
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 500px;
  border: 1px solid #dedede;
  width: 900px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);

  .banner {
    width: 400px;
    background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
  }

  .content {
    border-radius: 10px;
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }
}

.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;

  &-text {
    margin-right: 4px;
    margin-left: 4px;
    color: var(--color-fill-1);
    font-size: 20px;
  }
}
</style>
