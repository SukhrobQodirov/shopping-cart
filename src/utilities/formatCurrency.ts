const CURRENCY_FIRMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CURRENCY_FIRMATTER.format(number);
}
