import { HttpException, Injectable } from '@nestjs/common';
import { studentData } from './crud.mock';

@Injectable()
export class CrudService {
    private studentData = studentData;
    public getAllData() {
        return this.studentData;
    }

    public getStudentById(id: number): Promise<any> {
        const StudentId = Number(id);
        return new Promise((resolve) => {
            const student = this.studentData.find(student => student.id === StudentId);
            if (!student) {
                throw new HttpException('Student not found', 404);
            }
            resolve(student);
        });
    }

    public addStudent(student) {
        // id is auto-incremented
        student.id = this.studentData.length + 1;
        this.studentData.push(student);
        return student;
    }

    public updateStudent(id: number, updateFields: any): Promise<any> {
        const StudentId = Number(id);
        return new Promise((resolve) => {
            let student = this.studentData.findIndex(student => student.id === StudentId);
            if (!student) {
                throw new HttpException('Student not found', 404);
            }
            this.studentData[student] = { ...this.studentData[student], ...updateFields };
            return resolve(this.studentData[student]);
        });
    }

    public deleteStudent(id: number): Promise<any> {
        const StudentId = Number(id);
        return new Promise((resolve) => {
            const student = this.studentData.findIndex(student => student.id === StudentId);
            if (student === -1) {
                throw new HttpException('Student not found', 404);
            }
            this.studentData.splice(student, 1);
            return resolve(this.studentData);
        });
    }
}
