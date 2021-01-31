<template>
<div class="publish publishedCard">
    <div class="published-container">
        <div class="published">
            <div class="published-top">
                <div class="published-text">Published</div>
                <div class="toogle toogle-enabled">
                    <div class="panel-body">  
                        <label class="switch">
                            <input type="checkbox" @click="toggleCheckbox()">
                            <div class="slider round"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <span>
        <span>{{ checkbox }}</span>
    </span>
</div>
</template>
<script>
export default{
    name:'published',
    data(){
        return{
            checkbox: "Your profile is hidden from everyone. Click the toggle to make it visible."
        }
    },
    methods: {
        toggleCheckbox() {
            if(this.checkbox=="Your profile is visible to everyone. See it live!"){
                this.checkbox ="Your profile is hidden from everyone. Click the toggle to make it visible."
            }
            else{
                this.checkbox ="Your profile is visible to everyone. See it live!"
            }
            
            this.$emit('setCheckboxVal', this.checkbox)
        }
  }
};
</script>
<style>
.publish{
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
.publishedCard{
    border: 1px solid #ef8374;
}
.published-container{
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 8px;
}
.published{
    display: grid;
    grid-gap: 6px;
}
.published-top{
    display: flex;
    align-items: center;
}
.published-text{
    margin-right: 8px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.03em;
}
.toogle{
    position: relative;
    height: 20px;
    width: 60px;
    margin-right: 8px;
}
.switch {
    position: absolute;
    display: inline-block;
    width: 40px;
    height: 14px;
    border-radius: 15px;
    top: 4px;
    left: 10px;
}

.switch input {
  display: none;
}
.slider {
    border-radius:15px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}
.slider:before {
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider {
    background-color:#ffd4cf;
    border-color: #ef8374;
}

input:focus + .slider {
    background-color:#ffd4cf ;
    border-color: #ef8374;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
    width: 15px;
    height: 15px;
    border-radius: 20px;
    background-color: #fff;
    border: 2px solid #dedede;
    float: right;
    cursor: pointer;
    transition: background-color 0.2s;
    box-shadow: 1px 1px 1px grey;
    top: -1px;
}
</style>