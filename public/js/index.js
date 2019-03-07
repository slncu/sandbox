console.log('hello,world')

const isOnline = window.navigator.onLine

if (isOnline) {
  document.body.classList.remove('offline')
} else {
  document.body.classList.add('offline')
}
