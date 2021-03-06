'using strict';
async function main() {
    function loadCard(targetColumn, card) {
        document.getElementById(targetColumn).innerHTML += card;
    }

    async function fillColumns() {
        concatPages('https://api.github.com/orgs/byuitechops/repos')
            .then( (repos) => sortReposByLastCommitDate(repos) )
            .then( (repos) => {
                repos.forEach(function(repo) {
                    var card = createNextCard(repo.name, repo.html_url, repo.created_at, repo.updated_at);
                    if (isClosed(repo)) {
                        loadCard('closed', card);
                    } else if (isDev(repo)) {
                        loadCard('development', card);
                    } else if (isMaint(repo)) {
                        loadCard('maintenance', card);
                    }
                });
            });

        

    }

    //IN-DEVELOPMENT: Created within the last month
    function isDev(repo) {
        var creationDate = new Date(repo.created_at);
        if (creationDate.getTime() > Date.now() - 1 * 30 * 24 * 60 * 60 * 1000) {
            return true;
        }
        return false;
    }

    //MAINTENANCE: A fallback for now (created more than a month ago... )
    function isMaint(repo) {
        return true;
    }   

    //CLOSED: It has been 1 month since last update to repo
    function isClosed(repo) {
        var lastUpdated = new Date(repo.updated_at);
        if (lastUpdated.getTime() < Date.now() - 1 * 30 * 24 * 60 * 60 * 1000) {
            return true;
        }
        return false;
    }

    await fillColumns();

}