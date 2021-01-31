<template>
    <div class="contributeSource">
        <div class="throughts-content">
            <h1 class="throught-title">Contribute to open source</h1>
            <ul class="throughtslist">
               <li>Get paid to learn new technologies by working on open source issues</li>
               <li>The more contributions you make, the higher ranking your profile</li>
               <li>Working on open source projects is the best way to confirm your skills</li>
            </ul>
            <a class="upload file article " >Get Started with open source</a>
        </div>
        <div class="img-area">
            <img src="https://www.works-hub.com/images/profile/computer_guy2.png" class="right-img">

        </div>

    </div>
</template>
<style>
.contributeSource{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 4px;
    padding: 24px 20px;
    gap: 14px;
    font-size: 14px;
    line-height: 24px;
    position: relative;
    box-shadow: 0 4px 8px rgb(0 0 0 / 8%);
}
.throughts-content{
    flex: 1;  
}
.throught-title{
    color: #454E54;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.44;
    margin: 0 0 16px 0;
    padding: 0;
}
.throughtslist{
    list-style: disc;
    margin-left: 16px;
    font-size: 14px;
    line-height: 1.71;
    margin-bottom: 24px;
    font-weight: 500;
}
ul li::marker{
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
}
.upload{
    border-radius: 4px;
    height: 40px;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    background: #ef8374;
    border: 1px solid #ef8374;
    box-sizing: border-box;
    color: #fff;
    padding: 0 20px;
    min-width: 100px;
    font-family: Montserrat,serif;
    font-size: 12px;
    white-space: nowrap;
    font-weight: 600;
    letter-spacing: 0.02em;
    line-height: 16px; 
    cursor: pointer;
}
.upload:hover {
    background: #fceae8;
    color: #ef8374 !important;
    cursor: pointer;
}
.file{
    background: #fff;
    color: #ef8374 !important;
    font-weight: bold;
}
.article{
   width: 100%; 
}
.img-area{
    flex-basis: 68px;
    margin: 0 32px;
}
.right-img{
    object-fit: contain;
    height: 100%;
    width: 100%; 
}
</style>