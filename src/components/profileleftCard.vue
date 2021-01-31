<template>
    <div class="profile profile-info">
        <a class="edit-profile">
            <svg id="pen" viewBox="0 0 14 13" fill="currentColor" class="icon icon-pen">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2 0C10.6205 0 10.0648 0.223576 9.65504 0.621545L0.90504 9.1199C0.815329 9.20703 0.751686 9.31621 0.720915 9.43575L0.0209151 12.1552C-0.0387205 12.3869 0.0311738 12.632 0.20504 12.8009C0.378906 12.9697 0.631247 13.0376 0.86979 12.9797L3.66979 12.2998C3.79287 12.2699 3.90528 12.2081 3.99499 12.121L12.745 3.62263C12.9479 3.42558 13.1088 3.19164 13.2186 2.93418C13.3284 2.67671 13.3849 2.40076 13.3849 2.12209C13.3849 1.84341 13.3284 1.56746 13.2186 1.31C13.1088 1.05254 12.9479 0.818599 12.745 0.621545C12.5421 0.424491 12.3012 0.268179 12.0361 0.161534C11.7711 0.0548894 11.4869 0 11.2 0ZM10.645 1.58302C10.7922 1.44006 10.9918 1.35974 11.2 1.35974C11.3031 1.35974 11.4052 1.37946 11.5004 1.41777C11.5956 1.45608 11.6822 1.51223 11.755 1.58302C11.8279 1.65382 11.8857 1.73786 11.9252 1.83035C11.9646 1.92284 11.9849 2.02197 11.9849 2.12209C11.9849 2.2222 11.9646 2.32133 11.9252 2.41383C11.8857 2.50632 11.8279 2.59036 11.755 2.66115L3.14214 11.0264L1.66207 11.3857L2.03209 9.94823L10.645 1.58302Z"></path>
                <path d="M7 11.6403C6.6134 11.6403 6.3 11.9446 6.3 12.3201C6.3 12.6956 6.6134 13 7 13H13.3C13.6866 13 14 12.6956 14 12.3201C14 11.9446 13.6866 11.6403 13.3 11.6403H7Z"></path>
            </svg>
            <span class="visually-hidden">Edit</span>
        </a>
        <div class="name-user">Esra Erdim</div>
        <img src="https://avatars.githubusercontent.com/u/42889707?u=74e965d48af1d2264a1cd84d3784aa140bc18383&amp;v=4" class="profile-img">
        <div class="user-info">Yalova Üniversitesi | Computer Engineer</div>
        <hr class="divider">
        <div class="user-contact">
            <a class="contact-info">
                <svg id="clock" fill="#454E54" viewBox="0 0 18 18" class="icon icon-clock">
                    <path d="m9.75 4.5c0-0.41421-0.33579-0.75-0.75-0.75s-0.75 0.33579-0.75 0.75v4.5c0 0.28408 0.1605 0.54378 0.41459 0.67082l3 1.5c0.3705 0.1853 0.821 0.0351 1.0062-0.3354 0.1853-0.3705 0.0351-0.821-0.3354-1.0062l-2.5854-1.2927v-4.0365z"></path>
                    <path d="m9 0.75c-4.5564 0-8.25 3.6936-8.25 8.25 0 4.5563 3.6936 8.25 8.25 8.25 4.5563 0 8.25-3.6937 8.25-8.25 0-4.5564-3.6937-8.25-8.25-8.25zm-6.75 8.25c0-3.7279 3.0221-6.75 6.75-6.75 3.7279 0 6.75 3.0221 6.75 6.75 0 3.7279-3.0221 6.75-6.75 6.75-3.7279 0-6.75-3.0221-6.75-6.75z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
                <span>Last seen just now</span>
            </a>
            <a class="contact-info">
                <svg id="refresh" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-refresh">
                    <polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
                <span>Updated 10 hours ago</span>
            </a>
            <a class="contact-info">
                <svg id="web" viewBox="0 0 87.800001 87.800001"  class="icon icon-clock">
                    <path d="m43.9 0c-24.2 0-43.9 19.7-43.9 43.9s19.7 43.9 43.9 43.9 43.9-19.7 43.9-43.9-19.7-43.9-43.9-43.9zm-39.9 45.9h11.8c.2 5.7 1 11.1 2.4 16h-10c-2.4-4.8-3.9-10.2-4.2-16zm50.7-4c-.1-5.6-.3-11-.8-16h11.5c1.5 4.9 2.4 10.3 2.6 16zm-10.8 41.9c-1.6-.3-4-6.5-5.5-17.9h11c-1.5 11.4-4 17.6-5.5 17.9zm-6-21.9c-.5-4.6-.8-10-.8-16h13.6c-.1 6-.4 11.4-.8 16zm-.8-20c .1-6 .4-11.4.8-16h12c .5 4.6.8 10 .8 16zm6.8-37.9c1.6.4 4 6.6 5.5 17.9h-11c1.5-11.3 3.9-17.5 5.5-17.9zm9.5 17.9c-.4-2.9-.8-5.6-1.3-8-.8-3.7-1.7-6.6-2.7-8.8 6 2.4 11.2 8.5 14.5 16.8zm-15.1-16.8c-1 2.2-1.9 5.1-2.7 8.8-.5 2.5-1 5.2-1.3 8h-10.5c3.4-8.3 8.5-14.4 14.5-16.8zm-4.4 20.8c-.5 5-.8 10.4-.8 16h-13.3c.2-5.7 1.1-11.1 2.6-16zm-18.1 16h-11.8c.3-5.7 1.8-11.1 4.3-16h10c-1.4 5-2.3 10.4-2.5 16zm4 4h13.2c.1 5.6.3 11 .8 16h-11.4c-1.5-4.8-2.4-10.2-2.6-16zm14.6 20c .4 2.9.8 5.6 1.3 8 .8 3.7 1.7 6.6 2.7 8.8-6-2.4-11.2-8.5-14.5-16.8zm15 16.9c1-2.2 1.9-5.1 2.7-8.8.5-2.5 1-5.2 1.3-8h10.5c-3.3 8.3-8.5 14.4-14.5 16.8zm4.5-20.9c.5-5 .8-10.4.8-16h13.2c-.2 5.7-1.1 11.1-2.6 16zm18-16h11.8c-.3 5.7-1.8 11.1-4.3 16h-10c1.5-4.9 2.4-10.3 2.5-16zm0-4c-.2-5.7-1-11.1-2.4-16h10c2.5 4.9 4 10.3 4.3 16zm5.2-20h-9c-2.2-6-5.4-11.1-9.1-14.9 7.5 3.1 13.8 8.3 18.1 14.9zm-48.4-14.8c-3.7 3.8-6.8 8.9-9.1 14.9h-9c4.4-6.7 10.7-11.9 18.1-14.9zm-18.1 58.8h9c2.2 6 5.4 11.1 9.1 14.9-7.4-3-13.7-8.3-18.1-14.9zm48.5 14.9c3.7-3.8 6.8-8.9 9.1-14.9h9c-4.4 6.6-10.7 11.9-18.1 14.9z"></path>
                </svg>
                <span>Connect Web</span>
            </a>
            <a class="contact-info">
                <svg id="github" viewBox="20518 685 22 22" class="icon icon-clock">
                    <path id="Path_99" data-name="Path 99" class="cls-1" d="M20540 695.4v1.2c-.047.382-.082.765-.142 1.143a11.016 11.016 0 0 1-9.258 9.132c-.33.052-.666.086-1 .125h-1.2a1.476 1.476 0 0 0-.19-.04 9.255 9.255 0 0 1-2.418-.45 10.848 10.848 0 0 1-7.62-8.637c-.082-.403-.116-.82-.172-1.228v-1.29a1.414 1.414 0 0 0 .04-.185 10.482 10.482 0 0 1 1.546-4.833 10.85 10.85 0 0 1 7.82-5.212c.314-.052.636-.086.95-.125h1.29c.364.047.734.082 1.1.142a11.02 11.02 0 0 1 9.13 9.28c.047.323.08.65.124.978zm-12.753 4.837c-.464-.1-.915-.172-1.354-.292a3.744 3.744 0 0 1-2.543-1.977 5.383 5.383 0 0 1-.48-2.054 3.912 3.912 0 0 1 .87-2.9.283.283 0 0 0 .048-.228 3.485 3.485 0 0 1 .017-1.968c.137-.5.18-.52.7-.417a6.022 6.022 0 0 1 1.912.852.446.446 0 0 0 .31.06 8.79 8.79 0 0 1 4.562 0 .494.494 0 0 0 .308-.056c.447-.223.877-.49 1.336-.68a3.956 3.956 0 0 1 .958-.2.254.254 0 0 1 .2.13 3.513 3.513 0 0 1 .133 2.23.312.312 0 0 0 .064.327 3.485 3.485 0 0 1 .725 1.418 5.386 5.386 0 0 1 .01 2.3 3.792 3.792 0 0 1-1.148 2.23 4.47 4.47 0 0 1-2.118 1.028c-.332.073-.667.125-1.024.193a2.437 2.437 0 0 1 .62 1.8v2.58c0 .274.094.46.308.5a.98.98 0 0 0 .5-.027 9.63 9.63 0 1 0-12.733-8.142 9.375 9.375 0 0 0 4.49 7.228 13.51 13.51 0 0 0 1.947.932.52.52 0 0 0 .77-.524v-1.555c-.293.03-.555.074-.817.087a2.37 2.37 0 0 1-2.526-1.517 2.5 2.5 0 0 0-1.044-1.3c-.138-.086-.327-.31-.3-.387.082-.2.322-.163.51-.133a1.842 1.842 0 0 1 1.355.958 2.034 2.034 0 0 0 2.71.846.262.262 0 0 0 .143-.138 2.333 2.333 0 0 1 .58-1.2z"></path>
                </svg>
                <span class="connect">esraerdim</span>
            </a>
            <a class="contact-info">
                <svg id="stackoverflow" viewBox="0 0 24 24" class="icon icon-clock">
                    <path d="m18.986 21.865v-6.404h2.134v8.539h-19.276v-8.539h2.13v6.404zm-12.875-2.134h10.739v-2.137h-10.739zm.259-4.852 10.48 2.189.451-2.07-10.478-2.187zm1.359-5.056 9.705 4.53.903-1.95-9.706-4.53-.902 1.936zm2.715-4.785 8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617zm5.307-5.038-1.746 1.294 6.405 8.604 1.746-1.294-6.407-8.604z"></path>
                </svg>
                <span class="connect-stack">Connect Stackoverflow</span>
            </a>
            <a class="contact-info">
                <svg id="twitter" viewBox="0 0 24 24" class="icon icon-clock">
                    <path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781"></path>
                </svg>
                <span class="connect-twitter">Connect Twitter</span>
            </a>
        </div>
        <hr class="divider">
        <a class="profile-logout" href="">Logout</a>

    </div>
