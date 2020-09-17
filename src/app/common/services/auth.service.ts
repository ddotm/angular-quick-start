import {Injectable} from '@angular/core';
import _ from 'lodash';
import Oidc, {UserManager, UserManagerSettings} from 'oidc-client';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthConfig, Config} from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private config: UserManagerSettings = null;
  private mgr: UserManager = null;
  private user: Oidc.User = null;
  private userProfile: Oidc.Profile = null;
  private userProfileSubj: BehaviorSubject<Oidc.Profile> = new BehaviorSubject<Oidc.Profile>(null);
  public $userProfile: Observable<Oidc.Profile> = this.userProfileSubj.asObservable();

  constructor() {
    this.init();
  }

  private init(): void {
    const authConfig: AuthConfig = Config.props.auth;
    this.config = {
      authority: authConfig.authority,
      client_id: authConfig.client_id,
      redirect_uri: authConfig.redirect_uri,
      response_type: authConfig.response_type,
      scope: authConfig.scope,
      post_logout_redirect_uri: authConfig.post_logout_redirect_uri
    };
    this.mgr = new Oidc.UserManager(this.config);
  }

  public getUser(): void {
    this.mgr.getUser()
        .then((user) => {
          this.user = user;
          this.userProfile = user?.profile;
          this.userProfileSubj.next(this.userProfile);
          if (!_.isNil(this.userProfile)) {
            console.log('User logged in', this.userProfile);
          } else {
            console.log('User not logged in');
          }
        });
  }

  public login(): void {
    this.mgr.signinRedirect();
  }

  public logout(): void {
    this.mgr.signoutRedirect();
  }

  public getAccessToken(): string | null {
    return this.user?.access_token;
  }
}
