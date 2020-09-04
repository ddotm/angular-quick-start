export class Config {
  public static props: ConfigProps;
}

export class ConfigProps {
  public appName: string = null;
  public production: boolean = null;
  public envName: string = null;
  public apiUrl: string = null;
  public auth: AuthConfig = null;
}

// tslint:disable:variable-name
export class AuthConfig {
  public authority: string = null;
  public client_id: string = null;
  public redirect_uri: string = null;
  public response_type: string = null;
  public scope: string = null;
  public post_logout_redirect_uri: string = null;
}

// tslint:enable:variable-name
