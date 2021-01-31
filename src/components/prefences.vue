<template>
    <div class="prefences">
        <div class="prefences-container">
            <div class="prefences-header">Preferences</div>
            <div>This section is for our info only — we won’t show this directly to anyone 🔐</div>
            <div class="private-info">
                <div class="info">
                    <label class="info-title">Email:</label>
                    <div class="info-user">
                        <a href="mailto:esraaerdim@gmail.com">esraaerdim@gmail.com</a>
                    </div>
                </div>
                <div class="info">
                    <label class="info-title">Phone Number:</label>
                    <div class="info-user">No specified</div>
                </div>
                <div class="info">
                    <label class="info-title">Status:</label>
                    <div class="info-user">No specified</div>
                </div>
                <div class="info">
                    <label class="info-title">Expected salary:</label>
                    <div class="info-user">Unspecified</div>
                </div>
                <div class="info">
                    <label class="info-title">Visa status:</label>
                    <div class="info-user">No statuses selected</div>
                </div>
                <div class="info">
                    <label class="info-title">Prefer remote working:</label>
                    <div class="info-user">No</div>
                </div>
                <div class="info">
                    <label class="info-title">Expected salary:</label>
                    <div class="info-user">Unspecified</div>
                </div>
                <div class="info">
                    <label class="info-title">Preferred role types:</label>
                    <div class="info-user">None</div>
                </div>
                <div class="info">
                    <label class="info-title">Current location:</label>
                    <div class="info-user">Not specified</div>
                </div>
                <div class="info">
                    <label class="info-title">Preferred locations:</label>
                    <div class="info-user">No locations selected</div>
                </div>
            </div>
            <button class="edit">
                <svg id="pen" viewBox="0 0 14 13" fill="currentColor" class="icon icon-edit">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2 0C10.6205 0 10.0648 0.223576 9.65504 0.621545L0.90504 9.1199C0.815329 9.20703 0.751686 9.31621 0.720915 9.43575L0.0209151 12.1552C-0.0387205 12.3869 0.0311738 12.632 0.20504 12.8009C0.378906 12.9697 0.631247 13.0376 0.86979 12.9797L3.66979 12.2998C3.79287 12.2699 3.90528 12.2081 3.99499 12.121L12.745 3.62263C12.9479 3.42558 13.1088 3.19164 13.2186 2.93418C13.3284 2.67671 13.3849 2.40076 13.3849 2.12209C13.3849 1.84341 13.3284 1.56746 13.2186 1.31C13.1088 1.05254 12.9479 0.818599 12.745 0.621545C12.5421 0.424491 12.3012 0.268179 12.0361 0.161534C11.7711 0.0548894 11.4869 0 11.2 0ZM10.645 1.58302C10.7922 1.44006 10.9918 1.35974 11.2 1.35974C11.3031 1.35974 11.4052 1.37946 11.5004 1.41777C11.5956 1.45608 11.6822 1.51223 11.755 1.58302C11.8279 1.65382 11.8857 1.73786 11.9252 1.83035C11.9646 1.92284 11.9849 2.02197 11.9849 2.12209C11.9849 2.2222 11.9646 2.32133 11.9252 2.41383C11.8857 2.50632 11.8279 2.59036 11.755 2.66115L3.14214 11.0264L1.66207 11.3857L2.03209 9.94823L10.645 1.58302Z"></path>
                    <path d="M7 11.6403C6.6134 11.6403 6.3 11.9446 6.3 12.3201C6.3 12.6956 6.6134 13 7 13H13.3C13.6866 13 14 12.6956 14 12.3201C14 11.9446 13.6866 11.6403 13.3 11.6403H7Z"></path>
                </svg>
            </button>

        </div>

    </div>
</template>
<style>
.prefences{
    border: 0;
}
.prefences-container{
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
.prefences-header{
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.02em;  
}
.info{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 8px; 
}
.info-title{
    font-weight: 500;
    margin-right: 16px;
    white-space: nowrap;
    width: 180px;
}
.info-user{
    flex: 1;
}
.edit{
    position: absolute;
    top: 28px;
    right: 20px;
    color: #a9b7be;
    cursor: pointer;
    border: none;
    background: transparent;
}
.icon{
    shape-rendering: geometricPrecision;  
    align-items: center;
    display: inline-flex;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;
}
.icon-edit{
    fill: #a9b7be;   
}
@media screen and (min-width: 769px){
    .info{
        flex-direction: row;
    }
}
</style>