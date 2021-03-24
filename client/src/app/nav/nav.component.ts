import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import {AccountService} from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public service: AccountService) { }

  ngOnInit(): void {
  }

  login() : void {
    this.service.login(this.model).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  logout(): void {
    this.service.logout();
  }

}