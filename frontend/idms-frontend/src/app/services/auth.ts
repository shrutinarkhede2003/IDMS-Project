import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:8081/auth';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.api}/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.api}/register`, data);
  }

  // ✅ STORE USER
  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // ✅ CHECK LOGIN
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  // ✅ LOGOUT
  logout() {
    localStorage.removeItem('user');
  }
}