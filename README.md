# Notes

* You get a free Atlas Database (no credit card required)
* Create a user with a password (just keep it simple with letters and numbers, no special symbols or you'll have to encode them)
* In Atlas Dashboard you get:
    - Connect locally via shell
    - Connect to app (I used this)
    - Connect via Compass GUI

## .env
* Create in the root of your app
* Add all your secret keys

## Test
* After connect from Express to Atlass you should see:
    - connected to Database
    - listening to port 3333

## Postman vs Insomina
*[good article](https://itnext.io/postman-vs-insomnia-comparing-the-api-testing-tools-4f12099275c1)
*[download insomnia](https://insomnia.rest/)

### Insomnia
* GET localhost:3333

    ![simple route test](https://i.imgur.com/R4tXavW.png)

## Create a new question
* POST
* in Insomina select POST and JSON
* URL `localhost:3333/questions`

```
{
	"description": "Is this an advantage of using SAML?",
	"alternatives": [
		{
		"text": "SAML ensures that user credentials are stored on premise"
		},
		{
		"text": "SAML ensures that user credentials are stored on premise"
		},
{
		"text": "SAML ensures that user credentials are stored on premise",
	 "isCorrect": true
		},
{
		"text": "SAML ensures that user credentials are stored on premise"
		}
	]
}
```

### Test it inside Insomnia
![test successful](https://i.imgur.com/HxUr59g.png)

### Test in Compass GUI
* Choose Connect using MongoDB Compass

![Compass](https://i.imgur.com/lhysDb7.png)

* Paste in the URL into Compass, place your password into the string and connect
* Click the test Databas
* Open the questions collection

![Compass question collection](https://i.imgur.com/uJdTvu1.png)

