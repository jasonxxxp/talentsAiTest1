// 解析带中文单位的金额字符串（"1.50亿" → 1.5e8, "320.00万" → 3.2e6, "5000" → 5000）
function parseChineseAmount(str) {
  if (!str || str === '-') return 0
  const s = String(str)
  const num = parseFloat(s) || 0
  if (s.includes('亿')) return num * 1e8
  if (s.includes('万')) return num * 1e4
  return num
}

export { parseChineseAmount }