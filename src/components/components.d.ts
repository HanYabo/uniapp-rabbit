import XtxSwiper from './XtxSwiper.vue'
import XtxGuess from './XtxGuess.vue'

import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}
