export interface showMovie {
    id: number;
    name: string;
}

export interface ApiMovies {
    [id: number]: showMovie;
}

interface movieState {
    movies: any;
    series: showMovie[];
    status: string
}