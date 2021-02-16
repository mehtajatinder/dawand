export class UserData {
  constructor(
    private token: string,
    public userID: string,
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
}
