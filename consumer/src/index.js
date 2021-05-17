const { Kafka } = require('kafkajs');

consumerStart();
const consumerStart = async () => {
  try {
    const kafka = new Kafka({
      clientId: 'kafka-odev',
      brokers: ['kafka:9092'],
    });
    const consumer = kafka.consumer({ groupId: 'cnsmr-group' });

    await consumer.connect();
    await consumer.subscribe({ topic: 'message', fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ message }) => {
        console.log(message.value.toString());
      },
    });
  } catch (error) {
    console.log('something went wrong');
  }
};
