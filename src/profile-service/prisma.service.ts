import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ProfileServiceClient } from './profile.interface';
import { ProfileService } from './profile.service';


@Injectable()
export class ProfilePismaService implements OnModuleInit {
  private profileClient: ProfileServiceClient;

  constructor(
    @Inject('PROFILE_PACKAGE') private client: ClientGrpc,
    private prisma: ProfileService
  ) {}

  onModuleInit() {
    this.profileClient = this.client.getService<ProfileServiceClient>('ProfileService');
  }

  async createProfile(userId: string, name: string, description: string) {
    return this.profileClient.createProfile({ userId, name, description, toJSON: () => ({ userId, name, description }) }).toPromise();
  }

  async getProfile(userId: string) {
    return this.profileClient.getProfile({ userId,  toJSON: () => ({ userId })  }).toPromise();
  }

  async updateProfile(userId: string, name: string, description: string) {
    return this.profileClient.updateProfile({ userId, name, description,  toJSON: () => ({ userId, name, description })  }).toPromise();
  }

  async deleteProfile(userId: string) {
    return this.profileClient.deleteProfile({ userId,  toJSON: () => ({ userId, name})  }).toPromise();
  }

  async uploadImage(userId: string, image: Buffer) {
    return this.profileClient.uploadImage({ userId, image,  toJSON: () => ({ userId, name })  }).toPromise();
  }
}
