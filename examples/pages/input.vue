<template>
    <div>
        <h2>Input</h2>
        <moe-input v-model="value1" placeholder="Name" style="width:300px;"></moe-input>
        <h2>Texterea</h2>
        <moe-input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Name" style="width:300px;"></moe-input>
        <h2>Input-Disable</h2>
        <moe-input :disabled="true" placeholder="Name" style="width:300px;"></moe-input>
        <h2>Input-Neko</h2>
        <moe-input icon="neko" :center="true" placeholder="> - <" style="width:100px;"></moe-input>
        <h2 :style="{'color': color}">Events</h2>
        <moe-input v-model="value1" @moe:focus="handleFocus" @moe:blur="handleBlur" placeholder="Name" style="width:300px;"></moe-input>
        <div class="tb-ctn">
            <moe-row type="flex" class="tb-row">
                <moe-col :span="6" class="tb-title">
                    <div class="tb-words">focus event</div>
                </moe-col>
                <moe-col :span="6" class="tb-content">
                    <div class="tb-words">@moe:focus</div>
                </moe-col>
                <moe-col :span="6" class="tb-title">
                    <div class="tb-words">blur event</div>
                </moe-col>
                <moe-col :span="6" class="tb-content">
                    <div class="tb-words">@moe:focus</div>
                </moe-col>
            </moe-row>
            <moe-row type="flex" class="tb-row">
                <moe-col :span="6" class="tb-title">
                    <div class="tb-words">enter event</div>
                </moe-col>
                <moe-col :span="6" class="tb-content">
                    <div class="tb-words">@moe:enter</div>
                </moe-col>
                <moe-col :span="6" class="tb-title">
                    <div class="tb-words">keydown event</div>
                </moe-col>
                <moe-col :span="6" class="tb-content">
                    <div class="tb-words">@moe:keydown</div>
                </moe-col>
            </moe-row>
            <moe-row type="flex" class="tb-row">
                <moe-col :span="6" class="tb-title">
                    <div class="tb-words">keypress event</div>
                </moe-col>
                <moe-col :span="6" class="tb-content">
                    <div class="tb-words">@moe:keypress</div>
                </moe-col>
                <moe-col :span="6" class="tb-title">
                    <div class="tb-words">keyup event</div>
                </moe-col>
                <moe-col :span="6" class="tb-content">
                    <div class="tb-words">@moe:keyup</div>
                </moe-col>
            </moe-row>

            <moe-row type="flex" class="tb-row">
                <moe-col :span="6" class="tb-title">
                    <div class="tb-words">input event</div>
                </moe-col>
                <moe-col :span="6" class="tb-content">
                    <div class="tb-words">@moe:input</div>
                </moe-col>
                <moe-col :span="6" class="tb-title">
                    <div class="tb-words">change event</div>
                </moe-col>
                <moe-col :span="6" class="tb-content">
                    <div class="tb-words">@moe:change</div>
                </moe-col>
            </moe-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            color: ''
        }
    },
    methods: {
        handleFocus(e) {
            this.color = '#c0b0ff';
        },
        handleBlur() {
            this.color = '';
        }
    }
}
</script>

<style>
.tb-ctn{
    margin-top: 30px;
}
.tb-row {
    max-width: 600px;
    height: 36px;
    line-height: 36px;
    border-bottom: 1px #fff solid;
}

.tb-title {
    background: #c0b0ff;
    color: #fff;
    text-align: center;
}

.tb-content {
    text-align: center;
}
</style>