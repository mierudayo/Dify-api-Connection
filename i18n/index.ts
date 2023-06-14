import en from './en/index.json'
import zhCN from './zh-CN/index.json'

const translations = {
  en,
  'zh-CN': zhCN
} as any

export const t = (key: string, locale: string = 'en') => {
  const keys = key.split('.')
  return keys.reduce((acc, k) => acc[k], translations[locale])
}

export default translations
