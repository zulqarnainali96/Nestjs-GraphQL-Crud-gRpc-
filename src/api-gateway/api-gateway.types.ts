import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;
}

@ObjectType()
export class Profile {
  @Field(() => ID)
  userId: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  imageUrl?: string;
}

@ObjectType()
export class AuthResponse {
  @Field()
  token: string;

  @Field(() => User)
  user: User;
}
