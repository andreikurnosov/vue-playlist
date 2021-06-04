<template>
    <div class="user-playlists">
        <h2>My Playlists</h2>
        <div v-if="playlists">
            <list-view :playlists="playlists" />
        </div>
        <router-link :to="{name: 'CreatePlaylist'}" class="btn">Create new Playlist</router-link>
    </div>
</template>
<script>
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'
import ListView from '@/components/ListView.vue'
export default {
    name: 'UserPlaylists',

    components: { ListView },

    setup() {
        const { user } = getUser()
        const { documents: playlists } = getCollection('playlists', ['userId', '==', user.value.uid])


        return {
            playlists
        };
    },
};
</script>
<style lang="css" scoped>
</style>