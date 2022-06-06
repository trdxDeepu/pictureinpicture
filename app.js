const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//promt to select media stream and pass to video and then play

async function selectMediaStream( ) {
    try {

        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    }
    catch(error){

        console.log('whoops, error here:',error)

    }
}

selectMediaStream();