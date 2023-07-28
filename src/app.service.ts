import { Injectable } from '@nestjs/common';
import { ProucerService } from './kafka/Producer.service';

@Injectable()
export class AppService {
 
  constructor(private readonly producerService :ProucerService){}
  async  getHello() {
  
    // Sending message by creating topic with message 
    await  this.producerService.produce({
      topic:'test',
      messages:[{
        value:'Hello world'
      }]
    })

    return 'Hello World!';
  }
}
 