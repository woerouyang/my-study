<template>
  <div class="content">
    <div class="variables">
     <h2>变量</h2>
    </div>
    <div class="Mixins">
      <h1>minxins默认传参</h1>
      <h1>minxins传参</h1>
    </div>
    <div class="extend">
      <h1>快乐风男</h1>
      <h2>快乐风男</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'beginner'
}
</script>

<style lang="scss">
  $color :red;
  $font : 20px;
  .variables{
    background-color: $color;
    font-size: $font;
  }
  @mixin border-radius($amount:5px){
    border-radius: $amount;
    background-color: #5daf34;
  }
  .Mixins{
    h1:nth-child(1){
    @include border-radius
  }
    h1:nth-child(2){
      @include border-radius(50px)
    }
  }
  .extend{
    h1{
      color: yellow;
      background-color: black;
    }
    h2{
     @extend h1
    }
  }
</style>
