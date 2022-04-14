import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CatModule } from './cat/cat.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost/nest'), CatModule, OwnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
