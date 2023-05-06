import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

import { User } from 'src/app/common/model';


const USERS = [
    new User(1, 'ram', 'ram123', 'ADMIN'),
    new User(1, 'shayam', 'shayam123', 'USER'),
];

let userObservable = of(USERS);

@Injectable()
export class AuthService {
    private redirectUrl: string = '/';
    private loginUrl: string = '/login';
    private isloggedIn: boolean = false;
    private loggedInUser = {} as User;

    constructor() { }


    getAllUser(): Observable<User[]> {
        return userObservable;
    }


    isUserAuthenticated(username: string, password: string): Observable<boolean> {
        return this.getAllUser()
                            .pipe(
                                map(users => {
                                    let user = 
                                            users.find(
                                                user => (user.username === username) && (user.password === password));

                                    if(user){
                                        this.isloggedIn = true;
                                        this.loggedInUser = user;
                                    }
                                    else {
                                        this.isloggedIn = false;
                                    }
                                    
                                    return this.isloggedIn;              
                                })
                            )
    }
    

    isUserLoggedIn():boolean {
        return this.isloggedIn;
    }


    getRedirectUrl(): string {
        return this.redirectUrl;
    }


    setRedirectUrl(url: string):void {
        this.redirectUrl = url;
    }


    getLoginUrl(): string {
        return this.loginUrl;
    }


    getLoggedInUser() {
        return this.loggedInUser;
    }


    logoutUser():void {
        this.isloggedIn = false;
    }
}