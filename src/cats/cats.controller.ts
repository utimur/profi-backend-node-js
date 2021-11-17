import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';

@ApiTags('Коты')
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @ApiOperation({summary: 'Получить всех котов'})
    @ApiResponse({status: 200, type: [Cat]})
    @Get()
    getAll() {
        return this.catsService.getAll();
    }

}


