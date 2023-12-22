import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registerMode = false;
  users: any;
  /**
   *
   */
  constructor(private http: HttpClient) {    
  }

  ngOnInit() :void{
    this.users = this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/Users').subscribe({
      next: response => this.users = response,
      error: err => console.log(err),
      complete: () => console.log("getUsers Request has completed.") 
    })
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }
}
