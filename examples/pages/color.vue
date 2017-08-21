<template>
    <div class="color-ctn">
        <h2>Basic Colors</h2>
        <moe-row type="flex" justify="center" align="top" class="code-row-bg">
            <moe-col :span="6">
                <div class="grid-content bg-default">default</div>
            </moe-col>
            <moe-col :span="6">
                <div class="grid-content bg-primary">primary</div>
            </moe-col>
            <moe-col :span="6">
                <div class="grid-content bg-violent">violent</div>
            </moe-col>
            <moe-col :span="6">
                <div class="grid-content bg-remindful">remindful</div>
            </moe-col>
            <moe-col :span="6">
                <div class="grid-content bg-comfy">comfy</div>
            </moe-col>
        </moe-row>
        <h2>Standards</h2>
        <p>warm, lively, moe!</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.color-ctn {
    max-width: calc(100% - 250px);
}
.bg-default{
    background: #8f8f8f;
}
.bg-primary{
    background: #c0b0ff;
}
.bg-violent{
    background: #ff7a8d;
}
.bg-remindful{
    background: #ffcb78;
}
.bg-comfy{
    background: #b5e378;
}
</style>
