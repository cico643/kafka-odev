const express = require('express');
const { Kafka } = require('kafkajs');
const { router } = require('./routes/messages/');

const app = express();

app.use(express.json());

const producerStart = async () => {
  try {
    const kafka = new Kafka({
      clientId: 'kafka-odev',
      brokers: ['kafka: 9092'],
    });

    const producer = kafka.producer();
    await producer.connect();

    app.use(function (req, res, next) {
      req.producer = producer;
      next();
    });
    app.use(router);
  } catch (error) {
    console.log('something went wrong');
  }
};
producerStart();
app.listen(3000);
