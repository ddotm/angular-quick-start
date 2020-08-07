export class Config {
  public static props: ConfigProps;
}

export class ConfigProps {
  public appName: string = null;
  public production: boolean = null;
  public envName: string = null;
  public apiUrl: string = null;
}
