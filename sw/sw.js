const VERSION = '2'
const PATH = location.hostname === 'localhost' ? ':8888' : '/sandbox/sw'
const ORIGIN = location.protocol + '//' + location.hostname + PATH
console.log(VERSION)

const STATIC_CACHE_KEY = 'static-' + VERSION
const STATIC_FILES = [
  ORIGIN + '/',
  ORIGIN + '/report',
  ORIGIN + '/css/style.css',
  ORIGIN + '/js/index.js',
  'https://cdn.rawgit.com/kimeiga/bahunya/css/bahunya-0.1.3.css',
]

const CACHE_KEYS = [STATIC_CACHE_KEY]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE_KEY).then(cache => {
      return Promise.all(
        STATIC_FILES.map(url => {
          return fetch(
            new Request(url, { cache: 'no-cache', mode: 'no-cors' })
          ).then(response => {
            return cache.put(url, response)
          })
        })
      )
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => {
            return !CACHE_KEYS.includes(key)
          })
          .map(key => {
            return caches.delete(key)
          })
      )
    })
  )
})

self.addEventListener('push', event => {
  const options = event.data.json()
  event.waitUntil(
    caches.open(STATIC_CACHE_KEY).then(cache => {
      fetch(new Request(options.data.url, { mode: 'no-cors' }))
        .then(response => {
          cache.put(options.data.url, response)
        })
        .then(() => {
          self.registration.showNotification(options.title, options)
        })
    })
  )
})

self.addEventListener('notificationclick', event => {
  event.notification.close()
  event.waitUntil(clients.openWindow(event.notification.data.url))
})
