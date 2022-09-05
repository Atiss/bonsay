import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  error = null;
  githubAuth = `${environment.authApi}?client_id=${environment.githubClientId}&redirect_uri=${window.location.href}data`;

  constructor() { }

  ngOnInit(): void {
  }
}
