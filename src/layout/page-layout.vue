<template>
  <a-layout class="layout">
    <a-layout>
      <a-layout>
        <a-layout-sider
          v-if="menu"
          class="layout-sider"
          :breakpoint="'xl'"
          :collapsed="collapse"
          :collapsible="true"
          :width="menuWidth"
          :style="{ paddingTop: navbar ? '60px' : '' }"
          :hide-trigger="true"
          @collapse="setCollapsed"
        >
          <div class="menu-wrapper">
            <div class="left-side">
              <a-space>
                <img
                  alt="logo"
                  src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
                />
                <a-typography-title
                  :style="{ margin: 0, fontSize: '18px', color: '#fff' }"
                  :heading="5"
                >
                  vue-admin-arco
                </a-typography-title>
              </a-space>
            </div>
            <Menu />
          </div>
        </a-layout-sider>

        <a-layout class="layout-content" :style="paddingStyle">
          <div v-if="navbar" class="layout-navbar">
            <NavBar />
          </div>
          <a-layout-content>
            <router-view />
          </a-layout-content>
          <Footer v-if="footer" />
        </a-layout>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAppStore, useUserStore } from '@/store';
import NavBar from '@/components/navbar/index.vue';
import Menu from '@/components/menu/index.vue';
import Footer from '@/components/footer/index.vue';
import usePermission from '@/hooks/permission';

export default defineComponent({
  components: {
    NavBar,
    Menu,
    Footer,
  },
  setup() {
    const appStore = useAppStore();
    const userStore = useUserStore();
    const router = useRouter();
    const route = useRoute();
    const permission = usePermission();
    const navbarHeight = `60px`;
    const navbar = computed(() => appStore.navbar);
    const menu = computed(() => appStore.menu);
    const footer = computed(() => appStore.footer);
    const menuWidth = computed(() => {
      return appStore.menuCollapse ? 48 : appStore.menuWidth;
    });
    const collapse = computed(() => {
      return appStore.menuCollapse;
    });
    const paddingStyle = computed(() => {
      const paddingLeft = menu.value
        ? { paddingLeft: `${menuWidth.value}px` }
        : {};
      const paddingTop = navbar.value ? { paddingTop: navbarHeight } : {};
      return { ...paddingLeft, ...paddingTop };
    });
    const setCollapsed = (val: boolean) => {
      appStore.updateSettings({ menuCollapse: val });
    };
    watch(
      () => userStore.role,
      (roleValue) => {
        if (roleValue && !permission.accessRouter(route))
          router.push({ name: 'notFound' });
      }
    );
    return {
      navbar,
      menu,
      footer,
      menuWidth,
      paddingStyle,
      collapse,
      setCollapsed,
    };
  },
});
</script>

<style scoped lang="less">
@nav-size-height: 60px;
@layout-max-width: 1100px;

.layout {
  width: 100%;
  height: 100%;
}

.layout-navbar {
  transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  position: fixed;
  top: 0;
  left: 250px;
  z-index: 100;
  width: 100%;
  min-width: @layout-max-width;
  height: @nav-size-height;
}

.layout-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 100%;
  padding-top: 0 !important;

  .left-side {
    display: flex;
    align-items: center;
    padding-left: 10px;
    background: var(--color-menu-dark-bg);
    height: 60px;
    transition: none !important;
  }

  &::after {
    position: absolute;
    top: 0;
    right: -1px;
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
    content: '';
  }

  > :deep(.arco-layout-sider-children) {
    overflow-y: hidden;
    top: 0;
  }
}

.menu-wrapper {
  transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  :deep(.arco-menu) {
    height: calc(100% - 60px) !important;
    transition: none;
    ::-webkit-scrollbar {
      width: 12px;
      height: 4px;
    }

    ::-webkit-scrollbar-thumb {
      border: 4px solid transparent;
      background-clip: padding-box;
      border-radius: 7px;
      background-color: var(--color-text-4);
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-text-3);
    }
  }
}

.layout-content {
  min-width: @layout-max-width;
  min-height: 100vh;
  overflow-y: hidden;
  background-color: var(--color-fill-2);
  transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}

.arco-layout-sider-collapsed {
  .left-side {
    width: 50px;
    .arco-typography {
      display: none;
    }
  }
  + .layout-content {
    .layout-navbar {
      left: 50px !important;
      .navbar {
        width: calc(100% - 50px) !important;
      }
    }
  }
}
</style>
