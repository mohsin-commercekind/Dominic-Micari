export const slugify = (s = "") =>
  s
    .toLowerCase()
    .replace(/&|,/g, " and ") // normalize & and , to "and"
    .replace(/[^a-z0-9]+/g, "-") // non-alphanumerics -> hyphen
    .replace(/(^-|-$)/g, ""); // trim hyphens
