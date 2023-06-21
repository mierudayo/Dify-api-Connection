import en from './en/index.json'
import zhCN from './zh-CN/index.json'

export const translations = {
  en,
  'zh-CN': zhCN
} as any

const t =
  (translations: any) =>
  (locale: string = 'en') =>
  (key: string) => {
    const keys = key.split('.')
    return keys.reduce((acc, k) => acc[k], translations[locale])
  }

const I18N = t(translations)
export default I18N
