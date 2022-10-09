export class Movies {
  public backdrop_path!: string;
  public adult!: boolean;
  public id!: number;
  public title!: string;
  public original_language!: string;
  public original_title!: string;
  public overview!: string;
  public poster_path!: string;
  public media_type!: string;
  public genre_ids?: number[] | null;
  public popularity!: number;
  public release_date!: string;
  public video!: boolean;
  public vote_average!: number;
  public vote_count!: number;
}