</template>
<style>
.profile-info{
    gap: 24px;
}
.profile{
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
.edit-profile{
    position: absolute;
    top: 28px;
    right: 20px;
    color: #a9b7be;
}
.edit-profile:hover{
    background: transparent;
    color: #a9b7be;
}
.icon{
    shape-rendering: geometricPrecision;  
    align-items: center;
    display: inline-flex;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;
}
.icon-pen{
    fill: #a9b7be;
}
.visually-hidden{
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px; 
}
.name-user{
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    letter-spacing: 0.02em;
}
.profile-img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    border: 1px solid #ef8374;
    -o-object-fit: cover;
    object-fit: cover;
}
.user-info{
    font-size: 14px;
    line-height: 22px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
}
.divider{
    background-color: #E8E8E8;
    height: 1px;
    margin: 0;
}   
.user-contact{
    display: grid;
    grid-gap: 8px;  
}
.contact-info{
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;  
}
.icon-clock{
    margin-right: 8px;
    fill: #454E54;    
}
.icon-refresh{
    margin-right:8px;
}
.connect-stack{
    color: #ef8236;
    padding-bottom: 2px;
    border-bottom: 1px solid #E8E8E8;
}
.connect{
    padding-bottom: 2px;
    border-bottom: 1px solid #E8E8E8;
}
.connect-stack:hover{
    color: #434E55 !important;
}
.connect-twitter{
    color: #1da1f2;
    padding-bottom: 2px;
    border-bottom: 1px solid #E8E8E8;
}
.connect-twitter:hover{
    color: #434E55 !important;
}
.profile-logout{
    border-radius: 4px;
    height: 40px;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    background: #ef8374;
    border: 1px solid #ef8374;
    box-sizing: border-box;
    color: #fff  !important;
    padding: 0 20px;
    min-width: 100px;
    font-family: Montserrat,serif;
    font-size: 12px;
    white-space: nowrap;
    font-weight: 600;
    letter-spacing: 0.02em;
    line-height: 16px;
}
.profile-logout:hover {
    background: #fceae8;
    color: #ef8374  !important;
    cursor: pointer;
}
@media screen and (min-width: 769px){
    .profile-info {
        position: -webkit-sticky;
        position: sticky;
        top: 96px;
    }
    .profile-img{
        width: 180px;
        height: 180px;
    }
    .profile-logout{
        font-size: 13px;
        padding: 0 32px;
    }
}
</style>