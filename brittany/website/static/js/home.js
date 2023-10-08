$(document).ready(function () {
    var message = "How are you today!";
    var message_box = document.getElementById("message_box");
    var cat_open = false;
    var active = false;
    var audio = new Audio('/static/sounds/meow-1.mp3');
    var frog = new Audio('static/sounds/frog.mp3');

    const audios = [
        '/static/sounds/meow-1.mp3',
        '/static/sounds/meow-2.mp3',
        '/static/sounds/meow-3.mp3',
        '/static/sounds/meow-4.mp3'
    ]

    const prompts = {
        "unhappy": [
            "If you are not happy where you are, move. You are not a tree.",
            "If you swim with a friend, your chances of getting eaten by a shark will drop by 50%.",
            "Don't give up your dreams, keep on sleeping."
        ],
        "sad": [
            "Don't be sad, because sad backward is das and das not good.",
            "If you attempt to rob a bank, you will have no trouble with rent or bills for the next ten years, whether you are successful or not.",
            "Cheer up, life is too short to deal with sadness."
        ],
        "lonely": [
            "Discuss your feelings to your stuff animal, Mr. Snuggles.",
            "Yell in an empty room and argue with your echo.",
            "Go meet new people and have fun socializing."
        ],
        "empty": [
            "You should probably get something to eat.",
            "It's okay, so am I.",
            "Impulse purchase the next big thing."
        ],
        "psycho": [
            "If you hear weird noises in the night, simply make weirder noises to assert dominance.",
            "Go back to playing league.",
            "Great work, keep it up, I'm proud of you."
        ],
        "angry": [
            "Carry a fork with you. If someone tries to rob you, pull it out of your pocket and say, thank you Lord for this meal I'm about to have and charge at them with the fork.",
            "Go on a rampage.",
            "Direct that angry towards passion, play music, do homework, or simply go on a walk."
        ]
    }

    function playRandomAudio() {
        if((Math.random() * 10) > 7){
            var random_audio = audios[Math.floor(Math.random() * audios.length)];

            audio = new Audio(random_audio);
            audio.play();
        }
    }

    function randomPrompt(category = "unhappy") {
        return prompts[category][Math.floor(Math.random() * prompts[category].length)];

    }

    message_box.innerHTML = message;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function animateCat(flag) {
        var cat = document.getElementById("cat");
        if (cat_open) {
            cat.src = "static/images/character_blue_small.png";
            cat_open = false
            if(flag == 0)
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
        var flag = 0;
        if(Math.random() * 10 > 0){
            flag = 1
        }
        if (active) { return }
        active = true;
        console.log(message);
        message_box.innerHTML = "";
        var current_message = "";
        if(flag == 1)
            frog.play();
        for (i = 0; i < message.length; i++) {
            current_message += message.charAt(i);
            message_box.innerHTML = current_message;
            animateCat(flag);
            await sleep(50);
        }
            frog.pause();
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