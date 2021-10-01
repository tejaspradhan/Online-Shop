const displayError = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
}

module.exports = {displayError}