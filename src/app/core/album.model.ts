export class Album {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
  ) {}

  static adapt(item: any): Album {
    return new Album(
      item.id,
      item.userId,
      item.title,
    );
  }
}
