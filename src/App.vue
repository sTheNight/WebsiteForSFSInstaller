<script setup lang="ts">
import {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutSider,
    NDrawer,
    NDrawerContent,
    NFlex,
    NConfigProvider,
    NButton,
    NIcon,
    NDropdown,
    NMenu,
    NEllipsis,
} from "naive-ui";
import {
    WbSunnyRound,
    DarkModeRound,
    MoreVertRound,
    MenuRound,
    ContrastRound,
} from "@vicons/material";
import type { ConfigProviderProps } from "naive-ui";
import { createDiscreteApi } from "naive-ui";
import { ref, computed, h } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAppStore } from "./store";
import {
    menuOptions,
    toggleThemeOpsiont,
    moreDropdownOptions,
} from "./constants/AppMenu.config";
import AboutDialog from "./views/AboutDialog.vue";

const appStore = useAppStore();
const router = useRouter();
const route = useRoute();

const isDrawerShow = ref(false);
const collapse = ref(false);

// 当前激活的菜单
const activeKey = computed({
    get: () => route.path.split("/")[1] || "home",
    set: (key: string) => {
        isDrawerShow.value = false;
        router.push(key);
    },
});

const { modal } = createDiscreteApi(["modal"], {
    configProviderProps: computed<ConfigProviderProps>(() => ({
        theme: appStore.currentTheme,
    })),
});

function moreDropdownHandleSelect(key: string) {
    if (key === "about") {
        modal.create({
            title: "关于",
            preset: "card",
            class: "about-modal",
            content: () => h(AboutDialog),
        });
    }
}
function toggleThemeHandleSelect(key: string) {
    appStore.toggleDarkMode(key);
}

const themeIcon = computed(() => {
    if (appStore.themeMode == "dark") {
        return DarkModeRound;
    } else if (appStore.themeMode == "light") {
        return WbSunnyRound;
    } else {
        return ContrastRound;
    }
});
</script>

<template>
    <NConfigProvider :theme="appStore.currentTheme">
        <div style="position: relative">
            <NDrawer
                v-model:show="isDrawerShow"
                :default-width="300"
                placement="left"
            >
                <NDrawerContent title="菜单">
                    <NMenu
                        :options="menuOptions"
                        v-model:value="activeKey"
                    />
                </NDrawerContent>
            </NDrawer>
            <NLayout
                class="root-box"
                embedded
                position="absolute"
            >
                <NLayoutHeader
                    class="header"
                    bordered
                >
                    <NFlex
                        class="header-flex"
                        justify="space-between"
                    >
                        <div
                            class="logo"
                            style="font-size: 18px"
                        >
                            <NButton
                                v-if="appStore.isMobile"
                                quaternary
                                @click="isDrawerShow = true"
                                circle
                                style="margin-right: 8px"
                            >
                                <template #icon>
                                    <NIcon>
                                        <MenuRound />
                                    </NIcon>
                                </template>
                            </NButton>
                            <NEllipsis class="title"
                                ><span
                                    @click="router.push('/')"
                                    style="cursor: pointer"
                                    >一个很莫名其妙的网站</span
                                ></NEllipsis
                            >
                        </div>
                        <div class="action-box">
                            <NDropdown
                                trigger="hover"
                                :show-arrow="true"
                                :options="toggleThemeOpsiont"
                                @select="toggleThemeHandleSelect"
                            >
                                <NButton
                                    quaternary
                                    circle
                                >
                                    <template #icon>
                                        <Transition
                                            name="fade"
                                            mode="out-in"
                                        >
                                            <NIcon
                                                :component="themeIcon"
                                                :key="appStore.themeMode"
                                            />
                                        </Transition>
                                    </template>
                                </NButton>
                            </NDropdown>
                            <NDropdown
                                trigger="hover"
                                :show-arrow="true"
                                :options="moreDropdownOptions"
                                @select="moreDropdownHandleSelect"
                            >
                                <NButton
                                    quaternary
                                    circle
                                >
                                    <template #icon>
                                        <NIcon>
                                            <MoreVertRound />
                                        </NIcon>
                                    </template>
                                </NButton>
                            </NDropdown>
                        </div>
                    </NFlex>
                </NLayoutHeader>

                <NLayout
                    class="content-box"
                    has-sider
                    position="absolute"
                    style="top: 64px; left: 0; right: 0; bottom: 0"
                >
                    <NLayoutSider
                        class="sider-bar"
                        bordered
                        show-trigger="arrow-circle"
                        position="static"
                        collapse-mode="width"
                        :collapsed-width="64"
                        v-model:collapsed="collapse"
                        v-if="!appStore.isMobile"
                    >
                        <NMenu
                            :options="menuOptions"
                            v-model:value="activeKey"
                            :collapsed="collapse"
                            :collapsed-width="64"
                            :collapsed-icon-size="20"
                        />
                    </NLayoutSider>
                    <NLayoutContent>
                        <RouterView v-slot="{ Component }">
                            <Transition
                                name="fade"
                                mode="out-in"
                            >
                                <component :is="Component" />
                            </Transition>
                        </RouterView>
                    </NLayoutContent>
                </NLayout>
            </NLayout>
        </div>
    </NConfigProvider>
</template>

<style scoped lang="scss">
.header,
.footer {
    height: var(--header-height);
    padding: 0 var(--header-padding);
    box-sizing: border-box;
}

.root-box {
    min-height: 100vh;
    width: 100vw;
    box-sizing: border-box;
}

.header-flex,
.action-box,
.logo,
.footer-flex {
    display: flex;
    align-items: center;
}

.header-flex {
    width: 100%;
}

.logo,
.footer-flex {
    justify-content: center;
    height: calc(var(--header-height) - 1px);
}

.logo {
    display: flex;
    flex: 1;
    justify-content: start;
    min-width: 0;
    align-items: center;
}

.action-box {
    justify-content: center;
}
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.about-modal {
    width: min(500px, calc(100vw - 32px)) !important;
}
</style>
