<template>
        <div>
            <p>{{goal.club}}</p>
            <p>{{goal.player}}</p>
        </div>
</template>

<script>
  export default {
    name: 'Goals',
    props: ['goal']
  }
</script>

<style scoped>


img {
  max-width: 200px;
}
</style>