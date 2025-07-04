import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

// Serve static files from Eleventy's output directory
app.use(express.static(path.join(__dirname, '_site')))

// Handle routing for single page app behavior (optional)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '_site', 'index.html'), (err) => {
    if (err) {
      res.status(404).send('Page not found')
    }
  })
})

app.listen(PORT, () => {
  console.log(`NHS App Frontend server running on port ${PORT}`)
  console.log(`Serving files from _site directory`)
})
