import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace auth. */
export namespace auth {

    /** Represents an AuthService */
    class AuthService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AuthService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new AuthService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AuthService;

        /**
         * Calls Register.
         * @param request RegisterRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AuthResponse
         */
        public register(request: auth.IRegisterRequest, callback: auth.AuthService.RegisterCallback): void;

        /**
         * Calls Register.
         * @param request RegisterRequest message or plain object
         * @returns Promise
         */
        public register(request: auth.IRegisterRequest): Promise<auth.AuthResponse>;

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AuthResponse
         */
        public login(request: auth.ILoginRequest, callback: auth.AuthService.LoginCallback): void;

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @returns Promise
         */
        public login(request: auth.ILoginRequest): Promise<auth.AuthResponse>;

        /**
         * Calls GetUser.
         * @param request GetUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and User
         */
        public getUser(request: auth.IGetUserRequest, callback: auth.AuthService.GetUserCallback): void;

        /**
         * Calls GetUser.
         * @param request GetUserRequest message or plain object
         * @returns Promise
         */
        public getUser(request: auth.IGetUserRequest): Promise<auth.User>;

        /**
         * Calls UpdateUser.
         * @param request UpdateUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and User
         */
        public updateUser(request: auth.IUpdateUserRequest, callback: auth.AuthService.UpdateUserCallback): void;

        /**
         * Calls UpdateUser.
         * @param request UpdateUserRequest message or plain object
         * @returns Promise
         */
        public updateUser(request: auth.IUpdateUserRequest): Promise<auth.User>;

        /**
         * Calls DeleteUser.
         * @param request DeleteUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteUserResponse
         */
        public deleteUser(request: auth.IDeleteUserRequest, callback: auth.AuthService.DeleteUserCallback): void;

