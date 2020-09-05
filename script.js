const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const errorElement = document.getElementById('error');


function loadMediaStream(){
    try{
        //Disable button
        button.disabled = true;
        //Start Picture in picture
        videoElement.requestPictureInPicture();
        //Reset button
        button.disabled = false;

    }catch(err){
        console.log('Error here: ', err);
        errorElement.innerHTML = 'Sorry something went wrong. Please try again.';
    }
    
}

// Prompt the user to select a media stream and pass that to video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
            loadMediaStream();
        }        
    }catch(err){
        console.log('Error here: ', err);
        errorElement.innerHTML = 'Sorry something went wrong. Please try again.';
    }
}


button.addEventListener('click', async () => {
    //On load
    selectMediaStream();
});

