<template>
   <div>
      
    </div>
</template>
<script setup>
definePageMeta(pageMeta)
const {data} = await useFetch(
  ' https://admin.houstongarden.vn/api/about-us?populate%5BbannerSection%5D%5Bpopulate%5D=*&populate%5BSeo%5D%5Bpopulate%5D=*&populate%5BourStory%5D%5Bpopulate%5D=*&populate%5Bgellery%5D%5Bpopulate%5D=*&populate%5Bfeatures%5D%5Bpopulate%5D=*&locale=vi'
)
// console.log(data)
</script>