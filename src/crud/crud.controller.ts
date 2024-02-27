import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CrudService } from './crud.service';
import { StudentModel } from './dataModel';

@Controller('crud')
export class CrudController {
    constructor(private crudService: CrudService) { }

    // get all details
    @Get()
    public getAllData() {
        return this.crudService.getAllData();
    }

    @Post()
    public addStudent(@Body() student: StudentModel){
        return this.crudService.addStudent(student);
    }

    @Put(':id')
    public async updateStudent(@Param('id') id: number, @Body() student: StudentModel){
        return this.crudService.updateStudent(id, student);
    }

    @Get(':id')
    public async getStudentById(@Param('id') id: number){
        return this.crudService.getStudentById(id);
    }

    @Delete(':id')
    public async deleteStudent(@Param('id') id: number){
        return this.crudService.deleteStudent(id);
    }
}
