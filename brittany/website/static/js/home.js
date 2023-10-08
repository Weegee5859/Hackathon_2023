$(document).ready(function () {
    var message = "How are you today!";
    var message_box = document.getElementById("message_box");
    var cat_open = false;
    var active = false;
    var audio = new Audio('/static/sounds/meow-1.mp3');

    const audios = [
        '/static/sounds/meow-1.mp3',
        '/static/sounds/meow-2.mp3',
        '/static/sounds/meow-3.mp3',
        '/static/sounds/meow-4.mp3'
    ]

    const prompts = {
        "unhappy": [
            "If you are not happy where you are, move. You are not a tree.",
            "If you attempt to rob a bank, you will have no trouble with rent or bills for the next ten years, whether you are successful or not.",
            "Don't give up your dreams, keep on sleeping."
        ],
        "sad": [
            "Don't be sad, because sad backward is das and das not good.",
            "aaaaaaaaaaaaaaa",
            "bbbbbbbbbbbbb"
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
            "If you hear weird noises in the night, simply make weirder noises to assert dominance.",
            "For $1, you can buy a candy bar from a vending machine. For $2, you can buy a brick, and get all the candy in the vending machine.",
            "If you swim with a friend, your chances of getting eaten by a shark will drop by 50%."
        ],
        "angry": [
            "Carry a fork with you. If someone tries to rob you, pull it out of your pocket and say, ‘thank you Lord for this meal I’m about to have’ and charge at them with the fork.",
            "angry2",
            "angry3"
        ]
    }

    function playRandomAudio() {
        var random_audio = audios[Math.floor(Math.random() * audios.length)];

        audio = new Audio(random_audio);
        audio.play();
    }

    function randomPrompt(category = "unhappy") {
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
            playRandomAudio()
        } else {
            cat.src = "static/images/character_blue_small_2.png";
            cat_open = true
        }
    }

    function closeCatMouth() {
        var cat = document.getElementById("cat");
        cat.src = "static/images/character_blue_small.png";
        cat_open = false
    }


    async function setMessageBox(message = "Hello!") {
        if (active) { return }
        active = true;
        console.log(message);
        message_box.innerHTML = "";
        var current_message = "";
        for (i = 0; i < message.length; i++) {
            current_message += message.charAt(i);
            message_box.innerHTML = current_message;
            animateCat();
            await sleep(100);
        }
        active = false;
        closeCatMouth()
    }

    //setMessageBox(randomPrompt("unhappy"));
    var happybtn = document.getElementById("one");
    happybtn.onclick = function () {
        setMessageBox(randomPrompt('unhappy'));
        playRandomAudio()
    }

    var sadbtn = document.getElementById("two");
    sadbtn.onclick = function () {
        setMessageBox(randomPrompt('sad'));
    }
    var lonelybtn = document.getElementById("three");
    lonelybtn.onclick = function () {
        setMessageBox(randomPrompt('lonely'));
    }
    var emptybtn = document.getElementById("four");
    emptybtn.onclick = function () {
        setMessageBox(randomPrompt('empty'));
    }
    var psychobtn = document.getElementById("five");
    psychobtn.onclick = function () {
        setMessageBox(randomPrompt('psycho'));
    }
    var angrybtn = document.getElementById("six");
    angrybtn.onclick = function () {
        setMessageBox(randomPrompt('angry'));
        audio.play();
    }    
});