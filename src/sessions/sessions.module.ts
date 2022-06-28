import { Module } from '@nestjs/common';
import { AudioService } from 'src/audio/audio.service';
import { SessionsService } from './sessions.service';

@Module({
  providers: [SessionsService, AudioService],
})
export class SessionsModule {}
