import { Injectable } from '@nestjs/common';
import path from 'path';
import { EfiCredentials } from 'sdk-typescript-apis-efi';

@Injectable()
export class CredentialService {
  static OptionCredential(): import('sdk-typescript-apis-efi').EfiCredentials {
    throw new Error('Method not implemented.');
  }
  private static node_env = process.env.NODE_ENV;

  private static Client_id =
    CredentialService.node_env === 'dev'
      ? process.env.CLIENT_ID_SANDBOX
      : process.env.CLIENT_ID_PRODUCTION;
  private static Client_secret =
    CredentialService.node_env === 'dev'
      ? process.env.CLIENT_SECRET_SANDBOX
      : process.env.CLIENT_SECRET_PRODUCTION;
  private static Sandbox = CredentialService.node_env === 'dev' ? true : false;
  private static Cert =
    CredentialService.node_env === 'dev'
      ? process.env.CERT_SANDBOX
      : process.env.CERT_PRODUCTION;

  /**
   * A static method that returns the OptionCredential object.
   *
   * @return {Object} The OptionCredential object containing sandbox, client_id, client_secret, certificate, and validateMtls.
   */
  OptionCredential(): EfiCredentials {
    const data = {
      sandbox: CredentialService.Sandbox,
      client_id: CredentialService.Client_id,
      client_secret: CredentialService.Client_secret,
      certificate: path.resolve(process.cwd(), CredentialService.Cert),
      validateMtls: false,
    };
    return data;
  }
}
