// Helper functions for localstorage 

export function getUsers(){
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
}


export function saveUsers(users){
    localStorage.setItem("users",JSON.stringify(users));
}

export function setLoggedInUsers(user){
    localStorage.setItem("loggedInUser",JSON.stringify(user));
}

export function getLoggedInUser(){
    const saved = localStorage.getItem("loggedInUser");
    return saved ? JSON.parse(saved): null;
}

export function clearLoggedInUser(){
    localStorage.removeItem("loggedInUser");
}