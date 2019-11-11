<template>
  <li @click="onClick" class="list-group-item">
    <img :src="thumbnailUrl" alt="youtube-thumbnail" />
    <div class="media-body" v-html="video.snippet.title" />
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: {
      type: Object,
      required: true,
    }
  },
  methods: {
    onClick: function() {
      this.$emit('selectVideo', this.video)
    }
  },
  computed: {
    thumbnailUrl: function() {
      return this.video.snippet.thumbnails.default.url
    }
  }
}
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer;
  }

  li:hover {
    background-color: #eee;
  }
</style>