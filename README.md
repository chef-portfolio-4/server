# server

# base url
https://chefportfolio2020.herokuapp.com/


# register
https://chefportfolio2020.herokuapp.com/api/auth/register

requires data as following format:

    {
        "username": "username",
        "password": "password",
        "name": "name",
        "location": "location"
    }
### returns new users obj 

# login
https://chefportfolio2020.herokuapp.com/api/auth/login

requires data as following format:

    {
        "username": "username",
        "password": "password"
    }

### returns token
    {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvdCIsImlhdCI6MTU3ODM1OTAyNiwiZXhwIjoxNTc4MzYyNjI2fQ.LIJmxqrjHRaXLyRyuWLN_dTfcKas4-eGJ8XO6XBV8BM",
  "message": "Welcome name!"
}

