const Router = require('nextjs-dynamic-routes')

const router = new Router()

router.add({ name: 'articles', pattern: '/articles/:id' })

router.add({ name: 'film', pattern: '/films/:id' })

// if the name of your route is different from your component file name:
router.add({
  name: 'characterAndFilm',
  pattern: '/character-and-film/:characterId/:filmId',
  page: '/character-and-film'
})

module.exports = router
