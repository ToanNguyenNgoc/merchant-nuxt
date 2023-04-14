<template>
  <v-container>
    <ul class="nav-list">
      <li class="nav-list_item">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="nav-list_item">
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li class="nav-list_item">
        <NuxtLink to="/products">Product list</NuxtLink>
      </li>
      <li class="nav-list_item">
        <NuxtLink to="/sign">Sign</NuxtLink>
      </li>
      <li class="nav-list_item">
        <NuxtLink to="/sign/sign-in">Sign in</NuxtLink>
      </li>
      <li class="nav-list_item">
        <NuxtLink to="/profile">My profile</NuxtLink>
      </li>
    </ul>
    <div>
    </div>
  </v-container>
</template>
<style scoped>
.nav-list {
  display: flex;
  align-content: center;
}

.nav-list_item {
  margin-right: 12px;
}
</style>