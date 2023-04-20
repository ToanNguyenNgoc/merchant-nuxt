<template>
  <div :class="[open ? 'alert-act' : '']" class="container">
    <div :style="[props.color ? { backgroundColor: props.color }
      :
      { backgroundColor: '#43A047' }]" @click="onAlertClick" class="alert-cnt">
      <h4 class="alert-cnt_title">Thông báo</h4>
      <span class="alert-cnt_content">
        {{ content }}
      </span>
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">


const props = defineProps<{
  anchor?: 'top left' | 'top center',
  open?: boolean,
  color?: string,
  content?: string
}>()

const emits = defineEmits(['on-close'])
function onAlertClick(e: Event) { e.stopPropagation() }
if (typeof window !== "undefined") {
  window.addEventListener("click", () => emits('on-close'))
}
</script>
<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  padding: 12px;
  display: flex;
  justify-content: flex-end;
  margin-top: -100%;
  transition: all .7s;
  opacity: 0;
}

.alert-act {
  margin-top: 0px;
  transition: all .7s;
  opacity: 1;
}

.alert-cnt {
  min-height: 76px;
  width: 25%;
  border-radius: 8px;
  padding: 8px;
  background-color: #43A047;
  box-shadow: var(--box-shadow);
}

.alert-cnt_title {
  color: var(--white);
  margin-bottom: 6px;
}

.alert-cnt_content {
  color: var(--white);
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
}

@media only screen and (max-width: 767px) {
  .alert-cnt {
    width: 100%;
  }
}
</style>