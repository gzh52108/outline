<template>
  <div>
    <h1>用户登录</h1>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >免费登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data(){
    return {
      username:'',
      password:''
    }
  },
  created() {
    console.log("Login", this);
  },
  methods:{
    onSubmit(values){
      // values： 必须给表单元素添加name属性才能获取值
      console.log('values',values)

    // axios.get(url,config)
    // axios.post(url,data,config)
      this.$request.post('/login',values).then(({data})=>{
        console.log('data=',data);

        localStorage.setItem('userInfo',JSON.stringify(data.data))

        this.$toast('登录成功')

        const {targetUrl='/mine'} = this.$route.query;
        this.$router.replace(targetUrl)
      })
    }
  }
};
</script>