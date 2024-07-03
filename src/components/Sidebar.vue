<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  router.push('/')
}
</script>
<template>
<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100" >
  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <img src="../assets/logo-mwm_03.png" style="width:40px" class="mx-2">
    <span class="fs-5 d-none d-lg-block">ERP系統</span>
  </a>
  <hr>
  <ul class="nav text-start nav-pills flex-column mb-auto">
    <li class="nav-item mb-1">
      <router-link to="/dashboard/index" class="nav-link py-0 text-white d-flex align-items-center" :class="{ active: $route.path === '/dashboard/index' }">
        <i class="bi bi-house h4 me-3 mt-2"></i>
        <span class="d-none d-lg-block">首頁</span>
      </router-link>
    </li>
    <li class="nav-item mb-1">
      <router-link to="/dashboard/company" class="nav-link py-0 text-white d-flex align-items-center" :class="{ active: $route.path === '/dashboard/company' }">
        <i class="bi bi-building h4 me-3 mt-2"></i>
        <span class="d-none d-lg-block">公司</span>
      </router-link>
    </li>
    <li class="nav-item mb-1">
      <router-link to="/dashboard/dealerEmps" class="nav-link py-0 text-white d-flex align-items-center" :class="{ active: $route.path === '/dashboard/dealerEmps' }">
        <i class="bi bi-person-fill h4 me-3 mt-2"></i>
        <span class="d-none d-lg-block">經手人</span>
      </router-link>
    </li>
    <li class="nav-item mb-1">
      <router-link to="/dashboard/dealers" class="nav-link py-0 text-white d-flex align-items-center" :class="{ active: $route.path === '/dashboard/dealers' }">
        <i class="bi bi-palette h4 me-3 mt-2"></i>
        <span class="d-none d-lg-block">經銷商</span>
      </router-link>
    </li>
    <li class="nav-item mb-1">
      <router-link to="/dashboard/magizine" class="nav-link py-0 text-white d-flex align-items-center" :class="{ active: $route.path === '/dashboard/magizine' }">
        <i class="bi bi-columns h4 me-3 mt-2"></i>
        <span class="d-none d-lg-block">刊物</span>
      </router-link>
    </li>
    <li class="nav-item mb-1">
      <router-link to="/dashboard/booking" class="nav-link py-0 text-white d-flex align-items-center" :class="{ active: $route.path === '/dashboard/booking' }">
        <i class="bi bi-calendar h4 me-3 mt-2"></i>
        <span class="d-none d-lg-block">訂單</span>
      </router-link>
    </li>
  </ul>
  <hr>
      <button class="btn text-danger border-0" @click="logout">登出</button>
</div>
</template>
