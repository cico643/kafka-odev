## Nodejs Kafka

Apache Kafka ile basit producer/consumer yapısının gerçekleştirildiği NodeJs uygulaması.

### Build ve Run adımları

```sh
git clone https://github.com/cico643/kafka-odev.git
```

```sh
cd kafka-odev-master
```

```sh
docker-compose up --build
```

### Örnek curl requesti

```sh
curl -X POST -H "Content-Type: application/json" -d '{"msg":"MESAJINIZI_BURAYA_YAZINIZ"}' http://localhost:3000/messages
```

### İyileştirme Önerileri

Bütün bu projeyi typescript ile yazıp, Producer/Consumer base classları oluşturarak daha generic ve reusable hale getirmek.
