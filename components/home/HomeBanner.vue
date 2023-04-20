<template>
  <div class="container">
    <div class="banner-container">
      <div class="banner-img">
        <img src="https://admin.houstongarden.vn/uploads/DSC_01736_25f3286ce3.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped>
.container{
  widows: 100%;
  height: 100vh;
}
.banner-container{
  width: 100%;
  height: 100%;
}
.banner-img{
  width: 100%;
  height: 100%;
  position: relative;
}
.banner-img img{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
}
</style>