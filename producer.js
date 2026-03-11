const { Kafka } = require("kafkajs");
console.log("init");
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

async function init() {
  const producer = kafka.producer();
  console.log("connecting producer");
  await producer.connect();
  console.log("producer connecteddd");
  await producer.send({
    topic: "Rider-Updates",
    messages: [
      { key: "location_updates", value: JSON.stringify({name:"tony stark", location: "Delhi"}) },
       { key: "location_updates", value: JSON.stringify({name:"pony stark", location: "Mumbai"}) },
    ],
  });
  producer.disconnect();
}
init();
