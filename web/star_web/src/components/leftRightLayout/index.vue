<template>
    <div>
        <el-container class="wrapper">
        <nav-bar :sysInfo="sysInfo" :userInfo="userInfo"></nav-bar>
        <el-container class="down-container">
            <side-bar :menu="menu"></side-bar>
            <el-main class="content">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
import Vue from 'vue'
import NavBar from './NavBar'
import SideBar from './SideBar'
import api from './../../api/axios/api.js'

export default {
    components: {
        NavBar,
        SideBar
    },
    data () {
        return {
            sysInfo: {
                name: '开发运行平台'
            },
            userInfo: {
                name: 'aosued'
            },
            menu: []
        }
    },
    mounted() {
        this.getMemu()
    },
    methods: {
        getMemu() {
            api.mockdata('/getMenu')
            .then(res => {
                this.menu = res
            })
        }
    }
}
</script>
