import type { DehydratedState, VueQueryPluginOptions } from "@tanstack/vue-query";
import { VueQueryPlugin, QueryClient, hydrate, dehydrate } from "@tanstack/vue-query";
import { useState } from "#app";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from "vuetify/lib/framework.mjs";
import { mdi, aliases } from "vuetify/iconsets/mdi"
import store from "~/store";
import { PiniaVuePlugin } from 'pinia';


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
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
  });
  //pinia

  nuxt.vueApp
    .use(store)
    .use(PiniaVuePlugin)
    .use(vuetify)
    .use(VueQueryPlugin, options);
});