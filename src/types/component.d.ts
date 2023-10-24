/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import type { GuessItem } from './home'
declare module 'vue' {
  export interface GlobalComponents {
    //
  }
}

export type XtxGuessInstance = InstanceType<GuessItem>
