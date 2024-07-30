<template>
    <div class="content-wrap">
        <slot name="header"></slot>
        <div class="avatar-wrap">
            <slot></slot>
            <div class="block-dom" v-for="item in appendBlock"></div>
        </div>
        <div class="content-block"></div>
    </div>
</template>

<script>
export default {
    props: ['appendBlock'],
    data() {
        return {

        }
    },
}
</script>
