import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Invoice Vault',
    short_name: 'invoice-vault',
    description: 'A simple invoice management system',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/ui-screenshot.png',
        sizes: '640x320',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Invoice Vault',
      },
    ],
  }
}