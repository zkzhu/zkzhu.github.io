<template>
    <el-header height="66px" class="background-primary">
        <div class="header-logo">
            <img src="../../assets/img/logo.png">
        </div>
        <ul class="header-operations">
            <li>
                <i class="fa fa-user color-white">
                <b style="margin-left: 8px">{{ userInfo.name }}</b>
                </i>
                <!--<el-dropdown>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>-->
            </li>
            <!--<li>
                <i class="fa fa-sign-out" @click="signOut"></i>
            </li>-->
        </ul>
    </el-header>
</template>
<script>
import Vue from 'vue'

export default {
    props: ['sysInfo', 'userInfo'],
}
</script>
