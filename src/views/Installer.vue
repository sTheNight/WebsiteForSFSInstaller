<script setup lang="ts">
import { NResult, NButton } from 'naive-ui';
import { useRouter } from 'vue-router';
import Container from '@/components/Container.vue';
const router = useRouter()
</script>
<template>
    <div class="home-content-box">
        <Container>
            <div style="width: 100%;background-color: black;height: 100px;"></div>
        </Container>
    </div>
</template>
<style scoped lang="scss">
.home-content-box {
    box-sizing: border-box;
    padding: 24px;
}
</style>