import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let islogin=localStorage.getItem('isLoggedin');
  if(islogin == 'false'){
    alert('not authenticated user');
    _router.navigate(['login']);
    return false;
  }
  return true;
};
