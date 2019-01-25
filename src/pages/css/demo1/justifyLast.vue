<template>
  <div class="justifyLast">
    <div class="testOne">
      <p>A new IELTS white paper said the average score for the test-takers on the mainland reached 5.72 points for the 2017-18 period, 0.16 points higher than the 2012-13 period. Reading scores improved the most, from 5.9 points in the 2012-13 period to 6.15 points in the 2017-18 period, while speaking scores only increased by 0.02 points, said the white paper released Wednesday by the British , co-owner of the IELTS.</p>
      <p>text-align:justify最后一行文字并没有拥有justify属性</p>
    </div>
    <div class="testTwo">
      <p>A new IELTS white paper said the average score for the test-takers on the mainland reached 5.72 points for the 2017-18 period, 0.16 points higher than the 2012-13 period. Reading scores improved the most, from 5.9 points in the 2012-13 period to 6.15 points in the 2017-18 period, while speaking scores only increased by 0.02 points, said the white paper released Wednesday by the British Council, co-owner of the IELTS.</p>
    </div>
    <div class="testThree">
      <p>A new IELTS white paper said the average score for the test-takers on the mainland reached 5.72 points for the 2017-18 period, 0.16 points higher than the 2012-13 period. Reading scores improved the most, from 5.9 points in the 2012-13 period to 6.15 points in the 2017-18 period, while speaking scores only increased by 0.02 points, said the white paper released Wednesday by the British , co-owner of the IELTS.</p>
      <p>利用伪类元素after</p>
    </div>
    <div class="testFour">
      <p>A new IELTS white paper said the average score for the test-takers on the mainland reached 5.72 points for the 2017-18 period, 0.16 points higher than the 2012-13 period. Reading scores improved the most, from 5.9 points in the 2012-13 period to 6.15 points in the 2017-18 period, while speaking scores only increased by 0.02 points, said the white paper released Wednesday by the British , co-owner of the IELTS.</p>
      <p>利用text-align-last:justify</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'justifyLast'
}
</script>

<style lang="scss">
.justifyLast{
  padding: 20px;
  display: flex;
  .testOne{
    width: 250px;
    p{
      text-align: justify;
    }
  }
  .testTwo{
    width: 250px;
    text-align: right;
  }
  .testThree{
    width: 250px;
    margin-left: 20px;
    p{
      text-align: justify;
      &::after{
        width: 100%;
        height:0;
        content: '';
        display: inline-block;
      }
    }
  }
  .testFour{
    width: 250px;
    margin-left: 20px;
    p{
      text-align: justify;
      text-align-last: justify;
    }
  }
}
</style>
