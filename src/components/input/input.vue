<template>
    <div :class="[wrapClasses, updateClass]">
        <input v-if="type !== 'textarea'" ref="input" :type="type" :class="inputClasses" :placeholder="placeholder" :disabled="disabled" :maxlength="maxlength" :readonly="readonly" :name="name" :value="currentValue" :autofocus="autofocus" :autocomplete="autoComplete" @keyup.enter="handleEnter" @keyup="handleKeyup" @keypress="handleKeypress" @keydown="handleKeydown" @focus="handleFocus" @blur="handleBlur" @input="handleInput" @change="handleChange">
        <textarea v-else ref="textarea" :class="textareaClasses" :style="textareaStyles" :placeholder="placeholder" :disabled="disabled" :rows="rows" :maxlength="maxlength" :readonly="readonly" :name="name" :value="currentValue" :autofocus="autofocus" @keyup.enter="handleEnter" @keyup="handleKeyup" @keypress="handleKeypress" @keydown="handleKeydown" @focus="handleFocus" @blur="handleBlur" @input="handleInput"></textarea>
    </div>
</template>

<script>
import Star from '../svgs/star.vue';
import Heart from '../svgs/heart.vue';
import calcTextareaHeight from './calcTextareaHeight';
const prefix = 'moe-input';

export default {
    name: 'MoeInput',
    components: { Star, Heart },
    data() {
        return {
            currentValue: this.value,
            textareaStyles: {},
            updateClass: ''
        };
    },
    props: {
        value: [String, Number],
        placeholder: String,
        readonly: Boolean,
        autofocus: Boolean,
        icon: String,
        size: String,
        disabled: Boolean,
        center: Boolean,
        type: {
            type: String,
            default: 'text'
        },
        autosize: {
            type: [Boolean, Object],
            default: false
        },
        rows: {
            type: Number,
            default: 2
        },
        maxlength: {
            type: Number
        },
        name: String,
        autoComplete: {
            type: String,
            default: 'off'
        },
    },
    computed: {
        wrapClasses() {
            return [
                `${prefix}-wrapper`,
                {
                    [`${prefix}-wrapper-${this.size}`]: !!this.size,
                    [`${prefix}-${this.icon}`]: !!this.icon,
                }
            ];
        },
        inputClasses() {
            return [
                `${prefix}`,
                {
                    [`${prefix}-${this.size}`]: !!this.size,
                    [`${prefix}-disabled`]: this.disabled,
                    [`${prefix}-center`]: this.center
                }
            ];
        },
        textareaClasses() {
            return [
                `${prefix}`,
                {
                    [`${prefix}-${this.size}`]: !!this.size,
                    [`${prefix}-${this.icon}`]: !!this.icon,
                    [`${prefix}-disabled`]: this.disabled
                }
            ];
        }
    },
    watch: {
        value(val) {
            this.setCurrentValue(val);
        }
    },
    methods: {
        handleEnter(event) {
            this.$emit('moe:enter', event);
        },
        handleKeydown(event) {
            this.$emit('moe:keydown', event);
        },
        handleKeypress(event) {
            this.$emit('moe:keypress', event);
        },
        handleKeyup(event) {
            this.$emit('moe:keyup', event);
        },
        handleFocus(event) {
            this.updateStyle('focus');
            this.$emit('moe:focus', event);
        },
        handleBlur(event) {
            this.updateStyle('blur');
            this.$emit('moe:blur', event);
        },
        handleInput(event) {
            let value = event.target.value;
            this.$emit('moe:input', value);
            this.setCurrentValue(value);
            this.$emit('moe:change', event);
        },
        handleChange(event) {
            this.$emit('moe:change', event);
        },
        setCurrentValue(value) {
            if (value === this.currentValue) return;
            this.$nextTick(() => {
                this.resizeTextarea();
            });
            this.currentValue = value;
        },
        resizeTextarea() {
            if (this.$isServer) return;
            var { autosize, type } = this;
            if (!autosize || type !== 'textarea') return;
            const minRows = autosize.minRows;
            const maxRows = autosize.maxRows;
            this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
        },
        updateStyle(state) {
            if (this.icon === 'neko') {
                if (state === 'focus') {
                    this.updateClass = `${prefix}-${this.icon}-focus`
                } else if (state === 'blur') {
                    this.updateClass = ''
                }
            }
        }
    },
    mounted() {
        this.resizeTextarea();
    },

}
</script>