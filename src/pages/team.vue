<template>
  <div>
    <Header page="team" image="4" />
    <div class="bg-dark-900 text-white py-10">
      <div class="max-w-9xl px-10 mx-auto py-10" v-for="category in categories" :key="category">
        <h2 class="font-bold text-5xl mb-3">{{ $t(`team.category.${category}`) }}</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          <TeamCard v-for="user in staff" :key="user.id" :id="user.id" :avatar="user.data.discord_user ? user.data.discord_user.avatar : 'undefined'" :username="user.data.discord_user ? user.data.discord_user.username : 'undefined'" :discriminator="user.data.discord_user ? user.data.discord_user.discriminator : '0000'" :status="user.data.discord_user ? user.data.discord_status : 'offline'" :country="user.country" />
        </div>
      </div>
    </div>
    <Footer image="6" :minimal="true" />
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

export default Vue.extend({
  data() {
    return {
      images: ['2', '1', '4', '5'],
      categories: [
        'creator',
        'domain',
        'dev',
        'translator',
        'image'
      ],
      staff: [
        {
          id: '228965621478588416',
          position: 'creator',
          country: 'germany',
          data: {}
        },
        {
          id: '274889352688173059',
          position: 'creator',
          country: 'germany',
          data: {}
        },
        {
          id: '94490510688792576',
          position: 'creator',
          country: 'germany',
          data: {}
        }
      ],
      socket: {},
    }
  },
  async mounted() {
    /// @ts-ignore
    this.socket = await this.$lanyard({
      userId: getIdsArray(this.staff),
      socket: true
    })

    /// @ts-ignore
    this.socket?.addEventListener('message', ({ data }: any) => {
      data = JSON.parse(data)
      if(data.t && data.t === "INIT_STATE") {
        Object.keys(data.d).forEach((key: any) => {
          this.staff[getIndexOfId(this.staff, key.toString())].data = data.d[key]
        })
      } else if(data.t && data.t === "PRESENCE_UPDATE") {
        this.staff[getIndexOfId(this.staff, data.d.discord_user.id)].data = data.d
      }
    });
  }
})
</script>