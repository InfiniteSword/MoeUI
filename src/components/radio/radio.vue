<template>
    <label :class="classes">
        <input type="radio" :name="name" :value="value" class="moe-radio moe-radio-hide">
        <star :class="'moe-radio-svg'" v-if="icon === 'star'"></star>
        <star :class="'moe-radio-svg-shadow'" v-if="icon === 'star'"></star>
        <heart :class="'moe-radio-svg'" v-if="icon === 'heart'"></heart>
        <heart :class="'moe-radio-svg-shadow'" v-if="icon === 'heart'"></heart>
        <slot></slot>
    </label>
</template>

<script>
import Star from '../svgs/star.vue';
import Heart from '../svgs/heart.vue';
const prefix = 'moe-radio';
export default {
    name: 'MoeRadio',
    components: { Star, Heart },
    props: {
        'icon': String,
        'value': String,
        'name': String,
        'type': {
            type: String,
            default: 'primary'
        }
    },
    computed: {
        classes() {
            return [
                `${prefix}-wrapper`,
                {
                    [`${prefix}-${this.type}`]: !!this.type,
                }
            ];
        }
    },
}
</script>