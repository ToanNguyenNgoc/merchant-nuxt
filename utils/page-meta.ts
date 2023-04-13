import { PageMeta } from "nuxt/app";

export const pageMeta: PageMeta = {
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in'
  },
  middleware(to: any, from: any) {
    to.meta.pageTransition.name = 'slide-right'
    from.meta.pageTransition.name = 'slide-left'
  }
}