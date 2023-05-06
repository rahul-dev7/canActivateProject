import { Component, OnInit } from '@angular/core';
import { AuthService } from './services';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    invalidCredientialMsg = '';

    constructor(
        private authService : AuthService,
        private router: Router
        ) { }

    
    loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });


    ngOnInit() { }


    onFormSubmit() {
        let uname = this.loginForm.get('username')?.value;
        let pwd = this.loginForm.get('password')?.value;

        
        this.authService.isUserAuthenticated(uname, pwd)
                        .subscribe(authenticated => {
                            if(authenticated) {
                                let url = this.authService.getRedirectUrl();
                                console.log('Redirect Url:' +url);
                                this.router.navigate([url])
                            }
                            else {
                                this.invalidCredientialMsg = 'Invalid Credentials. Try again.';
                            }
                        });
        
    }
}