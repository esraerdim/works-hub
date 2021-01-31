<template>
    <div class="yourself">
        <div class="yourself-wrapper">
            <div>
                <h1 class="yourself-title">Get yourself out there</h1>
                <p class="yourself-paragraph">
                    Submit your resume. It will be given to companies when you apply for a role.
                    You can update it anytime from your profile.
                </p>
                <div class="buttons">
                    <label class="upload upload-file file">
                        <input type="file" name="avatar" class="visually-hidden">
                        <span>Upload resume</span>
                    </label>
                    <p class="uploador">OR</p>
                    <div class="link-content">
                        <input type="text" class="enter-link" placeholder="Enter link to resume">
                        <button class="upload file" data-test="save-cv-link">Save</button>
                    </div>
                </div>
            </div>
            <div class="cv-img">
                <img src="https://www.works-hub.com/images/profile/document2.png" class="cv">
            </div>
        </div>
    </div>
</template>
<style>
.yourself{
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
.yourself-wrapper{
    display: flex;  
}
.yourself-title{
    color: #454E54;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.44;
    margin: 0 0 16px 0;
    padding: 0;   
}
.yourself-paragraph{
    font-size: 14px;
    line-height: 1.71;
    margin-bottom: 24px;
    font-weight: 500; 
}
.buttons{
    display: flex;
    flex-direction: column;
    align-items: start; 
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
.uploador{
    margin: 18px 0 18px 8px;
    text-align: left;
    color: #728088;
    width: 70px;
    font-size: 11px;
    line-height: 1.09;
    letter-spacing: 0.5px;
    font-weight: 700;
}
.link-content{
    display: flex;
    align-items: center;
    flex: 1;
}
.enter-link{
    flex: 1;
    padding: 0 16px;
    height: 34px;
    border: solid 1px #e8e8e8;
    margin-right: 12px;
}
.cv-img{
    flex-basis: 150px;
    align-self: start;
    margin-left: 6px;
}
.cv{
    object-fit: contain;
    height: 100%;
    width: 100%;
}
@media screen and (min-width: 1088px){
    .buttons {
        flex-direction: row;
        align-items: center;
    }
    .uploador{
        text-align: center;
        margin:0;
    }
    .cv-img{
        margin:0 30px;
    }
}
@media screen and (min-width: 769px){
    .uploads {
        font-size: 13px;
        padding: 0 32px;

}    }
</style>