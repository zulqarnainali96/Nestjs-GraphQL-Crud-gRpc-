import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { ProfilePismaService } from './prisma.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PROFILE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'profile',
          protoPath: join(__dirname, 'profile.proto'),
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
  controllers: [ProfileController],
  providers: [ProfileService, ProfilePismaService],
  exports: [ProfileService],
})
export class ProfileModule {}
