import { Test, TestingModule } from '@nestjs/testing';

import { Cat } from './schemas/cat.schema';
import { CatService } from './cat.service';
import { getModelToken } from '@nestjs/mongoose';

describe('CatService', () => {
  let service: CatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CatService,
        { provide: getModelToken(Cat.name), useValue: jest.fn() },
      ],
    }).compile();

    service = module.get<CatService>(CatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
