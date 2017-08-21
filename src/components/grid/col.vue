<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
const prefix = 'moe-col';
export default {
    name: 'MoeCol',
    props: {
        span: {
            type: Number,
            default: 24
        },
        order: [Number, String],
        offset: [Number, String],
        push: [Number, String],
        pull: [Number, String],
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object]
    },
    data() {
        return {
            gutter: 0
        };
    },
    computed: {

        classes() {
            let classList = [
                `${prefix}`
            ];
            ['span', 'offset', 'pull', 'push'].forEach(prop => {
                if (this[prop]) {
                    classList.push(
                        prop !== 'span'
                            ? `${prefix}-${prop}-${this[prop]}`
                            : `${prefix}-${this[prop]}`
                    );
                }
            });
            ['xs', 'sm', 'md', 'lg'].forEach(size => {
                if (typeof this[size] === 'number') {
                    classList.push(`${prefix}-${size}-${this[size]}`);
                } else if (typeof this[size] === 'object') {
                    let props = this[size];
                    Object.keys(props).forEach(prop => {
                        classList.push(
                            prop !== 'span'
                                ? `${prefix}-${size}-${prop}-${props[prop]}`
                                : `${prefix}-${size}-${props[prop]}`
                        );
                    });
                }
            });
            return classList;
        },
        styles() {
            let style = {};
            if (this.gutter !== 0) {
                style = {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                };
            }
            return style;
        }

    },

}
</script>