<template>
    <div class="row g-0">
      <div class="col-lg-2 d-none d-lg-block">
        <Sidebar />
      </div>
      <div class="col-lg-10">
        <router-view/>
      </div>
    </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>
