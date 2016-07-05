import { Router } from 'express'

const router = new Router()

router.get(`/`, async (req, res) => {
  res.send('hi')
})

export default router