        /**
         * Calls DeleteUser.
         * @param request DeleteUserRequest message or plain object
         * @returns Promise
         */
        public deleteUser(request: auth.IDeleteUserRequest): Promise<auth.DeleteUserResponse>;
    }

    namespace AuthService {

        /**
         * Callback as used by {@link auth.AuthService#register}.
         * @param error Error, if any
         * @param [response] AuthResponse
         */
        type RegisterCallback = (error: (Error|null), response?: auth.AuthResponse) => void;

        /**
         * Callback as used by {@link auth.AuthService#login}.
         * @param error Error, if any
         * @param [response] AuthResponse
         */
        type LoginCallback = (error: (Error|null), response?: auth.AuthResponse) => void;

        /**
         * Callback as used by {@link auth.AuthService#getUser}.
         * @param error Error, if any
         * @param [response] User
         */
        type GetUserCallback = (error: (Error|null), response?: auth.User) => void;

        /**
         * Callback as used by {@link auth.AuthService#updateUser}.
         * @param error Error, if any
         * @param [response] User
         */
        type UpdateUserCallback = (error: (Error|null), response?: auth.User) => void;

        /**
         * Callback as used by {@link auth.AuthService#deleteUser}.
         * @param error Error, if any
         * @param [response] DeleteUserResponse
         */
        type DeleteUserCallback = (error: (Error|null), response?: auth.DeleteUserResponse) => void;
    }

    /** Properties of a RegisterRequest. */
    interface IRegisterRequest {

        /** RegisterRequest username */
        username?: (string|null);

        /** RegisterRequest email */
        email?: (string|null);

        /** RegisterRequest password */
        password?: (string|null);
    }

    /** Represents a RegisterRequest. */
    class RegisterRequest implements IRegisterRequest {

        /**
         * Constructs a new RegisterRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IRegisterRequest);

        /** RegisterRequest username. */
        public username: string;

        /** RegisterRequest email. */
        public email: string;

        /** RegisterRequest password. */
        public password: string;

        /**
         * Creates a new RegisterRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterRequest instance
         */
        public static create(properties?: auth.IRegisterRequest): auth.RegisterRequest;

        /**
         * Encodes the specified RegisterRequest message. Does not implicitly {@link auth.RegisterRequest.verify|verify} messages.
         * @param message RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link auth.RegisterRequest.verify|verify} messages.
         * @param message RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.RegisterRequest;

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.RegisterRequest;

        /**
         * Verifies a RegisterRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterRequest
         */
        public static fromObject(object: { [k: string]: any }): auth.RegisterRequest;

        /**
         * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
         * @param message RegisterRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.RegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest email */
        email?: (string|null);

        /** LoginRequest password */
        password?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ILoginRequest);

        /** LoginRequest email. */
        public email: string;

        /** LoginRequest password. */
        public password: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: auth.ILoginRequest): auth.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link auth.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link auth.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): auth.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetUserRequest. */
    interface IGetUserRequest {

        /** GetUserRequest userId */
        userId?: (string|null);
    }

    /** Represents a GetUserRequest. */
    class GetUserRequest implements IGetUserRequest {

        /**
         * Constructs a new GetUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IGetUserRequest);

        /** GetUserRequest userId. */
        public userId: string;

        /**
         * Creates a new GetUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserRequest instance
         */
        public static create(properties?: auth.IGetUserRequest): auth.GetUserRequest;

        /**
         * Encodes the specified GetUserRequest message. Does not implicitly {@link auth.GetUserRequest.verify|verify} messages.
         * @param message GetUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IGetUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserRequest message, length delimited. Does not implicitly {@link auth.GetUserRequest.verify|verify} messages.
         * @param message GetUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IGetUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.GetUserRequest;

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.GetUserRequest;

        /**
         * Verifies a GetUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserRequest
         */
        public static fromObject(object: { [k: string]: any }): auth.GetUserRequest;

        /**
         * Creates a plain object from a GetUserRequest message. Also converts values to other types if specified.
         * @param message GetUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.GetUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetUserRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateUserRequest. */
    interface IUpdateUserRequest {

        /** UpdateUserRequest userId */
        userId?: (string|null);

        /** UpdateUserRequest username */
        username?: (string|null);

        /** UpdateUserRequest email */
        email?: (string|null);
    }

    /** Represents an UpdateUserRequest. */
    class UpdateUserRequest implements IUpdateUserRequest {

        /**
         * Constructs a new UpdateUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IUpdateUserRequest);

        /** UpdateUserRequest userId. */
        public userId: string;

        /** UpdateUserRequest username. */
        public username: string;

        /** UpdateUserRequest email. */
        public email: string;

        /**
         * Creates a new UpdateUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateUserRequest instance
         */
        public static create(properties?: auth.IUpdateUserRequest): auth.UpdateUserRequest;

        /**
         * Encodes the specified UpdateUserRequest message. Does not implicitly {@link auth.UpdateUserRequest.verify|verify} messages.
         * @param message UpdateUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IUpdateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateUserRequest message, length delimited. Does not implicitly {@link auth.UpdateUserRequest.verify|verify} messages.
         * @param message UpdateUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IUpdateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.UpdateUserRequest;

        /**
         * Decodes an UpdateUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.UpdateUserRequest;

        /**
         * Verifies an UpdateUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUserRequest
         */
        public static fromObject(object: { [k: string]: any }): auth.UpdateUserRequest;

        /**
         * Creates a plain object from an UpdateUserRequest message. Also converts values to other types if specified.
         * @param message UpdateUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.UpdateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateUserRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteUserRequest. */
    interface IDeleteUserRequest {

        /** DeleteUserRequest userId */
        userId?: (string|null);
    }

    /** Represents a DeleteUserRequest. */
    class DeleteUserRequest implements IDeleteUserRequest {

        /**
         * Constructs a new DeleteUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IDeleteUserRequest);

        /** DeleteUserRequest userId. */
        public userId: string;

        /**
         * Creates a new DeleteUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteUserRequest instance
         */
        public static create(properties?: auth.IDeleteUserRequest): auth.DeleteUserRequest;

        /**
         * Encodes the specified DeleteUserRequest message. Does not implicitly {@link auth.DeleteUserRequest.verify|verify} messages.
         * @param message DeleteUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IDeleteUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteUserRequest message, length delimited. Does not implicitly {@link auth.DeleteUserRequest.verify|verify} messages.
         * @param message DeleteUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IDeleteUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.DeleteUserRequest;

        /**
         * Decodes a DeleteUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.DeleteUserRequest;

        /**
         * Verifies a DeleteUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteUserRequest
         */
        public static fromObject(object: { [k: string]: any }): auth.DeleteUserRequest;

        /**
         * Creates a plain object from a DeleteUserRequest message. Also converts values to other types if specified.
         * @param message DeleteUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.DeleteUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteUserRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AuthResponse. */
    interface IAuthResponse {

        /** AuthResponse token */
        token?: (string|null);

        /** AuthResponse user */
        user?: (auth.IUser|null);
    }

    /** Represents an AuthResponse. */
    class AuthResponse implements IAuthResponse {

        /**
         * Constructs a new AuthResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IAuthResponse);

        /** AuthResponse token. */
        public token: string;

        /** AuthResponse user. */
        public user?: (auth.IUser|null);

        /**
         * Creates a new AuthResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthResponse instance
         */
        public static create(properties?: auth.IAuthResponse): auth.AuthResponse;

        /**
         * Encodes the specified AuthResponse message. Does not implicitly {@link auth.AuthResponse.verify|verify} messages.
         * @param message AuthResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IAuthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthResponse message, length delimited. Does not implicitly {@link auth.AuthResponse.verify|verify} messages.
         * @param message AuthResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IAuthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.AuthResponse;

        /**
         * Decodes an AuthResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.AuthResponse;

        /**
         * Verifies an AuthResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthResponse
         */
        public static fromObject(object: { [k: string]: any }): auth.AuthResponse;

        /**
         * Creates a plain object from an AuthResponse message. Also converts values to other types if specified.
         * @param message AuthResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.AuthResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AuthResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a User. */
    interface IUser {

        /** User userId */
        userId?: (string|null);

        /** User username */
        username?: (string|null);

        /** User email */
        email?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IUser);

        /** User userId. */
        public userId: string;

        /** User username. */
        public username: string;

        /** User email. */
        public email: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: auth.IUser): auth.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link auth.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link auth.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): auth.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteUserResponse. */
    interface IDeleteUserResponse {

        /** DeleteUserResponse success */
        success?: (boolean|null);
    }

    /** Represents a DeleteUserResponse. */
    class DeleteUserResponse implements IDeleteUserResponse {

        /**
         * Constructs a new DeleteUserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IDeleteUserResponse);

        /** DeleteUserResponse success. */
        public success: boolean;

        /**
         * Creates a new DeleteUserResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteUserResponse instance
         */
        public static create(properties?: auth.IDeleteUserResponse): auth.DeleteUserResponse;

        /**
         * Encodes the specified DeleteUserResponse message. Does not implicitly {@link auth.DeleteUserResponse.verify|verify} messages.
         * @param message DeleteUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IDeleteUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteUserResponse message, length delimited. Does not implicitly {@link auth.DeleteUserResponse.verify|verify} messages.
         * @param message DeleteUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IDeleteUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteUserResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.DeleteUserResponse;

        /**
         * Decodes a DeleteUserResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.DeleteUserResponse;

        /**
         * Verifies a DeleteUserResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteUserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteUserResponse
         */
        public static fromObject(object: { [k: string]: any }): auth.DeleteUserResponse;

        /**
         * Creates a plain object from a DeleteUserResponse message. Also converts values to other types if specified.
         * @param message DeleteUserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.DeleteUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteUserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteUserResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
