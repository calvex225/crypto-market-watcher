import express from 'express';

const router = express.Router();

/* GET index/login page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Crypto Market Watcher'
  });
});

/* Be Logged */

/* GET dashboard page */
router.get('/dashboard', (req, res) => {

  res.render('dashboard', {
    title: 'Crypto Market Watcher'
  });
});

export default router;
