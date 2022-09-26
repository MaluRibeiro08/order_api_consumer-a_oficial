// This class is responsable for starting the server (controller + rabbitmq server). Calls a method created in another file
import { startConsumerServer } from './config/server'

void (async () => {
  void startConsumerServer()
})()
