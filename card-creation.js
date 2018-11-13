function createNextCard(repoTitle, repoLink, lastUpdated) {

    var description = "This is a test project";
    var lastUpdated = 'May 1st';
    
    var repoCard = `<div class='mdl-card'>
                        <div class='mdl-card__title'>
                            <h2 class='mdl-card__title-text'>${repoTitle}</h2>
                        </div>
                        <div class='mdl-card__supporting-text'>
                            Last Updated: ${lastUpdated}
                        </div>
                        <div class="mdl-card__actions mdl-card--border">
                            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='${repoLink}'>
                                Go to Repo
                            </a>
                        </div>
                    </div>`; 

    return repoCard;

}

