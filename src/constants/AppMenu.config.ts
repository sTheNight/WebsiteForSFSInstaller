
import type { MenuOption } from "naive-ui"
import { renderIcon } from "@/utils/renderIcon"
import { HomeRound, AndroidRound, TranslateRound } from "@vicons/material"

export const menuOptions: MenuOption[] = [
    { label: '主页', key: 'home', icon: renderIcon(HomeRound) },
    { label: 'SFS 安装器', key: 'installer', icon: renderIcon(AndroidRound) },
    { label: 'SFS 汉化包', key: 'translation', icon: renderIcon(TranslateRound) },
]

export const toggleThemeOpsiont: MenuOption[] = [
    { label: '跟随系统', key: 'auto' },
    { label: '浅色模式', key: 'light' },
    { label: '深色模式', key: 'dark' }
]
export const moreDropdownOptions = [
    { label: '关于', key: 'about' }
]