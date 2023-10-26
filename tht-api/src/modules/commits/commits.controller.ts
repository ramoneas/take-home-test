import { Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('commits')
@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}
  @Get()
  findAll() {
    return this.commitsService.findAll();
  }
}
