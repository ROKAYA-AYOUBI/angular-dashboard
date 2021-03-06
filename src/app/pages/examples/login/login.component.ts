
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth-service.service';
import {TokenStorageService} from '../../../services/token-storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    form: any = {
        username: null,
        password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    }

    onSubmit(): void {
        const { username, password } = this.form;

        this.authService.login(username, password).subscribe(
            data => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveRefreshToken(data.refreshToken);
                this.tokenStorage.saveUser(data);

                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorage.getUser().roles;
                this.reloadPage();
            },
            err => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
            }
        );
    }

    reloadPage(): void {
        window.location.reload();
    }
}



/*
import { Component, OnInit } from "@angular/core";
import {AuthService} from '../../../services/auth-service.service';
import {TokenStorageService} from '../../../services/token-storage.service';
import {AuthLoginInfo} from '../../../../model/login-info';


@Component({
    selector: "app-login",
    templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
    form: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
    private loginInfo: AuthLoginInfo;

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
        }
    }

    onSubmit() {
        console.log(this.form);

        this.loginInfo = new AuthLoginInfo(
            this.form.username,
            this.form.password);

        this.authService.attemptAuth(this.loginInfo).subscribe(
            data => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUsername(data.username);
                this.tokenStorage.saveAuthorities(data.authorities);

                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorage.getAuthorities();
                this.reloadPage();
            },
            error => {
                console.log(error);
                this.errorMessage = error.error.message;
                this.isLoginFailed = true;
            }
        );
    }

    reloadPage() {
        window.location.reload();
    }

}

 */
