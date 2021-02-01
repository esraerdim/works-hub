<template>
    <div class="edit-profiles">
        <div class="edit-header">
            <img class="edit-avatar" src="https://avatars.githubusercontent.com/u/42889707?u=74e965d48af1d2264a1cd84d3784aa140bc18383&amp;v=4">
            <div class="edit-user">
                <span class="edit-name">Welcome, Esra Erdim!</span>
                <a class="edit-userinfo">
                    <span>Edit profile</span>
                    <svg id="pen" viewBox="0 0 14 13" fill="currentColor" class="icon edit-icon">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2 0C10.6205 0 10.0648 0.223576 9.65504 0.621545L0.90504 9.1199C0.815329 9.20703 0.751686 9.31621 0.720915 9.43575L0.0209151 12.1552C-0.0387205 12.3869 0.0311738 12.632 0.20504 12.8009C0.378906 12.9697 0.631247 13.0376 0.86979 12.9797L3.66979 12.2998C3.79287 12.2699 3.90528 12.2081 3.99499 12.121L12.745 3.62263C12.9479 3.42558 13.1088 3.19164 13.2186 2.93418C13.3284 2.67671 13.3849 2.40076 13.3849 2.12209C13.3849 1.84341 13.3284 1.56746 13.2186 1.31C13.1088 1.05254 12.9479 0.818599 12.745 0.621545C12.5421 0.424491 12.3012 0.268179 12.0361 0.161534C11.7711 0.0548894 11.4869 0 11.2 0ZM10.645 1.58302C10.7922 1.44006 10.9918 1.35974 11.2 1.35974C11.3031 1.35974 11.4052 1.37946 11.5004 1.41777C11.5956 1.45608 11.6822 1.51223 11.755 1.58302C11.8279 1.65382 11.8857 1.73786 11.9252 1.83035C11.9646 1.92284 11.9849 2.02197 11.9849 2.12209C11.9849 2.2222 11.9646 2.32133 11.9252 2.41383C11.8857 2.50632 11.8279 2.59036 11.755 2.66115L3.14214 11.0264L1.66207 11.3857L2.03209 9.94823L10.645 1.58302Z"></path>
                        <path d="M7 11.6403C6.6134 11.6403 6.3 11.9446 6.3 12.3201C6.3 12.6956 6.6134 13 7 13H13.3C13.6866 13 14 12.6956 14 12.3201C14 11.9446 13.6866 11.6403 13.3 11.6403H7Z"></path>
                    </svg>
                </a>
            </div>
        </div>
        <section class="user-item">
            <h1 class="item-header">Job Applications</h1>
            <p class="item-info">
                <span>submitted</span>
                <span class="item-value">0</span>
            </p>
            <p class="item-info">
                <span>In progress</span>
                <span class="item-value">0</span>
            </p>
            <p class="item-info">
                <span>Interview stage</span>
                <span class="item-value">0</span>
            </p>
        </section>
        <section class="user-item2">
            <h1 class="item-header">Articles</h1>
            <p class="item-info">
                <span>Published</span>
                <span class="item-value">0</span>
            </p>
            <p class="item-info">
                <span>In progress</span>
                <span class="item-value">0</span>
            </p>
        </section>
        <section class="user-item3">
            <h1 class="item-header">Open Source Issues</h1>
            <p class="item-info">
                <span>Completed</span>
                <span class="item-value">0</span>
            </p>
            <p class="item-info">
                <span>In progress</span>
                <span class="item-value">0</span>
            </p>
        </section>
        <section class="question">
            <a class="question-link">
                <span>Have something you want to share? </span>
                <span class="question-link-strong">Write an article</span>
            </a>
            <a class="question-link">
                <span>Add</span>
                <span class="question-link-strong"> more skills </span>
                <span>to improve your recommendations</span>
            </a>
            <a class="question-link">
                <svg id="save" viewBox="0 0 16 20" class="icon save-icon" fill="currentColor">
                    <path d="M3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V17.0568L7.41876 13.1863C7.76646 12.9379 8.23354 12.9379 8.58124 13.1863L14 17.0568V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H3ZM0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H13C13.7956 0 14.5587 0.31607 15.1213 0.87868C15.6839 1.44129 16 2.20435 16 3V19C16 19.3746 15.7907 19.7178 15.4576 19.8892C15.1245 20.0606 14.7236 20.0315 14.4188 19.8137L8 15.2289L1.58124 19.8137C1.27642 20.0315 0.875489 20.0606 0.542418 19.8892C0.209347 19.7178 0 19.3746 0 19V3C0 2.20435 0.31607 1.44129 0.87868 0.87868Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
                <span>  View your saved items</span>
            </a>

        </section>
    </div>

</template>
<style>
.edit-profiles{
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 8%);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 52px repeat(3, minmax(-webkit-min-content, -webkit-max-content)) 1fr;
    grid-template-rows: 52px repeat(3, minmax(min-content, max-content)) 1fr;
    padding: 20px;
}
.edit-header{
    grid-row: 1;
    display: flex;
}
.edit-avatar{
    height: 48px;
    width: 48px;
    margin-right: 16px;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover; 
}
.edit-user{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 41px;  
}
.edit-name{
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #454E54;
    
}
.icon{
    align-items: center;
    display: inline-flex;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;   
}
.edit-icon{
    width: 14px;
    height: 13px;
    margin-left: 8px;
}
.edit-userinfo{
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #ef8374 !important;
    display: flex; 
}
.user-item{
    grid-row: 2;
    grid-column: 1;  
}
.item-header{
    align-items: center;
    color: #454E54;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 18px;
    margin-bottom: 8px;   
}
.item-info{
    font-size: 13px;
    line-height: 15px;
    color: #454E54;
    margin-top: 8px;
    display: flex;
}   
.item-value{
    color: #ef8374;
    font-weight: 600;
    margin-left: auto;   
}
.user-item2{
    grid-column: 1;
    grid-row: 3;  
}
.user-item3{
    grid-row:4;
    grid-column:1;
}
.question{
    margin-top: 16px;  
}
.question-link{
    color: #454E54;
    font-size: 13px;
    font-weight: 500;
    line-height: 15px;
    display: flex;
    align-items: center;
    white-space: pre;
    flex-wrap: wrap;
    margin: 0 -4px;
    padding: 4px 4px; 
}
.question-link:hover{
    color: #ef8374  !important;
    background-color: #F4F5F8;
}
.question-link-strong{
    color: #ef8374 !important;
    font-weight: 600;
    letter-spacing: -0.01em;  
}
.save-icon{
    width: 13px;
    height: 16px;
}
.edit-user a:hover{
    color: #434E55 !important;
    text-decoration: none !important;
    background-color:transparent;
}
@media screen and (min-width: 769px){
    .edit-profiles{
        grid-column-gap: 55px;
        grid-template-rows: 73px minmax(-webkit-min-content, -webkit-max-content) 1fr;
        grid-template-rows: 73px minmax(min-content, max-content) 1fr;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .edit-header{
        grid-column: 1/4;
    }
    .item-header{
        margin-bottom: 16px;  
    }
    .user-item3{
        grid-row: 2;
        grid-column: 3;
    }
    .user-item2{
        grid-column: 2;
        grid-row: 2;  
    }
    .question{
        border-top: 1px solid #eaeaea;
        padding-top: 16px;
        grid-row: 3;
        grid-column: 1/4;
    }
    .question-link{
        margin: 0 -8px;
        padding: 4px 8px; 
    }
}
@media screen and (max-width: 768px){
    .edit-profiles{
        grid-row-gap: 16px;
        padding-bottom: 30px;  
    }
}
</style>