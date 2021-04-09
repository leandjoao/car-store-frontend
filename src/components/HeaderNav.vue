<template>
    <div class="navbar">
        <div class="navbar-container">
            <div class="navbar-container-logo"></div>
            <div class="navbar-container-nav" :class="{'open' : isMenuOpen}">
                <router-link to="/" exact-active-class="active">Home</router-link>
                <router-link to="/sobre" exact-active-class="active">Sobre</router-link>
            </div>
            <div class="navbar-container-toggle" @click="toggleMenu">
                <img v-if="!isMenuOpen" src="@/assets/icons/menu.svg" alt="">
                <img v-if="isMenuOpen" src="@/assets/icons/close.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    },
    watch: {
        '$route'() {
            if(this.isMenuOpen) {
                this.toggleMenu();
            }
        }
    }
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";

.navbar {
    background: white;
    width: 100%;
    box-shadow: 0 0 10px -3px $font;
    padding: 0 15px;
    height: 60px;
    &-container {
        @include pageWidth;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        &-logo {
            height: 60px;
            width: 150px;
            background: $primary;
        }
        &-nav {
            flex: 1;
            display: inline-flex;
            gap: 0 10px;
            justify-content: flex-end;
            a {
                font-size: 0.8em;
                text-decoration: none;
                border-bottom: 2px solid transparent;
                height: 60px;
                display: flex;
                align-items: center;
                padding: 0 25px;
                color: $font;
                &.active {
                    border-bottom-color: $primary;
                }
            }
            @include sm {
                position: fixed;
                top: 60px;
                right: -100%;
                background: white;
                width: 100%;
                height: calc(100vh - 60px);
                border-top: 2px solid lightgray;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                transition: all ease 250ms;
                a {
                    border-bottom-color: lightgray;
                }
                &.open {
                    right: 0;
                }
            }
        }
        &-toggle {
            @include sm {
                img {
                    width: 24px;
                }
            }
        }
    }
}
</style>