export default {
  '*.{vue,ts}': [() => 'npm run lint:typescript'],
  '*.{vue,ts,js,cjs,mjs}': ['npm run lint:eslint', 'npm run lint:prettier'],
  '*.{vue,scss}': ['npm run lint:stylelint'],
  '*.scss': ['npm run lint:prettier']
}
