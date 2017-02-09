import app from './server'

const PORT = process.env.PORT || 3000

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled rejection at: Promise', p, 'reason:', reason)
})

;(async () => {
  await app.listen(PORT)
  console.log(`Server started on port ${PORT}`)
})()

