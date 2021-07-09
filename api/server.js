const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', '/index.html'));
});

const twilioAccountSid = 'AC4723e06ca79d40ad59a7487c9bf7f4bc';
const twilioAuthToken = '2bcfc47090846e65a2ee6b06aa03bfb4';
const twilioApiKey = 'SK792d4cf33e612de6909869a04195f0d2';
const twilioApiSecret = 'BZ6vwqwWMUdGIrzHBnGiG3r5MOiXtqgX';

app.get('/api/token-service', (req, res) => {
  const AccessToken = require('twilio').jwt.AccessToken;

  const VideoGrant = AccessToken.VideoGrant;

  const videoGrant = new VideoGrant();

  const {identity} = req.query;

  // Create an access token

  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKey,
    twilioApiSecret,
    { identity: identity }
  );

  token.addGrant(videoGrant);

  const accessToken = token.toJwt();

  res.send({
    accessToken: accessToken
  });

});

app.get('/api/room-exists', (req, res)=>{
  const { roomId } = req.query;

  const client = require('twilio')(twilioAccountSid, twilioAuthToken);

  client.video.rooms(roomId).fetch().then((room) => {
    if(room){
      res.send({
        roomExists: true,
        room
      });
    } else {
      res.send({
        roomExists: false
      });
    }
  }).catch(err => {
    res.send({
      roomExists: false,
      err
    });
  })
});

const port = process.env.PORT || 5000 ;

app.listen(port, () => {
  console.log('Server started');
  console.log(`Listening at http://localhost:${port}`);
});