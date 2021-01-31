<template>
    <div class="activity">
        <div class="activity-title">Activity &amp; Stats</div>
        <div class="activity-content">
            <div class=" work mini-activity list-first">
                <div class="mini-title">WorksHub Rating</div>
                <div class="mini-content">New user</div>
                <img class="activity-img" src="https://www.works-hub.com/images/profile/new_user.svg">
            </div>
            <div class=" work mini-activity list-first">
                <div class="mini-title">Member Science</div>
                <div class="mini-content">Jan 2021</div>
                <img class="activity-img" src="https://www.works-hub.com/images/profile/member_since.svg">
            </div>
            <div class=" work mini-activity">
                <div class="mini-title">Author Of</div>
                <div class="mini-content">
                    <a class="profile-link" href="">Write an article</a>
                </div>
                <img class="activity-img" src="https://www.works-hub.com/images/profile/articles.svg">
            </div>
            <div class=" work mini-activity">
                <div class="mini-title">Open Source Issues</div>
                <div class="mini-content">
                    <a class="profile-link" href="">View Open Source Issues</a>
                </div>
                <img class="activity-img" src="https://www.works-hub.com/images/profile/contributions.svg">
            </div>
        </div>
    </div>
</template>
<style>
.activity{
    background-color: #fff;
    border-radius: 4px;
    padding: 24px 20px;
    display: grid;
    gap: 14px;
    font-size: 14px;
    line-height: 24px;
    position: relative;
    box-shadow: 0 4px 8px rgb(0 0 0 / 8%);
}
.activity-title{
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.02em;
}
.activity-content{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    -moz-column-gap: 48px;
        column-gap: 26px;
    overflow: hidden;
}
.list-first{
   border-bottom:1px solid #fceae8
}
.activity-hidden{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    row-gap: 40px;
    -moz-column-gap: 48px;
    column-gap: 48px;
    overflow: hidden;
}
.mini-activity{
    padding: 12px 0 16px 0;
    position: relative;
}
.work::before {
    content: '';
    display: block;
    width: 1px;
    height: calc(100% + 40px);
    position: absolute;
    top: -20px;
    left: -24px;
    background: #fceae8;
}
.mini-title{
    text-transform: uppercase;
    color: #728088;
    font-size: 11px;
    line-height: 12px;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
}
.mini-content{
    color: #454E54;
    font-size: 18px;
    line-height: 18px;
    margin-right: 34px;
    font-weight: 600; 
}
.activity-img{
    right: 12px;
}
.activity-img::after {
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: -20px;
    background: #fceae8;
    width: calc(100% + 48px);
    left: -24px;
}
.profile-link{
    border-bottom: 1px solid #E8E8E8;
    word-break: break-word;
    line-height: 1.3; 
}
@media screen and (min-width: 1088px){
    .activity-img {
        height: 42px;
        position: absolute;
        bottom: 12px;
    }
}
@media screen and (max-width: 768px){
    .activity-img::after {
        width: calc(100% + 24px);
        left: -24px;
    }
    .activity-img {
        height: 0px  !important;
    }
}
@media screen and (max-width:1100px){
    .activity-img{
        height: 42px;
        position: absolute;
        bottom: 12px;
    }
}


</style>