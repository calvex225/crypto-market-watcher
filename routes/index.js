import express from 'express';

const router = express.Router();

/* GET index/login page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Crypto Market Watcher'
  });
});

/* GET dashboard page. */
router.get('/dasboard', (req, res) => {
  res.render('dasboard', {
    title: 'Crypto Market Watcher'
  });
});

export default router;
