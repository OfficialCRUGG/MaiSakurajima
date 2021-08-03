<template>
    <div>
        <Navigation />
        <Music ref="music" />
        <nuxt />
    </div>
</template>

<style>
html, body {
    background-color: black;
}
.page-enter-active, .page-leave-active {
    transition: opacity .5s;
    transition-timing-function: ease-in-out;
}
.page-enter, .page-leave-to {
    opacity: 0;
}
</style>