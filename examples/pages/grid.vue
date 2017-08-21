<template>
    <div class="grid-container">
        <h2>Basic</h2>
        <moe-row :gutter="20">
            <moe-col :span="8">
                <div class="grid-content bg-purple">col-8</div>
            </moe-col>
            <moe-col :span="8">
                <div class="grid-content bg-purple">col-8</div>
            </moe-col>
            <moe-col :span="4">
                <div class="grid-content bg-purple">col-4</div>
            </moe-col>
            <moe-col :span="4">
                <div class="grid-content bg-purple">col-4</div>
            </moe-col>
        </moe-row>
    
        <h2>Offset</h2>
        <moe-row :gutter="20">
            <moe-col :span="6" :offset="6">
                <div class="grid-content bg-purple">col-6</div>
            </moe-col>
            <moe-col :span="6" :offset="6">
                <div class="grid-content bg-purple">col-6</div>
            </moe-col>
        </moe-row>
    
        <h2>Flex</h2>
        <moe-row type="flex" class="row-bg">
            <moe-col :span="6">
                <div class="grid-content bg-purple">col-6</div>
            </moe-col>
            <moe-col :span="6">
                <div class="grid-content bg-purple-light">col-6</div>
            </moe-col>
            <moe-col :span="6">
                <div class="grid-content bg-purple">col-6</div>
            </moe-col>
        </moe-row>
    
        <moe-row type="flex" justify="center" align="top" class="code-row-bg">
            <moe-col :span="6">
                <div class="grid-content bg-purple" style="height: 80px">col-6</div>
            </moe-col>
            <moe-col :span="6">
                <div class="grid-content bg-purple-light" style="height: 30px">col-6</div>
            </moe-col>
            <moe-col :span="6">
                <div class="grid-content bg-purple" style="height: 100px">col-6</div>
            </moe-col>
            <moe-col :span="6">
                <div class="grid-content bg-purple-light" style="height: 60px">col-6</div>
            </moe-col>
        </moe-row>
    
        <h2>Responsive</h2>
        <moe-row :gutter="10">
            <moe-col :xs="8" :sm="6" :md="4" :lg="3">
                <div class="grid-content bg-purple">col</div>
            </moe-col>
            <moe-col :xs="4" :sm="6" :md="8" :lg="9">
                <div class="grid-content bg-purple-light">col</div>
            </moe-col>
            <moe-col :xs="4" :sm="6" :md="8" :lg="9">
                <div class="grid-content bg-purple">col</div>
            </moe-col>
            <moe-col :xs="8" :sm="6" :md="4" :lg="3">
                <div class="grid-content bg-purple-light">col</div>
            </moe-col>
        </moe-row>
    
    </div>
</template>


<style lang="scss">
.grid-container {
    width: 60%;
}

.moe-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}

.grid-content {
    text-align: center;
    color: #fcfcfc;
    min-height: 36px;
    line-height: 36px;
}

.bg-purple {
    background: #c0b0ff;
}

.bg-purple-light {
    background: #cabdff;
}

.row-bg {
    padding: 10px 0;
}
</style>