<script setup lang="ts">
import { NLayout, NAvatar, NElement } from 'naive-ui';
</script>
<template>
    <NLayout class="about-content-box">
        <p class="descriotion-text">本页面由&nbsp;<NElement tag="a" class="avatar-link" href="https://github.com/sTheNight">
                <NAvatar :size="18" round src="https://avatars.githubusercontent.com/u/85998341?v=4"></NAvatar>重铬酸钠
            </NElement>&nbsp;制作</p>
    </NLayout>
</template>
<style scoped lang="scss">
.about-content-box {
    box-sizing: border-box;
    padding: 8px 0;
}

.avatar-link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);
    text-decoration: none;
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