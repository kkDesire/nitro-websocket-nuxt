<script lang="ts" setup>
// In prod: check if secure, then use wss://
const { status, data, send, open, close } = useWebSocket(
  `ws://${location.host}/api/websocket`
);

const history = ref<string[]>([]);

watch(data, (newValue: any) => {
  history.value.push(`server: ${newValue}`);
  console.log(history.value);
});
const message = ref('');
function sendData() {
  history.value.push(`client: ${message.value}`);
  send(message.value);
  message.value = "";
}
</script>

<template>
  <div>
    <h1>WebSocket - let's go!</h1>
    <form @submit.prevent="sendData">
      <input type="text" v-model="message" />
      <button type="submit">Send</button>
    </form>
    <div>
      <p v-for="entry in history" :key="entry">{{ entry }}</p>
    </div>
  </div>
</template>
