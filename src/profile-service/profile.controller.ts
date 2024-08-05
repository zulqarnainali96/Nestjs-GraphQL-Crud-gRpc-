import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':userId')
  async getProfile(@Param('userId') userId: string) {
    return this.profileService.getProfile(userId);
  }

  @Put(':userId')
  async updateProfile(
    @Param('userId') userId: string,
    @Body() updateDto: { bio: string; interests: string }
  ) {
    return this.profileService.updateProfile(userId, updateDto.bio, updateDto.interests);
  }
}
