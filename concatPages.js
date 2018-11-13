/*************************************************************************
 * 
 *************************************************************************/


/*************************************************************************
 * 
 *************************************************************************/
async function concatPages (apiCall = '', page = 0, collectionOfRepos = []) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', `${apiCall}?page=${page++}`, false);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let data = JSON.parse(xhttp.responseText);
            if (data.length > 0) {
                collectionOfRepos = collectionOfRepos.concat(data);
                concatPages(apiCall, page, collectionOfRepos);
            }
        }
    };
    await xhttp.send();
    return collectionOfRepos;
}



