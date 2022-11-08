module.exports = function parseQuery(query) {
  const filters = {};
  const pag = {};
  for (const [filter, val] of Object.entries(query)) {
    if (filter === "from" || filter === "limit") {
      pag[filter] = val;
    } else {
      filters[filter] = val;
    }
  }
  return { filters, pag };
};
