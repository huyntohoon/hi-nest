import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('movies') // defalut rauter
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('/:id')
  getOne(@Param('id') movieID: string) {
    return 'This will retunr one movies';
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieID: string) {}

  @Patch('/:id')
  patch(@Param('id') movieID: string) {}
}
