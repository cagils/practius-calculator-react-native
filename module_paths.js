import System from 'systemjs'

System.config({
  paths: {
    'app/*': './src/*',
    'components/*': './src/components/*',
  },
})
