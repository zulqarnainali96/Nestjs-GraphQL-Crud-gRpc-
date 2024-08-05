import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth-service/auth.service';
import { ProfileService } from '../profile-service/profile.service';

@Injectable()
export class ApiGatewayService {
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
  ) {}

  async register(username: string, email: string, password: string) {
    return this.authService.register(username, email, password);
  }

  async login(email: string, password: string) {
    return this.authService.login(email, password);
  }

  async getUser(userId: string) {
    return this.authService.getUser(userId);
  }

  async updateUser(userId: string, username: string, email: string) {
    return this.authService.updateUser(userId, username, email);
  }

  async deleteUser(userId: string) {
    return this.authService.deleteUser(userId);
  }

  async createProfile(userId: string, name: string, description: string) {
    return this.profileService.createProfile(userId, name, description);
  }

  async getProfile(userId: string) {
    return this.profileService.getProfile(userId);
  }

  async updateProfile(userId: string, name: string, description: string) {
    return this.profileService.updateProfile(userId, name, description);
  }

  async deleteProfile(userId: string) {
    return this.profileService.deleteProfile(userId);
  }

  async uploadProfileImage(userId: string, image: Buffer) {
    return this.profileService.uploadImage(userId, image);
  }
}
