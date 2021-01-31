<template>
    <div class="main-panel">
        <navbar></navbar>
        <div class="page-container">
            <div class="main-wrapper">
                <div class="main-content">
                    <div class="left">
                        <profileleft-card></profileleft-card>
                    </div>
                    <div class="right">
                        <published-card></published-card>
                        <activityCard></activityCard>
                        <get-yourself></get-yourself>
                        <cover-letter></cover-letter>
                        <prefences></prefences>
                        <experience></experience>
                        <opensource></opensource>
                        <sharethoughts></sharethoughts>
                        <contribute-opensource></contribute-opensource>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>
<script>
import Navbar from '../components/navbar.vue';
import profileleftCard from '@/components/profileleftCard'
import publishedCard from '@/components/publishedCard'
import activityCard from '@/components/activityCard'
import getYourself from '@/components/getYourself'
import coverLetter from '@/components/coverLetter'
import prefences from '@/components/prefences'
import experience from '@/components/experience'
import opensource from '@/components/opensource'
import sharethoughts from '@/components/sharethoughts'
import contributeOpensource from '@/components/contributeOpensource'

export default {
    components: {
        Navbar,
        profileleftCard,
        publishedCard,
        activityCard,
        getYourself,
        coverLetter,
        prefences,
        experience,
        opensource,
        sharethoughts,
        contributeOpensource
    },

};
</script>
<style>
.main-panel{
    min-height: 100vh;
}
.main-content{
    max-width: 1086px;
    margin: 0 auto;
    display: grid;
    align-items: start;
    gap: 16px;
    padding: 8px;    
}
.left{
    gap: 24px;  
}
.right{
    display: grid;
    grid-gap: 18px; 
    margin-top:73px;
}
@media screen and (min-width: 1008px){
    .main-wrapper{
      min-height: calc(100vh - 76px - 10px);  
    }

}
@media screen and (min-width: 769px){
    .main-content{
        grid-template-columns: 256px 1fr;
        padding: 24px;  
    }
    .left{
        position: sticky;
        top: 96px;
    }

}
@media screen and (max-width: 769px){
    .left{
        margin-top: 50px;
    }

}

</style>