import { Module } from '@nestjs/common';
import { ProucerService } from './Producer.service';
import { ConsumerService } from './Consumer.service';

@Module({
    providers:[ProucerService, ConsumerService],
    exports:[ProucerService, ConsumerService]
})
export class KafkaModule {}
