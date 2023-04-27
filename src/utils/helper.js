export function formatCurrencyVN(value) {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  });

  return formatter.format(value) + 'đ';
}
