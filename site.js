
var Echo = {
    name: "Echo",
    age: 20,
    gender: "female",
    hometown: "Qingdao",
    emotions: {
        happiness: 0,
        sadness: 0,
       
    },
    isTired: false, 
    temp: 0, 
    dailyRoutine: {
        work: function() {
            Echo.isTired = true;
            Echo.emotions.sadness += 20;
        },
        relax: function() {
            Echo.isTired = false;
            Echo.emotions.happiness += 10;
        }
    },
    season: {
        summer: function() {
            Echo.isTired = true;
            Echo.emotions.sadness += 10;
        },
        winter: function() {
            Echo.isTired = true;
            Echo.emotions.happiness += 30;
        }
    },
    dailyMeal: [1, 2, 3],
    updateEmotions: function(temp, food, sunsetTime) {
        Echo.temp = temp; // 更新 temp 的值
        if (temp > 20) {
            Echo.emotions.happiness += 20;
            document.body.style.backgroundColor = "lightpink";
        } else if (temp > 10) {
            Echo.emotions.sadness += 5;
            document.body.style.backgroundColor = "lightyellow";
        } else if (temp > 0) {
            Echo.emotions.sadness += 10;
            document.body.style.backgroundColor = "lightblue";
        } else {
            Echo.emotions.sadness += 20;
            document.body.style.backgroundColor = "white";
        }

        if (Echo.dailyMeal.includes(food)) {
            Echo.emotions.happiness += 5;
        }
    }
};


function updatePage() {
    document.getElementById("name").textContent = Echo.name;
    document.getElementById("age").textContent = Echo.age;
    document.getElementById("gender").textContent = Echo.gender;
    document.getElementById("hometown").textContent = Echo.hometown;
    document.getElementById("happiness").textContent = Echo.emotions.happiness;
    document.getElementById("sadness").textContent = Echo.emotions.sadness;
    document.getElementById("isTired").textContent = Echo.isTired ? "Yes" : "No"; // 根据 isTired 的值设置 "Yes" 或 "No"
    document.getElementById("dailyMeal").textContent = Echo.dailyMeal.join(", ");
    document.getElementById("temp").textContent = Echo.temp; // 显示 temp 的值
}


document.addEventListener("DOMContentLoaded", function() {
    var newTemperature = Math.floor(Math.random() * 30);
    var newFood = [1, 2, 3][Math.floor(Math.random() * 3)];

    Echo.updateEmotions(newTemperature, newFood);
    updatePage();

    
    var customContent = document.getElementById("customContent");
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "This JavaScript code creates an object named Echo, representing a virtual character, and simulates its emotions and behaviors. The character has basic information like name, age, gender, hometown, emotional states (including happiness and sadness), fatigue status, temperature, and various daily routines (such as work, relaxation, and seasonal changes).After the page loads, the code generates random temperature and food values and uses the updateEmotions method to update the character's emotional state, including changing the page's background color based on temperature changes. Then, it updates the character's information on the HTML page using the updatePage function.";
    customContent.appendChild(newParagraph);

    var newImage = document.createElement("img");
    
    
    //newImage.alt = "hi";
    customContent.appendChild(newImage);
});
