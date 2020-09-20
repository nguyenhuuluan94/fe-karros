export class Movie {
    id: string;
    genreIds: number[];
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: string;
    title: string;
    voteAverage: number;
    voteCount: number;

    constructor(data?: any) {
        if (data) {
            this.id = data.id;
            this.genreIds = data.genre_ids;
            this.originalLanguage = data.original_language;
            this.originalTitle = data.original_title;
            this.overview = data.overview;
            this.popularity = data.popularity;
            this.posterPath = 'https://image.tmdb.org/t/p/w500/' + data.poster_path;
            this.releaseDate = data.release_date;
            this.title = data.title;
            this.voteAverage = data.vote_average;
            this.voteCount = data.vote_count;
        }
    }

    get genreNames(): string[] {
        const names: string[] = [];
        if (this.genreIds && this.genreIds.length) {
            this.genreIds.forEach(id => {
                switch (id) {
                    case 28:
                        names.push()
                        break;
                    default:
                        break;
                }

            })
        }
        return [];
    }


}
