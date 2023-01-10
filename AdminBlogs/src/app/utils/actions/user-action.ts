import {User} from '../../Models/userModel';

export const USER_LIST_REQUEST = 'user list request';
export const USER_LIST_SUCCESS = 'user list success';
export const USER_LIST_FAILED = 'user list falied';

export class UserListRequestAction {
  readonly type = USER_LIST_REQUEST;
}

export class UserListSuccessAction {
  readonly type = USER_LIST_SUCCESS;

  constructor(public payload?: { users: User[] }) {
  }
}
