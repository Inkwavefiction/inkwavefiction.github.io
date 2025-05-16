;(function(){
  'use strict';

  const userRole = sessionStorage.getItem('userRole');
  const allowed  = Array.isArray(window.allowedRoles)
                 ? window.allowedRoles
                 : [];

  // if no role or not in the allowed list -> kick out
  if (!userRole || !allowed.includes(userRole)) {
    console.warn(`Access denied for role: ${userRole}`);
    // send ’em somewhere appropriate
    return window.location.replace('/unauthorized.html');
  }

  // OK, you made it—reveal the page
  document.documentElement.style.visibility = '';
})();
