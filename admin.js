const { Kafka } = require("kafkajs");
console.log("init");
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

async function init() {
  const admin = kafka.admin();
  console.log("admin connecting");
  await admin.connect();
  console.log("admin connected");

  await admin.createTopics({
    topics: [
      {
        topic: "Rider-Updates",
        numPartitions: 2,
      },
      {
        topic: "Hotel-Updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("topic created successfully");
  await admin.disconnect();
};
init();
