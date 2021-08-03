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
::-webkit-scrollbar{
    width: 6px;
    height: 6px;
}
::-webkit-scrollbar-thumb{
    background: linear-gradient(0deg, #6B7CFF 0%,#6868F7 100%);
    border-radius: 30px;
}
::-webkit-scrollbar-thumb:hover{
    background: #6868F7;
}
::-webkit-scrollbar-track{
    background: #181818;
    border-radius: 0px;
    box-shadow: inset 0px 0px 0px 0px #F0F0F0;
}
</style>