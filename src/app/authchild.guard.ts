import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authchildGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let islogin=localStorage.getItem('isLoggedin');
  if(islogin == 'false'){
    alert('not authenticated user');
    _router.navigate(['login']);
    return false;
  }
  return true;
};