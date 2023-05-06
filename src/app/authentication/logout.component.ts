import { Component, OnInit } from '@angular/core';
import { User } from '../common/model';
import { Router } from '@angular/router';

import { AuthService } from './services';

@Component({
    selector: 'app-logout',
    template: `Logged In: {{loggedInUser.username}} |{{loggedInUser.role}} |
    <button type="button" (click)="logout()">Logout</button>
    ` 
})

export class LogoutComponent implements OnInit {
    loggedInUser  = {} as User;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { 
        this.loggedInUser = this.authService.getLoggedInUser();
    }

    
    logout() {
        this.authService.logoutUser();
        this.router.navigate([this.authService.getLoginUrl()]);
    }
}