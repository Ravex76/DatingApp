import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Это DatingApp!';
  users : any;

  constructor (private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.httpClient.get('https://localhost:5001/api/users').subscribe(data => {
      this.users = data;
    }, error => {
      console.log(error);
    });
  }
}
