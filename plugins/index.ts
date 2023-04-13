import type { DehydratedState, VueQueryPluginOptions } from "@tanstack/vue-query";
import { VueQueryPlugin, QueryClient, hydrate, dehydrate } from "@tanstack/vue-query";
import { useState } from "#app";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from "vuetify/lib/framework.mjs";
import store from "~/store";

export default defineNuxtPlugin((nuxt) => {
  const vueQueryState = useState<DehydratedState | null>("vue-query");
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: 60 * 60 * 10
      }
    },
  });
  const options: VueQueryPluginOptions = { queryClient };
  if (process.server) {
    nuxt.hooks.hook("app:rendered", () => {
      vueQueryState.value = dehydrate(queryClient);
    });
  }
  if (process.client) {
    nuxt.hooks.hook("app:created", () => {
      hydrate(queryClient, vueQueryState.value);
    });
  }
  //vuetify
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
  });
  nuxt.vueApp
    .use(store)
    .use(vuetify)
    .use(VueQueryPlugin, options);
});