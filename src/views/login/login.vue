<template>
  <div class="login-page">
    <div class="login-heade">
      <van-icon name="arrow-left" class="back" @click="$emit('update:loginPage',false)"/>
      <span class="title">手机号登录</span>
      <span class="change-type">密码登录</span>
    </div>
    <div class="login-body">
      <van-field 
      v-model="phone"
      type="tel"
      size="large"
      label="手机号"
      :block="true"
      placeholder="请输入手机号"
      />
      <van-field 
      v-model="phone"
      type="tel"
      size="large"
      label="验证码"
      :block="true"
      placeholder="请输入验证码"
      />
      <van-button 
      class="get-code"
      type="info"
      :block="true"
      :round="true"
      :loading="codeLoading"
      loading-text="发送中"
      @click="getCode"
      >发送验证码</van-button>
    </div>
  </div>
</template>

<script>
import {Debounce} from '@/utils/dedbounce.js'
export default {
  data(){
    return{
      codeLoading: false,
      phone: '',
    }
  },
  props:{
    loginPage:{
      type:Boolean
    }
  },
  methods:{
    getCode(){
      
    }
  }
}
</script>

<style lang="less" scoped>
  @import './login.less';
</style>