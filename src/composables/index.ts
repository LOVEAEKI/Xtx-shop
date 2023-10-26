import type { XtxGuessInstance } from '@/types/components'
import { ref } from 'vue'

export const useGuessList = () => {
  // 猜你喜欢子组件
  const guessRef = ref<XtxGuessInstance>()

  // 触底更新
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  return {
    guessRef,
    onScrolltolower,
  }
}
