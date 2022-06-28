import { Injectable } from '@nestjs/common';
import { AudioService } from 'src/audio/audio.service';

@Injectable()
export class SessionsService {
  constructor(private audioService: AudioService) {}
}
