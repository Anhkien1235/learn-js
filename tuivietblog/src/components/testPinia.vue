<template>
  <div>
    <h2>{{ myStore.name }}</h2>
  </div>
  <div class="list">
<div v-for="list in myStore.expensive">
<p>
  {{list.title}}
</p>
</div>
  </div>
</template>

<script lang="ts">
import {useMyStore} from "../stores";


export default {
  setup() {
const myStore = useMyStore();
    return{ myStore}
  },
}


</script>