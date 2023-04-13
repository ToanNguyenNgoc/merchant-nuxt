import { createStore } from "vuex"
import countModule from "./modules/count.module"

const store = createStore<any>({
  modules: {
    countModule
  }
})
export default store