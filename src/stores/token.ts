import { defineStore } from 'pinia'
import { ref } from 'vue'
const useToken = defineStore(
  'token',
  () => {
    const token = ref(null)
    const updateToken = val => (token.value = val)
    const removeToken = () => (token.value = null)

    return { token, updateToken, removeToken }
  },
  {
    persist: true, // 可持久化的标记- 将我们的数据 持久化到前端缓存中
  }
)
export default useToken
