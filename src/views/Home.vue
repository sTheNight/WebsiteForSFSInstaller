<script setup lang="ts">
import { NGradientText, NGrid, NGridItem, NCard, NButton } from "naive-ui";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
    <div class="home-content-box">
        <Transition
            name="home-content-fade"
            appear
        >
            <div class="home-title-content-box">
                <NGradientText
                    class="home-title-text"
                    :gradient="{
                        deg: 90,
                        from: 'rgb( 60,195,183)',
                        to: 'rgb( 60,195,115)',
                    }"
                    >我也不知道我们叫什么名字</NGradientText
                >
                <p class="home-subtitle-text">
                    但总之我们可以给你提供如下的东西
                </p>
            </div>
        </Transition>
        <div class="home-grid">
            <NGrid
                cols="1 500:2"
                x-gap="12"
                y-gap="12"
            >
                <NGridItem>
                    <Transition
                        name="home-content-fade"
                        appear
                        style="transition-delay: 600ms"
                    >
                        <NCard
                            title="SFS 安装器"
                            class="home-link-card"
                        >
                            基于「原神」开发的闭源 SFS
                            安装器，应该可以安装汉化包和破解补丁，如果不行的话我也没办法，毕竟我说的是「应该」
                            <template #action>
                                <NButton @click="router.push('/installer')"
                                    >飞过去看看</NButton
                                >
                            </template>
                        </NCard>
                    </Transition>
                </NGridItem>
                <NGridItem>
                    <Transition
                        name="home-content-fade"
                        appear
                        style="transition-delay: 300ms"
                    >
                        <NCard
                            title="SFS 汉化包"
                            class="home-link-card"
                        >
                            <template #action>
                                <NButton @click="router.push('/translation')"
                                    >飞过去看看</NButton
                                >
                            </template>
                            顾名思义
                        </NCard>
                    </Transition>
                </NGridItem>
            </NGrid>
            <Transition
                name="home-content-fade"
                appear
            >
                <p
                    style="
                        text-align: center;
                        transition-delay: 900ms;
                        font-size: 12px;
                        color: gray;
                        margin-top: 24px;
                    "
                >
                    这一段动画很墨迹，对吧？
                </p>
            </Transition>
        </div>
    </div>
</template>
<style scoped lang="scss">
.home-content-box {
    min-height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
}

.home-title-content-box {
    padding: 48px 0;
    display: flex;
    flex-direction: column;
}

.home-title-text {
    font-size: 24px;
    font-weight: 600;
    white-space: wrap;
    text-align: center;
}

.home-subtitle-text {
    display: inline-block;
    margin: 4px 0;
    text-align: center;
}

.home-grid {
    width: min(100%, 800px);
}

.home-link-card {
    height: 100%;
}
</style>
<style lang="scss">
.home-content-fade-enter-active,
.home-content-fade-leave-active {
    transition: all 0.3s;
}

.home-content-fade-enter-from,
.home-content-fade-leave-to {
    opacity: 0;
    transform: scale(1.2);
    filter: blur(8px);
}

.home-content-fade-enter-to,
.home-content-fade-leave-from {
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
}
</style>
