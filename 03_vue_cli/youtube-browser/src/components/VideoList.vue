<template>
  <ul class="list-group">
    <VideoListItem v-for="video in videos" :key="video.id.videoId" :video="video"
    @selectVideo="onSelectVideo" />
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',
  props: {
    videos: {
      type: Array,
      required: true,
    },
  },
  components: {
    VideoListItem,
  },
  methods: {
    onSelectVideo: function(video) {
      this.$emit('selectVideo', video)
    }
  }
}
</script>

<style>

</style>