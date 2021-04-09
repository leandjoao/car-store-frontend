<template>
    <div class="footer">
        <div class="footer-container">
            <div class="footer-container-copy">
                <p v-text="copy" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    computed: {
        copy(): string {
            return `${new Date().getFullYear()} - Todos os direitos reservados`;
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/style';

.footer {
    background: $font;
    &-container {
        @include pageWidth;
        height: 40px;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-copy {
            p {
                margin: 0;
                font-size: 0.7em;
                color: lightgray;
            }
        }
    }
}
</style>