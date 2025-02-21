import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from '../user/user.entity';
import { SeedService } from './seed.service';
import {
  FavoriteActivities,
  Gender,
  Interest,
  Language,
  LookFor,
  PetPreferences,
  RelationshipStatus,
  SexualOrientation,
} from './seed.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Gender,
      SexualOrientation,
      RelationshipStatus,
      LookFor,
      Interest,
      FavoriteActivities,
      PetPreferences,
      Language,
    ]),
  ],
  providers: [SeedService],
  exports: [SeedService],
})
export class DatabaseModule {}
