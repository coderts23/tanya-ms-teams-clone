# tanya-ms-teams-clone

This website is developed using ReactJS, NodeJs and Twilio Programmable Video SDK.

It is a video conferencing website which allows up to a 50 users in a room at a time.

## Main Features :

1. Mute/Unmute Audio
2. Enable/ Disable Video
3. Chat during meet
4. Screen Sharing
5. Join via only Audio
6. Video Conferencing with real-time audio and video

## Hosted Site :
https://ms-teams-tanya.herokuapp.com/

### How to locally view the project :

STEP 1:
Download the project and install all the dependencies using npm install.
 
STEP 2:
This application requires an access token to connect to a Room for Video. The included local token server provides the application with access tokens. Perform the following steps to setup the local token server:

1. Create an account in the Twilio Console.
2. Click on 'Settings' and take note of your Account SID.
3. Create a new API Key in the API Keys Section under Programmable Video Tools in the Twilio Console. Take note of the SID and Secret of the new API key.
4. Store your Account SID, Auth Token, API Key SID, API Key Secret, in a new file called .env in the root level of the application (example below).

TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

TWILIO_API_KEY=SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

TWILIO_API_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

STEP 3:
Run the app using the command npm run dev

STEP 4:
View it on https://localhost:3000

### Agile Methodology used :

1. Created the MVP feature first i.e to allow users to connect and allow video calling.
2. Added features like mute/unmute audio and video.
3. Added Participants list.
4. Added Screen Share.
5. Made significant changes to UI and added labels to the videos.
6. Added the chat feature.
7. Tested the app and made necessary changes.

While all the steps I constantly tested my app and made significant changes.





