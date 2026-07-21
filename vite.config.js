import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Ensure web-safe filename copy for WhatsApp image
try {
  const src = path.resolve(__dirname, 'public/home/WhatsApp Image 2026-07-21 at 1.07.18 PM.jpeg')
  const dstPublic = path.resolve(__dirname, 'public/home/about-shaarav.jpg')
  const dstAssets = path.resolve(__dirname, 'src/assets/about-shaarav.jpg')
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dstPublic)
    fs.copyFileSync(src, dstAssets)
  }

  const srcFounder = path.resolve(__dirname, 'public/founder/WhatsApp Image 2026-07-21 at 8.22.21 AM.jpeg')
  const dstFounderPublic = path.resolve(__dirname, 'public/founder/founder-real.jpg')
  const dstFounderAssets = path.resolve(__dirname, 'src/assets/founder-real.jpg')
  if (fs.existsSync(srcFounder)) {
    fs.copyFileSync(srcFounder, dstFounderPublic)
    fs.copyFileSync(srcFounder, dstFounderAssets)
  }
} catch (e) {
  console.error('Image sync note:', e)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
