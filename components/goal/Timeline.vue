<template>
  <base-timeline :steps="steps"></base-timeline>
</template>

<script setup lang="ts">
const steps = ref([
      {
        step: 1,
        title: 'First Macintosh computer',
        description: 'lorem ipusm is the test text for this test is now test is important',
      },
      {
        step: 2,
        title: 'Second Macintosh computer',
        description: 'lorem ipusm is the test text for this test is now test is important',
      },
      {
        step: 3,
        title: 'Third Macintosh computer',
        description: 'lorem ipusm is the test text for this test is now test is important',
      },
      {
        step: 4,
        title: 'Fourth Macintosh computer',
        description: 'lorem ipusm is the test text for this test is now test is important',
      },
    ])
</script>