<script setup lang="ts">
import { NLayout, NAvatar, NElement } from "naive-ui";
import { useAppStore } from "@/store";
const appStore = useAppStore();
</script>
<template>
    <NLayout class="about-content-box">
        <p class="descriotion-text">
            本页面由&nbsp;
            <NElement
                tag="a"
                class="avatar-link"
                href="https://github.com/sTheNight"
            >
                <NAvatar
                    :size="18"
                    round
                    src="https://avatars.githubusercontent.com/u/85998341?v=4"
                ></NAvatar
                >重铬酸钠
            </NElement>
            &nbsp;制作
        </p>
    </NLayout>
</template>
<style scoped lang="scss">
.about-content-box {
    box-sizing: border-box;
    padding: 8px 0;
    background-color: transparent;
}

.avatar-link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);
    text-decoration: none;
    border: 1px solid var(--n-border-color);
    padding: 0 6px 0 4px;
    border-radius: 50px;

    .user-avatar {
        margin-right: 4px;
    }
}

.descriotion-text {
    font-size: 16px;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>
