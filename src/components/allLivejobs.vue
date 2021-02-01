<template>
    <section class="all-live">
        <h3 class="all-header">Recommended jobs</h3>
        <div class="all-jobshere"></div>
        <div class="allive-footer">
            <a class="all-job">All live jobs</a>
            <a class="all-job-bottom">
                Hiring?
                <span class="alljob-side">Post your job here</span>
            </a>

        </div>

    </section>
</template>
<style>
.all-live{
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
    padding: 23px 16px;  
}
.all-header{
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #454E54;
    margin: 0;
    margin-bottom: 31px;
    text-transform: capitalize; 
}
.all-jobshere{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 40px;
    margin-bottom: 50px;
}
.allive-footer{
    display: grid;
    row-gap: 24px;
}
.all-job{
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
    color: #ef8374 !important;
    background: #fff;
    border: 1px solid #ef8374;
    border-radius: 4px;
    padding: 14px;  
}
.all-job:hover{
    background: #fceae8;
    color: #ef8374 !important;
    cursor: pointer;
}
.all-job-bottom{
    display: flex;
    justify-content: center;
    font-family: Montserrat, serif;
    font-size: 14px;
    line-height: 135%;   
}
.alljob-side{
    font-weight: 600;
    padding-left: 4px;
}
</style>