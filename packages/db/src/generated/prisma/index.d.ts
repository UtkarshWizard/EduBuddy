
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Space
 * 
 */
export type Space = $Result.DefaultSelection<Prisma.$SpacePayload>
/**
 * Model SpaceParticipant
 * 
 */
export type SpaceParticipant = $Result.DefaultSelection<Prisma.$SpaceParticipantPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Doubt
 * 
 */
export type Doubt = $Result.DefaultSelection<Prisma.$DoubtPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Roles: {
  admin: 'admin',
  moderator: 'moderator',
  member: 'member'
};

export type Roles = (typeof Roles)[keyof typeof Roles]

}

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.space`: Exposes CRUD operations for the **Space** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spaces
    * const spaces = await prisma.space.findMany()
    * ```
    */
  get space(): Prisma.SpaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spaceParticipant`: Exposes CRUD operations for the **SpaceParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpaceParticipants
    * const spaceParticipants = await prisma.spaceParticipant.findMany()
    * ```
    */
  get spaceParticipant(): Prisma.SpaceParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doubt`: Exposes CRUD operations for the **Doubt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doubts
    * const doubts = await prisma.doubt.findMany()
    * ```
    */
  get doubt(): Prisma.DoubtDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Space: 'Space',
    SpaceParticipant: 'SpaceParticipant',
    Chat: 'Chat',
    Doubt: 'Doubt'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "space" | "spaceParticipant" | "chat" | "doubt"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Space: {
        payload: Prisma.$SpacePayload<ExtArgs>
        fields: Prisma.SpaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          findFirst: {
            args: Prisma.SpaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          findMany: {
            args: Prisma.SpaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          create: {
            args: Prisma.SpaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          createMany: {
            args: Prisma.SpaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          delete: {
            args: Prisma.SpaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          update: {
            args: Prisma.SpaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          deleteMany: {
            args: Prisma.SpaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          upsert: {
            args: Prisma.SpaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          aggregate: {
            args: Prisma.SpaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpace>
          }
          groupBy: {
            args: Prisma.SpaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpaceCountArgs<ExtArgs>
            result: $Utils.Optional<SpaceCountAggregateOutputType> | number
          }
        }
      }
      SpaceParticipant: {
        payload: Prisma.$SpaceParticipantPayload<ExtArgs>
        fields: Prisma.SpaceParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpaceParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpaceParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceParticipantPayload>
          }
          findFirst: {
            args: Prisma.SpaceParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpaceParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceParticipantPayload>
          }
          findMany: {
            args: Prisma.SpaceParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceParticipantPayload>[]
          }
          create: {
            args: Prisma.SpaceParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceParticipantPayload>
          }
          createMany: {
            args: Prisma.SpaceParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpaceParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceParticipantPayload>[]
          }
          delete: {
            args: Prisma.SpaceParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceParticipantPayload>
          }
          update: {
            args: Prisma.SpaceParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceParticipantPayload>
          }
          deleteMany: {
            args: Prisma.SpaceParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpaceParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpaceParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceParticipantPayload>[]
          }
          upsert: {
            args: Prisma.SpaceParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceParticipantPayload>
          }
          aggregate: {
            args: Prisma.SpaceParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpaceParticipant>
          }
          groupBy: {
            args: Prisma.SpaceParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpaceParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpaceParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<SpaceParticipantCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Doubt: {
        payload: Prisma.$DoubtPayload<ExtArgs>
        fields: Prisma.DoubtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoubtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoubtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>
          }
          findFirst: {
            args: Prisma.DoubtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoubtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>
          }
          findMany: {
            args: Prisma.DoubtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>[]
          }
          create: {
            args: Prisma.DoubtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>
          }
          createMany: {
            args: Prisma.DoubtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoubtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>[]
          }
          delete: {
            args: Prisma.DoubtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>
          }
          update: {
            args: Prisma.DoubtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>
          }
          deleteMany: {
            args: Prisma.DoubtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoubtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoubtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>[]
          }
          upsert: {
            args: Prisma.DoubtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoubtPayload>
          }
          aggregate: {
            args: Prisma.DoubtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoubt>
          }
          groupBy: {
            args: Prisma.DoubtGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoubtGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoubtCountArgs<ExtArgs>
            result: $Utils.Optional<DoubtCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    space?: SpaceOmit
    spaceParticipant?: SpaceParticipantOmit
    chat?: ChatOmit
    doubt?: DoubtOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    spaceCreated: number
    participated: number
    chat: number
    doubtAsked: number
    doubtAnswered: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spaceCreated?: boolean | UserCountOutputTypeCountSpaceCreatedArgs
    participated?: boolean | UserCountOutputTypeCountParticipatedArgs
    chat?: boolean | UserCountOutputTypeCountChatArgs
    doubtAsked?: boolean | UserCountOutputTypeCountDoubtAskedArgs
    doubtAnswered?: boolean | UserCountOutputTypeCountDoubtAnsweredArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpaceCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoubtAskedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoubtWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoubtAnsweredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoubtWhereInput
  }


  /**
   * Count Type SpaceCountOutputType
   */

  export type SpaceCountOutputType = {
    chat: number
    participants: number
    doubt: number
  }

  export type SpaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | SpaceCountOutputTypeCountChatArgs
    participants?: boolean | SpaceCountOutputTypeCountParticipantsArgs
    doubt?: boolean | SpaceCountOutputTypeCountDoubtArgs
  }

  // Custom InputTypes
  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceCountOutputType
     */
    select?: SpaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceParticipantWhereInput
  }

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountDoubtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoubtWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatarUrl: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatarUrl?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatarUrl?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatarUrl?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    avatarUrl: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    spaceCreated?: boolean | User$spaceCreatedArgs<ExtArgs>
    participated?: boolean | User$participatedArgs<ExtArgs>
    chat?: boolean | User$chatArgs<ExtArgs>
    doubtAsked?: boolean | User$doubtAskedArgs<ExtArgs>
    doubtAnswered?: boolean | User$doubtAnsweredArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "avatarUrl", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spaceCreated?: boolean | User$spaceCreatedArgs<ExtArgs>
    participated?: boolean | User$participatedArgs<ExtArgs>
    chat?: boolean | User$chatArgs<ExtArgs>
    doubtAsked?: boolean | User$doubtAskedArgs<ExtArgs>
    doubtAnswered?: boolean | User$doubtAnsweredArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      spaceCreated: Prisma.$SpacePayload<ExtArgs>[]
      participated: Prisma.$SpaceParticipantPayload<ExtArgs>[]
      chat: Prisma.$ChatPayload<ExtArgs>[]
      doubtAsked: Prisma.$DoubtPayload<ExtArgs>[]
      doubtAnswered: Prisma.$DoubtPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      avatarUrl: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spaceCreated<T extends User$spaceCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$spaceCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participated<T extends User$participatedArgs<ExtArgs> = {}>(args?: Subset<T, User$participatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chat<T extends User$chatArgs<ExtArgs> = {}>(args?: Subset<T, User$chatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doubtAsked<T extends User$doubtAskedArgs<ExtArgs> = {}>(args?: Subset<T, User$doubtAskedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doubtAnswered<T extends User$doubtAnsweredArgs<ExtArgs> = {}>(args?: Subset<T, User$doubtAnsweredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.spaceCreated
   */
  export type User$spaceCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    where?: SpaceWhereInput
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    cursor?: SpaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * User.participated
   */
  export type User$participatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantInclude<ExtArgs> | null
    where?: SpaceParticipantWhereInput
    orderBy?: SpaceParticipantOrderByWithRelationInput | SpaceParticipantOrderByWithRelationInput[]
    cursor?: SpaceParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpaceParticipantScalarFieldEnum | SpaceParticipantScalarFieldEnum[]
  }

  /**
   * User.chat
   */
  export type User$chatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.doubtAsked
   */
  export type User$doubtAskedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    where?: DoubtWhereInput
    orderBy?: DoubtOrderByWithRelationInput | DoubtOrderByWithRelationInput[]
    cursor?: DoubtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoubtScalarFieldEnum | DoubtScalarFieldEnum[]
  }

  /**
   * User.doubtAnswered
   */
  export type User$doubtAnsweredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    where?: DoubtWhereInput
    orderBy?: DoubtOrderByWithRelationInput | DoubtOrderByWithRelationInput[]
    cursor?: DoubtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoubtScalarFieldEnum | DoubtScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Space
   */

  export type AggregateSpace = {
    _count: SpaceCountAggregateOutputType | null
    _avg: SpaceAvgAggregateOutputType | null
    _sum: SpaceSumAggregateOutputType | null
    _min: SpaceMinAggregateOutputType | null
    _max: SpaceMaxAggregateOutputType | null
  }

  export type SpaceAvgAggregateOutputType = {
    id: number | null
  }

  export type SpaceSumAggregateOutputType = {
    id: number | null
  }

  export type SpaceMinAggregateOutputType = {
    id: number | null
    name: string | null
    subject: string | null
    isLive: boolean | null
    createdAt: Date | null
    adminId: string | null
  }

  export type SpaceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    subject: string | null
    isLive: boolean | null
    createdAt: Date | null
    adminId: string | null
  }

  export type SpaceCountAggregateOutputType = {
    id: number
    name: number
    subject: number
    isLive: number
    createdAt: number
    adminId: number
    _all: number
  }


  export type SpaceAvgAggregateInputType = {
    id?: true
  }

  export type SpaceSumAggregateInputType = {
    id?: true
  }

  export type SpaceMinAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    isLive?: true
    createdAt?: true
    adminId?: true
  }

  export type SpaceMaxAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    isLive?: true
    createdAt?: true
    adminId?: true
  }

  export type SpaceCountAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    isLive?: true
    createdAt?: true
    adminId?: true
    _all?: true
  }

  export type SpaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Space to aggregate.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spaces
    **/
    _count?: true | SpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpaceMaxAggregateInputType
  }

  export type GetSpaceAggregateType<T extends SpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpace[P]>
      : GetScalarType<T[P], AggregateSpace[P]>
  }




  export type SpaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceWhereInput
    orderBy?: SpaceOrderByWithAggregationInput | SpaceOrderByWithAggregationInput[]
    by: SpaceScalarFieldEnum[] | SpaceScalarFieldEnum
    having?: SpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpaceCountAggregateInputType | true
    _avg?: SpaceAvgAggregateInputType
    _sum?: SpaceSumAggregateInputType
    _min?: SpaceMinAggregateInputType
    _max?: SpaceMaxAggregateInputType
  }

  export type SpaceGroupByOutputType = {
    id: number
    name: string
    subject: string
    isLive: boolean
    createdAt: Date
    adminId: string
    _count: SpaceCountAggregateOutputType | null
    _avg: SpaceAvgAggregateOutputType | null
    _sum: SpaceSumAggregateOutputType | null
    _min: SpaceMinAggregateOutputType | null
    _max: SpaceMaxAggregateOutputType | null
  }

  type GetSpaceGroupByPayload<T extends SpaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceGroupByOutputType[P]>
        }
      >
    >


  export type SpaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    isLive?: boolean
    createdAt?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | Space$chatArgs<ExtArgs>
    participants?: boolean | Space$participantsArgs<ExtArgs>
    doubt?: boolean | Space$doubtArgs<ExtArgs>
    _count?: boolean | SpaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>

  export type SpaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    isLive?: boolean
    createdAt?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>

  export type SpaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    isLive?: boolean
    createdAt?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>

  export type SpaceSelectScalar = {
    id?: boolean
    name?: boolean
    subject?: boolean
    isLive?: boolean
    createdAt?: boolean
    adminId?: boolean
  }

  export type SpaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subject" | "isLive" | "createdAt" | "adminId", ExtArgs["result"]["space"]>
  export type SpaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | Space$chatArgs<ExtArgs>
    participants?: boolean | Space$participantsArgs<ExtArgs>
    doubt?: boolean | Space$doubtArgs<ExtArgs>
    _count?: boolean | SpaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SpaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SpacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Space"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>[]
      participants: Prisma.$SpaceParticipantPayload<ExtArgs>[]
      doubt: Prisma.$DoubtPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      subject: string
      isLive: boolean
      createdAt: Date
      adminId: string
    }, ExtArgs["result"]["space"]>
    composites: {}
  }

  type SpaceGetPayload<S extends boolean | null | undefined | SpaceDefaultArgs> = $Result.GetResult<Prisma.$SpacePayload, S>

  type SpaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpaceCountAggregateInputType | true
    }

  export interface SpaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Space'], meta: { name: 'Space' } }
    /**
     * Find zero or one Space that matches the filter.
     * @param {SpaceFindUniqueArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpaceFindUniqueArgs>(args: SelectSubset<T, SpaceFindUniqueArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Space that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpaceFindUniqueOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpaceFindUniqueOrThrowArgs>(args: SelectSubset<T, SpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Space that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpaceFindFirstArgs>(args?: SelectSubset<T, SpaceFindFirstArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Space that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpaceFindFirstOrThrowArgs>(args?: SelectSubset<T, SpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spaces
     * const spaces = await prisma.space.findMany()
     * 
     * // Get first 10 Spaces
     * const spaces = await prisma.space.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spaceWithIdOnly = await prisma.space.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpaceFindManyArgs>(args?: SelectSubset<T, SpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Space.
     * @param {SpaceCreateArgs} args - Arguments to create a Space.
     * @example
     * // Create one Space
     * const Space = await prisma.space.create({
     *   data: {
     *     // ... data to create a Space
     *   }
     * })
     * 
     */
    create<T extends SpaceCreateArgs>(args: SelectSubset<T, SpaceCreateArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spaces.
     * @param {SpaceCreateManyArgs} args - Arguments to create many Spaces.
     * @example
     * // Create many Spaces
     * const space = await prisma.space.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpaceCreateManyArgs>(args?: SelectSubset<T, SpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spaces and returns the data saved in the database.
     * @param {SpaceCreateManyAndReturnArgs} args - Arguments to create many Spaces.
     * @example
     * // Create many Spaces
     * const space = await prisma.space.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spaces and only return the `id`
     * const spaceWithIdOnly = await prisma.space.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpaceCreateManyAndReturnArgs>(args?: SelectSubset<T, SpaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Space.
     * @param {SpaceDeleteArgs} args - Arguments to delete one Space.
     * @example
     * // Delete one Space
     * const Space = await prisma.space.delete({
     *   where: {
     *     // ... filter to delete one Space
     *   }
     * })
     * 
     */
    delete<T extends SpaceDeleteArgs>(args: SelectSubset<T, SpaceDeleteArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Space.
     * @param {SpaceUpdateArgs} args - Arguments to update one Space.
     * @example
     * // Update one Space
     * const space = await prisma.space.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpaceUpdateArgs>(args: SelectSubset<T, SpaceUpdateArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spaces.
     * @param {SpaceDeleteManyArgs} args - Arguments to filter Spaces to delete.
     * @example
     * // Delete a few Spaces
     * const { count } = await prisma.space.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpaceDeleteManyArgs>(args?: SelectSubset<T, SpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spaces
     * const space = await prisma.space.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpaceUpdateManyArgs>(args: SelectSubset<T, SpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spaces and returns the data updated in the database.
     * @param {SpaceUpdateManyAndReturnArgs} args - Arguments to update many Spaces.
     * @example
     * // Update many Spaces
     * const space = await prisma.space.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spaces and only return the `id`
     * const spaceWithIdOnly = await prisma.space.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpaceUpdateManyAndReturnArgs>(args: SelectSubset<T, SpaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Space.
     * @param {SpaceUpsertArgs} args - Arguments to update or create a Space.
     * @example
     * // Update or create a Space
     * const space = await prisma.space.upsert({
     *   create: {
     *     // ... data to create a Space
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Space we want to update
     *   }
     * })
     */
    upsert<T extends SpaceUpsertArgs>(args: SelectSubset<T, SpaceUpsertArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceCountArgs} args - Arguments to filter Spaces to count.
     * @example
     * // Count the number of Spaces
     * const count = await prisma.space.count({
     *   where: {
     *     // ... the filter for the Spaces we want to count
     *   }
     * })
    **/
    count<T extends SpaceCountArgs>(
      args?: Subset<T, SpaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpaceAggregateArgs>(args: Subset<T, SpaceAggregateArgs>): Prisma.PrismaPromise<GetSpaceAggregateType<T>>

    /**
     * Group by Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceGroupByArgs['orderBy'] }
        : { orderBy?: SpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Space model
   */
  readonly fields: SpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Space.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends Space$chatArgs<ExtArgs> = {}>(args?: Subset<T, Space$chatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Space$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Space$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doubt<T extends Space$doubtArgs<ExtArgs> = {}>(args?: Subset<T, Space$doubtArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Space model
   */
  interface SpaceFieldRefs {
    readonly id: FieldRef<"Space", 'Int'>
    readonly name: FieldRef<"Space", 'String'>
    readonly subject: FieldRef<"Space", 'String'>
    readonly isLive: FieldRef<"Space", 'Boolean'>
    readonly createdAt: FieldRef<"Space", 'DateTime'>
    readonly adminId: FieldRef<"Space", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Space findUnique
   */
  export type SpaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space findUniqueOrThrow
   */
  export type SpaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space findFirst
   */
  export type SpaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spaces.
     */
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space findFirstOrThrow
   */
  export type SpaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spaces.
     */
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space findMany
   */
  export type SpaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Spaces to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space create
   */
  export type SpaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Space.
     */
    data: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>
  }

  /**
   * Space createMany
   */
  export type SpaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Spaces.
     */
    data: SpaceCreateManyInput | SpaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Space createManyAndReturn
   */
  export type SpaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * The data used to create many Spaces.
     */
    data: SpaceCreateManyInput | SpaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Space update
   */
  export type SpaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Space.
     */
    data: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>
    /**
     * Choose, which Space to update.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space updateMany
   */
  export type SpaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spaces.
     */
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyInput>
    /**
     * Filter which Spaces to update
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to update.
     */
    limit?: number
  }

  /**
   * Space updateManyAndReturn
   */
  export type SpaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * The data used to update Spaces.
     */
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyInput>
    /**
     * Filter which Spaces to update
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Space upsert
   */
  export type SpaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Space to update in case it exists.
     */
    where: SpaceWhereUniqueInput
    /**
     * In case the Space found by the `where` argument doesn't exist, create a new Space with this data.
     */
    create: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>
    /**
     * In case the Space was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>
  }

  /**
   * Space delete
   */
  export type SpaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter which Space to delete.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space deleteMany
   */
  export type SpaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spaces to delete
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to delete.
     */
    limit?: number
  }

  /**
   * Space.chat
   */
  export type Space$chatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Space.participants
   */
  export type Space$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantInclude<ExtArgs> | null
    where?: SpaceParticipantWhereInput
    orderBy?: SpaceParticipantOrderByWithRelationInput | SpaceParticipantOrderByWithRelationInput[]
    cursor?: SpaceParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpaceParticipantScalarFieldEnum | SpaceParticipantScalarFieldEnum[]
  }

  /**
   * Space.doubt
   */
  export type Space$doubtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    where?: DoubtWhereInput
    orderBy?: DoubtOrderByWithRelationInput | DoubtOrderByWithRelationInput[]
    cursor?: DoubtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoubtScalarFieldEnum | DoubtScalarFieldEnum[]
  }

  /**
   * Space without action
   */
  export type SpaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
  }


  /**
   * Model SpaceParticipant
   */

  export type AggregateSpaceParticipant = {
    _count: SpaceParticipantCountAggregateOutputType | null
    _avg: SpaceParticipantAvgAggregateOutputType | null
    _sum: SpaceParticipantSumAggregateOutputType | null
    _min: SpaceParticipantMinAggregateOutputType | null
    _max: SpaceParticipantMaxAggregateOutputType | null
  }

  export type SpaceParticipantAvgAggregateOutputType = {
    spaceId: number | null
  }

  export type SpaceParticipantSumAggregateOutputType = {
    spaceId: number | null
  }

  export type SpaceParticipantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    spaceId: number | null
    joinedAt: Date | null
    role: $Enums.Roles | null
  }

  export type SpaceParticipantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    spaceId: number | null
    joinedAt: Date | null
    role: $Enums.Roles | null
  }

  export type SpaceParticipantCountAggregateOutputType = {
    id: number
    userId: number
    spaceId: number
    joinedAt: number
    role: number
    _all: number
  }


  export type SpaceParticipantAvgAggregateInputType = {
    spaceId?: true
  }

  export type SpaceParticipantSumAggregateInputType = {
    spaceId?: true
  }

  export type SpaceParticipantMinAggregateInputType = {
    id?: true
    userId?: true
    spaceId?: true
    joinedAt?: true
    role?: true
  }

  export type SpaceParticipantMaxAggregateInputType = {
    id?: true
    userId?: true
    spaceId?: true
    joinedAt?: true
    role?: true
  }

  export type SpaceParticipantCountAggregateInputType = {
    id?: true
    userId?: true
    spaceId?: true
    joinedAt?: true
    role?: true
    _all?: true
  }

  export type SpaceParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpaceParticipant to aggregate.
     */
    where?: SpaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceParticipants to fetch.
     */
    orderBy?: SpaceParticipantOrderByWithRelationInput | SpaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpaceParticipants
    **/
    _count?: true | SpaceParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpaceParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpaceParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpaceParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpaceParticipantMaxAggregateInputType
  }

  export type GetSpaceParticipantAggregateType<T extends SpaceParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateSpaceParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpaceParticipant[P]>
      : GetScalarType<T[P], AggregateSpaceParticipant[P]>
  }




  export type SpaceParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceParticipantWhereInput
    orderBy?: SpaceParticipantOrderByWithAggregationInput | SpaceParticipantOrderByWithAggregationInput[]
    by: SpaceParticipantScalarFieldEnum[] | SpaceParticipantScalarFieldEnum
    having?: SpaceParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpaceParticipantCountAggregateInputType | true
    _avg?: SpaceParticipantAvgAggregateInputType
    _sum?: SpaceParticipantSumAggregateInputType
    _min?: SpaceParticipantMinAggregateInputType
    _max?: SpaceParticipantMaxAggregateInputType
  }

  export type SpaceParticipantGroupByOutputType = {
    id: string
    userId: string
    spaceId: number
    joinedAt: Date
    role: $Enums.Roles
    _count: SpaceParticipantCountAggregateOutputType | null
    _avg: SpaceParticipantAvgAggregateOutputType | null
    _sum: SpaceParticipantSumAggregateOutputType | null
    _min: SpaceParticipantMinAggregateOutputType | null
    _max: SpaceParticipantMaxAggregateOutputType | null
  }

  type GetSpaceParticipantGroupByPayload<T extends SpaceParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpaceParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpaceParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceParticipantGroupByOutputType[P]>
        }
      >
    >


  export type SpaceParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    spaceId?: boolean
    joinedAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spaceParticipant"]>

  export type SpaceParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    spaceId?: boolean
    joinedAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spaceParticipant"]>

  export type SpaceParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    spaceId?: boolean
    joinedAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spaceParticipant"]>

  export type SpaceParticipantSelectScalar = {
    id?: boolean
    userId?: boolean
    spaceId?: boolean
    joinedAt?: boolean
    role?: boolean
  }

  export type SpaceParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "spaceId" | "joinedAt" | "role", ExtArgs["result"]["spaceParticipant"]>
  export type SpaceParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }
  export type SpaceParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }
  export type SpaceParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }

  export type $SpaceParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpaceParticipant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      space: Prisma.$SpacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      spaceId: number
      joinedAt: Date
      role: $Enums.Roles
    }, ExtArgs["result"]["spaceParticipant"]>
    composites: {}
  }

  type SpaceParticipantGetPayload<S extends boolean | null | undefined | SpaceParticipantDefaultArgs> = $Result.GetResult<Prisma.$SpaceParticipantPayload, S>

  type SpaceParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpaceParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpaceParticipantCountAggregateInputType | true
    }

  export interface SpaceParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpaceParticipant'], meta: { name: 'SpaceParticipant' } }
    /**
     * Find zero or one SpaceParticipant that matches the filter.
     * @param {SpaceParticipantFindUniqueArgs} args - Arguments to find a SpaceParticipant
     * @example
     * // Get one SpaceParticipant
     * const spaceParticipant = await prisma.spaceParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpaceParticipantFindUniqueArgs>(args: SelectSubset<T, SpaceParticipantFindUniqueArgs<ExtArgs>>): Prisma__SpaceParticipantClient<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpaceParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpaceParticipantFindUniqueOrThrowArgs} args - Arguments to find a SpaceParticipant
     * @example
     * // Get one SpaceParticipant
     * const spaceParticipant = await prisma.spaceParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpaceParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, SpaceParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpaceParticipantClient<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpaceParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceParticipantFindFirstArgs} args - Arguments to find a SpaceParticipant
     * @example
     * // Get one SpaceParticipant
     * const spaceParticipant = await prisma.spaceParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpaceParticipantFindFirstArgs>(args?: SelectSubset<T, SpaceParticipantFindFirstArgs<ExtArgs>>): Prisma__SpaceParticipantClient<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpaceParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceParticipantFindFirstOrThrowArgs} args - Arguments to find a SpaceParticipant
     * @example
     * // Get one SpaceParticipant
     * const spaceParticipant = await prisma.spaceParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpaceParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, SpaceParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpaceParticipantClient<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpaceParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpaceParticipants
     * const spaceParticipants = await prisma.spaceParticipant.findMany()
     * 
     * // Get first 10 SpaceParticipants
     * const spaceParticipants = await prisma.spaceParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spaceParticipantWithIdOnly = await prisma.spaceParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpaceParticipantFindManyArgs>(args?: SelectSubset<T, SpaceParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpaceParticipant.
     * @param {SpaceParticipantCreateArgs} args - Arguments to create a SpaceParticipant.
     * @example
     * // Create one SpaceParticipant
     * const SpaceParticipant = await prisma.spaceParticipant.create({
     *   data: {
     *     // ... data to create a SpaceParticipant
     *   }
     * })
     * 
     */
    create<T extends SpaceParticipantCreateArgs>(args: SelectSubset<T, SpaceParticipantCreateArgs<ExtArgs>>): Prisma__SpaceParticipantClient<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpaceParticipants.
     * @param {SpaceParticipantCreateManyArgs} args - Arguments to create many SpaceParticipants.
     * @example
     * // Create many SpaceParticipants
     * const spaceParticipant = await prisma.spaceParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpaceParticipantCreateManyArgs>(args?: SelectSubset<T, SpaceParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpaceParticipants and returns the data saved in the database.
     * @param {SpaceParticipantCreateManyAndReturnArgs} args - Arguments to create many SpaceParticipants.
     * @example
     * // Create many SpaceParticipants
     * const spaceParticipant = await prisma.spaceParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpaceParticipants and only return the `id`
     * const spaceParticipantWithIdOnly = await prisma.spaceParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpaceParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, SpaceParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpaceParticipant.
     * @param {SpaceParticipantDeleteArgs} args - Arguments to delete one SpaceParticipant.
     * @example
     * // Delete one SpaceParticipant
     * const SpaceParticipant = await prisma.spaceParticipant.delete({
     *   where: {
     *     // ... filter to delete one SpaceParticipant
     *   }
     * })
     * 
     */
    delete<T extends SpaceParticipantDeleteArgs>(args: SelectSubset<T, SpaceParticipantDeleteArgs<ExtArgs>>): Prisma__SpaceParticipantClient<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpaceParticipant.
     * @param {SpaceParticipantUpdateArgs} args - Arguments to update one SpaceParticipant.
     * @example
     * // Update one SpaceParticipant
     * const spaceParticipant = await prisma.spaceParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpaceParticipantUpdateArgs>(args: SelectSubset<T, SpaceParticipantUpdateArgs<ExtArgs>>): Prisma__SpaceParticipantClient<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpaceParticipants.
     * @param {SpaceParticipantDeleteManyArgs} args - Arguments to filter SpaceParticipants to delete.
     * @example
     * // Delete a few SpaceParticipants
     * const { count } = await prisma.spaceParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpaceParticipantDeleteManyArgs>(args?: SelectSubset<T, SpaceParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpaceParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpaceParticipants
     * const spaceParticipant = await prisma.spaceParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpaceParticipantUpdateManyArgs>(args: SelectSubset<T, SpaceParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpaceParticipants and returns the data updated in the database.
     * @param {SpaceParticipantUpdateManyAndReturnArgs} args - Arguments to update many SpaceParticipants.
     * @example
     * // Update many SpaceParticipants
     * const spaceParticipant = await prisma.spaceParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpaceParticipants and only return the `id`
     * const spaceParticipantWithIdOnly = await prisma.spaceParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpaceParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, SpaceParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpaceParticipant.
     * @param {SpaceParticipantUpsertArgs} args - Arguments to update or create a SpaceParticipant.
     * @example
     * // Update or create a SpaceParticipant
     * const spaceParticipant = await prisma.spaceParticipant.upsert({
     *   create: {
     *     // ... data to create a SpaceParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpaceParticipant we want to update
     *   }
     * })
     */
    upsert<T extends SpaceParticipantUpsertArgs>(args: SelectSubset<T, SpaceParticipantUpsertArgs<ExtArgs>>): Prisma__SpaceParticipantClient<$Result.GetResult<Prisma.$SpaceParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpaceParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceParticipantCountArgs} args - Arguments to filter SpaceParticipants to count.
     * @example
     * // Count the number of SpaceParticipants
     * const count = await prisma.spaceParticipant.count({
     *   where: {
     *     // ... the filter for the SpaceParticipants we want to count
     *   }
     * })
    **/
    count<T extends SpaceParticipantCountArgs>(
      args?: Subset<T, SpaceParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpaceParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpaceParticipantAggregateArgs>(args: Subset<T, SpaceParticipantAggregateArgs>): Prisma.PrismaPromise<GetSpaceParticipantAggregateType<T>>

    /**
     * Group by SpaceParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpaceParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceParticipantGroupByArgs['orderBy'] }
        : { orderBy?: SpaceParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpaceParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpaceParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpaceParticipant model
   */
  readonly fields: SpaceParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpaceParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpaceParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    space<T extends SpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpaceDefaultArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpaceParticipant model
   */
  interface SpaceParticipantFieldRefs {
    readonly id: FieldRef<"SpaceParticipant", 'String'>
    readonly userId: FieldRef<"SpaceParticipant", 'String'>
    readonly spaceId: FieldRef<"SpaceParticipant", 'Int'>
    readonly joinedAt: FieldRef<"SpaceParticipant", 'DateTime'>
    readonly role: FieldRef<"SpaceParticipant", 'Roles'>
  }
    

  // Custom InputTypes
  /**
   * SpaceParticipant findUnique
   */
  export type SpaceParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SpaceParticipant to fetch.
     */
    where: SpaceParticipantWhereUniqueInput
  }

  /**
   * SpaceParticipant findUniqueOrThrow
   */
  export type SpaceParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SpaceParticipant to fetch.
     */
    where: SpaceParticipantWhereUniqueInput
  }

  /**
   * SpaceParticipant findFirst
   */
  export type SpaceParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SpaceParticipant to fetch.
     */
    where?: SpaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceParticipants to fetch.
     */
    orderBy?: SpaceParticipantOrderByWithRelationInput | SpaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpaceParticipants.
     */
    cursor?: SpaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpaceParticipants.
     */
    distinct?: SpaceParticipantScalarFieldEnum | SpaceParticipantScalarFieldEnum[]
  }

  /**
   * SpaceParticipant findFirstOrThrow
   */
  export type SpaceParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SpaceParticipant to fetch.
     */
    where?: SpaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceParticipants to fetch.
     */
    orderBy?: SpaceParticipantOrderByWithRelationInput | SpaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpaceParticipants.
     */
    cursor?: SpaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpaceParticipants.
     */
    distinct?: SpaceParticipantScalarFieldEnum | SpaceParticipantScalarFieldEnum[]
  }

  /**
   * SpaceParticipant findMany
   */
  export type SpaceParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SpaceParticipants to fetch.
     */
    where?: SpaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceParticipants to fetch.
     */
    orderBy?: SpaceParticipantOrderByWithRelationInput | SpaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpaceParticipants.
     */
    cursor?: SpaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceParticipants.
     */
    skip?: number
    distinct?: SpaceParticipantScalarFieldEnum | SpaceParticipantScalarFieldEnum[]
  }

  /**
   * SpaceParticipant create
   */
  export type SpaceParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a SpaceParticipant.
     */
    data: XOR<SpaceParticipantCreateInput, SpaceParticipantUncheckedCreateInput>
  }

  /**
   * SpaceParticipant createMany
   */
  export type SpaceParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpaceParticipants.
     */
    data: SpaceParticipantCreateManyInput | SpaceParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpaceParticipant createManyAndReturn
   */
  export type SpaceParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many SpaceParticipants.
     */
    data: SpaceParticipantCreateManyInput | SpaceParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpaceParticipant update
   */
  export type SpaceParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a SpaceParticipant.
     */
    data: XOR<SpaceParticipantUpdateInput, SpaceParticipantUncheckedUpdateInput>
    /**
     * Choose, which SpaceParticipant to update.
     */
    where: SpaceParticipantWhereUniqueInput
  }

  /**
   * SpaceParticipant updateMany
   */
  export type SpaceParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpaceParticipants.
     */
    data: XOR<SpaceParticipantUpdateManyMutationInput, SpaceParticipantUncheckedUpdateManyInput>
    /**
     * Filter which SpaceParticipants to update
     */
    where?: SpaceParticipantWhereInput
    /**
     * Limit how many SpaceParticipants to update.
     */
    limit?: number
  }

  /**
   * SpaceParticipant updateManyAndReturn
   */
  export type SpaceParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * The data used to update SpaceParticipants.
     */
    data: XOR<SpaceParticipantUpdateManyMutationInput, SpaceParticipantUncheckedUpdateManyInput>
    /**
     * Filter which SpaceParticipants to update
     */
    where?: SpaceParticipantWhereInput
    /**
     * Limit how many SpaceParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpaceParticipant upsert
   */
  export type SpaceParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the SpaceParticipant to update in case it exists.
     */
    where: SpaceParticipantWhereUniqueInput
    /**
     * In case the SpaceParticipant found by the `where` argument doesn't exist, create a new SpaceParticipant with this data.
     */
    create: XOR<SpaceParticipantCreateInput, SpaceParticipantUncheckedCreateInput>
    /**
     * In case the SpaceParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpaceParticipantUpdateInput, SpaceParticipantUncheckedUpdateInput>
  }

  /**
   * SpaceParticipant delete
   */
  export type SpaceParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantInclude<ExtArgs> | null
    /**
     * Filter which SpaceParticipant to delete.
     */
    where: SpaceParticipantWhereUniqueInput
  }

  /**
   * SpaceParticipant deleteMany
   */
  export type SpaceParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpaceParticipants to delete
     */
    where?: SpaceParticipantWhereInput
    /**
     * Limit how many SpaceParticipants to delete.
     */
    limit?: number
  }

  /**
   * SpaceParticipant without action
   */
  export type SpaceParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceParticipant
     */
    select?: SpaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceParticipant
     */
    omit?: SpaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
    spaceId: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
    spaceId: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    message: string | null
    userId: string | null
    spaceId: number | null
    sentAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    message: string | null
    userId: string | null
    spaceId: number | null
    sentAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    message: number
    userId: number
    spaceId: number
    sentAt: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
    spaceId?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
    spaceId?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    message?: true
    userId?: true
    spaceId?: true
    sentAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    message?: true
    userId?: true
    spaceId?: true
    sentAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    message?: true
    userId?: true
    spaceId?: true
    sentAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    message: string
    userId: string
    spaceId: number
    sentAt: Date
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    userId?: boolean
    spaceId?: boolean
    sentAt?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    userId?: boolean
    spaceId?: boolean
    sentAt?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    userId?: boolean
    spaceId?: boolean
    sentAt?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    message?: boolean
    userId?: boolean
    spaceId?: boolean
    sentAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "userId" | "spaceId" | "sentAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      space: Prisma.$SpacePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      userId: string
      spaceId: number
      sentAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    space<T extends SpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpaceDefaultArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'Int'>
    readonly message: FieldRef<"Chat", 'String'>
    readonly userId: FieldRef<"Chat", 'String'>
    readonly spaceId: FieldRef<"Chat", 'Int'>
    readonly sentAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Doubt
   */

  export type AggregateDoubt = {
    _count: DoubtCountAggregateOutputType | null
    _avg: DoubtAvgAggregateOutputType | null
    _sum: DoubtSumAggregateOutputType | null
    _min: DoubtMinAggregateOutputType | null
    _max: DoubtMaxAggregateOutputType | null
  }

  export type DoubtAvgAggregateOutputType = {
    askedSpaceId: number | null
  }

  export type DoubtSumAggregateOutputType = {
    askedSpaceId: number | null
  }

  export type DoubtMinAggregateOutputType = {
    id: string | null
    title: string | null
    answer: string | null
    askedById: string | null
    answeredById: string | null
    askedAt: Date | null
    answeredAt: Date | null
    askedSpaceId: number | null
  }

  export type DoubtMaxAggregateOutputType = {
    id: string | null
    title: string | null
    answer: string | null
    askedById: string | null
    answeredById: string | null
    askedAt: Date | null
    answeredAt: Date | null
    askedSpaceId: number | null
  }

  export type DoubtCountAggregateOutputType = {
    id: number
    title: number
    answer: number
    askedById: number
    answeredById: number
    askedAt: number
    answeredAt: number
    askedSpaceId: number
    _all: number
  }


  export type DoubtAvgAggregateInputType = {
    askedSpaceId?: true
  }

  export type DoubtSumAggregateInputType = {
    askedSpaceId?: true
  }

  export type DoubtMinAggregateInputType = {
    id?: true
    title?: true
    answer?: true
    askedById?: true
    answeredById?: true
    askedAt?: true
    answeredAt?: true
    askedSpaceId?: true
  }

  export type DoubtMaxAggregateInputType = {
    id?: true
    title?: true
    answer?: true
    askedById?: true
    answeredById?: true
    askedAt?: true
    answeredAt?: true
    askedSpaceId?: true
  }

  export type DoubtCountAggregateInputType = {
    id?: true
    title?: true
    answer?: true
    askedById?: true
    answeredById?: true
    askedAt?: true
    answeredAt?: true
    askedSpaceId?: true
    _all?: true
  }

  export type DoubtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doubt to aggregate.
     */
    where?: DoubtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doubts to fetch.
     */
    orderBy?: DoubtOrderByWithRelationInput | DoubtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoubtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doubts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doubts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doubts
    **/
    _count?: true | DoubtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoubtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoubtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoubtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoubtMaxAggregateInputType
  }

  export type GetDoubtAggregateType<T extends DoubtAggregateArgs> = {
        [P in keyof T & keyof AggregateDoubt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoubt[P]>
      : GetScalarType<T[P], AggregateDoubt[P]>
  }




  export type DoubtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoubtWhereInput
    orderBy?: DoubtOrderByWithAggregationInput | DoubtOrderByWithAggregationInput[]
    by: DoubtScalarFieldEnum[] | DoubtScalarFieldEnum
    having?: DoubtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoubtCountAggregateInputType | true
    _avg?: DoubtAvgAggregateInputType
    _sum?: DoubtSumAggregateInputType
    _min?: DoubtMinAggregateInputType
    _max?: DoubtMaxAggregateInputType
  }

  export type DoubtGroupByOutputType = {
    id: string
    title: string
    answer: string | null
    askedById: string
    answeredById: string
    askedAt: Date
    answeredAt: Date
    askedSpaceId: number
    _count: DoubtCountAggregateOutputType | null
    _avg: DoubtAvgAggregateOutputType | null
    _sum: DoubtSumAggregateOutputType | null
    _min: DoubtMinAggregateOutputType | null
    _max: DoubtMaxAggregateOutputType | null
  }

  type GetDoubtGroupByPayload<T extends DoubtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoubtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoubtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoubtGroupByOutputType[P]>
            : GetScalarType<T[P], DoubtGroupByOutputType[P]>
        }
      >
    >


  export type DoubtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    answer?: boolean
    askedById?: boolean
    answeredById?: boolean
    askedAt?: boolean
    answeredAt?: boolean
    askedSpaceId?: boolean
    askedBy?: boolean | UserDefaultArgs<ExtArgs>
    answeredBy?: boolean | Doubt$answeredByArgs<ExtArgs>
    askedSpace?: boolean | SpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doubt"]>

  export type DoubtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    answer?: boolean
    askedById?: boolean
    answeredById?: boolean
    askedAt?: boolean
    answeredAt?: boolean
    askedSpaceId?: boolean
    askedBy?: boolean | UserDefaultArgs<ExtArgs>
    answeredBy?: boolean | Doubt$answeredByArgs<ExtArgs>
    askedSpace?: boolean | SpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doubt"]>

  export type DoubtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    answer?: boolean
    askedById?: boolean
    answeredById?: boolean
    askedAt?: boolean
    answeredAt?: boolean
    askedSpaceId?: boolean
    askedBy?: boolean | UserDefaultArgs<ExtArgs>
    answeredBy?: boolean | Doubt$answeredByArgs<ExtArgs>
    askedSpace?: boolean | SpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doubt"]>

  export type DoubtSelectScalar = {
    id?: boolean
    title?: boolean
    answer?: boolean
    askedById?: boolean
    answeredById?: boolean
    askedAt?: boolean
    answeredAt?: boolean
    askedSpaceId?: boolean
  }

  export type DoubtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "answer" | "askedById" | "answeredById" | "askedAt" | "answeredAt" | "askedSpaceId", ExtArgs["result"]["doubt"]>
  export type DoubtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    askedBy?: boolean | UserDefaultArgs<ExtArgs>
    answeredBy?: boolean | Doubt$answeredByArgs<ExtArgs>
    askedSpace?: boolean | SpaceDefaultArgs<ExtArgs>
  }
  export type DoubtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    askedBy?: boolean | UserDefaultArgs<ExtArgs>
    answeredBy?: boolean | Doubt$answeredByArgs<ExtArgs>
    askedSpace?: boolean | SpaceDefaultArgs<ExtArgs>
  }
  export type DoubtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    askedBy?: boolean | UserDefaultArgs<ExtArgs>
    answeredBy?: boolean | Doubt$answeredByArgs<ExtArgs>
    askedSpace?: boolean | SpaceDefaultArgs<ExtArgs>
  }

  export type $DoubtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doubt"
    objects: {
      askedBy: Prisma.$UserPayload<ExtArgs>
      answeredBy: Prisma.$UserPayload<ExtArgs> | null
      askedSpace: Prisma.$SpacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      answer: string | null
      askedById: string
      answeredById: string
      askedAt: Date
      answeredAt: Date
      askedSpaceId: number
    }, ExtArgs["result"]["doubt"]>
    composites: {}
  }

  type DoubtGetPayload<S extends boolean | null | undefined | DoubtDefaultArgs> = $Result.GetResult<Prisma.$DoubtPayload, S>

  type DoubtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoubtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoubtCountAggregateInputType | true
    }

  export interface DoubtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doubt'], meta: { name: 'Doubt' } }
    /**
     * Find zero or one Doubt that matches the filter.
     * @param {DoubtFindUniqueArgs} args - Arguments to find a Doubt
     * @example
     * // Get one Doubt
     * const doubt = await prisma.doubt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoubtFindUniqueArgs>(args: SelectSubset<T, DoubtFindUniqueArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doubt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoubtFindUniqueOrThrowArgs} args - Arguments to find a Doubt
     * @example
     * // Get one Doubt
     * const doubt = await prisma.doubt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoubtFindUniqueOrThrowArgs>(args: SelectSubset<T, DoubtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doubt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtFindFirstArgs} args - Arguments to find a Doubt
     * @example
     * // Get one Doubt
     * const doubt = await prisma.doubt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoubtFindFirstArgs>(args?: SelectSubset<T, DoubtFindFirstArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doubt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtFindFirstOrThrowArgs} args - Arguments to find a Doubt
     * @example
     * // Get one Doubt
     * const doubt = await prisma.doubt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoubtFindFirstOrThrowArgs>(args?: SelectSubset<T, DoubtFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doubts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doubts
     * const doubts = await prisma.doubt.findMany()
     * 
     * // Get first 10 Doubts
     * const doubts = await prisma.doubt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doubtWithIdOnly = await prisma.doubt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoubtFindManyArgs>(args?: SelectSubset<T, DoubtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doubt.
     * @param {DoubtCreateArgs} args - Arguments to create a Doubt.
     * @example
     * // Create one Doubt
     * const Doubt = await prisma.doubt.create({
     *   data: {
     *     // ... data to create a Doubt
     *   }
     * })
     * 
     */
    create<T extends DoubtCreateArgs>(args: SelectSubset<T, DoubtCreateArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doubts.
     * @param {DoubtCreateManyArgs} args - Arguments to create many Doubts.
     * @example
     * // Create many Doubts
     * const doubt = await prisma.doubt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoubtCreateManyArgs>(args?: SelectSubset<T, DoubtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doubts and returns the data saved in the database.
     * @param {DoubtCreateManyAndReturnArgs} args - Arguments to create many Doubts.
     * @example
     * // Create many Doubts
     * const doubt = await prisma.doubt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doubts and only return the `id`
     * const doubtWithIdOnly = await prisma.doubt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoubtCreateManyAndReturnArgs>(args?: SelectSubset<T, DoubtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doubt.
     * @param {DoubtDeleteArgs} args - Arguments to delete one Doubt.
     * @example
     * // Delete one Doubt
     * const Doubt = await prisma.doubt.delete({
     *   where: {
     *     // ... filter to delete one Doubt
     *   }
     * })
     * 
     */
    delete<T extends DoubtDeleteArgs>(args: SelectSubset<T, DoubtDeleteArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doubt.
     * @param {DoubtUpdateArgs} args - Arguments to update one Doubt.
     * @example
     * // Update one Doubt
     * const doubt = await prisma.doubt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoubtUpdateArgs>(args: SelectSubset<T, DoubtUpdateArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doubts.
     * @param {DoubtDeleteManyArgs} args - Arguments to filter Doubts to delete.
     * @example
     * // Delete a few Doubts
     * const { count } = await prisma.doubt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoubtDeleteManyArgs>(args?: SelectSubset<T, DoubtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doubts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doubts
     * const doubt = await prisma.doubt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoubtUpdateManyArgs>(args: SelectSubset<T, DoubtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doubts and returns the data updated in the database.
     * @param {DoubtUpdateManyAndReturnArgs} args - Arguments to update many Doubts.
     * @example
     * // Update many Doubts
     * const doubt = await prisma.doubt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doubts and only return the `id`
     * const doubtWithIdOnly = await prisma.doubt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoubtUpdateManyAndReturnArgs>(args: SelectSubset<T, DoubtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doubt.
     * @param {DoubtUpsertArgs} args - Arguments to update or create a Doubt.
     * @example
     * // Update or create a Doubt
     * const doubt = await prisma.doubt.upsert({
     *   create: {
     *     // ... data to create a Doubt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doubt we want to update
     *   }
     * })
     */
    upsert<T extends DoubtUpsertArgs>(args: SelectSubset<T, DoubtUpsertArgs<ExtArgs>>): Prisma__DoubtClient<$Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doubts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtCountArgs} args - Arguments to filter Doubts to count.
     * @example
     * // Count the number of Doubts
     * const count = await prisma.doubt.count({
     *   where: {
     *     // ... the filter for the Doubts we want to count
     *   }
     * })
    **/
    count<T extends DoubtCountArgs>(
      args?: Subset<T, DoubtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoubtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doubt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoubtAggregateArgs>(args: Subset<T, DoubtAggregateArgs>): Prisma.PrismaPromise<GetDoubtAggregateType<T>>

    /**
     * Group by Doubt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoubtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoubtGroupByArgs['orderBy'] }
        : { orderBy?: DoubtGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoubtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoubtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doubt model
   */
  readonly fields: DoubtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doubt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoubtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    askedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answeredBy<T extends Doubt$answeredByArgs<ExtArgs> = {}>(args?: Subset<T, Doubt$answeredByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    askedSpace<T extends SpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpaceDefaultArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doubt model
   */
  interface DoubtFieldRefs {
    readonly id: FieldRef<"Doubt", 'String'>
    readonly title: FieldRef<"Doubt", 'String'>
    readonly answer: FieldRef<"Doubt", 'String'>
    readonly askedById: FieldRef<"Doubt", 'String'>
    readonly answeredById: FieldRef<"Doubt", 'String'>
    readonly askedAt: FieldRef<"Doubt", 'DateTime'>
    readonly answeredAt: FieldRef<"Doubt", 'DateTime'>
    readonly askedSpaceId: FieldRef<"Doubt", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Doubt findUnique
   */
  export type DoubtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * Filter, which Doubt to fetch.
     */
    where: DoubtWhereUniqueInput
  }

  /**
   * Doubt findUniqueOrThrow
   */
  export type DoubtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * Filter, which Doubt to fetch.
     */
    where: DoubtWhereUniqueInput
  }

  /**
   * Doubt findFirst
   */
  export type DoubtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * Filter, which Doubt to fetch.
     */
    where?: DoubtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doubts to fetch.
     */
    orderBy?: DoubtOrderByWithRelationInput | DoubtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doubts.
     */
    cursor?: DoubtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doubts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doubts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doubts.
     */
    distinct?: DoubtScalarFieldEnum | DoubtScalarFieldEnum[]
  }

  /**
   * Doubt findFirstOrThrow
   */
  export type DoubtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * Filter, which Doubt to fetch.
     */
    where?: DoubtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doubts to fetch.
     */
    orderBy?: DoubtOrderByWithRelationInput | DoubtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doubts.
     */
    cursor?: DoubtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doubts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doubts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doubts.
     */
    distinct?: DoubtScalarFieldEnum | DoubtScalarFieldEnum[]
  }

  /**
   * Doubt findMany
   */
  export type DoubtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * Filter, which Doubts to fetch.
     */
    where?: DoubtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doubts to fetch.
     */
    orderBy?: DoubtOrderByWithRelationInput | DoubtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doubts.
     */
    cursor?: DoubtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doubts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doubts.
     */
    skip?: number
    distinct?: DoubtScalarFieldEnum | DoubtScalarFieldEnum[]
  }

  /**
   * Doubt create
   */
  export type DoubtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * The data needed to create a Doubt.
     */
    data: XOR<DoubtCreateInput, DoubtUncheckedCreateInput>
  }

  /**
   * Doubt createMany
   */
  export type DoubtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doubts.
     */
    data: DoubtCreateManyInput | DoubtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doubt createManyAndReturn
   */
  export type DoubtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * The data used to create many Doubts.
     */
    data: DoubtCreateManyInput | DoubtCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doubt update
   */
  export type DoubtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * The data needed to update a Doubt.
     */
    data: XOR<DoubtUpdateInput, DoubtUncheckedUpdateInput>
    /**
     * Choose, which Doubt to update.
     */
    where: DoubtWhereUniqueInput
  }

  /**
   * Doubt updateMany
   */
  export type DoubtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doubts.
     */
    data: XOR<DoubtUpdateManyMutationInput, DoubtUncheckedUpdateManyInput>
    /**
     * Filter which Doubts to update
     */
    where?: DoubtWhereInput
    /**
     * Limit how many Doubts to update.
     */
    limit?: number
  }

  /**
   * Doubt updateManyAndReturn
   */
  export type DoubtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * The data used to update Doubts.
     */
    data: XOR<DoubtUpdateManyMutationInput, DoubtUncheckedUpdateManyInput>
    /**
     * Filter which Doubts to update
     */
    where?: DoubtWhereInput
    /**
     * Limit how many Doubts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doubt upsert
   */
  export type DoubtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * The filter to search for the Doubt to update in case it exists.
     */
    where: DoubtWhereUniqueInput
    /**
     * In case the Doubt found by the `where` argument doesn't exist, create a new Doubt with this data.
     */
    create: XOR<DoubtCreateInput, DoubtUncheckedCreateInput>
    /**
     * In case the Doubt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoubtUpdateInput, DoubtUncheckedUpdateInput>
  }

  /**
   * Doubt delete
   */
  export type DoubtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
    /**
     * Filter which Doubt to delete.
     */
    where: DoubtWhereUniqueInput
  }

  /**
   * Doubt deleteMany
   */
  export type DoubtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doubts to delete
     */
    where?: DoubtWhereInput
    /**
     * Limit how many Doubts to delete.
     */
    limit?: number
  }

  /**
   * Doubt.answeredBy
   */
  export type Doubt$answeredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Doubt without action
   */
  export type DoubtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: DoubtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doubt
     */
    omit?: DoubtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoubtInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatarUrl: 'avatarUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SpaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subject: 'subject',
    isLive: 'isLive',
    createdAt: 'createdAt',
    adminId: 'adminId'
  };

  export type SpaceScalarFieldEnum = (typeof SpaceScalarFieldEnum)[keyof typeof SpaceScalarFieldEnum]


  export const SpaceParticipantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    spaceId: 'spaceId',
    joinedAt: 'joinedAt',
    role: 'role'
  };

  export type SpaceParticipantScalarFieldEnum = (typeof SpaceParticipantScalarFieldEnum)[keyof typeof SpaceParticipantScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    message: 'message',
    userId: 'userId',
    spaceId: 'spaceId',
    sentAt: 'sentAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const DoubtScalarFieldEnum: {
    id: 'id',
    title: 'title',
    answer: 'answer',
    askedById: 'askedById',
    answeredById: 'answeredById',
    askedAt: 'askedAt',
    answeredAt: 'answeredAt',
    askedSpaceId: 'askedSpaceId'
  };

  export type DoubtScalarFieldEnum = (typeof DoubtScalarFieldEnum)[keyof typeof DoubtScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'Roles[]'
   */
  export type ListEnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    spaceCreated?: SpaceListRelationFilter
    participated?: SpaceParticipantListRelationFilter
    chat?: ChatListRelationFilter
    doubtAsked?: DoubtListRelationFilter
    doubtAnswered?: DoubtListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    spaceCreated?: SpaceOrderByRelationAggregateInput
    participated?: SpaceParticipantOrderByRelationAggregateInput
    chat?: ChatOrderByRelationAggregateInput
    doubtAsked?: DoubtOrderByRelationAggregateInput
    doubtAnswered?: DoubtOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    spaceCreated?: SpaceListRelationFilter
    participated?: SpaceParticipantListRelationFilter
    chat?: ChatListRelationFilter
    doubtAsked?: DoubtListRelationFilter
    doubtAnswered?: DoubtListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SpaceWhereInput = {
    AND?: SpaceWhereInput | SpaceWhereInput[]
    OR?: SpaceWhereInput[]
    NOT?: SpaceWhereInput | SpaceWhereInput[]
    id?: IntFilter<"Space"> | number
    name?: StringFilter<"Space"> | string
    subject?: StringFilter<"Space"> | string
    isLive?: BoolFilter<"Space"> | boolean
    createdAt?: DateTimeFilter<"Space"> | Date | string
    adminId?: StringFilter<"Space"> | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: ChatListRelationFilter
    participants?: SpaceParticipantListRelationFilter
    doubt?: DoubtListRelationFilter
  }

  export type SpaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    isLive?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
    admin?: UserOrderByWithRelationInput
    chat?: ChatOrderByRelationAggregateInput
    participants?: SpaceParticipantOrderByRelationAggregateInput
    doubt?: DoubtOrderByRelationAggregateInput
  }

  export type SpaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SpaceWhereInput | SpaceWhereInput[]
    OR?: SpaceWhereInput[]
    NOT?: SpaceWhereInput | SpaceWhereInput[]
    subject?: StringFilter<"Space"> | string
    isLive?: BoolFilter<"Space"> | boolean
    createdAt?: DateTimeFilter<"Space"> | Date | string
    adminId?: StringFilter<"Space"> | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: ChatListRelationFilter
    participants?: SpaceParticipantListRelationFilter
    doubt?: DoubtListRelationFilter
  }, "id" | "name">

  export type SpaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    isLive?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
    _count?: SpaceCountOrderByAggregateInput
    _avg?: SpaceAvgOrderByAggregateInput
    _max?: SpaceMaxOrderByAggregateInput
    _min?: SpaceMinOrderByAggregateInput
    _sum?: SpaceSumOrderByAggregateInput
  }

  export type SpaceScalarWhereWithAggregatesInput = {
    AND?: SpaceScalarWhereWithAggregatesInput | SpaceScalarWhereWithAggregatesInput[]
    OR?: SpaceScalarWhereWithAggregatesInput[]
    NOT?: SpaceScalarWhereWithAggregatesInput | SpaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Space"> | number
    name?: StringWithAggregatesFilter<"Space"> | string
    subject?: StringWithAggregatesFilter<"Space"> | string
    isLive?: BoolWithAggregatesFilter<"Space"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Space"> | Date | string
    adminId?: StringWithAggregatesFilter<"Space"> | string
  }

  export type SpaceParticipantWhereInput = {
    AND?: SpaceParticipantWhereInput | SpaceParticipantWhereInput[]
    OR?: SpaceParticipantWhereInput[]
    NOT?: SpaceParticipantWhereInput | SpaceParticipantWhereInput[]
    id?: StringFilter<"SpaceParticipant"> | string
    userId?: StringFilter<"SpaceParticipant"> | string
    spaceId?: IntFilter<"SpaceParticipant"> | number
    joinedAt?: DateTimeFilter<"SpaceParticipant"> | Date | string
    role?: EnumRolesFilter<"SpaceParticipant"> | $Enums.Roles
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
  }

  export type SpaceParticipantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    space?: SpaceOrderByWithRelationInput
  }

  export type SpaceParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    spaceId_userId?: SpaceParticipantSpaceIdUserIdCompoundUniqueInput
    AND?: SpaceParticipantWhereInput | SpaceParticipantWhereInput[]
    OR?: SpaceParticipantWhereInput[]
    NOT?: SpaceParticipantWhereInput | SpaceParticipantWhereInput[]
    userId?: StringFilter<"SpaceParticipant"> | string
    spaceId?: IntFilter<"SpaceParticipant"> | number
    joinedAt?: DateTimeFilter<"SpaceParticipant"> | Date | string
    role?: EnumRolesFilter<"SpaceParticipant"> | $Enums.Roles
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
  }, "id" | "spaceId_userId">

  export type SpaceParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
    _count?: SpaceParticipantCountOrderByAggregateInput
    _avg?: SpaceParticipantAvgOrderByAggregateInput
    _max?: SpaceParticipantMaxOrderByAggregateInput
    _min?: SpaceParticipantMinOrderByAggregateInput
    _sum?: SpaceParticipantSumOrderByAggregateInput
  }

  export type SpaceParticipantScalarWhereWithAggregatesInput = {
    AND?: SpaceParticipantScalarWhereWithAggregatesInput | SpaceParticipantScalarWhereWithAggregatesInput[]
    OR?: SpaceParticipantScalarWhereWithAggregatesInput[]
    NOT?: SpaceParticipantScalarWhereWithAggregatesInput | SpaceParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpaceParticipant"> | string
    userId?: StringWithAggregatesFilter<"SpaceParticipant"> | string
    spaceId?: IntWithAggregatesFilter<"SpaceParticipant"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"SpaceParticipant"> | Date | string
    role?: EnumRolesWithAggregatesFilter<"SpaceParticipant"> | $Enums.Roles
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: IntFilter<"Chat"> | number
    message?: StringFilter<"Chat"> | string
    userId?: StringFilter<"Chat"> | string
    spaceId?: IntFilter<"Chat"> | number
    sentAt?: DateTimeFilter<"Chat"> | Date | string
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    sentAt?: SortOrder
    space?: SpaceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    message?: StringFilter<"Chat"> | string
    userId?: StringFilter<"Chat"> | string
    spaceId?: IntFilter<"Chat"> | number
    sentAt?: DateTimeFilter<"Chat"> | Date | string
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    sentAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chat"> | number
    message?: StringWithAggregatesFilter<"Chat"> | string
    userId?: StringWithAggregatesFilter<"Chat"> | string
    spaceId?: IntWithAggregatesFilter<"Chat"> | number
    sentAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type DoubtWhereInput = {
    AND?: DoubtWhereInput | DoubtWhereInput[]
    OR?: DoubtWhereInput[]
    NOT?: DoubtWhereInput | DoubtWhereInput[]
    id?: StringFilter<"Doubt"> | string
    title?: StringFilter<"Doubt"> | string
    answer?: StringNullableFilter<"Doubt"> | string | null
    askedById?: StringFilter<"Doubt"> | string
    answeredById?: StringFilter<"Doubt"> | string
    askedAt?: DateTimeFilter<"Doubt"> | Date | string
    answeredAt?: DateTimeFilter<"Doubt"> | Date | string
    askedSpaceId?: IntFilter<"Doubt"> | number
    askedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    answeredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    askedSpace?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
  }

  export type DoubtOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    answer?: SortOrderInput | SortOrder
    askedById?: SortOrder
    answeredById?: SortOrder
    askedAt?: SortOrder
    answeredAt?: SortOrder
    askedSpaceId?: SortOrder
    askedBy?: UserOrderByWithRelationInput
    answeredBy?: UserOrderByWithRelationInput
    askedSpace?: SpaceOrderByWithRelationInput
  }

  export type DoubtWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoubtWhereInput | DoubtWhereInput[]
    OR?: DoubtWhereInput[]
    NOT?: DoubtWhereInput | DoubtWhereInput[]
    title?: StringFilter<"Doubt"> | string
    answer?: StringNullableFilter<"Doubt"> | string | null
    askedById?: StringFilter<"Doubt"> | string
    answeredById?: StringFilter<"Doubt"> | string
    askedAt?: DateTimeFilter<"Doubt"> | Date | string
    answeredAt?: DateTimeFilter<"Doubt"> | Date | string
    askedSpaceId?: IntFilter<"Doubt"> | number
    askedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    answeredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    askedSpace?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
  }, "id">

  export type DoubtOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    answer?: SortOrderInput | SortOrder
    askedById?: SortOrder
    answeredById?: SortOrder
    askedAt?: SortOrder
    answeredAt?: SortOrder
    askedSpaceId?: SortOrder
    _count?: DoubtCountOrderByAggregateInput
    _avg?: DoubtAvgOrderByAggregateInput
    _max?: DoubtMaxOrderByAggregateInput
    _min?: DoubtMinOrderByAggregateInput
    _sum?: DoubtSumOrderByAggregateInput
  }

  export type DoubtScalarWhereWithAggregatesInput = {
    AND?: DoubtScalarWhereWithAggregatesInput | DoubtScalarWhereWithAggregatesInput[]
    OR?: DoubtScalarWhereWithAggregatesInput[]
    NOT?: DoubtScalarWhereWithAggregatesInput | DoubtScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doubt"> | string
    title?: StringWithAggregatesFilter<"Doubt"> | string
    answer?: StringNullableWithAggregatesFilter<"Doubt"> | string | null
    askedById?: StringWithAggregatesFilter<"Doubt"> | string
    answeredById?: StringWithAggregatesFilter<"Doubt"> | string
    askedAt?: DateTimeWithAggregatesFilter<"Doubt"> | Date | string
    answeredAt?: DateTimeWithAggregatesFilter<"Doubt"> | Date | string
    askedSpaceId?: IntWithAggregatesFilter<"Doubt"> | number
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    spaceCreated?: SpaceCreateNestedManyWithoutAdminInput
    participated?: SpaceParticipantCreateNestedManyWithoutUserInput
    chat?: ChatCreateNestedManyWithoutUserInput
    doubtAsked?: DoubtCreateNestedManyWithoutAskedByInput
    doubtAnswered?: DoubtCreateNestedManyWithoutAnsweredByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    spaceCreated?: SpaceUncheckedCreateNestedManyWithoutAdminInput
    participated?: SpaceParticipantUncheckedCreateNestedManyWithoutUserInput
    chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    doubtAsked?: DoubtUncheckedCreateNestedManyWithoutAskedByInput
    doubtAnswered?: DoubtUncheckedCreateNestedManyWithoutAnsweredByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    spaceCreated?: SpaceUpdateManyWithoutAdminNestedInput
    participated?: SpaceParticipantUpdateManyWithoutUserNestedInput
    chat?: ChatUpdateManyWithoutUserNestedInput
    doubtAsked?: DoubtUpdateManyWithoutAskedByNestedInput
    doubtAnswered?: DoubtUpdateManyWithoutAnsweredByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    spaceCreated?: SpaceUncheckedUpdateManyWithoutAdminNestedInput
    participated?: SpaceParticipantUncheckedUpdateManyWithoutUserNestedInput
    chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    doubtAsked?: DoubtUncheckedUpdateManyWithoutAskedByNestedInput
    doubtAnswered?: DoubtUncheckedUpdateManyWithoutAnsweredByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpaceCreateInput = {
    name: string
    subject: string
    isLive?: boolean
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutSpaceCreatedInput
    chat?: ChatCreateNestedManyWithoutSpaceInput
    participants?: SpaceParticipantCreateNestedManyWithoutSpaceInput
    doubt?: DoubtCreateNestedManyWithoutAskedSpaceInput
  }

  export type SpaceUncheckedCreateInput = {
    id?: number
    name: string
    subject: string
    isLive?: boolean
    createdAt?: Date | string
    adminId: string
    chat?: ChatUncheckedCreateNestedManyWithoutSpaceInput
    participants?: SpaceParticipantUncheckedCreateNestedManyWithoutSpaceInput
    doubt?: DoubtUncheckedCreateNestedManyWithoutAskedSpaceInput
  }

  export type SpaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutSpaceCreatedNestedInput
    chat?: ChatUpdateManyWithoutSpaceNestedInput
    participants?: SpaceParticipantUpdateManyWithoutSpaceNestedInput
    doubt?: DoubtUpdateManyWithoutAskedSpaceNestedInput
  }

  export type SpaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: StringFieldUpdateOperationsInput | string
    chat?: ChatUncheckedUpdateManyWithoutSpaceNestedInput
    participants?: SpaceParticipantUncheckedUpdateManyWithoutSpaceNestedInput
    doubt?: DoubtUncheckedUpdateManyWithoutAskedSpaceNestedInput
  }

  export type SpaceCreateManyInput = {
    id?: number
    name: string
    subject: string
    isLive?: boolean
    createdAt?: Date | string
    adminId: string
  }

  export type SpaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceParticipantCreateInput = {
    id?: string
    joinedAt?: Date | string
    role: $Enums.Roles
    user: UserCreateNestedOneWithoutParticipatedInput
    space: SpaceCreateNestedOneWithoutParticipantsInput
  }

  export type SpaceParticipantUncheckedCreateInput = {
    id?: string
    userId: string
    spaceId: number
    joinedAt?: Date | string
    role: $Enums.Roles
  }

  export type SpaceParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    user?: UserUpdateOneRequiredWithoutParticipatedNestedInput
    space?: SpaceUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type SpaceParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    spaceId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type SpaceParticipantCreateManyInput = {
    id?: string
    userId: string
    spaceId: number
    joinedAt?: Date | string
    role: $Enums.Roles
  }

  export type SpaceParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type SpaceParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    spaceId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type ChatCreateInput = {
    message: string
    sentAt?: Date | string
    space: SpaceCreateNestedOneWithoutChatInput
    user: UserCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: number
    message: string
    userId: string
    spaceId: number
    sentAt?: Date | string
  }

  export type ChatUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    space?: SpaceUpdateOneRequiredWithoutChatNestedInput
    user?: UserUpdateOneRequiredWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    spaceId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateManyInput = {
    id?: number
    message: string
    userId: string
    spaceId: number
    sentAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    spaceId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoubtCreateInput = {
    id?: string
    title: string
    answer?: string | null
    askedAt?: Date | string
    answeredAt?: Date | string
    askedBy: UserCreateNestedOneWithoutDoubtAskedInput
    answeredBy?: UserCreateNestedOneWithoutDoubtAnsweredInput
    askedSpace: SpaceCreateNestedOneWithoutDoubtInput
  }

  export type DoubtUncheckedCreateInput = {
    id?: string
    title: string
    answer?: string | null
    askedById: string
    answeredById: string
    askedAt?: Date | string
    answeredAt?: Date | string
    askedSpaceId: number
  }

  export type DoubtUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    askedBy?: UserUpdateOneRequiredWithoutDoubtAskedNestedInput
    answeredBy?: UserUpdateOneWithoutDoubtAnsweredNestedInput
    askedSpace?: SpaceUpdateOneRequiredWithoutDoubtNestedInput
  }

  export type DoubtUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    askedById?: StringFieldUpdateOperationsInput | string
    answeredById?: StringFieldUpdateOperationsInput | string
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    askedSpaceId?: IntFieldUpdateOperationsInput | number
  }

  export type DoubtCreateManyInput = {
    id?: string
    title: string
    answer?: string | null
    askedById: string
    answeredById: string
    askedAt?: Date | string
    answeredAt?: Date | string
    askedSpaceId: number
  }

  export type DoubtUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoubtUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    askedById?: StringFieldUpdateOperationsInput | string
    answeredById?: StringFieldUpdateOperationsInput | string
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    askedSpaceId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SpaceListRelationFilter = {
    every?: SpaceWhereInput
    some?: SpaceWhereInput
    none?: SpaceWhereInput
  }

  export type SpaceParticipantListRelationFilter = {
    every?: SpaceParticipantWhereInput
    some?: SpaceParticipantWhereInput
    none?: SpaceParticipantWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type DoubtListRelationFilter = {
    every?: DoubtWhereInput
    some?: DoubtWhereInput
    none?: DoubtWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpaceParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoubtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SpaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    isLive?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
  }

  export type SpaceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    isLive?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
  }

  export type SpaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    isLive?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
  }

  export type SpaceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type SpaceScalarRelationFilter = {
    is?: SpaceWhereInput
    isNot?: SpaceWhereInput
  }

  export type SpaceParticipantSpaceIdUserIdCompoundUniqueInput = {
    spaceId: number
    userId: string
  }

  export type SpaceParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
  }

  export type SpaceParticipantAvgOrderByAggregateInput = {
    spaceId?: SortOrder
  }

  export type SpaceParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
  }

  export type SpaceParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
  }

  export type SpaceParticipantSumOrderByAggregateInput = {
    spaceId?: SortOrder
  }

  export type EnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    sentAt?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    id?: SortOrder
    spaceId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    sentAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    sentAt?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    id?: SortOrder
    spaceId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DoubtCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    answer?: SortOrder
    askedById?: SortOrder
    answeredById?: SortOrder
    askedAt?: SortOrder
    answeredAt?: SortOrder
    askedSpaceId?: SortOrder
  }

  export type DoubtAvgOrderByAggregateInput = {
    askedSpaceId?: SortOrder
  }

  export type DoubtMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    answer?: SortOrder
    askedById?: SortOrder
    answeredById?: SortOrder
    askedAt?: SortOrder
    answeredAt?: SortOrder
    askedSpaceId?: SortOrder
  }

  export type DoubtMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    answer?: SortOrder
    askedById?: SortOrder
    answeredById?: SortOrder
    askedAt?: SortOrder
    answeredAt?: SortOrder
    askedSpaceId?: SortOrder
  }

  export type DoubtSumOrderByAggregateInput = {
    askedSpaceId?: SortOrder
  }

  export type SpaceCreateNestedManyWithoutAdminInput = {
    create?: XOR<SpaceCreateWithoutAdminInput, SpaceUncheckedCreateWithoutAdminInput> | SpaceCreateWithoutAdminInput[] | SpaceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutAdminInput | SpaceCreateOrConnectWithoutAdminInput[]
    createMany?: SpaceCreateManyAdminInputEnvelope
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
  }

  export type SpaceParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<SpaceParticipantCreateWithoutUserInput, SpaceParticipantUncheckedCreateWithoutUserInput> | SpaceParticipantCreateWithoutUserInput[] | SpaceParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceParticipantCreateOrConnectWithoutUserInput | SpaceParticipantCreateOrConnectWithoutUserInput[]
    createMany?: SpaceParticipantCreateManyUserInputEnvelope
    connect?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type DoubtCreateNestedManyWithoutAskedByInput = {
    create?: XOR<DoubtCreateWithoutAskedByInput, DoubtUncheckedCreateWithoutAskedByInput> | DoubtCreateWithoutAskedByInput[] | DoubtUncheckedCreateWithoutAskedByInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutAskedByInput | DoubtCreateOrConnectWithoutAskedByInput[]
    createMany?: DoubtCreateManyAskedByInputEnvelope
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
  }

  export type DoubtCreateNestedManyWithoutAnsweredByInput = {
    create?: XOR<DoubtCreateWithoutAnsweredByInput, DoubtUncheckedCreateWithoutAnsweredByInput> | DoubtCreateWithoutAnsweredByInput[] | DoubtUncheckedCreateWithoutAnsweredByInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutAnsweredByInput | DoubtCreateOrConnectWithoutAnsweredByInput[]
    createMany?: DoubtCreateManyAnsweredByInputEnvelope
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
  }

  export type SpaceUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<SpaceCreateWithoutAdminInput, SpaceUncheckedCreateWithoutAdminInput> | SpaceCreateWithoutAdminInput[] | SpaceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutAdminInput | SpaceCreateOrConnectWithoutAdminInput[]
    createMany?: SpaceCreateManyAdminInputEnvelope
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
  }

  export type SpaceParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SpaceParticipantCreateWithoutUserInput, SpaceParticipantUncheckedCreateWithoutUserInput> | SpaceParticipantCreateWithoutUserInput[] | SpaceParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceParticipantCreateOrConnectWithoutUserInput | SpaceParticipantCreateOrConnectWithoutUserInput[]
    createMany?: SpaceParticipantCreateManyUserInputEnvelope
    connect?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type DoubtUncheckedCreateNestedManyWithoutAskedByInput = {
    create?: XOR<DoubtCreateWithoutAskedByInput, DoubtUncheckedCreateWithoutAskedByInput> | DoubtCreateWithoutAskedByInput[] | DoubtUncheckedCreateWithoutAskedByInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutAskedByInput | DoubtCreateOrConnectWithoutAskedByInput[]
    createMany?: DoubtCreateManyAskedByInputEnvelope
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
  }

  export type DoubtUncheckedCreateNestedManyWithoutAnsweredByInput = {
    create?: XOR<DoubtCreateWithoutAnsweredByInput, DoubtUncheckedCreateWithoutAnsweredByInput> | DoubtCreateWithoutAnsweredByInput[] | DoubtUncheckedCreateWithoutAnsweredByInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutAnsweredByInput | DoubtCreateOrConnectWithoutAnsweredByInput[]
    createMany?: DoubtCreateManyAnsweredByInputEnvelope
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SpaceUpdateManyWithoutAdminNestedInput = {
    create?: XOR<SpaceCreateWithoutAdminInput, SpaceUncheckedCreateWithoutAdminInput> | SpaceCreateWithoutAdminInput[] | SpaceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutAdminInput | SpaceCreateOrConnectWithoutAdminInput[]
    upsert?: SpaceUpsertWithWhereUniqueWithoutAdminInput | SpaceUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: SpaceCreateManyAdminInputEnvelope
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    update?: SpaceUpdateWithWhereUniqueWithoutAdminInput | SpaceUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: SpaceUpdateManyWithWhereWithoutAdminInput | SpaceUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
  }

  export type SpaceParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpaceParticipantCreateWithoutUserInput, SpaceParticipantUncheckedCreateWithoutUserInput> | SpaceParticipantCreateWithoutUserInput[] | SpaceParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceParticipantCreateOrConnectWithoutUserInput | SpaceParticipantCreateOrConnectWithoutUserInput[]
    upsert?: SpaceParticipantUpsertWithWhereUniqueWithoutUserInput | SpaceParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpaceParticipantCreateManyUserInputEnvelope
    set?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    disconnect?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    delete?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    connect?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    update?: SpaceParticipantUpdateWithWhereUniqueWithoutUserInput | SpaceParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpaceParticipantUpdateManyWithWhereWithoutUserInput | SpaceParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpaceParticipantScalarWhereInput | SpaceParticipantScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUserInput | ChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUserInput | ChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUserInput | ChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type DoubtUpdateManyWithoutAskedByNestedInput = {
    create?: XOR<DoubtCreateWithoutAskedByInput, DoubtUncheckedCreateWithoutAskedByInput> | DoubtCreateWithoutAskedByInput[] | DoubtUncheckedCreateWithoutAskedByInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutAskedByInput | DoubtCreateOrConnectWithoutAskedByInput[]
    upsert?: DoubtUpsertWithWhereUniqueWithoutAskedByInput | DoubtUpsertWithWhereUniqueWithoutAskedByInput[]
    createMany?: DoubtCreateManyAskedByInputEnvelope
    set?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    disconnect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    delete?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    update?: DoubtUpdateWithWhereUniqueWithoutAskedByInput | DoubtUpdateWithWhereUniqueWithoutAskedByInput[]
    updateMany?: DoubtUpdateManyWithWhereWithoutAskedByInput | DoubtUpdateManyWithWhereWithoutAskedByInput[]
    deleteMany?: DoubtScalarWhereInput | DoubtScalarWhereInput[]
  }

  export type DoubtUpdateManyWithoutAnsweredByNestedInput = {
    create?: XOR<DoubtCreateWithoutAnsweredByInput, DoubtUncheckedCreateWithoutAnsweredByInput> | DoubtCreateWithoutAnsweredByInput[] | DoubtUncheckedCreateWithoutAnsweredByInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutAnsweredByInput | DoubtCreateOrConnectWithoutAnsweredByInput[]
    upsert?: DoubtUpsertWithWhereUniqueWithoutAnsweredByInput | DoubtUpsertWithWhereUniqueWithoutAnsweredByInput[]
    createMany?: DoubtCreateManyAnsweredByInputEnvelope
    set?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    disconnect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    delete?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    update?: DoubtUpdateWithWhereUniqueWithoutAnsweredByInput | DoubtUpdateWithWhereUniqueWithoutAnsweredByInput[]
    updateMany?: DoubtUpdateManyWithWhereWithoutAnsweredByInput | DoubtUpdateManyWithWhereWithoutAnsweredByInput[]
    deleteMany?: DoubtScalarWhereInput | DoubtScalarWhereInput[]
  }

  export type SpaceUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<SpaceCreateWithoutAdminInput, SpaceUncheckedCreateWithoutAdminInput> | SpaceCreateWithoutAdminInput[] | SpaceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutAdminInput | SpaceCreateOrConnectWithoutAdminInput[]
    upsert?: SpaceUpsertWithWhereUniqueWithoutAdminInput | SpaceUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: SpaceCreateManyAdminInputEnvelope
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    update?: SpaceUpdateWithWhereUniqueWithoutAdminInput | SpaceUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: SpaceUpdateManyWithWhereWithoutAdminInput | SpaceUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
  }

  export type SpaceParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpaceParticipantCreateWithoutUserInput, SpaceParticipantUncheckedCreateWithoutUserInput> | SpaceParticipantCreateWithoutUserInput[] | SpaceParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceParticipantCreateOrConnectWithoutUserInput | SpaceParticipantCreateOrConnectWithoutUserInput[]
    upsert?: SpaceParticipantUpsertWithWhereUniqueWithoutUserInput | SpaceParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpaceParticipantCreateManyUserInputEnvelope
    set?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    disconnect?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    delete?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    connect?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    update?: SpaceParticipantUpdateWithWhereUniqueWithoutUserInput | SpaceParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpaceParticipantUpdateManyWithWhereWithoutUserInput | SpaceParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpaceParticipantScalarWhereInput | SpaceParticipantScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUserInput | ChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUserInput | ChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUserInput | ChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type DoubtUncheckedUpdateManyWithoutAskedByNestedInput = {
    create?: XOR<DoubtCreateWithoutAskedByInput, DoubtUncheckedCreateWithoutAskedByInput> | DoubtCreateWithoutAskedByInput[] | DoubtUncheckedCreateWithoutAskedByInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutAskedByInput | DoubtCreateOrConnectWithoutAskedByInput[]
    upsert?: DoubtUpsertWithWhereUniqueWithoutAskedByInput | DoubtUpsertWithWhereUniqueWithoutAskedByInput[]
    createMany?: DoubtCreateManyAskedByInputEnvelope
    set?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    disconnect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    delete?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    update?: DoubtUpdateWithWhereUniqueWithoutAskedByInput | DoubtUpdateWithWhereUniqueWithoutAskedByInput[]
    updateMany?: DoubtUpdateManyWithWhereWithoutAskedByInput | DoubtUpdateManyWithWhereWithoutAskedByInput[]
    deleteMany?: DoubtScalarWhereInput | DoubtScalarWhereInput[]
  }

  export type DoubtUncheckedUpdateManyWithoutAnsweredByNestedInput = {
    create?: XOR<DoubtCreateWithoutAnsweredByInput, DoubtUncheckedCreateWithoutAnsweredByInput> | DoubtCreateWithoutAnsweredByInput[] | DoubtUncheckedCreateWithoutAnsweredByInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutAnsweredByInput | DoubtCreateOrConnectWithoutAnsweredByInput[]
    upsert?: DoubtUpsertWithWhereUniqueWithoutAnsweredByInput | DoubtUpsertWithWhereUniqueWithoutAnsweredByInput[]
    createMany?: DoubtCreateManyAnsweredByInputEnvelope
    set?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    disconnect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    delete?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    update?: DoubtUpdateWithWhereUniqueWithoutAnsweredByInput | DoubtUpdateWithWhereUniqueWithoutAnsweredByInput[]
    updateMany?: DoubtUpdateManyWithWhereWithoutAnsweredByInput | DoubtUpdateManyWithWhereWithoutAnsweredByInput[]
    deleteMany?: DoubtScalarWhereInput | DoubtScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSpaceCreatedInput = {
    create?: XOR<UserCreateWithoutSpaceCreatedInput, UserUncheckedCreateWithoutSpaceCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpaceCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedManyWithoutSpaceInput = {
    create?: XOR<ChatCreateWithoutSpaceInput, ChatUncheckedCreateWithoutSpaceInput> | ChatCreateWithoutSpaceInput[] | ChatUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSpaceInput | ChatCreateOrConnectWithoutSpaceInput[]
    createMany?: ChatCreateManySpaceInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type SpaceParticipantCreateNestedManyWithoutSpaceInput = {
    create?: XOR<SpaceParticipantCreateWithoutSpaceInput, SpaceParticipantUncheckedCreateWithoutSpaceInput> | SpaceParticipantCreateWithoutSpaceInput[] | SpaceParticipantUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: SpaceParticipantCreateOrConnectWithoutSpaceInput | SpaceParticipantCreateOrConnectWithoutSpaceInput[]
    createMany?: SpaceParticipantCreateManySpaceInputEnvelope
    connect?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
  }

  export type DoubtCreateNestedManyWithoutAskedSpaceInput = {
    create?: XOR<DoubtCreateWithoutAskedSpaceInput, DoubtUncheckedCreateWithoutAskedSpaceInput> | DoubtCreateWithoutAskedSpaceInput[] | DoubtUncheckedCreateWithoutAskedSpaceInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutAskedSpaceInput | DoubtCreateOrConnectWithoutAskedSpaceInput[]
    createMany?: DoubtCreateManyAskedSpaceInputEnvelope
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutSpaceInput = {
    create?: XOR<ChatCreateWithoutSpaceInput, ChatUncheckedCreateWithoutSpaceInput> | ChatCreateWithoutSpaceInput[] | ChatUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSpaceInput | ChatCreateOrConnectWithoutSpaceInput[]
    createMany?: ChatCreateManySpaceInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type SpaceParticipantUncheckedCreateNestedManyWithoutSpaceInput = {
    create?: XOR<SpaceParticipantCreateWithoutSpaceInput, SpaceParticipantUncheckedCreateWithoutSpaceInput> | SpaceParticipantCreateWithoutSpaceInput[] | SpaceParticipantUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: SpaceParticipantCreateOrConnectWithoutSpaceInput | SpaceParticipantCreateOrConnectWithoutSpaceInput[]
    createMany?: SpaceParticipantCreateManySpaceInputEnvelope
    connect?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
  }

  export type DoubtUncheckedCreateNestedManyWithoutAskedSpaceInput = {
    create?: XOR<DoubtCreateWithoutAskedSpaceInput, DoubtUncheckedCreateWithoutAskedSpaceInput> | DoubtCreateWithoutAskedSpaceInput[] | DoubtUncheckedCreateWithoutAskedSpaceInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutAskedSpaceInput | DoubtCreateOrConnectWithoutAskedSpaceInput[]
    createMany?: DoubtCreateManyAskedSpaceInputEnvelope
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSpaceCreatedNestedInput = {
    create?: XOR<UserCreateWithoutSpaceCreatedInput, UserUncheckedCreateWithoutSpaceCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpaceCreatedInput
    upsert?: UserUpsertWithoutSpaceCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpaceCreatedInput, UserUpdateWithoutSpaceCreatedInput>, UserUncheckedUpdateWithoutSpaceCreatedInput>
  }

  export type ChatUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<ChatCreateWithoutSpaceInput, ChatUncheckedCreateWithoutSpaceInput> | ChatCreateWithoutSpaceInput[] | ChatUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSpaceInput | ChatCreateOrConnectWithoutSpaceInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSpaceInput | ChatUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: ChatCreateManySpaceInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSpaceInput | ChatUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSpaceInput | ChatUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type SpaceParticipantUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<SpaceParticipantCreateWithoutSpaceInput, SpaceParticipantUncheckedCreateWithoutSpaceInput> | SpaceParticipantCreateWithoutSpaceInput[] | SpaceParticipantUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: SpaceParticipantCreateOrConnectWithoutSpaceInput | SpaceParticipantCreateOrConnectWithoutSpaceInput[]
    upsert?: SpaceParticipantUpsertWithWhereUniqueWithoutSpaceInput | SpaceParticipantUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: SpaceParticipantCreateManySpaceInputEnvelope
    set?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    disconnect?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    delete?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    connect?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    update?: SpaceParticipantUpdateWithWhereUniqueWithoutSpaceInput | SpaceParticipantUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: SpaceParticipantUpdateManyWithWhereWithoutSpaceInput | SpaceParticipantUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: SpaceParticipantScalarWhereInput | SpaceParticipantScalarWhereInput[]
  }

  export type DoubtUpdateManyWithoutAskedSpaceNestedInput = {
    create?: XOR<DoubtCreateWithoutAskedSpaceInput, DoubtUncheckedCreateWithoutAskedSpaceInput> | DoubtCreateWithoutAskedSpaceInput[] | DoubtUncheckedCreateWithoutAskedSpaceInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutAskedSpaceInput | DoubtCreateOrConnectWithoutAskedSpaceInput[]
    upsert?: DoubtUpsertWithWhereUniqueWithoutAskedSpaceInput | DoubtUpsertWithWhereUniqueWithoutAskedSpaceInput[]
    createMany?: DoubtCreateManyAskedSpaceInputEnvelope
    set?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    disconnect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    delete?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    update?: DoubtUpdateWithWhereUniqueWithoutAskedSpaceInput | DoubtUpdateWithWhereUniqueWithoutAskedSpaceInput[]
    updateMany?: DoubtUpdateManyWithWhereWithoutAskedSpaceInput | DoubtUpdateManyWithWhereWithoutAskedSpaceInput[]
    deleteMany?: DoubtScalarWhereInput | DoubtScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<ChatCreateWithoutSpaceInput, ChatUncheckedCreateWithoutSpaceInput> | ChatCreateWithoutSpaceInput[] | ChatUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSpaceInput | ChatCreateOrConnectWithoutSpaceInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSpaceInput | ChatUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: ChatCreateManySpaceInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSpaceInput | ChatUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSpaceInput | ChatUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type SpaceParticipantUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<SpaceParticipantCreateWithoutSpaceInput, SpaceParticipantUncheckedCreateWithoutSpaceInput> | SpaceParticipantCreateWithoutSpaceInput[] | SpaceParticipantUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: SpaceParticipantCreateOrConnectWithoutSpaceInput | SpaceParticipantCreateOrConnectWithoutSpaceInput[]
    upsert?: SpaceParticipantUpsertWithWhereUniqueWithoutSpaceInput | SpaceParticipantUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: SpaceParticipantCreateManySpaceInputEnvelope
    set?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    disconnect?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    delete?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    connect?: SpaceParticipantWhereUniqueInput | SpaceParticipantWhereUniqueInput[]
    update?: SpaceParticipantUpdateWithWhereUniqueWithoutSpaceInput | SpaceParticipantUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: SpaceParticipantUpdateManyWithWhereWithoutSpaceInput | SpaceParticipantUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: SpaceParticipantScalarWhereInput | SpaceParticipantScalarWhereInput[]
  }

  export type DoubtUncheckedUpdateManyWithoutAskedSpaceNestedInput = {
    create?: XOR<DoubtCreateWithoutAskedSpaceInput, DoubtUncheckedCreateWithoutAskedSpaceInput> | DoubtCreateWithoutAskedSpaceInput[] | DoubtUncheckedCreateWithoutAskedSpaceInput[]
    connectOrCreate?: DoubtCreateOrConnectWithoutAskedSpaceInput | DoubtCreateOrConnectWithoutAskedSpaceInput[]
    upsert?: DoubtUpsertWithWhereUniqueWithoutAskedSpaceInput | DoubtUpsertWithWhereUniqueWithoutAskedSpaceInput[]
    createMany?: DoubtCreateManyAskedSpaceInputEnvelope
    set?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    disconnect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    delete?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    connect?: DoubtWhereUniqueInput | DoubtWhereUniqueInput[]
    update?: DoubtUpdateWithWhereUniqueWithoutAskedSpaceInput | DoubtUpdateWithWhereUniqueWithoutAskedSpaceInput[]
    updateMany?: DoubtUpdateManyWithWhereWithoutAskedSpaceInput | DoubtUpdateManyWithWhereWithoutAskedSpaceInput[]
    deleteMany?: DoubtScalarWhereInput | DoubtScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutParticipatedInput = {
    create?: XOR<UserCreateWithoutParticipatedInput, UserUncheckedCreateWithoutParticipatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipatedInput
    connect?: UserWhereUniqueInput
  }

  export type SpaceCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<SpaceCreateWithoutParticipantsInput, SpaceUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutParticipantsInput
    connect?: SpaceWhereUniqueInput
  }

  export type EnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles
  }

  export type UserUpdateOneRequiredWithoutParticipatedNestedInput = {
    create?: XOR<UserCreateWithoutParticipatedInput, UserUncheckedCreateWithoutParticipatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipatedInput
    upsert?: UserUpsertWithoutParticipatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipatedInput, UserUpdateWithoutParticipatedInput>, UserUncheckedUpdateWithoutParticipatedInput>
  }

  export type SpaceUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<SpaceCreateWithoutParticipantsInput, SpaceUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutParticipantsInput
    upsert?: SpaceUpsertWithoutParticipantsInput
    connect?: SpaceWhereUniqueInput
    update?: XOR<XOR<SpaceUpdateToOneWithWhereWithoutParticipantsInput, SpaceUpdateWithoutParticipantsInput>, SpaceUncheckedUpdateWithoutParticipantsInput>
  }

  export type SpaceCreateNestedOneWithoutChatInput = {
    create?: XOR<SpaceCreateWithoutChatInput, SpaceUncheckedCreateWithoutChatInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutChatInput
    connect?: SpaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatInput = {
    create?: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatInput
    connect?: UserWhereUniqueInput
  }

  export type SpaceUpdateOneRequiredWithoutChatNestedInput = {
    create?: XOR<SpaceCreateWithoutChatInput, SpaceUncheckedCreateWithoutChatInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutChatInput
    upsert?: SpaceUpsertWithoutChatInput
    connect?: SpaceWhereUniqueInput
    update?: XOR<XOR<SpaceUpdateToOneWithWhereWithoutChatInput, SpaceUpdateWithoutChatInput>, SpaceUncheckedUpdateWithoutChatInput>
  }

  export type UserUpdateOneRequiredWithoutChatNestedInput = {
    create?: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatInput
    upsert?: UserUpsertWithoutChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatInput, UserUpdateWithoutChatInput>, UserUncheckedUpdateWithoutChatInput>
  }

  export type UserCreateNestedOneWithoutDoubtAskedInput = {
    create?: XOR<UserCreateWithoutDoubtAskedInput, UserUncheckedCreateWithoutDoubtAskedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoubtAskedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDoubtAnsweredInput = {
    create?: XOR<UserCreateWithoutDoubtAnsweredInput, UserUncheckedCreateWithoutDoubtAnsweredInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoubtAnsweredInput
    connect?: UserWhereUniqueInput
  }

  export type SpaceCreateNestedOneWithoutDoubtInput = {
    create?: XOR<SpaceCreateWithoutDoubtInput, SpaceUncheckedCreateWithoutDoubtInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutDoubtInput
    connect?: SpaceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDoubtAskedNestedInput = {
    create?: XOR<UserCreateWithoutDoubtAskedInput, UserUncheckedCreateWithoutDoubtAskedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoubtAskedInput
    upsert?: UserUpsertWithoutDoubtAskedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoubtAskedInput, UserUpdateWithoutDoubtAskedInput>, UserUncheckedUpdateWithoutDoubtAskedInput>
  }

  export type UserUpdateOneWithoutDoubtAnsweredNestedInput = {
    create?: XOR<UserCreateWithoutDoubtAnsweredInput, UserUncheckedCreateWithoutDoubtAnsweredInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoubtAnsweredInput
    upsert?: UserUpsertWithoutDoubtAnsweredInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoubtAnsweredInput, UserUpdateWithoutDoubtAnsweredInput>, UserUncheckedUpdateWithoutDoubtAnsweredInput>
  }

  export type SpaceUpdateOneRequiredWithoutDoubtNestedInput = {
    create?: XOR<SpaceCreateWithoutDoubtInput, SpaceUncheckedCreateWithoutDoubtInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutDoubtInput
    upsert?: SpaceUpsertWithoutDoubtInput
    connect?: SpaceWhereUniqueInput
    update?: XOR<XOR<SpaceUpdateToOneWithWhereWithoutDoubtInput, SpaceUpdateWithoutDoubtInput>, SpaceUncheckedUpdateWithoutDoubtInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type NestedEnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type SpaceCreateWithoutAdminInput = {
    name: string
    subject: string
    isLive?: boolean
    createdAt?: Date | string
    chat?: ChatCreateNestedManyWithoutSpaceInput
    participants?: SpaceParticipantCreateNestedManyWithoutSpaceInput
    doubt?: DoubtCreateNestedManyWithoutAskedSpaceInput
  }

  export type SpaceUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    subject: string
    isLive?: boolean
    createdAt?: Date | string
    chat?: ChatUncheckedCreateNestedManyWithoutSpaceInput
    participants?: SpaceParticipantUncheckedCreateNestedManyWithoutSpaceInput
    doubt?: DoubtUncheckedCreateNestedManyWithoutAskedSpaceInput
  }

  export type SpaceCreateOrConnectWithoutAdminInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutAdminInput, SpaceUncheckedCreateWithoutAdminInput>
  }

  export type SpaceCreateManyAdminInputEnvelope = {
    data: SpaceCreateManyAdminInput | SpaceCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type SpaceParticipantCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    role: $Enums.Roles
    space: SpaceCreateNestedOneWithoutParticipantsInput
  }

  export type SpaceParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    spaceId: number
    joinedAt?: Date | string
    role: $Enums.Roles
  }

  export type SpaceParticipantCreateOrConnectWithoutUserInput = {
    where: SpaceParticipantWhereUniqueInput
    create: XOR<SpaceParticipantCreateWithoutUserInput, SpaceParticipantUncheckedCreateWithoutUserInput>
  }

  export type SpaceParticipantCreateManyUserInputEnvelope = {
    data: SpaceParticipantCreateManyUserInput | SpaceParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutUserInput = {
    message: string
    sentAt?: Date | string
    space: SpaceCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    spaceId: number
    sentAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutUserInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
  }

  export type ChatCreateManyUserInputEnvelope = {
    data: ChatCreateManyUserInput | ChatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DoubtCreateWithoutAskedByInput = {
    id?: string
    title: string
    answer?: string | null
    askedAt?: Date | string
    answeredAt?: Date | string
    answeredBy?: UserCreateNestedOneWithoutDoubtAnsweredInput
    askedSpace: SpaceCreateNestedOneWithoutDoubtInput
  }

  export type DoubtUncheckedCreateWithoutAskedByInput = {
    id?: string
    title: string
    answer?: string | null
    answeredById: string
    askedAt?: Date | string
    answeredAt?: Date | string
    askedSpaceId: number
  }

  export type DoubtCreateOrConnectWithoutAskedByInput = {
    where: DoubtWhereUniqueInput
    create: XOR<DoubtCreateWithoutAskedByInput, DoubtUncheckedCreateWithoutAskedByInput>
  }

  export type DoubtCreateManyAskedByInputEnvelope = {
    data: DoubtCreateManyAskedByInput | DoubtCreateManyAskedByInput[]
    skipDuplicates?: boolean
  }

  export type DoubtCreateWithoutAnsweredByInput = {
    id?: string
    title: string
    answer?: string | null
    askedAt?: Date | string
    answeredAt?: Date | string
    askedBy: UserCreateNestedOneWithoutDoubtAskedInput
    askedSpace: SpaceCreateNestedOneWithoutDoubtInput
  }

  export type DoubtUncheckedCreateWithoutAnsweredByInput = {
    id?: string
    title: string
    answer?: string | null
    askedById: string
    askedAt?: Date | string
    answeredAt?: Date | string
    askedSpaceId: number
  }

  export type DoubtCreateOrConnectWithoutAnsweredByInput = {
    where: DoubtWhereUniqueInput
    create: XOR<DoubtCreateWithoutAnsweredByInput, DoubtUncheckedCreateWithoutAnsweredByInput>
  }

  export type DoubtCreateManyAnsweredByInputEnvelope = {
    data: DoubtCreateManyAnsweredByInput | DoubtCreateManyAnsweredByInput[]
    skipDuplicates?: boolean
  }

  export type SpaceUpsertWithWhereUniqueWithoutAdminInput = {
    where: SpaceWhereUniqueInput
    update: XOR<SpaceUpdateWithoutAdminInput, SpaceUncheckedUpdateWithoutAdminInput>
    create: XOR<SpaceCreateWithoutAdminInput, SpaceUncheckedCreateWithoutAdminInput>
  }

  export type SpaceUpdateWithWhereUniqueWithoutAdminInput = {
    where: SpaceWhereUniqueInput
    data: XOR<SpaceUpdateWithoutAdminInput, SpaceUncheckedUpdateWithoutAdminInput>
  }

  export type SpaceUpdateManyWithWhereWithoutAdminInput = {
    where: SpaceScalarWhereInput
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyWithoutAdminInput>
  }

  export type SpaceScalarWhereInput = {
    AND?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
    OR?: SpaceScalarWhereInput[]
    NOT?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
    id?: IntFilter<"Space"> | number
    name?: StringFilter<"Space"> | string
    subject?: StringFilter<"Space"> | string
    isLive?: BoolFilter<"Space"> | boolean
    createdAt?: DateTimeFilter<"Space"> | Date | string
    adminId?: StringFilter<"Space"> | string
  }

  export type SpaceParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: SpaceParticipantWhereUniqueInput
    update: XOR<SpaceParticipantUpdateWithoutUserInput, SpaceParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<SpaceParticipantCreateWithoutUserInput, SpaceParticipantUncheckedCreateWithoutUserInput>
  }

  export type SpaceParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: SpaceParticipantWhereUniqueInput
    data: XOR<SpaceParticipantUpdateWithoutUserInput, SpaceParticipantUncheckedUpdateWithoutUserInput>
  }

  export type SpaceParticipantUpdateManyWithWhereWithoutUserInput = {
    where: SpaceParticipantScalarWhereInput
    data: XOR<SpaceParticipantUpdateManyMutationInput, SpaceParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type SpaceParticipantScalarWhereInput = {
    AND?: SpaceParticipantScalarWhereInput | SpaceParticipantScalarWhereInput[]
    OR?: SpaceParticipantScalarWhereInput[]
    NOT?: SpaceParticipantScalarWhereInput | SpaceParticipantScalarWhereInput[]
    id?: StringFilter<"SpaceParticipant"> | string
    userId?: StringFilter<"SpaceParticipant"> | string
    spaceId?: IntFilter<"SpaceParticipant"> | number
    joinedAt?: DateTimeFilter<"SpaceParticipant"> | Date | string
    role?: EnumRolesFilter<"SpaceParticipant"> | $Enums.Roles
  }

  export type ChatUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUserInput, ChatUncheckedUpdateWithoutUserInput>
    create: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUserInput, ChatUncheckedUpdateWithoutUserInput>
  }

  export type ChatUpdateManyWithWhereWithoutUserInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: IntFilter<"Chat"> | number
    message?: StringFilter<"Chat"> | string
    userId?: StringFilter<"Chat"> | string
    spaceId?: IntFilter<"Chat"> | number
    sentAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type DoubtUpsertWithWhereUniqueWithoutAskedByInput = {
    where: DoubtWhereUniqueInput
    update: XOR<DoubtUpdateWithoutAskedByInput, DoubtUncheckedUpdateWithoutAskedByInput>
    create: XOR<DoubtCreateWithoutAskedByInput, DoubtUncheckedCreateWithoutAskedByInput>
  }

  export type DoubtUpdateWithWhereUniqueWithoutAskedByInput = {
    where: DoubtWhereUniqueInput
    data: XOR<DoubtUpdateWithoutAskedByInput, DoubtUncheckedUpdateWithoutAskedByInput>
  }

  export type DoubtUpdateManyWithWhereWithoutAskedByInput = {
    where: DoubtScalarWhereInput
    data: XOR<DoubtUpdateManyMutationInput, DoubtUncheckedUpdateManyWithoutAskedByInput>
  }

  export type DoubtScalarWhereInput = {
    AND?: DoubtScalarWhereInput | DoubtScalarWhereInput[]
    OR?: DoubtScalarWhereInput[]
    NOT?: DoubtScalarWhereInput | DoubtScalarWhereInput[]
    id?: StringFilter<"Doubt"> | string
    title?: StringFilter<"Doubt"> | string
    answer?: StringNullableFilter<"Doubt"> | string | null
    askedById?: StringFilter<"Doubt"> | string
    answeredById?: StringFilter<"Doubt"> | string
    askedAt?: DateTimeFilter<"Doubt"> | Date | string
    answeredAt?: DateTimeFilter<"Doubt"> | Date | string
    askedSpaceId?: IntFilter<"Doubt"> | number
  }

  export type DoubtUpsertWithWhereUniqueWithoutAnsweredByInput = {
    where: DoubtWhereUniqueInput
    update: XOR<DoubtUpdateWithoutAnsweredByInput, DoubtUncheckedUpdateWithoutAnsweredByInput>
    create: XOR<DoubtCreateWithoutAnsweredByInput, DoubtUncheckedCreateWithoutAnsweredByInput>
  }

  export type DoubtUpdateWithWhereUniqueWithoutAnsweredByInput = {
    where: DoubtWhereUniqueInput
    data: XOR<DoubtUpdateWithoutAnsweredByInput, DoubtUncheckedUpdateWithoutAnsweredByInput>
  }

  export type DoubtUpdateManyWithWhereWithoutAnsweredByInput = {
    where: DoubtScalarWhereInput
    data: XOR<DoubtUpdateManyMutationInput, DoubtUncheckedUpdateManyWithoutAnsweredByInput>
  }

  export type UserCreateWithoutSpaceCreatedInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    participated?: SpaceParticipantCreateNestedManyWithoutUserInput
    chat?: ChatCreateNestedManyWithoutUserInput
    doubtAsked?: DoubtCreateNestedManyWithoutAskedByInput
    doubtAnswered?: DoubtCreateNestedManyWithoutAnsweredByInput
  }

  export type UserUncheckedCreateWithoutSpaceCreatedInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    participated?: SpaceParticipantUncheckedCreateNestedManyWithoutUserInput
    chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    doubtAsked?: DoubtUncheckedCreateNestedManyWithoutAskedByInput
    doubtAnswered?: DoubtUncheckedCreateNestedManyWithoutAnsweredByInput
  }

  export type UserCreateOrConnectWithoutSpaceCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpaceCreatedInput, UserUncheckedCreateWithoutSpaceCreatedInput>
  }

  export type ChatCreateWithoutSpaceInput = {
    message: string
    sentAt?: Date | string
    user: UserCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutSpaceInput = {
    id?: number
    message: string
    userId: string
    sentAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutSpaceInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutSpaceInput, ChatUncheckedCreateWithoutSpaceInput>
  }

  export type ChatCreateManySpaceInputEnvelope = {
    data: ChatCreateManySpaceInput | ChatCreateManySpaceInput[]
    skipDuplicates?: boolean
  }

  export type SpaceParticipantCreateWithoutSpaceInput = {
    id?: string
    joinedAt?: Date | string
    role: $Enums.Roles
    user: UserCreateNestedOneWithoutParticipatedInput
  }

  export type SpaceParticipantUncheckedCreateWithoutSpaceInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    role: $Enums.Roles
  }

  export type SpaceParticipantCreateOrConnectWithoutSpaceInput = {
    where: SpaceParticipantWhereUniqueInput
    create: XOR<SpaceParticipantCreateWithoutSpaceInput, SpaceParticipantUncheckedCreateWithoutSpaceInput>
  }

  export type SpaceParticipantCreateManySpaceInputEnvelope = {
    data: SpaceParticipantCreateManySpaceInput | SpaceParticipantCreateManySpaceInput[]
    skipDuplicates?: boolean
  }

  export type DoubtCreateWithoutAskedSpaceInput = {
    id?: string
    title: string
    answer?: string | null
    askedAt?: Date | string
    answeredAt?: Date | string
    askedBy: UserCreateNestedOneWithoutDoubtAskedInput
    answeredBy?: UserCreateNestedOneWithoutDoubtAnsweredInput
  }

  export type DoubtUncheckedCreateWithoutAskedSpaceInput = {
    id?: string
    title: string
    answer?: string | null
    askedById: string
    answeredById: string
    askedAt?: Date | string
    answeredAt?: Date | string
  }

  export type DoubtCreateOrConnectWithoutAskedSpaceInput = {
    where: DoubtWhereUniqueInput
    create: XOR<DoubtCreateWithoutAskedSpaceInput, DoubtUncheckedCreateWithoutAskedSpaceInput>
  }

  export type DoubtCreateManyAskedSpaceInputEnvelope = {
    data: DoubtCreateManyAskedSpaceInput | DoubtCreateManyAskedSpaceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSpaceCreatedInput = {
    update: XOR<UserUpdateWithoutSpaceCreatedInput, UserUncheckedUpdateWithoutSpaceCreatedInput>
    create: XOR<UserCreateWithoutSpaceCreatedInput, UserUncheckedCreateWithoutSpaceCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpaceCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpaceCreatedInput, UserUncheckedUpdateWithoutSpaceCreatedInput>
  }

  export type UserUpdateWithoutSpaceCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    participated?: SpaceParticipantUpdateManyWithoutUserNestedInput
    chat?: ChatUpdateManyWithoutUserNestedInput
    doubtAsked?: DoubtUpdateManyWithoutAskedByNestedInput
    doubtAnswered?: DoubtUpdateManyWithoutAnsweredByNestedInput
  }

  export type UserUncheckedUpdateWithoutSpaceCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    participated?: SpaceParticipantUncheckedUpdateManyWithoutUserNestedInput
    chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    doubtAsked?: DoubtUncheckedUpdateManyWithoutAskedByNestedInput
    doubtAnswered?: DoubtUncheckedUpdateManyWithoutAnsweredByNestedInput
  }

  export type ChatUpsertWithWhereUniqueWithoutSpaceInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutSpaceInput, ChatUncheckedUpdateWithoutSpaceInput>
    create: XOR<ChatCreateWithoutSpaceInput, ChatUncheckedCreateWithoutSpaceInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutSpaceInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutSpaceInput, ChatUncheckedUpdateWithoutSpaceInput>
  }

  export type ChatUpdateManyWithWhereWithoutSpaceInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutSpaceInput>
  }

  export type SpaceParticipantUpsertWithWhereUniqueWithoutSpaceInput = {
    where: SpaceParticipantWhereUniqueInput
    update: XOR<SpaceParticipantUpdateWithoutSpaceInput, SpaceParticipantUncheckedUpdateWithoutSpaceInput>
    create: XOR<SpaceParticipantCreateWithoutSpaceInput, SpaceParticipantUncheckedCreateWithoutSpaceInput>
  }

  export type SpaceParticipantUpdateWithWhereUniqueWithoutSpaceInput = {
    where: SpaceParticipantWhereUniqueInput
    data: XOR<SpaceParticipantUpdateWithoutSpaceInput, SpaceParticipantUncheckedUpdateWithoutSpaceInput>
  }

  export type SpaceParticipantUpdateManyWithWhereWithoutSpaceInput = {
    where: SpaceParticipantScalarWhereInput
    data: XOR<SpaceParticipantUpdateManyMutationInput, SpaceParticipantUncheckedUpdateManyWithoutSpaceInput>
  }

  export type DoubtUpsertWithWhereUniqueWithoutAskedSpaceInput = {
    where: DoubtWhereUniqueInput
    update: XOR<DoubtUpdateWithoutAskedSpaceInput, DoubtUncheckedUpdateWithoutAskedSpaceInput>
    create: XOR<DoubtCreateWithoutAskedSpaceInput, DoubtUncheckedCreateWithoutAskedSpaceInput>
  }

  export type DoubtUpdateWithWhereUniqueWithoutAskedSpaceInput = {
    where: DoubtWhereUniqueInput
    data: XOR<DoubtUpdateWithoutAskedSpaceInput, DoubtUncheckedUpdateWithoutAskedSpaceInput>
  }

  export type DoubtUpdateManyWithWhereWithoutAskedSpaceInput = {
    where: DoubtScalarWhereInput
    data: XOR<DoubtUpdateManyMutationInput, DoubtUncheckedUpdateManyWithoutAskedSpaceInput>
  }

  export type UserCreateWithoutParticipatedInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    spaceCreated?: SpaceCreateNestedManyWithoutAdminInput
    chat?: ChatCreateNestedManyWithoutUserInput
    doubtAsked?: DoubtCreateNestedManyWithoutAskedByInput
    doubtAnswered?: DoubtCreateNestedManyWithoutAnsweredByInput
  }

  export type UserUncheckedCreateWithoutParticipatedInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    spaceCreated?: SpaceUncheckedCreateNestedManyWithoutAdminInput
    chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    doubtAsked?: DoubtUncheckedCreateNestedManyWithoutAskedByInput
    doubtAnswered?: DoubtUncheckedCreateNestedManyWithoutAnsweredByInput
  }

  export type UserCreateOrConnectWithoutParticipatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipatedInput, UserUncheckedCreateWithoutParticipatedInput>
  }

  export type SpaceCreateWithoutParticipantsInput = {
    name: string
    subject: string
    isLive?: boolean
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutSpaceCreatedInput
    chat?: ChatCreateNestedManyWithoutSpaceInput
    doubt?: DoubtCreateNestedManyWithoutAskedSpaceInput
  }

  export type SpaceUncheckedCreateWithoutParticipantsInput = {
    id?: number
    name: string
    subject: string
    isLive?: boolean
    createdAt?: Date | string
    adminId: string
    chat?: ChatUncheckedCreateNestedManyWithoutSpaceInput
    doubt?: DoubtUncheckedCreateNestedManyWithoutAskedSpaceInput
  }

  export type SpaceCreateOrConnectWithoutParticipantsInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutParticipantsInput, SpaceUncheckedCreateWithoutParticipantsInput>
  }

  export type UserUpsertWithoutParticipatedInput = {
    update: XOR<UserUpdateWithoutParticipatedInput, UserUncheckedUpdateWithoutParticipatedInput>
    create: XOR<UserCreateWithoutParticipatedInput, UserUncheckedCreateWithoutParticipatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipatedInput, UserUncheckedUpdateWithoutParticipatedInput>
  }

  export type UserUpdateWithoutParticipatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    spaceCreated?: SpaceUpdateManyWithoutAdminNestedInput
    chat?: ChatUpdateManyWithoutUserNestedInput
    doubtAsked?: DoubtUpdateManyWithoutAskedByNestedInput
    doubtAnswered?: DoubtUpdateManyWithoutAnsweredByNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    spaceCreated?: SpaceUncheckedUpdateManyWithoutAdminNestedInput
    chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    doubtAsked?: DoubtUncheckedUpdateManyWithoutAskedByNestedInput
    doubtAnswered?: DoubtUncheckedUpdateManyWithoutAnsweredByNestedInput
  }

  export type SpaceUpsertWithoutParticipantsInput = {
    update: XOR<SpaceUpdateWithoutParticipantsInput, SpaceUncheckedUpdateWithoutParticipantsInput>
    create: XOR<SpaceCreateWithoutParticipantsInput, SpaceUncheckedCreateWithoutParticipantsInput>
    where?: SpaceWhereInput
  }

  export type SpaceUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: SpaceWhereInput
    data: XOR<SpaceUpdateWithoutParticipantsInput, SpaceUncheckedUpdateWithoutParticipantsInput>
  }

  export type SpaceUpdateWithoutParticipantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutSpaceCreatedNestedInput
    chat?: ChatUpdateManyWithoutSpaceNestedInput
    doubt?: DoubtUpdateManyWithoutAskedSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: StringFieldUpdateOperationsInput | string
    chat?: ChatUncheckedUpdateManyWithoutSpaceNestedInput
    doubt?: DoubtUncheckedUpdateManyWithoutAskedSpaceNestedInput
  }

  export type SpaceCreateWithoutChatInput = {
    name: string
    subject: string
    isLive?: boolean
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutSpaceCreatedInput
    participants?: SpaceParticipantCreateNestedManyWithoutSpaceInput
    doubt?: DoubtCreateNestedManyWithoutAskedSpaceInput
  }

  export type SpaceUncheckedCreateWithoutChatInput = {
    id?: number
    name: string
    subject: string
    isLive?: boolean
    createdAt?: Date | string
    adminId: string
    participants?: SpaceParticipantUncheckedCreateNestedManyWithoutSpaceInput
    doubt?: DoubtUncheckedCreateNestedManyWithoutAskedSpaceInput
  }

  export type SpaceCreateOrConnectWithoutChatInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutChatInput, SpaceUncheckedCreateWithoutChatInput>
  }

  export type UserCreateWithoutChatInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    spaceCreated?: SpaceCreateNestedManyWithoutAdminInput
    participated?: SpaceParticipantCreateNestedManyWithoutUserInput
    doubtAsked?: DoubtCreateNestedManyWithoutAskedByInput
    doubtAnswered?: DoubtCreateNestedManyWithoutAnsweredByInput
  }

  export type UserUncheckedCreateWithoutChatInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    spaceCreated?: SpaceUncheckedCreateNestedManyWithoutAdminInput
    participated?: SpaceParticipantUncheckedCreateNestedManyWithoutUserInput
    doubtAsked?: DoubtUncheckedCreateNestedManyWithoutAskedByInput
    doubtAnswered?: DoubtUncheckedCreateNestedManyWithoutAnsweredByInput
  }

  export type UserCreateOrConnectWithoutChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
  }

  export type SpaceUpsertWithoutChatInput = {
    update: XOR<SpaceUpdateWithoutChatInput, SpaceUncheckedUpdateWithoutChatInput>
    create: XOR<SpaceCreateWithoutChatInput, SpaceUncheckedCreateWithoutChatInput>
    where?: SpaceWhereInput
  }

  export type SpaceUpdateToOneWithWhereWithoutChatInput = {
    where?: SpaceWhereInput
    data: XOR<SpaceUpdateWithoutChatInput, SpaceUncheckedUpdateWithoutChatInput>
  }

  export type SpaceUpdateWithoutChatInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutSpaceCreatedNestedInput
    participants?: SpaceParticipantUpdateManyWithoutSpaceNestedInput
    doubt?: DoubtUpdateManyWithoutAskedSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: StringFieldUpdateOperationsInput | string
    participants?: SpaceParticipantUncheckedUpdateManyWithoutSpaceNestedInput
    doubt?: DoubtUncheckedUpdateManyWithoutAskedSpaceNestedInput
  }

  export type UserUpsertWithoutChatInput = {
    update: XOR<UserUpdateWithoutChatInput, UserUncheckedUpdateWithoutChatInput>
    create: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatInput, UserUncheckedUpdateWithoutChatInput>
  }

  export type UserUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    spaceCreated?: SpaceUpdateManyWithoutAdminNestedInput
    participated?: SpaceParticipantUpdateManyWithoutUserNestedInput
    doubtAsked?: DoubtUpdateManyWithoutAskedByNestedInput
    doubtAnswered?: DoubtUpdateManyWithoutAnsweredByNestedInput
  }

  export type UserUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    spaceCreated?: SpaceUncheckedUpdateManyWithoutAdminNestedInput
    participated?: SpaceParticipantUncheckedUpdateManyWithoutUserNestedInput
    doubtAsked?: DoubtUncheckedUpdateManyWithoutAskedByNestedInput
    doubtAnswered?: DoubtUncheckedUpdateManyWithoutAnsweredByNestedInput
  }

  export type UserCreateWithoutDoubtAskedInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    spaceCreated?: SpaceCreateNestedManyWithoutAdminInput
    participated?: SpaceParticipantCreateNestedManyWithoutUserInput
    chat?: ChatCreateNestedManyWithoutUserInput
    doubtAnswered?: DoubtCreateNestedManyWithoutAnsweredByInput
  }

  export type UserUncheckedCreateWithoutDoubtAskedInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    spaceCreated?: SpaceUncheckedCreateNestedManyWithoutAdminInput
    participated?: SpaceParticipantUncheckedCreateNestedManyWithoutUserInput
    chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    doubtAnswered?: DoubtUncheckedCreateNestedManyWithoutAnsweredByInput
  }

  export type UserCreateOrConnectWithoutDoubtAskedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoubtAskedInput, UserUncheckedCreateWithoutDoubtAskedInput>
  }

  export type UserCreateWithoutDoubtAnsweredInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    spaceCreated?: SpaceCreateNestedManyWithoutAdminInput
    participated?: SpaceParticipantCreateNestedManyWithoutUserInput
    chat?: ChatCreateNestedManyWithoutUserInput
    doubtAsked?: DoubtCreateNestedManyWithoutAskedByInput
  }

  export type UserUncheckedCreateWithoutDoubtAnsweredInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    spaceCreated?: SpaceUncheckedCreateNestedManyWithoutAdminInput
    participated?: SpaceParticipantUncheckedCreateNestedManyWithoutUserInput
    chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    doubtAsked?: DoubtUncheckedCreateNestedManyWithoutAskedByInput
  }

  export type UserCreateOrConnectWithoutDoubtAnsweredInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoubtAnsweredInput, UserUncheckedCreateWithoutDoubtAnsweredInput>
  }

  export type SpaceCreateWithoutDoubtInput = {
    name: string
    subject: string
    isLive?: boolean
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutSpaceCreatedInput
    chat?: ChatCreateNestedManyWithoutSpaceInput
    participants?: SpaceParticipantCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateWithoutDoubtInput = {
    id?: number
    name: string
    subject: string
    isLive?: boolean
    createdAt?: Date | string
    adminId: string
    chat?: ChatUncheckedCreateNestedManyWithoutSpaceInput
    participants?: SpaceParticipantUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceCreateOrConnectWithoutDoubtInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutDoubtInput, SpaceUncheckedCreateWithoutDoubtInput>
  }

  export type UserUpsertWithoutDoubtAskedInput = {
    update: XOR<UserUpdateWithoutDoubtAskedInput, UserUncheckedUpdateWithoutDoubtAskedInput>
    create: XOR<UserCreateWithoutDoubtAskedInput, UserUncheckedCreateWithoutDoubtAskedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoubtAskedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoubtAskedInput, UserUncheckedUpdateWithoutDoubtAskedInput>
  }

  export type UserUpdateWithoutDoubtAskedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    spaceCreated?: SpaceUpdateManyWithoutAdminNestedInput
    participated?: SpaceParticipantUpdateManyWithoutUserNestedInput
    chat?: ChatUpdateManyWithoutUserNestedInput
    doubtAnswered?: DoubtUpdateManyWithoutAnsweredByNestedInput
  }

  export type UserUncheckedUpdateWithoutDoubtAskedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    spaceCreated?: SpaceUncheckedUpdateManyWithoutAdminNestedInput
    participated?: SpaceParticipantUncheckedUpdateManyWithoutUserNestedInput
    chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    doubtAnswered?: DoubtUncheckedUpdateManyWithoutAnsweredByNestedInput
  }

  export type UserUpsertWithoutDoubtAnsweredInput = {
    update: XOR<UserUpdateWithoutDoubtAnsweredInput, UserUncheckedUpdateWithoutDoubtAnsweredInput>
    create: XOR<UserCreateWithoutDoubtAnsweredInput, UserUncheckedCreateWithoutDoubtAnsweredInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoubtAnsweredInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoubtAnsweredInput, UserUncheckedUpdateWithoutDoubtAnsweredInput>
  }

  export type UserUpdateWithoutDoubtAnsweredInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    spaceCreated?: SpaceUpdateManyWithoutAdminNestedInput
    participated?: SpaceParticipantUpdateManyWithoutUserNestedInput
    chat?: ChatUpdateManyWithoutUserNestedInput
    doubtAsked?: DoubtUpdateManyWithoutAskedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDoubtAnsweredInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    spaceCreated?: SpaceUncheckedUpdateManyWithoutAdminNestedInput
    participated?: SpaceParticipantUncheckedUpdateManyWithoutUserNestedInput
    chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    doubtAsked?: DoubtUncheckedUpdateManyWithoutAskedByNestedInput
  }

  export type SpaceUpsertWithoutDoubtInput = {
    update: XOR<SpaceUpdateWithoutDoubtInput, SpaceUncheckedUpdateWithoutDoubtInput>
    create: XOR<SpaceCreateWithoutDoubtInput, SpaceUncheckedCreateWithoutDoubtInput>
    where?: SpaceWhereInput
  }

  export type SpaceUpdateToOneWithWhereWithoutDoubtInput = {
    where?: SpaceWhereInput
    data: XOR<SpaceUpdateWithoutDoubtInput, SpaceUncheckedUpdateWithoutDoubtInput>
  }

  export type SpaceUpdateWithoutDoubtInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutSpaceCreatedNestedInput
    chat?: ChatUpdateManyWithoutSpaceNestedInput
    participants?: SpaceParticipantUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutDoubtInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: StringFieldUpdateOperationsInput | string
    chat?: ChatUncheckedUpdateManyWithoutSpaceNestedInput
    participants?: SpaceParticipantUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceCreateManyAdminInput = {
    id?: number
    name: string
    subject: string
    isLive?: boolean
    createdAt?: Date | string
  }

  export type SpaceParticipantCreateManyUserInput = {
    id?: string
    spaceId: number
    joinedAt?: Date | string
    role: $Enums.Roles
  }

  export type ChatCreateManyUserInput = {
    id?: number
    message: string
    spaceId: number
    sentAt?: Date | string
  }

  export type DoubtCreateManyAskedByInput = {
    id?: string
    title: string
    answer?: string | null
    answeredById: string
    askedAt?: Date | string
    answeredAt?: Date | string
    askedSpaceId: number
  }

  export type DoubtCreateManyAnsweredByInput = {
    id?: string
    title: string
    answer?: string | null
    askedById: string
    askedAt?: Date | string
    answeredAt?: Date | string
    askedSpaceId: number
  }

  export type SpaceUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateManyWithoutSpaceNestedInput
    participants?: SpaceParticipantUpdateManyWithoutSpaceNestedInput
    doubt?: DoubtUpdateManyWithoutAskedSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUncheckedUpdateManyWithoutSpaceNestedInput
    participants?: SpaceParticipantUncheckedUpdateManyWithoutSpaceNestedInput
    doubt?: DoubtUncheckedUpdateManyWithoutAskedSpaceNestedInput
  }

  export type SpaceUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpaceParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    space?: SpaceUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type SpaceParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    spaceId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type SpaceParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    spaceId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type ChatUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    space?: SpaceUpdateOneRequiredWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    spaceId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    spaceId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoubtUpdateWithoutAskedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredBy?: UserUpdateOneWithoutDoubtAnsweredNestedInput
    askedSpace?: SpaceUpdateOneRequiredWithoutDoubtNestedInput
  }

  export type DoubtUncheckedUpdateWithoutAskedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    answeredById?: StringFieldUpdateOperationsInput | string
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    askedSpaceId?: IntFieldUpdateOperationsInput | number
  }

  export type DoubtUncheckedUpdateManyWithoutAskedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    answeredById?: StringFieldUpdateOperationsInput | string
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    askedSpaceId?: IntFieldUpdateOperationsInput | number
  }

  export type DoubtUpdateWithoutAnsweredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    askedBy?: UserUpdateOneRequiredWithoutDoubtAskedNestedInput
    askedSpace?: SpaceUpdateOneRequiredWithoutDoubtNestedInput
  }

  export type DoubtUncheckedUpdateWithoutAnsweredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    askedById?: StringFieldUpdateOperationsInput | string
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    askedSpaceId?: IntFieldUpdateOperationsInput | number
  }

  export type DoubtUncheckedUpdateManyWithoutAnsweredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    askedById?: StringFieldUpdateOperationsInput | string
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    askedSpaceId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatCreateManySpaceInput = {
    id?: number
    message: string
    userId: string
    sentAt?: Date | string
  }

  export type SpaceParticipantCreateManySpaceInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    role: $Enums.Roles
  }

  export type DoubtCreateManyAskedSpaceInput = {
    id?: string
    title: string
    answer?: string | null
    askedById: string
    answeredById: string
    askedAt?: Date | string
    answeredAt?: Date | string
  }

  export type ChatUpdateWithoutSpaceInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutSpaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutSpaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpaceParticipantUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    user?: UserUpdateOneRequiredWithoutParticipatedNestedInput
  }

  export type SpaceParticipantUncheckedUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type SpaceParticipantUncheckedUpdateManyWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type DoubtUpdateWithoutAskedSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    askedBy?: UserUpdateOneRequiredWithoutDoubtAskedNestedInput
    answeredBy?: UserUpdateOneWithoutDoubtAnsweredNestedInput
  }

  export type DoubtUncheckedUpdateWithoutAskedSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    askedById?: StringFieldUpdateOperationsInput | string
    answeredById?: StringFieldUpdateOperationsInput | string
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoubtUncheckedUpdateManyWithoutAskedSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    askedById?: StringFieldUpdateOperationsInput | string
    answeredById?: StringFieldUpdateOperationsInput | string
    askedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}