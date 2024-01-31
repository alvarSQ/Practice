<template>
    <div class="wrapper">
        <div v-if="item">
            <img :src="item.img" :alt="item.descr">
            <h1 class="title">{{ item.title }}</h1>
            <p>{{ item.descr }}</p>
            <Stat :item="item" />
            <div>
                <router-link to="/Carousel" class="btn btnPrimary">Back to carousel</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import items from '@/seeders/items';
import Stat from '@/components/UI/Stat'

export default {
    components: { Stat },
    data() {
        return {
           item: null 
        }
    },
    created() {
        const alias = this.$route.params.itemAlias
        const item = items.find(el => el.alias === alias)

        this.item = item
    },
}
</script>

<style scoped lang="scss">
.card-stats {
    margin: 30px 0;
    border-radius: 14px;
}
</style>