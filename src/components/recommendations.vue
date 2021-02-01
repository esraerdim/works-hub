<template>
    <section class="recommendations">
        <img class="recommendation-img" src="https://www.works-hub.com/images/hiw/card.svg">
        <h3 class="recommendatiion-title">Want to improve your feed recommendations?</h3>
        <a class="recommendation-link">Improve Recommendations</a>

    </section>
</template>
<style>
.recommendations{
    text-align: center;
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
    padding: 23px 16px;
}
.recommendation-img{
    margin-bottom: 12px;
    width: 89%;
}
.recommendatiion-title{
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 16px;
    color: #454E54;  
}
.recommendation-link{
    border: 1px solid transparent;
    color: #fff !important;
    background: #454E54 !important; 
    text-transform: capitalize; 
    font-family: Montserrat, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.2px;
    border-radius: 4px;
    padding: 14px;
    width: 100%;
}
.recommendation-link:hover{
    background: #728088 !important;
    color: #fff !important; 
}
</style>