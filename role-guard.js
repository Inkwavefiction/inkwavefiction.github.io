// role-guard.js
(function(){
  const role = sessionStorage.getItem('userRole')
             || localStorage.getItem('userRole')
             || 'guest';

  // must be set on each page before this script loads:
  if (!window.allowedRoles || !window.allowedRoles.includes(role)) {
    window.location.href = 'index.html';
  }
})();
