import {Component, OnInit} from '@angular/core';

import {GenerateUsersService} from '../../../services/generate-users.service';
import {User} from '../../../services/user-role';
import {ActivatedRoute, Router} from '@angular/router';




@Component({
  selector: "app-timeline",
  templateUrl: "timeline.component.html"
})
export class TimelineComponent implements  OnInit {
 id:number;
 user:User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: GenerateUsersService) { }

    ngOnInit() {
        this.user = new User();

        this.id = this.route.snapshot.params.id;

        this.userService.getUser(this.id)
            .subscribe(data => {
                console.log(data)
                this.user = data;
            }, error => console.log(error));
    }

  updateUser(){
    this.userService.updateData(this.id , this.user)
        .subscribe(data=>{
          console.log(data);
          this.user = data;
        },error=> console.log(error))
  }

    onSubmit() {
        this.updateUser();
    }

    gotoList() {
        this.router.navigate(['/profil']);
    }
}

