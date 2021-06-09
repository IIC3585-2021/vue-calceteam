<template>
  <Question></Question>
  <InfoBar />
</template>

<script>
import InfoBar from '@/components/InfoBar.vue';
import Question from '@/components/Question.vue';

export default {
  name: 'Game',
  components: {
    InfoBar,
    Question,
  },
};
</script>
