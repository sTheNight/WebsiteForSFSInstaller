<script setup lang="ts">
    import { NResult, NButton } from "naive-ui";
    import { useRouter } from "vue-router";
    import { onUnmounted, onMounted } from "vue";
    const router = useRouter();
    onMounted(() => {
        document.title = "SFS 汉化包";
    });
    onUnmounted(() => {
        document.title = "一个很莫名其妙的网站";
    });
</script>
<template>
    <div class="home-content-box">
        建议你跳转到
        <a href="https://sfs.izako.cc/">这里</a>，因为这个页面我还没写完
    </div>
</template>
<style scoped lang="scss">
    .home-content-box {
        box-sizing: border-box;
        padding: 24px;
    }
</style>
