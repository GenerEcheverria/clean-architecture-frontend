import { User } from './user.entity';

export class Admin extends User {

  constructor(emailParam?: string, passwordParam?: string, nameParam?: string, roleParam?: string, phoneParam?: string, userIdParam?: string) {
    super(emailParam);
    super(passwordParam);
    super(nameParam);
    super(roleParam);
    super(phoneParam);
    super(userIdParam);
  }

}
