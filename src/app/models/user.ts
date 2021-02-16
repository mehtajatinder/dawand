export class User {
  constructor(
    private _token: string,
    public userID: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public gender?: string,
    public fathersName?: string,
    public husbandsName?: string,
    public adhaar?: number,
    public phoneNumber?: number,
    public alternateNumber?: number,
    public designation?: string,
    public deptName?: string,
    public area?: string,
    public district?: string,
    public villageName?: string,
    public affilatedGurudwara?: string
  ) {}

  get token() {
    if (!this._token) {
      return null;
    } else {
      return this._token;
    }
  }
}
