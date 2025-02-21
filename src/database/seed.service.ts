import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Gender)
    private readonly genderRepository: Repository<Gender>,
    @InjectRepository(SexualOrientation)
    private readonly sexualOrientationRepository: Repository<SexualOrientation>,
    @InjectRepository(RelationshipStatus)
    private readonly relationshipStatusRepository: Repository<RelationshipStatus>,
    @InjectRepository(LookFor)
    private readonly lookForRepository: Repository<LookFor>,
    @InjectRepository(Interest)
    private readonly interestRepository: Repository<Interest>,
    @InjectRepository(FavoriteActivities)
    private readonly favoriteActivitiesRepository: Repository<FavoriteActivities>,
    @InjectRepository(PetPreferences)
    private readonly petPreferencesRepository: Repository<PetPreferences>,
    @InjectRepository(Language)
    private readonly languageRepository: Repository<Language>,
  ) {}

  async run() {
    let count = await this.genderRepository.count();
    if (count === 0) {
      await this.genderRepository.save([
        { name: 'Male' },
        { name: 'Female' },
        { name: 'Non-binary' },
        { name: 'Other' },
        { name: 'Prefer not to say' },
      ]);
    }

    count = await this.sexualOrientationRepository.count();
    if (count === 0) {
      await this.sexualOrientationRepository.save([
        { name: 'Straight' },
        { name: 'Gay' },
        { name: 'Bisexual' },
        { name: 'Pansexual' },
      ]);
    }

    count = await this.relationshipStatusRepository.count();
    if (count === 0) {
      await this.relationshipStatusRepository.save([
        { name: 'Single' },
        { name: 'Divorced' },
        { name: 'Widowed' },
        { name: 'Open Relationship' },
      ]);
    }

    count = await this.lookForRepository.count();
    if (count === 0) {
      await this.lookForRepository.save([
        { name: 'Casual' },
        { name: 'Serious Relationship' },
        { name: 'Friendship' },
        { name: 'Networking' },
      ]);
    }

    count = await this.interestRepository.count();
    if (count === 0) {
      await this.interestRepository.save([
        { name: 'Music' },
        { name: 'Movies' },
        { name: 'Books' },
        { name: 'Sports' },
        { name: 'Travel' },
      ]);
    }

    count = await this.favoriteActivitiesRepository.count();
    if (count === 0) {
      await this.favoriteActivitiesRepository.save([
        { name: 'Hiking' },
        { name: 'Cooking' },
        { name: 'Gaming' },
        { name: 'Yoga' },
        { name: 'Riding' },
      ]);
    }

    count = await this.petPreferencesRepository.count();
    if (count === 0) {
      await this.petPreferencesRepository.save([
        { name: 'Hiking' },
        { name: 'Cooking' },
        { name: 'Gaming' },
        { name: 'Yoga' },
        { name: 'Riding' },
      ]);
    }

    count = await this.languageRepository.count();
    if (count === 0) {
      await this.languageRepository.save([
        { name: 'Hindi' },
        { name: 'English' },
      ]);
    }
  }
}
