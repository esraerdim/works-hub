<template>
    <div>
        <section class="open-source">
            <h3 class="opensource-header">Live Open Source Issues</h3>
            <div class="opensource-body">
                <section class="source-item">
                    <a class="sourceitem-header">
                        <img srcset="https://workshub.imgix.net/05543da476c9c648da95aa242b8a8506?fit=crop&amp;crop=entropy&amp;auto=format&amp;w=32&amp;h=32 1x, https://workshub.imgix.net/05543da476c9c648da95aa242b8a8506?fit=crop&amp;crop=entropy&amp;auto=format&amp;w=32&amp;h=32&amp;q=40&amp;dpr=2 2x, https://workshub.imgix.net/05543da476c9c648da95aa242b8a8506?fit=crop&amp;crop=entropy&amp;auto=format&amp;w=32&amp;h=32&amp;q=20&amp;dpr=3 3x" src="https://workshub.imgix.net/05543da476c9c648da95aa242b8a8506?fit=crop&amp;crop=entropy&amp;auto=format" alt="Missing alt" class="sourceitem-img">
                        <div class="sourceitem-title">
                            <span class="source-company">WorksHub</span>
                            <span class="source-level">Level: Intermediate</span>
                        </div>
                    </a>
                    <a class="source-strong">Embed PDF into company's application view of candidate</a>
                    <ul class="source-list">
                        <div class="source-tag"><span>Clojure</span></div>
                        <div class="source-tag sourcetag2"><span>$150</span></div>
                    </ul>
                </section>
                <section class="source-item">
                    <a class="sourceitem-header">
                        <img srcset="https://workshub.imgix.net/452c691ba4138cc4fdb17a5adff54e18?fit=crop&amp;crop=entropy&amp;auto=format&amp;w=32&amp;h=32 1x, https://workshub.imgix.net/452c691ba4138cc4fdb17a5adff54e18?fit=crop&amp;crop=entropy&amp;auto=format&amp;w=32&amp;h=32&amp;q=40&amp;dpr=2 2x, https://workshub.imgix.net/452c691ba4138cc4fdb17a5adff54e18?fit=crop&amp;crop=entropy&amp;auto=format&amp;w=32&amp;h=32&amp;q=20&amp;dpr=3 3x" src="https://workshub.imgix.net/452c691ba4138cc4fdb17a5adff54e18?fit=crop&amp;crop=entropy&amp;auto=format" alt="Missing alt" class="sourceitem-img">
                        <div class="sourceitem-title">
                            <span class="source-company">Klipse</span>
                            <span class="source-level">Level: Intermediate</span>
                        </div>
                    </a>
                    <a class="source-strong">How To Build CLJS Cache Files ?</a>
                    <ul class="source-list">
                        <div class="source-tag"><span>Clojure</span></div>
                    </ul>
                </section>
                <section class="source-item">
                    <a class="sourceitem-header">
                        <img srcset="https://workshub.imgix.net/452c691ba4138cc4fdb17a5adff54e18?fit=crop&amp;crop=entropy&amp;auto=format&amp;w=32&amp;h=32 1x, https://workshub.imgix.net/452c691ba4138cc4fdb17a5adff54e18?fit=crop&amp;crop=entropy&amp;auto=format&amp;w=32&amp;h=32&amp;q=40&amp;dpr=2 2x, https://workshub.imgix.net/452c691ba4138cc4fdb17a5adff54e18?fit=crop&amp;crop=entropy&amp;auto=format&amp;w=32&amp;h=32&amp;q=20&amp;dpr=3 3x" src="https://workshub.imgix.net/452c691ba4138cc4fdb17a5adff54e18?fit=crop&amp;crop=entropy&amp;auto=format" alt="Missing alt" class="sourceitem-img">
                        <div class="sourceitem-title">
                            <span class="source-company">klipse</span>
                            <span class="source-level">Level: Intermediate</span>
                        </div>
                    </a>
                    <a class="source-strong">when hosting Klipse locally, fonts are loaded from the internet</a>
                    <ul class="source-list">
                        <div class="source-tag"><span>Clojure</span></div>
                    </ul>
                </section>
            </div>
            <div class="opensource-footer">
                <a class="bottom-link" >Open Source Issues</a>
                <a class="opensource-call">
                    Post your
                    <span class="open-strong">open source issue here</span>

                </a>

            </div>
        </section>
    </div>
</template>
<style>
.open-source{
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
    padding: 23px 16px;
}
.opensource-header{
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #454E54;
    margin: 0;
    margin-bottom: 31px;
    text-transform: capitalize; 
}
.opensource-body{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 40px;
    margin-bottom: 50px;
}
.source-item{
    display: grid;
    row-gap: 16px
}
.sourceitem-header{
    display: flex;
    align-items: center;
}
.sourceitem-header:hover{
    color:#ef8374 !important;
}
.sourceitem-img{
    margin-right: 16px;
    min-width: 32px;
    min-height: 32px;
    height: 32px;
    width: 32px;
    border-radius: 2px;
    -o-object-fit: cover;
    object-fit: cover;
}
.sourceitem-title{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 5px;
}
.source-company{
    font-family: Montserrat, serif;
    font-size: 13px;
    line-height: 1.2;
    color: #454E54;
}
.source-level{
    color: #728088;
    font-family: Montserrat, serif;
    font-size: 13px;
    line-height: 1.2;
}
.source-strong{
    font-family: Montserrat, serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
    color: #454E54; 
}
.source-list{
    list-style: none; 
}
.source-tag{
    position: relative;
    max-width: 240px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    background-color: #ffe9e7;
    color: #ef8374; 
    font-size: 11px;
    line-height: 14px;
    padding: 8px;
    font-weight: 600;
    display: inline-flex;
    border-radius: 2px;
    text-transform: uppercase;
    height: 30px;
    margin-right: 3px;
    margin-bottom: 3px;
}
.sourcetag2{
    background-color: #e7f0f2;
    color: #5197B4;
}
.opensource-footer{
    row-gap: 24px;
    display: grid;
}
.bottom-link{
    border: 1px solid #ef8374;
    background: transparent;
    color: #ef8374 !important;
    padding: 0 20px;
    border-radius: 4px;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    color: #fff;
    padding: 0 20px;
    font-family: Montserrat,serif;
    font-size: 12px;
    white-space: nowrap;
    font-weight: 600;
    letter-spacing: 0.02em;
    line-height: 135%;
    text-transform: capitalize;
}
.bottom-link:hover{
    background: #fceae8;
    color: #ef8374 !important;
    cursor: pointer;
}
.opensource-call{
    display: flex;
    justify-content: center;
    font-family: Montserrat, serif;
    font-size: 14px;
    line-height: 135%;
}
.opensource-call:hover{
    color: #ef8374 !important;
}
.open-strong{
    font-weight: 600;
    padding-left: 4px; 
}
</style>