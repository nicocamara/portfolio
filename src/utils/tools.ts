const fullPath = (document.currentScript as any)?.src ?? ''
const DISTRIBUTION_URL = fullPath.substring(0, fullPath.lastIndexOf('/'))
console.log(DISTRIBUTION_URL)
export const getAssetUrl = (path: string) =>
  `${DISTRIBUTION_URL}/assets/${path}`
