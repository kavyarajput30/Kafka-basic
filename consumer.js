const { Kafka } = require("kafkajs");
console.log("init");
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

async function init() {
  const consumer = kafka.consumer({ groupId: "my-group" });
  console.log("connecting consumerr");
  await consumer.connect();
  console.log("consumer connecteddd");
  await consumer.subscribe({
    topics: ["Hotel-Updates", "Rider-Updates"],
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log(topic, partition);
       console.log(message.value.toString());
    },
  });
}
init();
