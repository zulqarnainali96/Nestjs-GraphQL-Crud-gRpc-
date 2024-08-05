import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ApiGatewayResolver } from './api-gateway.resolver';
import { ApiGatewayService } from './api-gateway.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(__dirname, '../auth-service/auth.proto'),
        },
      },
      {
        name: 'PROFILE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'profile',
          protoPath: join(__dirname, '../profile-service/profile.proto'),
        },
      },
    ]),
  ],
  providers: [ApiGatewayResolver, ApiGatewayService],
})
export class ApiGatewayModule {}
