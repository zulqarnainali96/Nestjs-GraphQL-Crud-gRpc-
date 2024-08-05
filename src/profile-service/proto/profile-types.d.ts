import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace profile. */
export namespace profile {

    /** Represents a ProfileService */
    class ProfileService extends $protobuf.rpc.Service {

        /**
         * Constructs a new ProfileService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new ProfileService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ProfileService;

        /**
         * Calls CreateProfile.
         * @param request CreateProfileRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Profile
         */
        public createProfile(request: profile.ICreateProfileRequest, callback: profile.ProfileService.CreateProfileCallback): void;

        /**
         * Calls CreateProfile.
         * @param request CreateProfileRequest message or plain object
         * @returns Promise
         */
        public createProfile(request: profile.ICreateProfileRequest): Promise<profile.Profile>;

        /**
         * Calls GetProfile.
         * @param request GetProfileRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Profile
         */
        public getProfile(request: profile.IGetProfileRequest, callback: profile.ProfileService.GetProfileCallback): void;

        /**
         * Calls GetProfile.
         * @param request GetProfileRequest message or plain object
         * @returns Promise
         */
        public getProfile(request: profile.IGetProfileRequest): Promise<profile.Profile>;

        /**
         * Calls UpdateProfile.
         * @param request UpdateProfileRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Profile
         */
        public updateProfile(request: profile.IUpdateProfileRequest, callback: profile.ProfileService.UpdateProfileCallback): void;

        /**
         * Calls UpdateProfile.
         * @param request UpdateProfileRequest message or plain object
         * @returns Promise
         */
        public updateProfile(request: profile.IUpdateProfileRequest): Promise<profile.Profile>;

        /**
         * Calls DeleteProfile.
         * @param request DeleteProfileRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteProfileResponse
         */
        public deleteProfile(request: profile.IDeleteProfileRequest, callback: profile.ProfileService.DeleteProfileCallback): void;

        /**
         * Calls DeleteProfile.
         * @param request DeleteProfileRequest message or plain object
         * @returns Promise
         */
        public deleteProfile(request: profile.IDeleteProfileRequest): Promise<profile.DeleteProfileResponse>;

        /**
         * Calls UploadImage.
         * @param request UploadImageRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UploadImageResponse
         */
        public uploadImage(request: profile.IUploadImageRequest, callback: profile.ProfileService.UploadImageCallback): void;

        /**
         * Calls UploadImage.
         * @param request UploadImageRequest message or plain object
         * @returns Promise
         */
        public uploadImage(request: profile.IUploadImageRequest): Promise<profile.UploadImageResponse>;
    }

    namespace ProfileService {

        /**
         * Callback as used by {@link profile.ProfileService#createProfile}.
         * @param error Error, if any
         * @param [response] Profile
         */
        type CreateProfileCallback = (error: (Error|null), response?: profile.Profile) => void;

        /**
         * Callback as used by {@link profile.ProfileService#getProfile}.
         * @param error Error, if any
         * @param [response] Profile
         */
        type GetProfileCallback = (error: (Error|null), response?: profile.Profile) => void;

        /**
         * Callback as used by {@link profile.ProfileService#updateProfile}.
         * @param error Error, if any
         * @param [response] Profile
         */
        type UpdateProfileCallback = (error: (Error|null), response?: profile.Profile) => void;

        /**
         * Callback as used by {@link profile.ProfileService#deleteProfile}.
         * @param error Error, if any
         * @param [response] DeleteProfileResponse
         */
        type DeleteProfileCallback = (error: (Error|null), response?: profile.DeleteProfileResponse) => void;

        /**
         * Callback as used by {@link profile.ProfileService#uploadImage}.
         * @param error Error, if any
         * @param [response] UploadImageResponse
         */
        type UploadImageCallback = (error: (Error|null), response?: profile.UploadImageResponse) => void;
    }

    /** Properties of a CreateProfileRequest. */
    interface ICreateProfileRequest {

