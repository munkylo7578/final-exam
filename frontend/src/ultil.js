import numeral from "numeral"

export function formatMoney(input, currency = "₫") {
    return numeral(input).format("0,0") + currency;
  }