import { defineConfig } from 'vite'
import purgeCss from 'vite-plugin-purgecss'

export default defineConfig({
  plugins: [
    purgeCss()
  ]
})

