<template>
    <div>
        <Header page="quotes" image="5" />
        <Footer image="4" :minimal="true" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

function getIdsArray(ids: any) {
  return ids.map((id: any) => id.id);
}

function getIndexOfId(ids: any, id: any) {
  return ids.findIndex((i: any) => i.id === id);
}

function getStaffByCategory(staff: any, category: string) {
  return staff.filter((user: any) => {
    return user.categories.includes(category);
  });
}

export default Vue.extend({
  head() {
    return {
      title: 'Quotes - Mai Sakurajima',
    }
  }
})
</script>