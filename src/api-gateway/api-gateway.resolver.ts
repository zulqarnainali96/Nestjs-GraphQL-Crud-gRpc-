import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ApiGatewayService } from './api-gateway.service';
import { User, Profile, AuthResponse } from './api-gateway.types';
import FileUpload from 'graphql-upload';
import GraphQLUpload from 'graphql-upload';
import { Readable } from 'stream';

@Resolver()
export class ApiGatewayResolver {
  constructor(private apiGatewayService: ApiGatewayService) {}

  @Query(() => User)
  async getUser(@Args('id') id: string) {
    return this.apiGatewayService.getUser(id);
  }

  @Query(() => Profile)
  async getProfile(@Args('userId') userId: string) {
    return this.apiGatewayService.getProfile(userId);
  }

  @Mutation(() => AuthResponse)
  async register(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.apiGatewayService.register(username, email, password);
  }

  @Mutation(() => AuthResponse)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.apiGatewayService.login(email, password);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('userId') userId: string,
    @Args('username') username: string,
    @Args('email') email: string,
  ) {
    return this.apiGatewayService.updateUser(userId, username, email);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('userId') userId: string) {
    const result = await this.apiGatewayService.deleteUser(userId);
    return result.success;
  }

  @Mutation(() => Profile)
  async createProfile(
    @Args('userId') userId: string,
    @Args('name') name: string,
    @Args('description') description: string,
  ) {
    return this.apiGatewayService.createProfile(userId, name, description);
  }

  @Mutation(() => Profile)
  async updateProfile(
    @Args('userId') userId: string,
    @Args('name') name: string,
    @Args('description') description: string,
  ) {
    return this.apiGatewayService.updateProfile(userId, name, description);
  }

  @Mutation(() => Boolean)
  async deleteProfile(@Args('userId') userId: string) {
    const result = await this.apiGatewayService.deleteProfile(userId);
    return result.success;
  }

  @Mutation(() => String)
  async uploadProfileImage(
    @Args('userId') userId: string,
    @Args({ name: 'image', type: () => GraphQLUpload })
    {  createReadStream }: { createReadStream: () => Readable },
  ) {
    const buffer = await new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = [];
      createReadStream()
        .on('data', (chunk) => chunks.push(chunk))
        .on('end', () => resolve(Buffer.concat(chunks)))
        .on('error', reject);
    });

    const result = await this.apiGatewayService.uploadProfileImage(userId, buffer);
    return result.imageUrl;
  }
}
