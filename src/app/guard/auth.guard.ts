import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(AuthService)

  const username =  sessionStorage.getItem('username')
  const role = sessionStorage.getItem('role')
  if(username && role){
    return true
  }
  else{
    router.navigate(['login']);
    return false;
  }
};
