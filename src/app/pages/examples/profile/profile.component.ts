import { Component, OnInit } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {GenerateUsersService} from '../../../services/generate-users.service';
import {Router} from '@angular/router';
import {UserModel} from '../../../../model/user.model';
import {TokenStorageService} from '../../../services/token-storage.service';
import { User } from "src/app/services/user-role/user";

@Component({
  selector: "app-profile",
  templateUrl: "profile.component.html"
})
export class ProfileComponent implements OnInit {



 public listusers:any;

    constructor(private http: HttpClient,private token: TokenStorageService ,
                private userService : GenerateUsersService,
                private router: Router) {}

    ngOnInit(): void {
        this.listusers = this.token.getUser();
        this.onGetUserse();
    }
    //affiche la liste d'users
    onGetUserse(){
        this.userService.getAll()
      //  this.http.get("http://localhost:8080/api/test/users")
                .subscribe(data=>{
                    this.listusers=data;
                },err=>{
                    console.log(err);
                    }
                )
    }
    //-----------supprimir
    content: any;
    deleteuser(id:number) {
        this.userService.deleteData(id)
            .subscribe(response => {
                console.log(response);
            })
    }
     //---------edit

    updateUser(id: number){
        //this.router.navigate(['http://localhost:4200/#/examples/pricing',id]);
        this.router.navigateByUrl('/#/examples/pricing/' + id);
    }

    //---------detail

    detailUser(id: number){
       // this.router.navigate(['/exemple/pricing',id]);
        this.router.navigateByUrl('/#/examples/timeline/' + id);

    }
}
