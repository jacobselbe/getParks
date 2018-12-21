//watch form
function watchForm() {
    console.log('watchForm() ready');
    $('#js-form').submit(e => {
        e.preventDefault();
        const searchState = $('#js-searchState').val();
        const maxResults = $('#js-maxResults').val();
        console.log(searchState, maxResults);
        getParks(searchState, maxResults);
    });
}

//make api call
function getParks(searchState, maxResults) {
    //stuff
}

//display response
function displayResponse(stuff) {
    //stuff
}

//set page
$(setPage => {
    console.log('page set');
    watchFrom();
})