        /** CreateProfileRequest userId */
        userId?: (string|null);

        /** CreateProfileRequest name */
        name?: (string|null);

        /** CreateProfileRequest description */
        description?: (string|null);
    }

    /** Represents a CreateProfileRequest. */
    class CreateProfileRequest implements ICreateProfileRequest {

        /**
         * Constructs a new CreateProfileRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.ICreateProfileRequest);

        /** CreateProfileRequest userId. */
        public userId: string;

        /** CreateProfileRequest name. */
        public name: string;

        /** CreateProfileRequest description. */
        public description: string;

        /**
         * Creates a new CreateProfileRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateProfileRequest instance
         */
        public static create(properties?: profile.ICreateProfileRequest): profile.CreateProfileRequest;

        /**
         * Encodes the specified CreateProfileRequest message. Does not implicitly {@link profile.CreateProfileRequest.verify|verify} messages.
         * @param message CreateProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: profile.ICreateProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateProfileRequest message, length delimited. Does not implicitly {@link profile.CreateProfileRequest.verify|verify} messages.
         * @param message CreateProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: profile.ICreateProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateProfileRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.CreateProfileRequest;

        /**
         * Decodes a CreateProfileRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.CreateProfileRequest;

        /**
         * Verifies a CreateProfileRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateProfileRequest
         */
        public static fromObject(object: { [k: string]: any }): profile.CreateProfileRequest;

        /**
         * Creates a plain object from a CreateProfileRequest message. Also converts values to other types if specified.
         * @param message CreateProfileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.CreateProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateProfileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateProfileRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetProfileRequest. */
    interface IGetProfileRequest {

        /** GetProfileRequest userId */
        userId?: (string|null);
    }

    /** Represents a GetProfileRequest. */
    class GetProfileRequest implements IGetProfileRequest {

        /**
         * Constructs a new GetProfileRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IGetProfileRequest);

        /** GetProfileRequest userId. */
        public userId: string;

        /**
         * Creates a new GetProfileRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetProfileRequest instance
         */
        public static create(properties?: profile.IGetProfileRequest): profile.GetProfileRequest;

        /**
         * Encodes the specified GetProfileRequest message. Does not implicitly {@link profile.GetProfileRequest.verify|verify} messages.
         * @param message GetProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: profile.IGetProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetProfileRequest message, length delimited. Does not implicitly {@link profile.GetProfileRequest.verify|verify} messages.
         * @param message GetProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: profile.IGetProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetProfileRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.GetProfileRequest;

        /**
         * Decodes a GetProfileRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.GetProfileRequest;

        /**
         * Verifies a GetProfileRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetProfileRequest
         */
        public static fromObject(object: { [k: string]: any }): profile.GetProfileRequest;

        /**
         * Creates a plain object from a GetProfileRequest message. Also converts values to other types if specified.
         * @param message GetProfileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.GetProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetProfileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetProfileRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateProfileRequest. */
    interface IUpdateProfileRequest {

        /** UpdateProfileRequest userId */
        userId?: (string|null);

        /** UpdateProfileRequest name */
        name?: (string|null);

        /** UpdateProfileRequest description */
        description?: (string|null);
    }

    /** Represents an UpdateProfileRequest. */
    class UpdateProfileRequest implements IUpdateProfileRequest {

        /**
         * Constructs a new UpdateProfileRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IUpdateProfileRequest);

        /** UpdateProfileRequest userId. */
        public userId: string;

        /** UpdateProfileRequest name. */
        public name: string;

        /** UpdateProfileRequest description. */
        public description: string;

        /**
         * Creates a new UpdateProfileRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateProfileRequest instance
         */
        public static create(properties?: profile.IUpdateProfileRequest): profile.UpdateProfileRequest;

