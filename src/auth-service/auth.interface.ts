import { Observable } from 'rxjs';
import { auth } from './proto/auth-types';

export interface AuthServiceClient {
  register(request: auth.RegisterRequest): Observable<auth.AuthResponse>;
  login(request: auth.LoginRequest): Observable<auth.AuthResponse>;
  getUser(request: auth.GetUserRequest): Observable<auth.User>;
  updateUser(request: auth.UpdateUserRequest): Observable<auth.User>;
  deleteUser(request: auth.DeleteUserRequest): Observable<auth.DeleteUserResponse>;
}
export type RegisterResponse = auth.AuthResponse;
