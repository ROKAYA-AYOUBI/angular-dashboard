import { Component, OnInit } from "@angular/core";
import {TokenStorageService} from '../../../services/token-storage.service';

@Component({
  selector: "app-profile",
  templateUrl: "profile.component.html"
})
export class ProfileComponent implements OnInit {
  info: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
