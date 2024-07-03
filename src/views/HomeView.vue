<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const login = () => {
  // 在这里处理登录逻辑，例如提交表单的验证等

  // 跳转到其他页面的示例（假设要跳转到名为 Home 的路由）
  router.push('/dashboard/index')
}
</script>
<template>
  <div class="login vh-100">
          <h1 class="display-3 mt-3 mt-lg-5" style="font-family: Gill Sans, sans-serif;font-weight: 900;">Sign In</h1>
          <form class="row flex-colunm justify-content-center cup text-start" @submit.prevent="login">
            <div class="col-sm-4 p-3 p-lg-5 bg-white rounded">
                <div class="mx-lg-3 mx-md-4">
                    <label for="email" class="mb-2 text-secondary fw-bold">你的信箱</label>
                    <input
                    type="email"
                    id="email"
                    placeholder="Jason@gmail.com"
                    class="form-control border-0 rounded-pill bg-light p-3"
                    required/>
                </div>
                <div class="m-lg-3 m-md-4">
                    <label for="password" class="mb-2 text-secondary fw-bold">密碼</label>
                    <input type="password"
                    id="password"
                    placeholder="********"
                    class="form-control border-0 rounded-pill bg-light p-3"
                    required>
                </div>
                <div class="p-3 text-center">
              <button class="btn btn-lg btn-success text-white btn-block rounded-pill px-5" type="submit">登入</button>
              </div>
              </div>
        </form>
    </div>
</template>

<style>
.login {
  overflow: hidden;
  background-image: url(../assets/login.jpg);
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  max-width:1920px;
}
.cup{
  padding-top:50px;
}
@media (max-width:768px) {
  .cup{
    padding-top:120px;
  }
}
</style>
