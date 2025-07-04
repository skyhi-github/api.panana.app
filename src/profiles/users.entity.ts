import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index } from 'typeorm';

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'varchar', name: 'bio', length: 255, nullable: true })
  bio: string;

  @Index()
  @Column({ type: 'varchar', name: 'profile_url', length: 255, nullable: true })
  profileUrl: string;

}