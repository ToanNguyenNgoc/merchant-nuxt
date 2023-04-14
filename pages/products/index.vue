<template>
  <div>
      <v-container>
        <v-text-field @input="change" label="Label"></v-text-field>
        <p v-if="pending">Loading...</p>
        List product
        <ul class="org-list">
          <li class="org-item-cnt" v-for="item in data?.data" :key="item.id">
            <NuxtLink :to="'/products/' + item.id">
              <div class="product-item">
                <div class="product-item_img">
                  <img :src="item.image_url ?? ''" alt="">
                </div>
                <div class="product-item_detail">
                  <span class="product-item_detail-name">{{ item.name }}</span>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <div class="org-bottom">
          <v-btn @click="onMore">more</v-btn>
        </div>
      </v-container>
    </div>
</template>
<script setup>
import lodash from 'lodash'
definePageMeta(pageMeta)

const { debounce } = lodash
const page = ref(1)
const keyword = ref('')
const { data, pending } = await useFetch('https://api.myspa.vn/v1/organizations', {
  transform: (res) => res.context,
  query: {
    limit: 6,
    page: page,
    'filter[keyword]': keyword
  }
})
const change = debounce((e) => {
  return keyword.value = e.target.value
}, 800)
const onMore = () => page.value = page.value + 1
</script>
<style scoped>
.org-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.org-item-cnt {
  width: 16.6%;
  padding: 12px;
}

.org-item-cnt a {
  text-decoration: none;
}

.product-item_img {
  width: 100%;
  position: relative;
  padding-bottom: 100%;
  background-color: aliceblue;
}

.product-item_img img {
  position: absolute;
  z-index: 1;
  widows: 100%;
  height: 100%;
  object-fit: cover;
}

.product-item_detail {
  padding: 6px 4px;
}

.product-item_detail-name {
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  color: rgb(53, 53, 53);
}

.org-bottom {
  display: flex;
  justify-content: center;
}
</style>