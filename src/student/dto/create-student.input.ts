import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  
  @Field(() => String, { description: 'First name' })
  firstName: string;
  @Field(() => String, { description: 'Last name' })
  lastName: string;
  @Field(() => Date, { description: 'Date of birth' })
  dateOfBirth: Date;
  @Field(() => String, { description: 'Email' })
  email: string
}
