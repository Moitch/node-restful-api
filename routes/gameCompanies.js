const { index, show, create, update, destroy } = require('../controllers/gameCompanies');
const passport = require("passport");  
  
  module.exports = router => {
    router.get('/gameCompanies', index);
    router.get('/gameCompanies/:id', show);
    router.post('/gameCompanies', passport.authenticate("jwt", { session: false }), create);
    router.put('/gameCompanies', passport.authenticate("jwt", { session: false }), update);
    router.delete('/gameCompanies', passport.authenticate("jwt", { session: false }), destroy);

    return router;

  };