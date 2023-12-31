import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();

  model: any = {}

  constructor( private accountService: AccountService){}

  ngOnInit(): void{

  }

  register() {
    console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => console.error(error)
    })
  }

  cancel() {
    console.log('canceled');
    this.cancelRegister.emit(false);
  }
}
