export class SignUpInfo {
   nom: string;
   prenom:string;
    username: string;
    email: string;
    role: string[];
    password: string;

    constructor( username: string, email: string, password: string) {//name: string,
       // this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
}
