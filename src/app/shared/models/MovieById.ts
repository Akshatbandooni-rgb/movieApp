export class MovieById {
  public adult: boolean = false;
  public backdrop_path!: string;
  public belongs_to_collection!: BelongsToCollection;
  public budget!: number;
  public genres?: GenresEntity[] | null;
  public homepage!: string;
  public id!: number;
  public imdb_id!: string;
  public original_language!: string;
  public original_title!: string;
  public overview!: string;
  public popularity!: number;
  public poster_path!: string;
  public production_companies?: ProductionCompaniesEntity[] | null;
  public production_countries?: ProductionCountriesEntity[] | null;
  public release_date!: string;
  public revenue!: number;
  public runtime!: number;
  public spoken_languages?: SpokenLanguagesEntity[] | null;
  public status!: string;
  public tagline!: string;
  public title!: string;
  public video: boolean = false;
  public vote_average!: number;
  public vote_count!: number;
}
class BelongsToCollection {
  public id!: number;
  public name!: string;
  public poster_path!: string;
  public backdrop_path!: string;
}
class GenresEntity {
  public id!: number;
  public name!: string;
}
class ProductionCompaniesEntity {
  public id!: number;
  public logo_path!: string;
  public name!: string;
  public origin_country!: string;
}
class ProductionCountriesEntity {
  public iso_3166_1!: string;
  public name!: string;
}
class SpokenLanguagesEntity {
  public english_name!: string;
  public iso_639_1!: string;
  public name!: string;
}
