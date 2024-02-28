import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CrudService } from './crud.service';
import { StudentModel } from './dataModel';

@Controller('crud')
export class CrudController {
    constructor(private crudService: CrudService) { }

    // get all details
    @Get()
    public getAllData() {
        const data = this.crudService.getAllData();
        return { status: 'success', data};
    }

    @Post()
    public addStudent(@Body() student: StudentModel){
        const data = this.crudService.addStudent(student);
        return { status: 'success', data};
    }

    @Put(':id')
    public async updateStudent(@Param('id') id: number, @Body() student: StudentModel){
        const data = await this.crudService.updateStudent(id, student);
        return { status: 'success', data};
    }

    @Get(':id')
    public async getStudentById(@Param('id') id: number){
        const data = await this.crudService.getStudentById(id);
        return { status: 'success', data};
    }

    @Delete(':id')
    public async deleteStudent(@Param('id') id: number){
        const data = await this.crudService.deleteStudent(id);
        return { status: 'success', data};
    }
}
