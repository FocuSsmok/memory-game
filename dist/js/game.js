"use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var startTime=new Date().getTime(),cardsColor=["red","red","green","green","blue","blue","yellow","yellow","brown","brown","gray","gray","violet","violet","light-green","light-green","cadet-blue","cadet-blue"],cards=document.querySelectorAll("div");cards=[].concat(_toConsumableArray(cards));var init=function(){cards.forEach(function(a){var b=Math.floor(Math.random()*cardsColor.length);a.classList.add(cardsColor[b]),cardsColor.splice(b,1),a.classList.add("hidden")})},activeCard="",activeCards=[],couples=cards.length/2,gameResult=0,endGame=function(a){alert("Your result: "+a+" seconds"),gameResult=0,startTime=new Date().getTime(),cards.forEach(function(a){a.classList.remove("off")}),init(),cards.forEach(function(a){a.addEventListener("click",clickCard)})},clickCard=function a(){return activeCard=this,activeCard.classList.remove("hidden"),0===activeCards.length?(activeCards[0]=activeCard,void activeCard.removeEventListener("click",a)):void(1===activeCards.length&&(cards.forEach(function(b){b.removeEventListener("click",a)}),activeCards[1]=activeCard,setTimeout(function(){if(activeCards[0].classList[0]===activeCards[1].classList[0]?(activeCards.forEach(function(a){a.classList.add("off")}),gameResult++):activeCards.forEach(function(a){a.classList.add("hidden")}),cards.forEach(function(b){b.classList.contains("off")||b.addEventListener("click",a)}),activeCards=[],gameResult===couples){var b=new Date().getTime()-startTime;b/=1e3,endGame(b)}},500)))};cards.forEach(function(a){a.addEventListener("click",clickCard)}),init();