import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(route.queryParams.code || localStorage.getItem('code')) {
        if(!localStorage.getItem('code')){
          localStorage.setItem('code', route.queryParams.code)
        }
        return true;
      }
      this.router.navigate(['/error']);
      return false;
  }
  
}
