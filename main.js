
let userId;

const userInput = document.getElementById('search');
userInput.addEventListener('change', e => {
    // console.log(e.target.value);
    // getUserDetails(e.target.value)
})

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
// getUserDetails(userId)

function createUserCard(user) {
    let userCard = document.createElement('div');
    userCard.setAttribute('class', 'card');
    userCard.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-sm-4 image-box">
                    <div class="img-bg">
                        <img src="${user.avatar_url}" alt="">
                    </div>
                </div>
                <div class="col-sm-8 content-box">
                    <div class="card-body">
                        <h5 class="card-title ">${user.name}</h5>
                        <p class="card-text ">${user.bio}</p>

                        <div class="row">
                            <div class="col-4"><p>Followers: ${user.followers}</p></div>
                            <div class="col-4"><p>Following: ${user.following}</p></div>
                            <div class="col-4"><p>Repos: ${user.public_repos}</p></div>
                            <div class="col-6"><p>Tweeter: ${user.twitter_username}</p></div>
                            <div class="col-6"><p>Location: ${user.location}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('main').append(userCard);
}

let userD = getUserDetails('susovan777');
createUserCard(userD)
