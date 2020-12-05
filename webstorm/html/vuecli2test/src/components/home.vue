<template>
<el-container class="home-container">
<!--  头部区域-->
  <el-header class="el-header">
    <div class="el-header-div">
      <img src="../assets/预警.png" alt="">
      <span class="el-header-span">复杂山区泥石流监测预警系统</span>
    </div>
    <el-button type="info" @click="logout">退出</el-button>
  </el-header>
<!--  页面主题区域-->
  <el-container>
<!--    侧边栏-->
    <el-aside width="200px" class="el-aside">
<!--    侧边栏菜单区域-->
      <el-menu
        background-color="#34495E"
        text-color="#fff"
        active-text-color="#ffd04b">
<!--        一级菜单-->
        <el-submenu index="1">
<!--一级菜单的模板区域-->
          <template slot="title">
<!--            图标-->
            <i class="el-icon-location"></i>
<!--            文本-->
            <span>监测设备管理</span>
          </template>
<!--         二级菜单-->
          <el-menu-item index="1-4-1">
            <template slot="title">
              <!--            图标-->
              <i class="el-icon-location"></i>
              <!--            文本-->
              <span>测点管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="1-4-2">
            <template slot="title">
              <!--            图标-->
              <i class="el-icon-location"></i>
              <!--            文本-->
              <span>仪器管理</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <!--一级菜单的模板区域-->
          <template slot="title">
            <!--            图标-->
            <i class="el-icon-location"></i>
            <!--            文本-->
            <span>监测数据管理</span>
          </template>
          <!--         二级菜单-->
          <el-menu-item index="2-4-1">
            <template slot="title">
              <!--            图标-->
              <i class="el-icon-location"></i>
              <!--            文本-->
              <span>监测数据展示</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2-4-2">
            <template slot="title">
              <!--            图标-->
              <i class="el-icon-location"></i>
              <!--            文本-->
              <span>数据分析</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <!--一级菜单的模板区域-->
          <template slot="title">
            <!--            图标-->
            <i class="el-icon-location"></i>
            <!--            文本-->
            <span>预警阈值管理</span>
          </template>
          <!--         二级菜单-->
          <el-menu-item index="3-4-1">
            <template slot="title">
              <!--            图标-->
              <i class="el-icon-location"></i>
              <!--            文本-->
              <span>设置不同值</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <!--一级菜单的模板区域-->
          <template slot="title">
            <!--            图标-->
            <i class="el-icon-location"></i>
            <!--            文本-->
            <span>警情数据管理</span>
          </template>
          <!--         二级菜单-->
          <el-menu-item index="4-4-1">
            <template slot="title">
              <!--            图标-->
              <i class="el-icon-location"></i>
              <!--            文本-->
              <span>警情数据管理</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <!--一级菜单的模板区域-->
          <template slot="title">
            <!--            图标-->
            <i class="el-icon-location"></i>
            <!--            文本-->
            <span>用户管理</span>
          </template>
          <!--         二级菜单-->
          <el-menu-item index="5-4-1">
            <template slot="title">
              <!--            图标-->
              <i class="el-icon-location"></i>
              <!--            文本-->
              <span>超级管理员</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
<!--    右侧内容-->
    <el-main class="el-main">Main</el-main>
  </el-container>
</el-container>
</template>

<script>export default {
  name: 'home',
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .home-container{
    height: 100%;
  }
  .el-header{
    background-color: #293141;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
  }
  .el-header-div{
  display: flex;
  align-items: center;
  }
  .el-header img{
    height: 50px;
    width: 50px;
    margin-left: 5px;
  }
  .el-header-span{
      margin-left: 15px;
  }

  .el-aside{
    background-color: #34495E;
  }
  .el-main{
    background-color: #EAEDF1;
  }
</style>
