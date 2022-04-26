import { Component, OnInit } from "@angular/core";
import {AuthService} from '../../../services/auth-service.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    form: any = {
        username: null,
        email: null,
        password: null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        const { username, email, password } = this.form;

        this.authService.register(username, email, password).subscribe(
            data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
            },
            err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        );
    }
}




/*
import { Component, OnInit } from "@angular/core";
import {SignUpInfo} from '../../../../model/signup-info';
import {AuthService} from '../../../services/auth-service.service';




@Component({
  selector: "app-register",
  templateUrl: "register.component.html"
})
export class RegisterComponent implements OnInit {
    form: any = {};
    signupInfo: SignUpInfo;
    isSignedUp = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService) { }

    ngOnInit() { }

    onSubmit() {
        console.log(this.form);

        this.signupInfo = new SignUpInfo(
           // this.form.name,
            this.form.username,
            this.form.email,
            this.form.password);

        this.authService.signUp(this.signupInfo).subscribe(
            data => {
                console.log(data);
                this.isSignedUp = true;
                this.isSignUpFailed = false;
            },
            error => {
                console.log(error);
                this.errorMessage = error.error.message;
                this.isSignUpFailed = true;
            }
        );
    }
}

 */
