<template>
  <div class="login-page">
    <div class="login-heade">
      <van-icon name="arrow-left" class="back" @click="$emit('update:loginPage',false)"/>
      <span class="title">手机号登录</span>
      <span class="change-type" v-if="isCodeLogin" @click="isCodeLogin=!isCodeLogin;buttonName='登录'">密码登录</span>
      <span class="change-type" v-else @click="isCodeLogin=!isCodeLogin;buttonName='发送验证码'">验证码登录</span>
    </div>
    <div class="login-body">
      <van-field 
      v-model="phone"
      type="tel"
      size="large"
      label="手机号"
      ref="phoneInput"
      :block="true"
      placeholder="请输入手机号"
      @change="code = ''"
      />
      <van-password-input
        :value="code"
        :mask="false"
        :length="4"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
        v-if="isCodeLogin"
      />
      <van-field 
      v-else
      v-model="password"
      type="password"
      ref="codeInput"
      size="large"
      label="密码"
      :block="true"
      placeholder="请输入密码"
      />
      <van-number-keyboard
        v-model="code"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />
      <van-button 
      class="get-code"
      type="info"
      :block="true"
      :round="true"
      :loading="codeLoading"
      loading-text="发送中"
      @click="handleClick"
      >{{buttonName}}</van-button>
    </div>
  </div>
</template>

<script>
// import {Debounce} from '@/utils/dedbounce'
import service from '@/config/service'
import  {getToken,setToken} from '@/utils/auth'

export default {
  data(){
    return{
      codeLoading: false,
      phone: '',
      code:'',
      showKeyboard:false,
      buttonName:'发送验证码',
      isCodeLogin: true,
      password:''
    }
  },
  props:{
    loginPage:{
      type:Boolean
    }
  },
  mounted(){
    this.$refs.phoneInput.focus()
  },
  watch:{
    code(value){
      if(value.length===4){
        this.buttonName = '登录'
      }
      else{
        this.buttonName = '发送验证码'
      }
    }
  },
  methods:{
    handleClick(){
      this.isCodeLogin?(this.buttonName === '登录'?this.queryCheckCode():this.getCode()):this.queryLogin()
    },
    queryLogin(isCode){  //密码登录
      let data = isCode?{phone: this.phone,captcha: this.code}:{phone: this.phone,password: this.password}
      this.$http.request({
        method: 'post',
        url: service.login.PHONE_LOGIN,
        data
      }).then(res=>{
        const result = res.data
        if(result.code===200){
          console.log(result.cookie)
          setToken(result.cookie)
          sessionStorage.account = JSON.stringify(result.account)
          sessionStorage.bindings = JSON.stringify(result.bindings)
          sessionStorage.profile = JSON.stringify(result.profile)
          sessionStorage.token = result.token
          this.$router.push('/home')
        }
        else{
          this.$notify({
            message:res.data.message,
            color: '#ad0000',
            background: '#ffe1e1',
          })
        }
      })
    },
    queryCheckCode(){  //检查验证码是否正确
      this.$http.request({
        method: 'post',
        url: service.login.CHECK_CODE,
        data: {
          phone:this.phone,
          captcha:this.code
        },
      }).then(res=>{
        if(res.data.code===200){
          this.queryLogin(true)
        }
        else{
          this.$notify({
            message:'验证码错误',
            color: '#ad0000',
            background: '#ffe1e1',
          })
          this.code = ''
        }
      })
      .catch(err=>{
        console.error(err)
      })
    },
    // queryCodeLogin(){  //验证码登录
    //   this.$http.request({
    //     method: 'post',
    //     url: service.login.,
    //     data: {
    //       phone:this.phone,
    //       captcha:this.code
    //     },
    //   }).then(res=>{
    //     if(res.data.code===200){

    //     }
    //     else{
    //       this.$notify({
    //         message:'验证码错误',
    //         color: '#ad0000',
    //         background: '#ffe1e1',
    //       })
    //       this.code = ''
    //     }
    //   })
    //   .catch(err=>{
    //     console.error(err)
    //   })
    // },
    getCode(){  //获取验证码
      this.codeLoading = true
      this.$http.request({
        method: 'post',
          url: service.login.GET_LOGIN_CODE,
          data: {
            phone:this.phone
          },
      }).then(res=>{
        if(res.data.code===200){
          this.codeLoading = false
          this.showKeyboard = true
        }
        else{
          this.codeLoading = false
          this.$notify({
            message:res.data.message,
            color: '#ad0000',
            background: '#ffe1e1',
          })
        }
      })
      .catch(err=>{
        this.codeLoading = false
        console.error(err)
      })
      
    }
  }
}
</script>

<style lang="less" scoped>
  @import './login.less';
</style>