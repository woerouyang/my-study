<template>
  <div class="content">
    <h1>编译环境和线上环境直接的切换</h1>
    <h2>方式1：location.hostname</h2>
    <p>hostname属性是返回当前URL得主机名，根据hostname辨别是编译环境还是线上环境</p>
    <p>hostname == 'localhost' 编译环境</p>
    <p>hostname == 'grid-fe-ops-test.uworks.cc' 线上环境</p>
    <h2 class="mt-20">方式2：利用process.env.NODE_ENV</h2>
    <p>在node中，有全局变量process表示当前得node进程。process.env包含着系统环境得信息，但是process.env.NODE_ENV并不存在这一变量，需要用户自己定义</p>
    <p>可在webpack得config中得index.js文件下配置</p>
    <p>
      build:{
        env:{NODE_ENV: '"production"'}
      }
      ...
      dev:{
      env:{NODE_ENV: '"production"'}
      }
    </p>
  </div>
</template>

<script>
export default {
  name: 'changeEnv',
  created () {
    console.log('process.env.NODE_ENV:' + process.env.NODE_ENV)
  }

}
</script>

<style scoped>

</style>
