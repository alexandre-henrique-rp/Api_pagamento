import { Module } from '@nestjs/common';
import { CredentialService } from './credential.service';

@Module({
  controllers: [],
  providers: [CredentialService],
  exports: [],
})
export class CredentialModule {}
