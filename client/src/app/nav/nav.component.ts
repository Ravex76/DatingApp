import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import {AccountService} from '../_services/account.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public service: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() : void {
    this.service.login(this.model).subscribe(data => {
      this.router.navigateByUrl('/members');
    });
  }

  logout(): void {
    this.service.logout();
    this.router.navigateByUrl('/');
  }

}
