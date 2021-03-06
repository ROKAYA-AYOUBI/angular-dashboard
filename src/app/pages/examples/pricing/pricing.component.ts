import { Component, OnInit } from "@angular/core";
import {TokenStorageService} from '../../../services/token-storage.service';

@Component({
  selector: "app-pricing",
  templateUrl: "pricing.component.html"
})
export class PricingComponent implements OnInit {
  currentUser: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
}
