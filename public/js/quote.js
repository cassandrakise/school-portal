const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd3d4c5f317mshee3f91b68ed1105p1081f6jsn6048356913dc',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};

function getQuotes() {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let output = '';
            output += `
                    <div class='box'>
                        <h5>
                        ${response.content} - ${response.originator.name}
                        </h5>
                    </div>`;
            $('#quote').html(output);
        })
        .catch(err => console.error(err));
}