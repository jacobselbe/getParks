//watch form
function watchForm() {
    console.log('watchForm() ready');
    $('#js-form').submit(e => {
        e.preventDefault();
        $('#js-results').html('');
        const state = $('#js-stateSelect').val();
        const maxResults = $('#js-maxResults').val();
        console.log(state, maxResults);
        getParks(state, maxResults);
    });
}

//make api call
function getParks(state, maxResults) {
    const url = `https://api.nps.gov/api/v1/parks?api_key=PV1zo3huJ2eccnKkouE8SK5xwhUjOO6NzhjceWhK&stateCode=${state}&limit=${maxResults}&start=0`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(responseJson => displayResponse(responseJson.data))
        .catch(error => {
            console.log(error);
            $('#js-errorMessage').html('Sorry, something went wrong. Check console for more info.');
        });
}

//display response
function displayResponse(response) {
    console.log(response);
    for (let i = 0; i < response.length; i++) {
        $('#js-results').append(`
            <li>
            <h3>${response[i].fullName}</h3>
            <p>${response[i].description}</p>
            <a href="${response[i].url}" target="_blank">${response[i].url}</a>
            </li>
        `);
    }
}

//set page
$(setPage => {
    console.log('page set');
    watchForm();
})