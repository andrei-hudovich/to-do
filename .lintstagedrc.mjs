export default {
  '*.{vue,ts}': [() => 'npm run check-types'],
  '*.{vue,ts,js,cjs}': ['npm run check-lint', 'npm run check-format']
}
