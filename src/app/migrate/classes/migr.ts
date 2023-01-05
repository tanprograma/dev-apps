export class Migr {
  public title: String;
  public migrated: Number;
  public unmigrated: Number;
  public status: String;
  constructor(title: String, unmigrated: any) {
    this.title = title;
    this.migrated = 0;
    this.unmigrated = unmigrated();
    this.status = this.migrated == 0 ? 'unmigrated' : 'migrated';
  }
}
