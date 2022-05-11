const dbUrl = 'http://localhost:3000/users'


function submitData(name, email) {
    const dataObj = {
        'name':  `${name}`,
        'email': `${email}`
    }

    return fetch(dbUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(dataObj)
    })
    .then(resp => resp.json())
    .then(user => addSubmittedIdToDOM(user))
    .catch(function (error) {
        alert("Bad things! Scoopy!");
        console.log(error.message);
        addErrMessageToDOM(error);
      });

}

const rnum = Math.floor(Math.random() * 1000);
submitData('billy'+rnum, 'bb@example.com')
//.then(user => addSubmittedIdToDOM(user))

function addErrMessageToDOM(errorResponse) {
    console.log(errorResponse);

    // extract 'id' value from response
    const msg = errorResponse.message;

    // mk a new <p> element
    const createP = document.createElement("p");

    // add text of 'id' to <p> element
    createP.textContent = msg;

    // append new element to <body>
    document.querySelector('body').append(createP);
}

function addSubmittedIdToDOM(submitDataResponse) {
    //console.log(submitDataResponse.id);

    // extract 'id' value from response
    const userid = submitDataResponse.id;

    // mk a new <p> element
    const createP = document.createElement("p");

    // add text of 'id' to <p> element
    createP.textContent = userid.toString();

    // append new element to <body>
    document.querySelector('body').append(createP);
}