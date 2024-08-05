import { Injectable } from '@nestjs/common';
import { ProfilePismaService } from './prisma.service';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProfileService {
  constructor(private prisma: ProfilePismaService) {}

  async createProfile(userId: string, name: string, description: string) {
    return this.prisma.createProfile(userId, name, description);
  }

  async getProfile(userId: string) {
    return this.prisma.getProfile(userId);
  }

  async updateProfile(userId: string, name: string, description: string) {
    return this.prisma.updateProfile(userId, name, description);
  }

  async deleteProfile(userId: string) {
    return this.prisma.deleteProfile(userId);
  }

  async uploadImage(userId: string, image: Buffer) {
    const fileName = `${userId}-${uuidv4()}.jpg`;
    const filePath = path.join(__dirname, '..', '..', 'uploads', fileName);
    
    fs.writeFileSync(filePath, image);
    
    const imageUrl = `/uploads/${fileName}`;
    
    return this.prisma.uploadImage(userId, image);

    return { imageUrl };
  }
}
