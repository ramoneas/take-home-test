import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommitsModule } from './modules/commits/commits.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      cache: true,
      isGlobal: true,
    }),
    CommitsModule,
  ],
})
export class AppModule {}
