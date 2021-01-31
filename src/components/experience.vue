<template>
    <div class="experience">
        <div class="experience-container">
            <div class="experience-title">Experience and interests</div>
            <p class="experience-info">This is a key part of your profile. List out your skills and experience, and give companies an insight into what else interests you in a role.</p>
            <div class="experience-info-container">
                <div class="experience-list">1</div>
                <div class="experience-minititle">Experience</div>
                <div class="experience-detail">
                    Add up to 6 skills that you have the most experience with. What do you work with the most? What are you an expert in? Add your years of experience using the slider.
                </div>
                <div class="experience-form">
                    <div class="tags-container">
                        <div class="field tags-text-input">
                            <div class="control">
                                <div class="text-field-control">
                                    <input placeholder="Search and add up to 6 technologies" type="text" class="input" value="">
                                </div>
                            </div>
                        </div>
                        <div class="tags-selection tag-area">
                            <svg id="roll-down" viewBox="0 0 24 24" class="tags-roll icon">
                                <path d="M8.12 8.54L12 12.42l3.88-3.88a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41L12 15.25 6.71 10a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41-.05z"></path>
                            </svg>
                            <div>
                                <ul class="tags">
                                    <li class="tag tag--type-tech">Scala</li>
                                    <li class="tag tag--type-tech">Clojure</li>
                                    <li class="tag tag--type-tech">Haskell</li>
                                    <li class="tag tag--type-tech">Erlang</li>
                                    <li class="tag tag--type-tech">Ocaml</li>
                                    <li class="tag tag--type-tech">ClojureScript</li>
                                    <li class="tag tag--type-tech">elixir</li>
                                    <li class="tag tag--type-tech">elm</li>
                                    <li class="tag tag--type-tech">rust</li>
                                    <li class="tag tag--type-tech">F#</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="experience-info-container">
                <div class="experience-list">2</div>
                <div class="experience-minititle">Interests</div>
                <div class="experience-detail">
                   Tell potential employers about your other interests. What is it you’re looking for in your next role? What kinds of tech would you like to work with? What skills are you currently learning? Search and add them here.
                </div>
                <div class="experience-form">
                    <div class="tags-container">
                        <div class="field tags-text-input">
                            <div class="control">
                                <div class="text-field-control">
                                    <input placeholder="Search and add your interests" type="text" class="input" value="">
                                </div>
                            </div>
                        </div>
                        <div class="tags-selection tag-area">
                            <svg id="roll-down" viewBox="0 0 24 24" class="tags-roll icon">
                                <path d="M8.12 8.54L12 12.42l3.88-3.88a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41L12 15.25 6.71 10a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41-.05z"></path>
                            </svg>
                            <div>
                                <ul class="tags">
                                    <li class="tag tag--type-tech">Scala</li>
                                    <li class="tag tag--type-tech">Clojure</li>
                                    <li class="tag tag--type-tech">Haskell</li>
                                    <li class="tag tag--type-tech">Erlang</li>
                                    <li class="tag tag--type-tech">Ocaml</li>
                                    <li class="tag tag--type-tech">ClojureScript</li>
                                    <li class="tag tag--type-tech">elixir</li>
                                    <li class="tag tag--type-tech">elm</li>
                                    <li class="tag tag--type-tech">rust</li>
                                    <li class="tag tag--type-tech">F#</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.experience{
    border: 0;
}
.experience-container{
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
.experience-title{
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.02em;
}
.experience-info{
    line-height: 22px;
    width: 70%;  
}
.experience-info-container{
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 24px 1fr;
    grid-template-rows: repeat(2, 24px auto auto auto);
}
.experience-list{
    min-width: 24px;
    width: 24px;
    height: 24px;
    background-color: #ef8374;
    color: #fff;
    border-radius: 24px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    grid-column-start: 1;  
}
.experience-minititle{
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: #454E54;  
}
.experience-detail{
    grid-column-start: 2;  
    font-size: 14px;
    line-height: 22px;
}
.experience-form{
    grid-column-start: 2;
}
.tags-container{
    position: relative;
    border:solid 1px #6E7F89
}
.tags-container .field {
    margin: 0;
}
.experience-form .field {
    margin-bottom: 0.75rem;
    color: #6E7F89;
    padding: 12px;
    padding-top: 0px;
}
.field:not(:last-child) {
    margin-bottom: 0.75rem;
}
.control {
    box-sizing: border-box;
    clear: both;
    font-size: 1rem;
    position: relative;
    text-align: left;
}
.text-field-control{
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    background: white;
}
.tags-container .field input {
    border-bottom: 0;
    width: 100%;
}
.experience-form .text-field-control input, .wh-formx .text-field-control textarea, .wh-formx .text-field-control select {
    color: #6E7F89;
    border-bottom: solid 1px #6E7F89;
}
.experience-form .input {
    height: 44px;
}
.experience-form .input, .wh-formx .textarea {
    padding: 12px;
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    outline: none;
    border: none;
}
.tags-selection{
    color: #6E7F89;
    border-top: 0;
    background-color: white;
    position: relative;
    padding: 1px;
}
.tags-roll{
    width: 28px;
    height: 28px;
    fill: #6E7F89;
    float: right;
    cursor: pointer;
    transition: transform 0.3s ease;
    margin-top: 10px;    
}
.tags-rolls{
    transform: rotate(180deg);
}
.tags {
    padding: 10px 0px 5px 10px;
    overflow: hidden;
}
ul{
    list-style: none;
}
.tags li {
    cursor: pointer;
    opacity: 0.4;
    transition: opacity 200ms linear;
}
.tags li, .tag {
    margin-right: 3px;
    margin-bottom: 3px;
}
.tags li, .tag {
    font-size: 11px;
    line-height: 14px;
    padding: 8px;
    font-weight: 600;
    display: inline-flex;
    border-radius: 2px;
    text-transform: uppercase;
    height: 30px;
}
.tag {
    position: relative;
    max-width: 240px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    background-color: #ffe9e7;
    color: #ef8374;
}
.tags ::before{
    content:'';
    border:none;
}
</style>