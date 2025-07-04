import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index } from 'typeorm';
import { User } from '../users/users.entity';

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Index()
  @Column({ type: 'varchar', name: 'bio', length: 255, nullable: true })
  bio: string;

  @Index()
  @Column({ type: 'varchar', name: 'profile_url', length: 255, nullable: true })
  profileUrl: string;

}