<template>
<div>
<!--  面包屑导航区域-->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>超级管理员</el-breadcrumb-item>
  </el-breadcrumb>
<!--卡片视图区-->
  <el-card>
<!--    搜索与添加区域-->
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary">添加用户</el-button>
      </el-col>
    </el-row>
  </el-card>
</div>
</template>

<script>
export default {
  name: 'users.vue'
}
</script>

<style scoped>

</style>
