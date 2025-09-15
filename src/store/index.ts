import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { darkTheme, lightTheme, useOsTheme } from "naive-ui";
import { useWindowSize } from "@vueuse/core";

export const useAppStore = defineStore(
    "AppStore",
    () => {
        const { width } = useWindowSize();
        // 也许改完这里还不够，还需要改一下 /src/styles/_rule.scss
        const MOBILE_BREAKPOINT = 768;
        const themeMode = ref("auto");
        const currentTheme = computed(() => {
            if (themeMode.value == "light") {
                return lightTheme;
            } else if (themeMode.value == "dark") {
                return darkTheme;
            } else {
                return useOsTheme().value == "light" ? lightTheme : darkTheme;
            }
        });
        function toggleDarkMode(key: string) {
            console.log(key);
            // 防止输入一些奇奇怪怪的值
            if (key == "light" || key == "dark") {
                themeMode.value = key;
            } else {
                themeMode.value = "auto";
            }
        }
        const isMobile = computed(() => width.value <= MOBILE_BREAKPOINT);
        return {
            toggleDarkMode,
            themeMode,
            MOBILE_BREAKPOINT,
            currentTheme,
            isMobile,
        };
    },
    {
        persist: true,
    },
);
