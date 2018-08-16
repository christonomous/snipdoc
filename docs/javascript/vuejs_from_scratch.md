# This documentation is about developement with VueJS. 

## Outsourcing

#### main.vue
```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import outsourced from "./outsourced.js";
export default outsourced;
</script>
```
#### outsourced.js
```
const outsourced = {
  name: "hello-world",
  data () {
    return {
      msg: "lol"
    }
  }
}

export default outsourced
```
