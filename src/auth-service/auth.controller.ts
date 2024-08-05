import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: { username: string; email: string; password: string }) {
    return this.authService.register(registerDto.username, registerDto.email, registerDto.password);
  }

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @Get('user/:userId')
  async getUser(@Param('userId') userId: string) {
    return this.authService.getUser(userId);
  }

  @Put('user/:userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateDto: { username: string; email: string }
  ) {
    return this.authService.updateUser(userId, updateDto.username, updateDto.email);
  }

  @Delete('user/:userId')
  async deleteUser(@Param('userId') userId: string) {
    return this.authService.deleteUser(userId);
  }
}
