import {Component, OnInit} from '@angular/core';
import Oidc from 'oidc-client';
import {AuthService} from '../common/services/auth.service';

@Component({
  selector: 'aqs-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  public userProfile: Oidc.Profile = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getUser();
    this.authService.$userProfile.pipe()
        .subscribe({
          next: (userProfile: Oidc.Profile) => {
            this.userProfile = userProfile;
          }
        });
  }

  public signIn(): void {
    this.authService.login();
  }

  public signOut(): void {
    this.authService.logout();
  }
}
