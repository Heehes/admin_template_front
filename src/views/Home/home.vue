<template>
  <div class="homeBox">
    <div class="homeMainBox">
      <div class="homeMain">
        <div class="homeMain_left">
        </div>
        <div class="homeMain_right">
          <div class="homeMain_right_item" @click="jump('Personal')">
            <img src="../../assets/imgs/itemImg.png" />
            <p>个人中心</p>
          </div>
          <div class="homeMain_right_item" @click="jump('TestPage01')">
            <img src="../../assets/imgs/itemImg.png" />
            <p>TestPage01</p>
          </div>
          <div class="homeMain_right_item" @click="jump('401')">
            <img src="../../assets/imgs/itemImg.png" />
            <p>401</p>
          </div>
          <div class="homeMain_right_item" @click="jump('404')">
            <img src="../../assets/imgs/itemImg.png" />
            <p>404</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
      return{
      }
  }
}
</script>

<style scoped lang="scss">
.homeBox{
  background-image:url('../../assets/imgs/indexbg.png');
  background-size: 100% 100%;
  overflow: hidden;
}
.homeMainBox{
    width: 115vh;
    height: 50vh;
    margin: 0 auto;
    margin-top: 15vh;
    border-radius: 10px;
    overflow: hidden;
    background-color: #cee6ff;
    .homeMain{
      width: 100%;
      height: 45vh;
      padding: 3vh;
      margin-top: 5vh;
      border: 1px solid #ccc;
      border-top: 2vh solid rgb(117, 177, 239);
      background-color: white;
      .homeMain_left{
        float: left;
        padding: 5vh;
        width: 55%;
        height: 100%;
        background-image: url('../../assets/imgs/imgBoxImg.png');
        background-size: 85% 100%;
        background-position: center;
        background-repeat: no-repeat;
        border-right: 1px dashed #ccc;
      }
      .homeMain_right{
        float: left;
        width: 45%;
        height: 100%;
        padding: 3vh;
        .homeMain_right_item{
          cursor: pointer;
          padding: 2vh;
          width: calc(50% - 8vh);
          height: calc(50% - 4vh);
          margin: 2vh 4vh;
          float: left;
          border-radius: 10px;
          box-shadow: 0px 5px 15px rgba(117, 177, 239, 0.5);
          img{
            width: 50%;
            height: auto;
          }
          p{
            color: #000;
            margin-top: .5vh;
          }
        }
      }
    }
}
</style>
