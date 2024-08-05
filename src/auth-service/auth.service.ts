import { Injectable, Inject, OnModuleInit, Logger } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AuthServiceClient } from './auth.interface';
import { AuthPrismaService } from './prisma.service';
import { validateEmail, validatePassword } from './validators';
import { RegisterResponse } from './auth.interface';
import { auth } from './proto/auth-types';



@Injectable()

export class AuthService implements OnModuleInit {
  private authClient: AuthServiceClient;
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @Inject('AUTH_PACKAGE') private client: ClientGrpc,
    private prisma: AuthPrismaService
  ) {}
  

  onModuleInit() {
    this.authClient = this.client.getService<AuthServiceClient>('AuthService');
  }

  async register(username: string, email: string, password: string): Promise<RegisterResponse> {
    if (!username || !email || !password) {
      throw new Error('All fields are required');
    }

    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    if (!validatePassword(password)) {
      throw new Error('Password does not meet security requirements');
    }

    const request: auth.RegisterRequest = { username, email, password, toJSON: () => ({ username, email, password }) };

    try {
      this.logger.log(`Attempting to register user: ${username}`);
      const response = await this.authClient.register(request).toPromise();
      this.logger.log(`Successfully registered user: ${username}`);
      return response;
    } catch (error) {
      this.logger.error(`Failed to register user: ${username}`, error.stack);
      throw new Error('Registration failed');
    }
  }


  async login(email: string, password: string): Promise<auth.AuthResponse> {
    const loginRequest: auth.LoginRequest = {
      email,
      password,
      toJSON: () => ({ email, password })
    };
    return this.authClient.login(loginRequest).toPromise();
  }

  async getUser(userId: string): Promise<auth.User> {
    return this.authClient.getUser({ userId } as auth.GetUserRequest).toPromise();
  }

  async updateUser(userId: string, username: string, email: string): Promise<auth.User> {
    const updateRequest: auth.UpdateUserRequest = {
      userId,
      username,
      email,
      toJSON: () => ({ userId, username, email })
    };
    return this.authClient.updateUser(updateRequest).toPromise();
  }
  

  async deleteUser(userId: string): Promise<auth.DeleteUserResponse> {
    const deleteRequest: auth.DeleteUserRequest = {
      userId,
      toJSON: () => ({ userId })
    };
    return this.authClient.deleteUser(deleteRequest).toPromise();
  }
  
  
}
