<template>
  <div>
    <div class="choose-login-page" v-if="!loginPage">
      <img src="@/assets/img/logo.png" class="logo">
      <div class="choose-login">
        <button class="choose-phone-login" @click="handleLogin('1')">手机号登录</button>
        <button class="choose-email-login" @click="handleLogin('2')">邮箱登录</button>
        <button class="choose-skip-login">直接进入</button>
      </div>
      <div class="login-agreement">
        <van-checkbox v-model="checked" checked-color="#fa7d8f" icon-size="15px">
          <span>
            同意<a href="">《用户协议》</a><a href="">《用户隐私政策》</a>
          </span>
        </van-checkbox>
      </div>
    </div>
    <login v-if="loginPage" :loginPage.sync="loginPage"></login>
  </div>
</template>

<script>
import login from './login.vue'
export default {
  components:{
    login
  },
  data(){
    return{
      loginPage:false,  //登录页
      loginType:'',  //登录方式
      phone:'',
      checked: false
    }
  },
  mounted(){

  },
  methods:{
    handleLogin(type){
      this.loginPage = true;
      this.loginType = type;
    }
  }
}
</script>

<style lang="less" scoped>
  @import './chooseLogin.less';
</style>