import {
    BaseEntity,
    Column,
    Entity,
    Index,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity('user')
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Index()
    @Column({ type: 'varchar', name: 'first_name', length: 30, nullable: true })
    first_name: string;

    @Index()
    @Column({ type: 'varchar', name: 'last_name', length: 30, nullable: true })
    last_name: string;

    @Index()
    @Column({ type: 'varchar', name: 'username', length: 30, nullable: true })
    username: string;

    @Index()
    @Column({ type: 'varchar', name: 'email', length: 100, nullable: true })
    email: string;

    @Index()
    @Column({ type: 'varchar', name: 'password', length: 255, nullable: true })
    password: string;

    @Index()
    @Column({ type: 'varchar', name: 'gender', length: 10, nullable: true })
    gender: string;

    @Index()
    @Column({ type: 'varchar', name: 'phone', length: 15, nullable: true })
    phone: string;

    @Index()
    @Column({ type: 'varchar', name: 'address', length: 255, nullable: true })
    address: string;

    @Index()
    @Column({ type: 'varchar', name: 'city', length: 50, nullable: true })
    city: string;

    @Index()
    @Column({ type: 'varchar', name: 'country', length: 50, nullable: true })
    country: string;

    @Index()
    @Column({ type: 'timestamp', name: 'dob', nullable: true })
    dob: Date;

    @Index()
    @Column({ type: 'varchar', name: 'zip_code', length: 10, nullable: true })
    zip_code: string;

    @Index()
    @Column({ type: 'timestamp', name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Index()
    @Column({ type: 'timestamp', name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date; 

    @Index()
    @Column({ type: 'boolean', name: 'is_active', default: true })
    is_active: boolean;

    @Index()
    @Column({ type: 'boolean', name: 'is_verified', default: false })
    is_verified: boolean;

  }