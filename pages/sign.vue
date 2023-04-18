<template>
  <div>
    <ul class="nav-link-list">
      <li class="nav-link-list_item">
        <NuxtLink :class="[route.path === '/sign/sign-in' ? 'active' : '']" to="/sign/sign-in">Đăng nhập</NuxtLink>
      </li>
      <li class='nav-link-list_item' :class="[route.path === '/sign/sign-up' ? 'active' : '']">
        <NuxtLink :class="[route.path === '/sign/sign-up' ? 'active' : '']" to="/sign/sign-up">Đăng ký</NuxtLink>
      </li>
    </ul>
    <div class="sign-child-page">
      <NuxtPage/>
    </div>
  </div>
</template>
<script setup>
definePageMeta({ ...pageMeta, layout: 'sign-layout' })
const route = useRoute()
</script>
<style scoped>
.nav-link-list {
  display: flex;
  justify-content: center;
}

.nav-link-list_item {
  width: 50%;
  text-align: center;
  transition: var(--trans);
  border-radius: 6px;
}

.nav-link-list_item a {
  display: block;
  padding: 12px 0px;
  transition: var(--trans);
  color: var(--grey-3);
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
}

.active {
  color: var(--green-dark) !important;
  transition: var(--trans) !important;
}

.nav-link-list_item:hover {
  background-color: #F5F5F5;
  transition: var(--trans);
}
.sign-child-page{
  margin-top: 12px;
}
@media only screen and (max-width: 1023px) {
  
}
</style>