import {
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';
import * as cacheManager from 'cache-manager';

@Controller()
@UseGuards(RolesGuard)
export class AppController {
  constructor(
    private readonly appService: AppService, // @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  private cManager = cacheManager.caching({
    store: 'memory',
    max: 100,
    ttl: 10,
  });
  @Get()
  @Roles('admin')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hi')
  // @Roles('public')
  getHi(): string {
    return this.appService.getHello();
  }

  @Get('/timeout')
  // @Roles('public')
  async getTimeout(): Promise<string> {
    const cached: string = await this.cManager.get('greet_key');
    if (cached) {
      return cached;
    }
    const data = await this.appService.getTimeout();
    await this.cManager.set('greet_key', data);
    return data;
  }
}
