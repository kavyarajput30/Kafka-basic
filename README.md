docker run -p 2181:2181 zookeeper

 docker run -d --name kafka -p 9092:9092 
 -e KAFKA_ZOOKEEPER_CONNECT=host.docker.internal:2181 
 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 
 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka:7.2.1
d239642b7090cdad46fb4373e1263b9156d85eed8556b55bde291e9a3cbc0373


