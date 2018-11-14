/*************************************************************************
 * 
 *************************************************************************/


/*************************************************************************
 * 
 *************************************************************************/
async function concatPages (apiCall = '', page = 1, collectionOfRepos = []) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', `${apiCall}?page=${page++}&per_page=${100}`, false);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let data = JSON.parse(xhttp.responseText);
            if (data.length > 0) {
                collectionOfRepos = collectionOfRepos.concat(data);
                collectionOfRepos = concatPages(apiCall, page, collectionOfRepos);
            } else console.log('Completed Concatination of Pagination');
        } else console.error('An Error ocurred when making the request');
    };
    await xhttp.send();
    return collectionOfRepos;
}



