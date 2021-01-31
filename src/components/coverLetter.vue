<template>
<div class="cover-letter cover">
    <div>
        <h1 class="cover-title">Add default cover letter</h1>
        <p class="cover-info">
            In your cover letter you should sell yourself and your professional
            achievements in a clear and concise way. Don’t forget to
            double-check the spelling and grammar.
        </p>
        <label class="upload upload-file file">
            <input type="file" name="avatar" class="visually-hidden">
            <span>Upload cover letter</span>
        </label>
    </div>
    <div class="userimg">
        <img src="https://www.works-hub.com/images/profile/people_group.png" class="girlimg">
    </div>


</div>
</template>
<style>
.cover-letter{
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
.cover{
    display: flex;
    justify-content: space-between; 
}
.cover-title{
    color: #454E54;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.44;
    margin: 0 0 16px 0;
    padding: 0;
}
.cover-info{
    font-size: 14px;
    line-height: 1.71;
    margin-bottom: 24px;
    font-weight: 500;
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
    color: #ef8374;
    cursor: pointer;
}
.upload-file{
    padding: 0 16px;
    height: 34px;
}
.file{
    background: #fff;
    color: #ef8374;
    font-weight: bold;
}
.visually-hidden{
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px; 
}
.userimg{
    align-self: start;
    flex-basis: 236px;
}
.girlimg{
    object-fit: contain;
    height: 100%;
    width: 100%;
}

@media screen and (min-width: 1088px){
    .userimg{
        margin: 0 40px 0 50px;
        align-self: center;
    }
}

</style>