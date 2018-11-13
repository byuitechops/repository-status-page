function checkGitRateLimit(apiCall = 'https://api.github.com/rateLimit') {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', `${apiCall}`, false);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let data = JSON.parse(xhttp.responseText);
            console.log(`Github Rate Limit: ${data.rate.remaining}/${data.rate.limit}\nReset in ${data.rate.reset / 60 / 60} minutes.`);
        }
    };
    xhttp.send();
}