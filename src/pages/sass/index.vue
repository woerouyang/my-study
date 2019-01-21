<template>
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card shadow="hover" @click.native="changeRouter('beginner')">
        新手指南
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover">
        鼠标悬浮时显示
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover">
        从不显示
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'index',
  methods: {
    changeRouter (routerName) {
      this.$router.push({name: routerName})
    }
  }
}
</script>

<style scoped>

</style>
