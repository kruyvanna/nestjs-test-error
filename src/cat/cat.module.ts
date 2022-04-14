import { Cat, CatSchema } from './schemas/cat.schema';

import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatController],
  providers: [CatService],
  exports: [Cat],
})
export class CatsModule {}
