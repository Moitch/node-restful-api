module.exports = router => {
    require('./routes/gameCompanies')(router);
    require('./routes/games')(router);
    require('./routes/users')(router);
    require('./routes/sessions')(router);

    return router;
  };

