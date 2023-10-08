$(document).ready(function () {
    var message = "How are you today!";
    var message_box = document.getElementById("message_box");
    var cat_open = false;

    const prompts = {
        "unhappy": [
            "Happy1",
            "Happy2",
            "Happy3"
        ],
        "sad": [
            "sad1",
            "sad2",
            "sad3"
        ],
        "lonely": [
            "lonely1",
            "lonely2",
            "lonely3"
        ],
        "empty": [
            "empty1",
            "empty2",
            "empty3"
        ],
        "psycho": [
            "Happy1",
            "Happy2",
            "Happy3"
        ],
        "angry": [
            "angry1",
            "angry2",
            "angry3"
        ]
    }

    function randomPrompt(category ="unhappy") {
        return prompts[category][Math.floor(Math.random() * prompts[category].length)];

    }

    message_box.innerHTML = message;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function animateCat() {
        var cat = document.getElementById("cat");
        if (cat_open) {
            cat.src = "static/images/character_blue_small.png";
            cat_open = false
        } else {
            cat.src = "static/images/character_blue_small_2.png";
            cat_open = true
        }
        
    }

    async function setMessageBox(message = "Hello!") {

        message_box.innerHTML = "";
        var current_message = "";
        for (i = 0; i < message.length; i++) {
            current_message += message.charAt(i);
            message_box.innerHTML = current_message;
            animateCat();
            await sleep(200);
        }
    }

    //setMessageBox(randomPrompt("unhappy"));
});