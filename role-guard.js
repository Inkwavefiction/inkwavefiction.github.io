// role-guard.js
(function(){
  const allowed = Array.isArray(window.allowedRoles) ? window.allowedRoles : [];
  const userRole = sessionStorage.getItem('userRole');
  if (!allowed.includes(userRole)) {
    // replace() so Back-button won’t reveal protected view
    window.location.replace('login.html');
  }
})();
