import { Injectable } from '@nestjs/common';
import { ProucerService } from './kafka/Producer.service';

@Injectable()
export class AppService {
 
  constructor(private readonly producerService :ProucerService){}
  async  getHello() {
  
    await  this.producerService.produce({
      topic:'test',
      messages:[{
        value:'Hello world'
      }]
    })

    return 'Hello World!';
  }
}
 