
import type { MenuOption } from "naive-ui"
import { renderIcon } from "@/utils/renderIcon"
import { HomeRound, InfoRound } from "@vicons/material"

export const menuOptions: MenuOption[] = [
    { label: '主页', key: 'home', icon: renderIcon(HomeRound) },
]

export const toggleThemeOpsiont: MenuOption[] = [
    { label: '跟随系统', key: 'auto' },
    { label: '浅色模式', key: 'light' },
    { label: '深色模式', key: 'dark' }
]
export const moreDropdownOptions = [
    { label: '关于', key: 'about' }
]