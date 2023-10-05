<template>
  <div class="alert alert-success" role="alert">
    {{message}}
   </div>
</template>

<script>
export default {
  name: 'Erro',
  props: ['message']
}
</script>