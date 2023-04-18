const firstName = 'Mateus';

function speakName() {
    console.log(firstName);
}

function useSpeakName() {
    const firstName = 'Luiz';
    speakName();
}

useSpeakName();