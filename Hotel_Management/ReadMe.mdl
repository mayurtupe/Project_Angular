
1. create new project 
2.create landing component (css -bg img/clr) --Home component
'' redirect to Home component
landing compo -->btns---> admin owner user
create db.json 
{ 
"admin" : [],
"owner " : [],
"user" : [],
"hotelDetails:[],
"hotelBooking":[]
}

module ->> admin,owner ,user (lazy loading)

signUp compo -> boostrap /material
{
      "name": "Santosh",
       "pan":"CTGPP2421P"
      "city": "pune"
      "email": "santosg@12gamil.com",
      "mobileNo": "9860908859",
      "gender": "male",
      "password": "Santosh1",
      "confirmPassword":"Santosh1",
      "Tnc":true
    }

signIn :
{
 "name": "Santosh",
 "password": "Santosh1"
}



Home compo : Admin User Owner -->set jouney flag to the service

db : {"admin":[{},{}], "user":[{},{}],  "owner":[{}], "hotelDetails":[{},{},{}],"hotelBooking":[{},{}]}

Admin journey:

admin btn click--> admin Landing compo 
 admin/owner/user Landing compo :back signIn() 
back - application landing screen

signUp-here --> open signUpCompo --> 
form submit post Api call endpoint /admin : db("admin":[]) 
After signup success redirect--> adminSuccess compo --> view_Hotel_List(btn)
 view_Hotel_List(btn) click--> hotelList compo -- oninit () -->get Api call endpoint/hotelDetails
hotelList component-- table {{data}} add one column having delete icon -->click ->>deletApi Call.

admin SignIn: signin form details have to match with db.
match-success with db details : match-->



redirect admin to adminSucces screen,--->btn---> back View Hotel details
match-fail -->show alert box/toaster and redirect admin again to signin screen.

 adminSucces/admin signin back:




user journey:
redirect to the userLandingcompo : signIn form
signUp submit : post Api --url enpoint /user --> redirect userSuccessCompo .
userSuccessCompo : view_Hotel_List --> redirect to userHotelListCompo .
userHotelListCompo :  view_Hotel_List btn click --> get Api call / hotelDetails.
show hotel details in table format, (u can add search box).and add one column of booknow option --> redirect user to bookNowCompo.
bookNowCompo : form-- userName, adhar no, mobNo, amount ,  submit --> post Api endpoint/hotelBooking.

user SignIn: signin form details have to match.
match-success with db details : match--> redirect user to userSucces screen,
match-fail -->show alert box and redirect user again to usersignin screen.


Owner journey: -->redirect to ownerLandingCompo
ownerSuccessCompo :  New_Hotel_Registration hotelList
signUp>> same above owenerSuccesCompo --> post Api /owner --redirect to ownerSucces screen

owner SignIn: signin form details have to match.
match-success with db details : match--> redirect owner to ownerSucces screen,
match-fail -->show alert box and redirect owner again to ownersignin screen.

ownerSucces screen: new_Hotel_Registration hotel_list
new_Hotel_Registration click-->  new_Hotel_RegistrationComponent --> form {
      "ownerName"
       owenerMobNo
      "hotelName"
      "hotelAddress"
      "hotelMobile"
      "hotelMenu"
      "roomAvailable"
      "owenrCheck":
      "userPass": 
post api /hotelDetails --> rediect owner to ownerSuccesPage.

hotel_list: get api call /hotelDetails

use table formate to show hotelDetail data -->add two column like edit and delete
edit : redirect new_Hotel_RegistrationCompo ->show form in prefilled formate -->submit post APi /hotelDetails --> redirect to ownerSuccesPage
delete: deleteApi call -->redirect to ownerSuccesPage

delet Api: delete("https//localHost/hotelDetails/id")
get Api : get("https//localHost/hotelDetails")
post Api : post("https//localHost/hotelDetails" , formData)

---------------------------------------------------------------------------------------------------------------------------
Weather Application:

//https://api.openweathermap.org/data/2.5/weather?lat=19.0760&lon=72.8777&appid=d85d6b62cd5b3d11e07f09beffd5f12b

//https://api.openweathermap.org/data/2.5/weather?id=524901&lat=16.7050&lon=74.2433&lang=hi&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric

ref project to clone:
https://github.com/santoshmulak/Weather-App.git
-------------------------------
1.create project weather application
2.forcast componnet
3.data service
landing Compo :  title {{click below for eather details}}
button >>> forcast component 

input [(ngModel)]='city' box--> take city name from user 

apiurl : https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric
url1 : 'https://api.openweathermap.org/data/2.5/weather?q='
url2 : '&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric'
this.city = city
url = this.url1+this.city+url2

respo: 

weatherDetails = response

weatherDetails.name
weatherDetails.main.temp
weatherDetails.main.temp_min
weatherDetails.main.temp_max
weatherDetails.main.pressure
weatherDetails.main.humidity
weatherDetails.wind.speed
weatherDetails.sys.country