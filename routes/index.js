import express from 'express';

const router = express.Router();

/* GET index/login page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Crypto Market Watcher'
  });
});

/* GET dashboard page */
router.get('/dashboard', (req, res) => {
  if((username === "alex.gbetie@meltwater.org") && (password === "crypto")){
    res.render('dashboard', {
      title: 'Crypto Market Watcher'
    });
  }else{
    return "The username or the password are not correct";
  }
});

export default router;
