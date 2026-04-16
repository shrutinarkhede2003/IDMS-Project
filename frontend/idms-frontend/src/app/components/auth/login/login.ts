import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  user = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

 login() {
  this.auth.login(this.user).subscribe({
    next: (res: any) => {
      alert("Login Successful ✅");

      this.auth.setUser(res);   
      this.router.navigate(['/interns']);
    },
    error: (err) => {
      alert("Invalid Credentials ❌");
      console.log(err);
    }
  });

  }
}