        /**
         * Encodes the specified UpdateProfileRequest message. Does not implicitly {@link profile.UpdateProfileRequest.verify|verify} messages.
         * @param message UpdateProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: profile.IUpdateProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateProfileRequest message, length delimited. Does not implicitly {@link profile.UpdateProfileRequest.verify|verify} messages.
         * @param message UpdateProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: profile.IUpdateProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateProfileRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.UpdateProfileRequest;

        /**
         * Decodes an UpdateProfileRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.UpdateProfileRequest;

        /**
         * Verifies an UpdateProfileRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateProfileRequest
         */
        public static fromObject(object: { [k: string]: any }): profile.UpdateProfileRequest;

        /**
         * Creates a plain object from an UpdateProfileRequest message. Also converts values to other types if specified.
         * @param message UpdateProfileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.UpdateProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateProfileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateProfileRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteProfileRequest. */
    interface IDeleteProfileRequest {

        /** DeleteProfileRequest userId */
        userId?: (string|null);
    }

    /** Represents a DeleteProfileRequest. */
    class DeleteProfileRequest implements IDeleteProfileRequest {

        /**
         * Constructs a new DeleteProfileRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IDeleteProfileRequest);

        /** DeleteProfileRequest userId. */
        public userId: string;

        /**
         * Creates a new DeleteProfileRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteProfileRequest instance
         */
        public static create(properties?: profile.IDeleteProfileRequest): profile.DeleteProfileRequest;

        /**
         * Encodes the specified DeleteProfileRequest message. Does not implicitly {@link profile.DeleteProfileRequest.verify|verify} messages.
         * @param message DeleteProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: profile.IDeleteProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteProfileRequest message, length delimited. Does not implicitly {@link profile.DeleteProfileRequest.verify|verify} messages.
         * @param message DeleteProfileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: profile.IDeleteProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteProfileRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.DeleteProfileRequest;

        /**
         * Decodes a DeleteProfileRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteProfileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.DeleteProfileRequest;

        /**
         * Verifies a DeleteProfileRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteProfileRequest
         */
        public static fromObject(object: { [k: string]: any }): profile.DeleteProfileRequest;

        /**
         * Creates a plain object from a DeleteProfileRequest message. Also converts values to other types if specified.
         * @param message DeleteProfileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.DeleteProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteProfileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteProfileRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Profile. */
    interface IProfile {

        /** Profile userId */
        userId?: (string|null);

        /** Profile name */
        name?: (string|null);

        /** Profile description */
        description?: (string|null);

        /** Profile imageUrl */
        imageUrl?: (string|null);

        /** Profile createdAt */
        createdAt?: (string|null);
    }

    /** Represents a Profile. */
    class Profile implements IProfile {

        /**
         * Constructs a new Profile.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IProfile);

        /** Profile userId. */
        public userId: string;

        /** Profile name. */
        public name: string;

        /** Profile description. */
        public description: string;

        /** Profile imageUrl. */
        public imageUrl: string;

        /** Profile createdAt. */
        public createdAt: string;

        /**
         * Creates a new Profile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Profile instance
         */
        public static create(properties?: profile.IProfile): profile.Profile;

        /**
         * Encodes the specified Profile message. Does not implicitly {@link profile.Profile.verify|verify} messages.
         * @param message Profile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: profile.IProfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Profile message, length delimited. Does not implicitly {@link profile.Profile.verify|verify} messages.
         * @param message Profile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: profile.IProfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Profile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.Profile;

        /**
         * Decodes a Profile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.Profile;

        /**
         * Verifies a Profile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Profile
         */
        public static fromObject(object: { [k: string]: any }): profile.Profile;

        /**
         * Creates a plain object from a Profile message. Also converts values to other types if specified.
         * @param message Profile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.Profile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Profile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Profile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteProfileResponse. */
    interface IDeleteProfileResponse {

        /** DeleteProfileResponse success */
        success?: (boolean|null);
    }

    /** Represents a DeleteProfileResponse. */
    class DeleteProfileResponse implements IDeleteProfileResponse {

        /**
         * Constructs a new DeleteProfileResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IDeleteProfileResponse);

        /** DeleteProfileResponse success. */
        public success: boolean;

