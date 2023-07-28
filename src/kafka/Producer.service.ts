import { Injectable, OnApplicationShutdown, OnModuleInit } from "@nestjs/common";
import { Kafka, Producer, ProducerRecord } from "kafkajs";

@Injectable()
export class ProucerService implements OnModuleInit, OnApplicationShutdown {
    onApplicationShutdown(signal?: string) {
        throw new Error("Method not implemented.");
    }
    private readonly kafka = new Kafka({
        brokers: ['localhost:9092']
    });

    private readonly producer: Producer = this.kafka.producer();


    async onModuleInit() {
        await this.producer.connect();
    }

    async produce(record: ProducerRecord) {
        this.producer.send(record);

    }

    async OnApplicationShutdown() {
        await this.producer.disconnect();
    }



}