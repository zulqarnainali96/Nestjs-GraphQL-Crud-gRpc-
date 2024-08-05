import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth-service/auth.module';
import { ProfileModule } from './profile-service/profile.module';
import { ApiGatewayModule } from './api-gateway/api-gateway.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    AuthModule,
    ProfileModule,
    ApiGatewayModule,
  ],
})
export class AppModule {}
