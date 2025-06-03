 function isLoggedinAndSubscribed(loggedIn, subscribed) {
 return (loggedIn === 'LOGGED_IN')  ||  (subscribed === 'SUBSCRIBED');

}
console.log(isLoggedinAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED')) 
