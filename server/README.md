## FeedbackApp

The application uses publisher-subscriber model where a client can create a topic to which users can subscribe. 
The client can purchase credits throught the payment gateway that'll be setup and use thm to send emails to subscribers.

### Application Structure

--config <br/>
&nbsp;&nbsp;| <br/>
&nbsp;&nbsp;-key.js <br/>
--node_modules <br/>
--routes <br/>
--services <br/>
--index.js <br/>
--package.json <br/>

Add keys.js in /config with ClientID and ClientSecret which will be used in the application.
