export const priceString = (billing: "MONTHLY" | "YEARLY", price: number) =>
  billing === "MONTHLY" ? `$${price}/mo` : `$${price}/yr`;
