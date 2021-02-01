<template>
    <div class="main-panel">
        <Navbar></Navbar>
        <div class="home-container">
            <div class="home-wrapper">
                <div class="home-content">
                    <div class="home-contentarea">
                        <div class="homecontent-left">
                            <Showmore></Showmore>
                            <Recommendations></Recommendations>
                            <TopRanking></TopRanking>
                        </div>
                        <div class="homecontent-centered">
                            <EditProfile></EditProfile>
                            <hr class="home-divider">
                            <Showmoremini></Showmoremini>
                            <TrendJobs></TrendJobs>
                        </div>
                        <div class="homecontent-right">
                            <AllJobs></AllJobs>
                            <FindOut></FindOut>
                            <LiveIssues></LiveIssues>
                            <TopRankingUser></TopRankingUser>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter></DashboardFooter>
        </div>
    </div>
</template>
<script>
import Navbar from '../components/navbar.vue';
import Showmore from '../components/showmore.vue'
import Recommendations from '../components/recommendations.vue'
import TopRanking from '../components/topranking.vue'
import EditProfile from '../components/editProfile.vue'
import Showmoremini from '../components/showmoremini.vue'
import TrendJobs from '../components/trendJobs.vue'
import AllJobs from '../components/allLivejobs.vue'
import FindOut from '../components/findout.vue'
import LiveIssues from '../components/liveIssues.vue'
import TopRankingUser from '../components/topRankingUser.vue'
import DashboardFooter from '../components/footer.vue'
export default {
    components: {
        Navbar,
        Showmore,
        Recommendations,
        TopRanking,
        EditProfile,
        Showmoremini,
        TrendJobs,
        AllJobs,
        FindOut,
        LiveIssues,
        TopRankingUser,
        DashboardFooter
    },
}    
</script>
<style>
#appl .main-panel{
    min-height: 100vh;
}
.home-content{
    max-width: 1232px;
    margin: 0 auto 24px auto;
    display: grid;
    grid-gap: 54px;
    padding: 0;
}
.home-contentarea{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;
}
.homecontent-left{
    grid-gap: 26px;
    align-items: start;
    grid-auto-rows: -webkit-min-content;
    grid-auto-rows: min-content;
    display: none;
}
.homecontent-centered{
    padding: 16px 4px 0;
    overflow: hidden;
    display: grid;
    grid-gap: 16px;
    grid-auto-rows: -webkit-min-content;
    grid-auto-rows: min-content;
    grid-template-columns: 100%;
}
.homecontent-right{
    grid-gap: 26px;
    align-items: start;
    grid-auto-rows: -webkit-min-content;
    grid-auto-rows: min-content;
    display: none;
}
.hr{
    background-color: #f5f5f5 !important;
    border: none !important;
    display: block !important;
    height: 2px !important;
    margin: 1.5rem 0 !important;
}
.home-divider{
    display:none
}
@media screen and (min-width: 1008px){
    .home-wrapper {
        min-height: calc(100vh - 76px - 10px);
    }
    .home-contentarea{
        grid-template-columns: 279px 1fr 279px !important;
    }
    .homecontent-left{
        display:grid;
    }
    .homecontent-right{
        display:grid;
    }

}
@media screen and (min-width: 769px){
    .home-content{
        padding: 32px 16px;
        margin-top:73px;
    }
    .home-contentarea{
        grid-template-columns: 279px 1fr;
    }
    .homecontent-left{
        display:grid;
    }
    .homecontent-centered{
        padding: 0;
        overflow: auto;
        grid-gap: 24px;
    }
    .home-divider{
        display:block;
    }

}
</style>