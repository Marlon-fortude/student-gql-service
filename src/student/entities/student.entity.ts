import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Student {
  @Field(() => String, { description: 'Id' })
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field(() => String, { description: 'First name' })
  @Column()
  firstName: string;
  @Field(() => String, { description: 'Last name' })
  @Column()
  lastName: string;
  @Field(() => Date, { description: 'Date of birth' })
  @Column()
  dateOfBirth: Date;
  @Field(() => String, { description: 'Email' })
  @Column()
  email: string
}
