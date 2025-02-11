import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipmentModule } from './equipment/equipment.module';
import { MongooseModule } from '@nestjs/mongoose';
require('dotenv').config(); // load .env

@Module({
  imports: [
    EquipmentModule,
    MongooseModule.forRoot(process.env.DB_URL + '/' + process.env.DB_NAME),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
