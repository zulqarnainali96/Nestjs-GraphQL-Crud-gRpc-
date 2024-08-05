import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthPrismaService } from './prisma.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as path from 'path';

const protoPath = path.join(__dirname, '../../proto/auth.proto');

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: protoPath,
          loader: {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
          },
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthPrismaService],
  exports: [AuthService],
})
export class AuthModule {}
