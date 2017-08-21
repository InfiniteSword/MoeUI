<template>
    <div class="content">
        <nav>
            <ul class="list">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
            </ul>
            <div class="title">Basic</div>
            <ul class="list">
                <li>
                    <router-link to="/grid">Grid</router-link>
                </li>
                <li>
                    <router-link to="/button">Button</router-link>
                </li>
                <li>
                    <router-link to="/color">Color</router-link>
                </li>
            </ul>
            <div class="title">Form</div>
            <ul class="list">
                <li>
                    <router-link to="/input">Input</router-link>
                </li>
                <li>
                    <router-link to="/radio">Radio</router-link>
                </li>
            </ul>
            
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.content {
    box-sizing: border-box;
    padding: 20px 0 0 40px;
}

nav {
    position: fixed;
    width: 200px;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    background: #C0B0FF;
    color: #fffefe;
}

a {
    text-decoration: none;
    color: inherit;
}

a:active {
    color: inherit;
}

.title{
    padding-left: 20px;
    box-sizing: border-box;
}

.list,
.list li {
    list-style: none;
}

.list {
    li {
        width: 100%;
        height: 40px;
        font-size: 20px;
        a {
            width: 100%;
            float: right;
            line-height: 40px;
            transition: .3s;
            box-sizing: border-box;
            padding-left: 20%;
            cursor: pointer;
            &:hover {
                padding-left: 10%;
            }
        }
        .router-link-exact-active {
            background: #cabdff;
        }
    }
}
</style>
