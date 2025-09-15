<script setup lang="ts">
    import {
        NButton,
        NAvatar,
        NDropdown,
        NIcon,
        NCard,
        NImage,
        NScrollbar,
        NElement,
        NCollapse,
        NCollapseItem,
    } from "naive-ui";
    import { useRouter } from "vue-router";
    import Container from "@/components/Container.vue";
    import {
        downloadDropdownOptions,
        screenshotList,
    } from "@/constants/InstallerView.config";
    import { DownloadRound } from "@vicons/material";
    import { onMounted, onUnmounted } from "vue";
    const router = useRouter();
    function downloadSelectHandler(key: string) {
        switch (key) {
            case "qq-group":
                window.location.href = "https://qm.qq.com/q/Wxhpfck3a8";
                break;
            case "alist":
                window.location.href =
                    "https://alist.izako.cc/SpaceflightSimulator_CNlang";
                break;
            default:
                // 虽然并没有创建 notfound 这个路由，不过不管了反正返回结果一样是 404
                router.push("/notfound");
                break;
        }
    }
    onMounted(() => {
        document.title = "SFS 安装器";
    });
    onUnmounted(() => {
        document.title = "一个很莫名其妙的网站";
    });
</script>
<template>
    <div class="home-content-box">
        <Container>
            <div class="app-info-content-box">
                <NAvatar
                    :size="52"
                    src="./app_icon.png"
                    style="border-radius: 8px"
                />
                <div style="height: 100%; flex: 1; margin-left: 12px">
                    <p class="app-info-text name">SFS 安装器</p>
                    <p class="app-info-text version">1.5.10.6-9-fix8</p>
                </div>
                <NDropdown
                    trigger="hover"
                    :options="downloadDropdownOptions"
                    @select="downloadSelectHandler"
                >
                    <NButton
                        quaternary
                        circle
                    >
                        <template #icon>
                            <NIcon>
                                <DownloadRound />
                            </NIcon>
                        </template>
                    </NButton>
                </NDropdown>
            </div>
            <NScrollbar x-scrollable>
                <div class="screenshot-content-box">
                    <NImage
                        class="screenshot-img"
                        v-for="item in screenshotList"
                        :src="item"
                        width="150"
                    />
                </div>
            </NScrollbar>
            <NCard
                class="app-description-card"
                title="应用介绍"
            >
                <div class="description-paragraph">
                    顾名思义这是一个 SFS 安装器，它可以为你安装 SFS 并同时安装由
                    <NElement
                        tag="a"
                        class="avatar-link"
                        href="https://github.com/sTheNight"
                    >
                        <NAvatar
                            class="user-avatar"
                            :size="18"
                            round
                            src="https://avatars.githubusercontent.com/u/85998341?v=4"
                        />
                        重铬酸钠
                    </NElement>
                    维护的汉化包并附带破解补丁
                </div>
                <p class="description-paragraph">
                    在此感谢
                    <NElement
                        tag="a"
                        class="avatar-link"
                        href="https://github.com/youfeng11"
                    >
                        <NAvatar
                            class="user-avatar"
                            :size="18"
                            round
                            src="https://avatars.githubusercontent.com/u/86872506?v=4"
                        />
                        由风
                    </NElement>
                    提供的破解思路
                </p>
            </NCard>
            <NCard
                class="app-description-card"
                title="更新日志"
            >
                <NCollapse
                    default-expanded-names="nine-fix8-15106"
                    accordion
                >
                    <NCollapseItem
                        title="1.5.10.6-9-fix8"
                        name="nine-fix8-15106"
                    >
                        <ol class="changelog-ol">
                            <li>适配 1.5.10.6</li>
                        </ol>
                    </NCollapseItem>
                    <NCollapseItem
                        title="1.5.10.5-9-fix8"
                        name="nine-fix8-15105"
                    >
                        <ol class="changelog-ol">
                            <li>自动应用汉化包</li>
                        </ol>
                    </NCollapseItem>
                    <NCollapseItem
                        title="1.5.10.5-9-fix7"
                        name="nine-fix7-15105"
                    >
                        <ol class="changelog-ol">
                            <li>适配 arm32 设备</li>
                            <li>增加开屏警告</li>
                        </ol>
                    </NCollapseItem>
                </NCollapse>
            </NCard>
        </Container>
    </div>
</template>
<style scoped lang="scss">
    .home-content-box {
        box-sizing: border-box;
        padding: 24px;
    }

    .app-info-content-box {
        display: flex;
        align-items: center;
        margin-bottom: 36px;
    }

    .app-info-text {
        margin: 0;
        padding: 0;
        min-width: 0;
        white-space: nowrap;

        &.version {
            font-size: 12px;
            color: gray;
        }
    }

    .screenshot-content-box {
        white-space: nowrap;

        .screenshot-img:not(:last-child) {
            margin-right: 8px;
        }

        .screenshot-img {
            border-radius: 8px;
        }
    }

    .app-description-card {
        margin-top: 24px;
    }

    .avatar-link {
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        gap: 4px;
        color: var(--primary-color);
        text-decoration: none;
        padding: 0 6px 0 2px;
        border-radius: 50px;
        border: 1px solid var(--n-border-color);
    }

    .description-paragraph {
        &:not(:last-child) {
            margin-bottom: 8px;
        }

        span {
            vertical-align: baseline;
        }
    }

    .changelog-ol {
        margin: 0;
    }
</style>
