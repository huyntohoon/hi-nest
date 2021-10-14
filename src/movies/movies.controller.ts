import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies') // defalut rauter
export class MoviesController {
  // module에 export
  constructor(private readonly moviesService: MoviesService) {}
  // 다른 모든 메소드 호출보다 앞선 시점에 인스턴스 객체 초기화 => constructor
  // 해당 class를 movieService를 MoviesService로 private readonly로 인스턴스화
  // A : B => A는 B의 타입이다, 타입을 return한다.
  @Get()
  getAll(): Movie[] {
    // getAll() 함수 => Movie[](array) return
    return this.moviesService.getAll(); // moviesService에 getAll 함수 사용
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
