const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("xyz");
console.log(path.resolve(__dirname, "microsoft-clone", "build", "index.html"));



const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioApiKey = process.env.TWILIO_API_KEY;
const twilioApiSecret = process.env.TWILIO_API_SECRET;

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "microsoft-clone/build")));
  app.get("*", (req,res) =>
  res.sendFile(path.resolve(__dirname, "microsoft-clone", "build", "index.html"))
  );
}
const port = process.env.PORT || 5000 ;

app.listen(port, () => {
  console.log('Server started');
  console.log(`Listening at http://localhost:${port}`);
});