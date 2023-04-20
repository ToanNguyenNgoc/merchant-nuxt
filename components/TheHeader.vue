<template>
  <div id="header" class="container">
    <div class="left-cnt">
      <NuxtLink to="/">
        <h1 class="left-cnt_home header-txt">Houston garden villa</h1>
      </NuxtLink>
    </div>
    <ul class="right-cnt">
      <div class="right-cnt_link">
        <li class="nav-list_item">
          <NuxtLink class="header-txt" to="/">Trang chủ</NuxtLink>
        </li>
        <li class="nav-list_item">
          <NuxtLink class="header-txt" to="/about">Địa điểm</NuxtLink>
        </li>
        <li class="nav-list_item">
          <NuxtLink class="header-txt" to="/products">Villas</NuxtLink>
        </li>
        <li class="nav-list_item">
          <NuxtLink class="header-txt" to="/products">Nhà hàng</NuxtLink>
        </li>
        <li class="nav-list_item">
          <NuxtLink class="header-txt" to="/products">Giới thiệu</NuxtLink>
        </li>
        <li class="nav-list_item">
          <NuxtLink class="header-txt" to="/products">Tin tức</NuxtLink>
        </li>
      </div>
      <div class="right-cnt_auth">
        <li v-if="!storeProfile.$state.profile" class="nav-list_item">
          <NuxtLink to="/sign/sign-up">
            <v-btn class="right-cnt_auth-btn" size="small">Đăng ký</v-btn>
          </NuxtLink>
        </li>
        <li v-if="!storeProfile.$state.profile" class="nav-list_item">
          <NuxtLink to="/sign/sign-in">
            <v-btn variant='outlined' class="right-cnt_auth-btn btn-right" size="small">Đăng nhập</v-btn>
          </NuxtLink>
        </li>
        <li v-if="storeProfile.$state.profile" class="nav-list_item">
          <NuxtLink class="profile-cnt" id="fullname" to="/profile">
            <v-avatar size="34" color="var(--green-light)">
              <span class="text-h7">{{ stringAvt(storeProfile.$state.profile?.fullname) }}</span>
            </v-avatar>
            {{ storeProfile.$state.profile?.fullname }}
          </NuxtLink>
        </li>
      </div>
    </ul>
  </div>
</template>
<script setup>
import { useProfileStore } from '~/store-hooks'
import { stringAvt } from '~/utils'

const storeProfile = useProfileStore()
if (typeof window !== "undefined") {
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header')
    const headerTxt = document.querySelectorAll('.header-txt')
    const btnSignIn = document.querySelector('.btn-right')
    const fullname = document.getElementById("fullname")
    if (header && headerTxt) {
      header.style.backgroundColor = `rgb(255 255 255 / ${window.scrollY}%)`
      if (window.scrollY > 5) {
        if (btnSignIn) { btnSignIn.style.color = 'var(--green-dark)' }
        if(fullname){fullname.style.color = 'var(--green-light)'}
        headerTxt.forEach((element) => {
          element.style.color = 'var(--primary)'
        })
      }
      if (window.scrollY < 5) {
        if (btnSignIn) { btnSignIn.style.color = 'var(--white)' }
        if(fullname){fullname.style.color = 'var(--white)'}
        headerTxt.forEach((element) => {
          element.style.color = 'var(--white)'
        })
      }
    }
  })
}
</script>
<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: 18px 32px;
  display: flex;
  justify-content: space-between;
}

.header-change {
  color: var(--primary);
  transition: var(--trans);
}

.left-cnt_home {
  color: var(--white);
  font-size: 20px;
  font-weight: 600;
  line-height: 34px;
  text-transform: uppercase;
  transition: var(--trans);
}

.right-cnt {
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 65%;
}

.right-cnt a {
  color: var(--white);
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  text-transform: uppercase;
  transition: var(--trans);
}

.right-cnt_link,
.right-cnt_auth {
  display: flex;
  align-items: center;
}

.right-cnt_link {
  width: 65%;
  justify-content: space-between;
}

.right-cnt_auth {
  width: calc(35% - 12px);
  justify-content: flex-end;
}

.right-cnt_auth-btn {
  background-color: var(--green-dark-2);
  color: var(--white);
}

.btn-right {
  margin-left: 12px;
  background-color: transparent;
}
.profile-cnt{
  position: relative;
}
.profile-cnt_menu{
  top: 46px;
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: var(--white);
}
</style>