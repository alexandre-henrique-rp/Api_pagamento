export class Credential {
  private static node_env = process.env.NODE_ENV;

  private static Client_id =
    Credential.node_env === 'dev'
      ? process.env.CLIENT_ID_SANDBOX
      : process.env.CLIENT_ID_PRODUCTION;
  private static Client_secret =
    Credential.node_env === 'dev'
      ? process.env.CLIENT_SECRET_SANDBOX
      : process.env.CLIENT_SECRET_PRODUCTION;
  private static Sandbox = Credential.node_env === 'dev' ? true : false;
  private static Cert =
    Credential.node_env === 'dev'
      ? process.env.CERT_SANDBOX
      : process.env.CERT_PRODUCTION;
  private static data = {
    sandbox: Credential.Sandbox,
    client_id: Credential.Client_id,
    client_secret: Credential.Client_secret,
    certificate: __dirname + '/' + Credential.Cert,
    validateMtls: false,
  };

  static get OptionCredential() {
    return this.data;
  }
}
