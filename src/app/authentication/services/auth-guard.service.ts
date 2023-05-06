import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  CanActivateChild,  Router,  RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router
        ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        console.log('URL:' + url);

        if(this.authService.isUserLoggedIn()) { return true; }
        
        this.authService.setRedirectUrl(url);
        this.router.navigate([this.authService.getLoginUrl()]);

        return false;
    }


    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        
        let loggedInUser = this.authService.getLoggedInUser();

        if(loggedInUser.role === 'ADMIN') {
            return true;
        }
        else {
            console.log('Unauthorized to open link: '+ state.url);
		    return false;
        }
        
    }

   
    
}