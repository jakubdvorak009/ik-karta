module.exports = function handler(req, res) {
  const credential = (req.body && req.body.credential) || '';
  if (!credential) {
    return res.redirect(302, '/?error=no_credential');
  }
  return res.redirect(302, '/?credential=' + encodeURIComponent(credential));
};
 
