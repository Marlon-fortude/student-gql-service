import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {

  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) {}

  create(createStudentInput: CreateStudentInput) {
    let student = this.studentRepository.create(createStudentInput);

    return this.studentRepository.save(student);
  }

  findAll() {
    return this.studentRepository.find();
  }

  findOne(id: string) {
    return this.studentRepository.findOne(id);
  }

  update(id: string, updateStudentInput: UpdateStudentInput) {
    let student: Student = this.studentRepository.create(updateStudentInput);
    student.id = id;
    return this.studentRepository.save(student);
  }

  async remove(id: string) {

    let proj = this.findOne(id)
    if (proj) {
      let ret = await this.studentRepository.delete(id)
      if (ret.affected === 1) {
        return proj;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`)
  }
}
