<script>
import Vue from 'vue';
import VueItextarea from '@/vue-itextarea.vue';

export default Vue.extend({
    name: 'ServeDev',

    components: {
        VueItextarea,
    },
});
</script>

<template>
    <div id="app">
        <vue-itextarea/>
    </div>
</template>
