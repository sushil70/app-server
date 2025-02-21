import {
  FavoriteActivities,
  Interest,
  Language,
} from 'src/database/seed.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  firstName: string;

  @Column({ default: '' })
  lastName: string;

  // @Column({ default: new Date() })
  // DOB: Date;

  @Column({ default: '' })
  gender: string;

  @Column({ default: '' })
  sexualOrientation: string;

  @Column({ default: '' })
  bio: string;

  @Column({ default: '' })
  relationshipStatus: string;

  @Column({ default: '' })
  lookFor: string;

  @Column({ default: '' })
  education: string;

  @Column({ default: '' })
  job: string;

  @Column({ default: '' })
  companyName: string;

  @Column({ default: '' })
  religion: string;

  @ManyToOne(() => Language, (language) => language, { cascade: true })
  languages: Language[];

  @Column({ default: '' })
  location: string;

  @ManyToOne(() => Interest, (interest) => interest, { cascade: true })
  interests: Interest[];

  @ManyToOne(() => FavoriteActivities, (fa) => fa, { cascade: true })
  favoriteActivities: FavoriteActivities[];

  @Column({ default: 0 })
  height: number;

  @Column({ default: 0 })
  weight: number;

  @Column({ default: '' })
  distancePreference: string;

  @Column({ default: '' })
  petPreferences: string;

  @Column({ default: true })
  active: boolean;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