        /**
         * Creates a new DeleteProfileResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteProfileResponse instance
         */
        public static create(properties?: profile.IDeleteProfileResponse): profile.DeleteProfileResponse;

        /**
         * Encodes the specified DeleteProfileResponse message. Does not implicitly {@link profile.DeleteProfileResponse.verify|verify} messages.
         * @param message DeleteProfileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: profile.IDeleteProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteProfileResponse message, length delimited. Does not implicitly {@link profile.DeleteProfileResponse.verify|verify} messages.
         * @param message DeleteProfileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: profile.IDeleteProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteProfileResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.DeleteProfileResponse;

        /**
         * Decodes a DeleteProfileResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.DeleteProfileResponse;

        /**
         * Verifies a DeleteProfileResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteProfileResponse
         */
        public static fromObject(object: { [k: string]: any }): profile.DeleteProfileResponse;

        /**
         * Creates a plain object from a DeleteProfileResponse message. Also converts values to other types if specified.
         * @param message DeleteProfileResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.DeleteProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteProfileResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteProfileResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadImageRequest. */
    interface IUploadImageRequest {

        /** UploadImageRequest userId */
        userId?: (string|null);

        /** UploadImageRequest image */
        image?: (Uint8Array|null);
    }

    /** Represents an UploadImageRequest. */
    class UploadImageRequest implements IUploadImageRequest {

        /**
         * Constructs a new UploadImageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IUploadImageRequest);

        /** UploadImageRequest userId. */
        public userId: string;

        /** UploadImageRequest image. */
        public image: Uint8Array;

        /**
         * Creates a new UploadImageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadImageRequest instance
         */
        public static create(properties?: profile.IUploadImageRequest): profile.UploadImageRequest;

        /**
         * Encodes the specified UploadImageRequest message. Does not implicitly {@link profile.UploadImageRequest.verify|verify} messages.
         * @param message UploadImageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: profile.IUploadImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadImageRequest message, length delimited. Does not implicitly {@link profile.UploadImageRequest.verify|verify} messages.
         * @param message UploadImageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: profile.IUploadImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadImageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadImageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.UploadImageRequest;

        /**
         * Decodes an UploadImageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadImageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.UploadImageRequest;

        /**
         * Verifies an UploadImageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadImageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadImageRequest
         */
        public static fromObject(object: { [k: string]: any }): profile.UploadImageRequest;

        /**
         * Creates a plain object from an UploadImageRequest message. Also converts values to other types if specified.
         * @param message UploadImageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.UploadImageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadImageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadImageRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadImageResponse. */
    interface IUploadImageResponse {

        /** UploadImageResponse imageUrl */
        imageUrl?: (string|null);
    }

    /** Represents an UploadImageResponse. */
    class UploadImageResponse implements IUploadImageResponse {

        /**
         * Constructs a new UploadImageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IUploadImageResponse);

        /** UploadImageResponse imageUrl. */
        public imageUrl: string;

        /**
         * Creates a new UploadImageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadImageResponse instance
         */
        public static create(properties?: profile.IUploadImageResponse): profile.UploadImageResponse;

        /**
         * Encodes the specified UploadImageResponse message. Does not implicitly {@link profile.UploadImageResponse.verify|verify} messages.
         * @param message UploadImageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: profile.IUploadImageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadImageResponse message, length delimited. Does not implicitly {@link profile.UploadImageResponse.verify|verify} messages.
         * @param message UploadImageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: profile.IUploadImageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadImageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadImageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.UploadImageResponse;

        /**
         * Decodes an UploadImageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadImageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.UploadImageResponse;

        /**
         * Verifies an UploadImageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadImageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadImageResponse
         */
        public static fromObject(object: { [k: string]: any }): profile.UploadImageResponse;

        /**
         * Creates a plain object from an UploadImageResponse message. Also converts values to other types if specified.
         * @param message UploadImageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.UploadImageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadImageResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadImageResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
