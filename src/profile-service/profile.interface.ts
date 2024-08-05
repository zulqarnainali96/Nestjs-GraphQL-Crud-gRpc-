import { Observable } from 'rxjs';
import { profile } from './proto/profile-types';

export interface ProfileServiceClient {
  createProfile(request: profile.CreateProfileRequest): Observable<profile.Profile>;
  getProfile(request: profile.GetProfileRequest): Observable<profile.Profile>;
  updateProfile(request: profile.UpdateProfileRequest): Observable<profile.Profile>;
  deleteProfile(request: profile.DeleteProfileRequest): Observable<profile.DeleteProfileResponse>;
  uploadImage(request: profile.UploadImageRequest): Observable<profile.UploadImageResponse>;
}
