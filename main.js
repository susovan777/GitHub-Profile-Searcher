
async function getUserDetails(id) {
    let userDetails;
    try {
        const url = `https://api.github.com/users/${id}`;
        let userPromise = await fetch(url)
            .then(response => response.json())
            .then(finalData => {
                // console.log(finalData);
                userDetails = finalData;
            })
    }
    catch (err) {
        return null;
    }
    console.log(userDetails);
    return userDetails;
}

// getUserDetails('susovan777')
getUserDetails('mikr13')

function createUserCard(userData) {
    
}