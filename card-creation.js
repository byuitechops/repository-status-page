function createNextCard(repoTitle, repoLink, creationDate, lastUpdated) {
    
    var repoCard = `<div class='mdl-card'>
                        <div class='mdl-card__title'>
                            <h6 class='mdl-card__title-text'>${repoTitle}</h6>
                        </div>
                        <div class='mdl-card__supporting-text'>
                            Created On: ${creationDate}
                        </div>
                        <div class='mdl-card__supporting-text'>
                            Last Updated: ${lastUpdated}
                        </div>
                        <div class="mdl-card__actions mdl-card--border">
                            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='${repoLink}'>
                                Go to Repo
                            </a>
                        </div>
                    </div><hr/>`; 

    return repoCard;

}

