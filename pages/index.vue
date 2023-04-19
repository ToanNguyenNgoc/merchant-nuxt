<template>
  <div>
    <h2>Home</h2>
    <v-btn @click="open = true">Open snack</v-btn>
    <v-dialog v-model="open" width="auto">
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="open = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>

definePageMeta(pageMeta)
const open = useState('open', () => true)
</script>
<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>