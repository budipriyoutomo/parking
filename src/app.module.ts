import { Blokslot, Blok } from './blokslots/entities/blokslot.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlokslotsModule } from './blokslots/blokslots.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: 3306,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [Blokslot, Blok],
        synchronize: true,
      }),
    }),
    BlokslotsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
