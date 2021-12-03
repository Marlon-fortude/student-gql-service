import { CreateStudentInput } from './create-student.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {
  @Field(() => String)
  id: string;
  @Field(() => String, { description: 'First name' })
  firstName: string;
  @Field(() => String, { description: 'Last name' })
  lastName: string;
  @Field(() => Date, { description: 'Date of birth' })
  dateOfBirth: Date;
  @Field(() => String, { description: 'Email' })
  email: string
}
