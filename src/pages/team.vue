<template>
  <div>
    <Header page="team" image="4" />
    <div class="bg-dark-900 text-white py-10">
      <div class="max-w-9xl px-10 mx-auto py-10" v-for="category in categories" :key="category">
        <h2 class="font-bold text-5xl mb-3">{{ $t(`team.category.${category}`) }}</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          <p class="text-lg opacity-80" v-if="getStaffByCategory(category).length < 1">{{ $t("team.noMembers") }}</p>
          <TeamCard v-for="user in getStaffByCategory(category)" :key="user.id" :id="user.id" :avatar="user.data.discord_user ? user.data.discord_user.avatar : 'undefined'" :username="user.data.discord_user ? user.data.discord_user.username : 'undefined'" :discriminator="user.data.discord_user ? user.data.discord_user.discriminator : '0000'" :status="user.data.discord_user ? user.data.discord_status : 'offline'" :country="user.country" />
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

function getStaffByCategory(staff: any, category: string) {
  return staff.filter((user: any) => {
    return user.categories.includes(category);
  });
}

export default Vue.extend({
  head() {
    return {
      title: 'Team - Mai Sakurajima',
    }
  },
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
          categories: ['creator', 'dev', 'translator', 'image'],
          country: 'germany',
          data: {}
        },
        {
          id: '94490510688792576',
          categories: ['domain'],
          country: 'uk',
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
  },
  methods: {
    getStaffByCategory(category: string) {
      return getStaffByCategory(this.staff, category)
    }
  }
})
</script>