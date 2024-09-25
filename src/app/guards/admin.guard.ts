import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthenticationService);
  const router = inject(Router);

  const isAuthenticated = authService.checkAuthentication()

  if (isAuthenticated) {
    return true; 
  } else {
    router.navigate(['']); 
    return false;
  }
};
