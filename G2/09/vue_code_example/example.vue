<template>
  <section class="card">
    <header class="card__header">
      <h2>{{ title }}</h2>
      <small v-if="subtitle">{{ subtitle }}</small>
    </header>

    <main class="card__body">
      <p>
        Count:
        <strong>{{ count }}</strong>
      </p>

      <p class="hint">Double value (computed): {{ doubled }}</p>
      <div>
        <h3>Fetched Users:</h3>
          <li v-for="user of usersToPrint">{{user.username}}</li>
      </div>

      <div class="actions">
        <button @click="increment">+</button>
        <button @click="decrement" :disabled="count === 0">−</button>
        <button @click="reset">Reset</button>
      </div>

      <div class="async">
        <button @click="loadData" :disabled="loading">
          {{ loading ? "Loading..." : "Load async data" }}
        </button>

        <pre v-if="data">{{ data }}</pre>
      </div>
    </main>

    <footer class="card__footer">
      <button class="primary" @click="emitDone">Emit done</button>
    </footer>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { fetchFakeUsers } from "./src/api/api.js";

/* -------------------------
   Props
-------------------------- */
const props = defineProps<{
  title: string;
  subtitle?: string;
}>();

/* -------------------------
   Emits
-------------------------- */
const emit = defineEmits<{
  (e: "done", value: number): void;
}>();

/* -------------------------
   State
-------------------------- */
const count = ref(0);
const loading = ref(false);
const data = ref<string | null>(null);
const usersToPrint = ref([]);

/* -------------------------
   Computed
-------------------------- */
const doubled = computed(() => count.value * 2);

/* -------------------------
   Methods
-------------------------- */
function increment() {
  count.value++;
}

function decrement() {
  if (count.value > 0) {
    count.value--;
  }
}

function reset() {
  count.value = 0;
}

function emitDone() {
  emit("done", count.value);
}

async function loadData() {
  loading.value = true;
  data.value = null;

  // fake async request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  data.value = JSON.stringify(
    {
      timestamp: new Date().toISOString(),
      count: count.value,
    },
    null,
    2,
  );

  loading.value = false;
}

/* -------------------------
   Lifecycle
-------------------------- */
onMounted(async () => {
const users = await fetchFakeUsers();
usersToPrint.value = users;

 //kodot tuka sto se izvrsuva se izvr
});
</script>

<style scoped>
.card {
  max-width: 420px;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  font-family: system-ui, sans-serif;
}

.card__header h2 {
  margin: 0;
  font-size: 1.4rem;
}

.card__header small {
  color: #666;
}

.card__body {
  margin-top: 1rem;
}

.hint {
  color: #888;
  font-size: 0.9rem;
}

.actions {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

button {
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button.primary {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.async {
  margin-top: 1rem;
}

pre {
  margin-top: 0.5rem;
  background: #f8f8f8;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  overflow-x: auto;
}

.card__footer {
  margin-top: 1.5rem;
  text-align: right;
}
</style>
