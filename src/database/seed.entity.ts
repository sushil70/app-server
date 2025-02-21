import { Profile } from 'src/profile/profile.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: false })
  isArchived: string;
}

@Entity()
export class SexualOrientation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: false })
  isArchived: string;
}

@Entity()
export class RelationshipStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: false })
  isArchived: string;
}

@Entity()
export class LookFor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: false })
  isArchived: string;
}

@Entity()
export class Interest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: false })
  isArchived: string;

  @OneToMany(() => Profile, (profile) => profile, {
    onDelete: 'CASCADE',
  })
  profile: Profile;
}

@Entity()
export class FavoriteActivities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: false })
  isArchived: string;

  @OneToMany(() => Profile, (profile) => profile, {
    onDelete: 'CASCADE',
  })
  profile: Profile;
}

@Entity()
export class PetPreferences {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: false })
  isArchived: string;
}

@Entity()
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: false })
  isArchived: string;

  @OneToMany(() => Profile, (profile) => profile, {
    onDelete: 'CASCADE',
  })
  profile: Profile;
}
