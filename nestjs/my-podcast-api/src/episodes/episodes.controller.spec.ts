import { Test, TestingModule } from '@nestjs/testing';
import { EpisodesController } from './episodes.controller';
// import { ConfigModule } from 'src/config/config.module';
import { EpisodesService } from './episodes.service';
import { find } from 'rxjs';
// import { ConfigService } from 'src/config/config.service';

describe('EpisodesController', () => {
  let controller: EpisodesController;

  const mockEpisodesService = {
    findAll: async () => [{ id: "id" }],
    findOne: async (id: string) => ({ id: 'id' }),
    create: async (input: any) => ({ id: 'new-id' }),
    remove: async (id: string) => ({ id: 'id' }),
    findFeaturedEpisodes: async () => [{ id: 'featured-id' }],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // imports: [ConfigModule],
      controllers: [EpisodesController],
      // providers: [EpisodesService, ConfigService],
      providers: [{ provide: EpisodesService, useValue: mockEpisodesService }],
    }).compile();

    controller = module.get<EpisodesController>(EpisodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
