function createNextCard(repoTitle, repoLink, creationDate, lastUpdated) {
    creationDate = moment(creationDate);
    lastUpdated = moment(lastUpdated);
    var now = moment();
    // var dateFormat = 'YYYY MMMM DD hh:mm A';
    var dateFormat = 'DD, hh:mm A';
    var repoCard = 
    `<div class='card-item mdl-card'>
        <div class='mdl-card__title'>
            <h6 class='mdl-card__title-text'>${repoTitle}</h6>
        </div>
        <div class='mdl-card__supporting-text'>
            Created: ${creationDate.from(now)}
            <pre class='mini-date'>${creationDate.format('YYYY')} ${creationDate.format('MMMM').padEnd(9)} ${creationDate.format(dateFormat)}</pre>
        </div>
        <div class='mdl-card__supporting-text'>
            Last Commit: ${lastUpdated.from(now)}
            <pre class='mini-date'>${lastUpdated.format('YYYY')} ${lastUpdated.format('MMMM').padEnd(9)} ${lastUpdated.format(dateFormat)}</pre>
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='${repoLink}'>
                Go to Repo
            </a>
        </div>
    </div><hr/>`; 

    return repoCard;

}

