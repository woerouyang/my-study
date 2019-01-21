<template>
  <div>
    <h1>Day Day Up</h1>
    <el-row :gutter="20">
      <el-col :span="12" v-for="(item, index) in projectList" :key="index" class="mt-20">
        <el-card>
          <div style="padding: 14px;">
            <span>{{ item.label }}</span>
            <div class="bottom">
              <time class="time"></time>
              <el-button type="text" class="button" @click="changeRouter( item.routerName )">详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      projectList: [
        {
          label: 'CSS',
          routerName: 'css'
        },
        {
          label: 'Sass',
          routerName: 'sass'
        },
        {
          label: 'webpack',
          routerName: 'webpack'
        },
        {
          label: 'aboutProject',
          routerName: 'project'
        }
      ]
    }
  },
  methods: {
    changeRouter (name) {
      this.$router.push({name: name})
    }
  }
}
</script>

<style lang="scss">

</style>
