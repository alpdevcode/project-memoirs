// Connect to Server
// Server URL and App ID are defined in a configuration file
Moralis.start({ serverUrl, appId });


// User Login and Logout
async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate();
    }
    console.log("logged in user:", user);
    getStats();
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}


// Event Binding
document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("btn-get-stats").onclick = getStats;


// Historical Transactions of User
function getStats() {
    const user = Moralis.User.current();
    if (user) {
      getUserTransactions(user);
    }
  }
  
async function getUserTransactions(user) {
    // create query
    const query = new Moralis.Query("EthTransactions");
    query.equalTo("from_address", user.get("ethAddress"));

    // run query
    const results = await query.find();
    console.log("user transactions:", results);
}