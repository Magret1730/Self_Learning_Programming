import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  ValidationPipe
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { IsPositivePipe } from 'src/pipes/is-positive.pipe';
import { APIKeyGuard } from 'src/guards/api-key.guard';
// import { ConfigService } from 'src/config/config.service';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private episodesService: EpisodesService,
    // private configService: ConfigService
  ) {} // You inject service into controller and npot create an instance

  @Get()
  findAll(
    @Query('sort') sort: 'asc' | 'desc' = 'desc',
    @Query('limit', new DefaultValuePipe(100), ParseIntPipe, IsPositivePipe) limit: number,
  ) {
    console.log(sort);
    return this.episodesService.findAll(sort);
  }

  @Get('featured')
  findFeatured() {
    return this.episodesService.findFeatured();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    console.log(id);
    const episode = this.episodesService.findOne(id);
    if (!episode) {
      throw new HttpException('Episode not found', HttpStatus.NOT_FOUND);
    }

    return episode;
  }


  @UseGuards(APIKeyGuard)
  @Post()
  create(@Body(ValidationPipe) input: CreateEpisodeDto) {
    console.log(input);
    return this.episodesService.create(input);
  }

  @Delete(':id')
  remove(@Param() id: string) {
    console.log(id);
    return this.episodesService.remove(id);
  }
}
