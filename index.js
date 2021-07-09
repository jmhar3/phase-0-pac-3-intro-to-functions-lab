function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    const cantHear = "I can't hear you!"
    if (string === string.toLowerCase()) {
        return cantHear
    }

    const canHear = "YES INDEED!"
    if (string === string.toUpperCase()) {
        return canHear
    }

    const ily = "I love you, too."
    if ("I love you, Grandma.") {
        return ily
    }
}