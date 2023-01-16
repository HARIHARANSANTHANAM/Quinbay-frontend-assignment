<template>
    <div class="cards">
    <div v-for="(student,index) in students" :key="index" class="card">
    <div class="image">
    <img :src="student.src.url" :alt="student.src.url"  />
        </div>
        <div class="info">
        <p>Name : {{student.firstName}}</p>
        <p v-if="student.fullName">FullName: {{student.fullName}}</p>
        <p>Age : {{student.age}}</p>
        <p> Total :{{student.mark+"/"+student.total}}</p>
        <button :class="[CalculatePercentage(student)>=35?'btn success':'btn danger']">{{CalculatePercentage(student)>=35?'Pass':'Fail'}}</button>
        <button @click="showFullName(student)" class="btn">Show Full Name</button>
        </div>
    </div>
    </div>
</template>

<script src="./js/Myinfo.js"></script>

<style scoped>
.card .image img {
    position: absolute;
    width: 100%;
    height: 100%;
    left:0;
    
    object-fit: contain;
}
.card {
    max-height: 400px;
    min-height: 400px;
    box-shadow: rgb(80, 81, 84) 10px 10px 10px;
    position: relative;
    width: 20%;
    display: flex;
    flex-direction: column;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    border-image: initial;
    margin: 1rem;
    padding: 5px;
    border-radius: 10px;
}
.btn {
    box-sizing: border-box;
    color: white;
    background-color: rgb(40, 116, 240);
    padding: 4px;
    border-width: 3px;
    border-style: solid;
    border-color: white;
    border-image: initial;
    border-radius: 5px;
    width:100%;
}
.success{
    background: green;
}
.danger{
 background: red;    
}
.card .image {
    position: relative;
    width: 100%;
    flex: 0.6;
}
.card .info {
    width: 100%;
    background-color: rgb(242, 242, 242);
    flex: 0.3;
}.cards {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
</style>