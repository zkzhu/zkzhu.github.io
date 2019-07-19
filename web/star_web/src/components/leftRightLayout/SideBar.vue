<template>
  <el-aside class="menu">
    <el-menu :unique-opened="true" class="el-menu-vertical-demo">
        <template v-for = "menuA in menu">
            <template v-if="menuA.isRoot">
                <el-menu-item :key="menuA.id" @click="change(menuA.raw.value)" :index="menuA.id">
                    <span slot="title">{{ menuA.raw.name }}</span>
                </el-menu-item>
            </template>
            <template v-else>
                <el-submenu :key="menuA.id" :index="menuA.id">
                    <template slot="title"><span slot="title">{{ menuA.raw.name }}</span></template>
                    <template>
                        <div v-for="menuB in menuA.children" :key="menuB.id">
                        <el-menu-item @click="change(menuB.raw.value)" :index="menuB.id">
                            <span slot="title">{{ menuB.raw.name }}</span>
                        </el-menu-item>
                        </div>
                    </template>
                </el-submenu>
            </template>
        </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
    props: ['menu'],
    methods: {
        change (path) {
            if (path.startsWith('http://') || path.startsWith('https://')) {
                window.open(path, '_blank')
            } else if (path.startsWith("iframe://")) {
                path = path.substring("iframe://".length)
                if (path.startsWith('http://') || path.startsWith('https://')) {
                window.open(path, '_blank')
                } else {
                if (!path.startsWith('/')) {
                    path = '/' + path
                }
                window.open(path, '_blank')
                }
            } else {
                if (!path.startsWith('/')) {
                path = '/' + path
                }
                this.$router.push(path)
            }
        }
    }
}
</script>
