function sortReposByLastCommitDate (repos) {
    repos.sort( (aRepo,bRepo) => {
        if (moment(aRepo.updated_at).isSameOrBefore(bRepo.updated_at)) return 1;
        else return -1;
    } );
    return repos;
}