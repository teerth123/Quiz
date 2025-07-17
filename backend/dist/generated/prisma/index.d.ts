
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
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model StudentQuiz
 * 
 */
export type StudentQuiz = $Result.DefaultSelection<Prisma.$StudentQuizPayload>
/**
 * Model Response
 * 
 */
export type Response = $Result.DefaultSelection<Prisma.$ResponsePayload>

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
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentQuiz`: Exposes CRUD operations for the **StudentQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentQuizs
    * const studentQuizs = await prisma.studentQuiz.findMany()
    * ```
    */
  get studentQuiz(): Prisma.StudentQuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.response`: Exposes CRUD operations for the **Response** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Responses
    * const responses = await prisma.response.findMany()
    * ```
    */
  get response(): Prisma.ResponseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
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
    Quiz: 'Quiz',
    Question: 'Question',
    StudentQuiz: 'StudentQuiz',
    Response: 'Response'
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
      modelProps: "user" | "quiz" | "question" | "studentQuiz" | "response"
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
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      StudentQuiz: {
        payload: Prisma.$StudentQuizPayload<ExtArgs>
        fields: Prisma.StudentQuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentQuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentQuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>
          }
          findFirst: {
            args: Prisma.StudentQuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentQuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>
          }
          findMany: {
            args: Prisma.StudentQuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>[]
          }
          create: {
            args: Prisma.StudentQuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>
          }
          createMany: {
            args: Prisma.StudentQuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentQuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>[]
          }
          delete: {
            args: Prisma.StudentQuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>
          }
          update: {
            args: Prisma.StudentQuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>
          }
          deleteMany: {
            args: Prisma.StudentQuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentQuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentQuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>[]
          }
          upsert: {
            args: Prisma.StudentQuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>
          }
          aggregate: {
            args: Prisma.StudentQuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentQuiz>
          }
          groupBy: {
            args: Prisma.StudentQuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentQuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentQuizCountArgs<ExtArgs>
            result: $Utils.Optional<StudentQuizCountAggregateOutputType> | number
          }
        }
      }
      Response: {
        payload: Prisma.$ResponsePayload<ExtArgs>
        fields: Prisma.ResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          findFirst: {
            args: Prisma.ResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          findMany: {
            args: Prisma.ResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          create: {
            args: Prisma.ResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          createMany: {
            args: Prisma.ResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          delete: {
            args: Prisma.ResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          update: {
            args: Prisma.ResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          deleteMany: {
            args: Prisma.ResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          upsert: {
            args: Prisma.ResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          aggregate: {
            args: Prisma.ResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponse>
          }
          groupBy: {
            args: Prisma.ResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResponseCountArgs<ExtArgs>
            result: $Utils.Optional<ResponseCountAggregateOutputType> | number
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
    quiz?: QuizOmit
    question?: QuestionOmit
    studentQuiz?: StudentQuizOmit
    response?: ResponseOmit
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
    Response: number
    studentQuizzes: number
    createdRooms: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Response?: boolean | UserCountOutputTypeCountResponseArgs
    studentQuizzes?: boolean | UserCountOutputTypeCountStudentQuizzesArgs
    createdRooms?: boolean | UserCountOutputTypeCountCreatedRoomsArgs
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
  export type UserCountOutputTypeCountResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentQuizWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    studentQuizzes: number
    question: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentQuizzes?: boolean | QuizCountOutputTypeCountStudentQuizzesArgs
    question?: boolean | QuizCountOutputTypeCountQuestionArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountStudentQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentQuizWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    responses: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | QuestionCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    Response?: boolean | User$ResponseArgs<ExtArgs>
    studentQuizzes?: boolean | User$studentQuizzesArgs<ExtArgs>
    createdRooms?: boolean | User$createdRoomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Response?: boolean | User$ResponseArgs<ExtArgs>
    studentQuizzes?: boolean | User$studentQuizzesArgs<ExtArgs>
    createdRooms?: boolean | User$createdRoomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Response: Prisma.$ResponsePayload<ExtArgs>[]
      studentQuizzes: Prisma.$StudentQuizPayload<ExtArgs>[]
      createdRooms: Prisma.$QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      createdAt: Date
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
    Response<T extends User$ResponseArgs<ExtArgs> = {}>(args?: Subset<T, User$ResponseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentQuizzes<T extends User$studentQuizzesArgs<ExtArgs> = {}>(args?: Subset<T, User$studentQuizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdRooms<T extends User$createdRoomsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User.Response
   */
  export type User$ResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    cursor?: ResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * User.studentQuizzes
   */
  export type User$studentQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    where?: StudentQuizWhereInput
    orderBy?: StudentQuizOrderByWithRelationInput | StudentQuizOrderByWithRelationInput[]
    cursor?: StudentQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentQuizScalarFieldEnum | StudentQuizScalarFieldEnum[]
  }

  /**
   * User.createdRooms
   */
  export type User$createdRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
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
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type QuizSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    uniqueCode: string | null
    authorId: number | null
    realTime: boolean | null
  }

  export type QuizMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    uniqueCode: string | null
    authorId: number | null
    realTime: boolean | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    uniqueCode: number
    authorId: number
    realTime: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type QuizSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    uniqueCode?: true
    authorId?: true
    realTime?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    uniqueCode?: true
    authorId?: true
    realTime?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    uniqueCode?: true
    authorId?: true
    realTime?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: number
    title: string
    createdAt: Date
    uniqueCode: string
    authorId: number
    realTime: boolean
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    uniqueCode?: boolean
    authorId?: boolean
    realTime?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    studentQuizzes?: boolean | Quiz$studentQuizzesArgs<ExtArgs>
    question?: boolean | Quiz$questionArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    uniqueCode?: boolean
    authorId?: boolean
    realTime?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    uniqueCode?: boolean
    authorId?: boolean
    realTime?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    uniqueCode?: boolean
    authorId?: boolean
    realTime?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "uniqueCode" | "authorId" | "realTime", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    studentQuizzes?: boolean | Quiz$studentQuizzesArgs<ExtArgs>
    question?: boolean | Quiz$questionArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      studentQuizzes: Prisma.$StudentQuizPayload<ExtArgs>[]
      question: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      createdAt: Date
      uniqueCode: string
      authorId: number
      realTime: boolean
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studentQuizzes<T extends Quiz$studentQuizzesArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$studentQuizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    question<T extends Quiz$questionArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$questionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'Int'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
    readonly uniqueCode: FieldRef<"Quiz", 'String'>
    readonly authorId: FieldRef<"Quiz", 'Int'>
    readonly realTime: FieldRef<"Quiz", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.studentQuizzes
   */
  export type Quiz$studentQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    where?: StudentQuizWhereInput
    orderBy?: StudentQuizOrderByWithRelationInput | StudentQuizOrderByWithRelationInput[]
    cursor?: StudentQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentQuizScalarFieldEnum | StudentQuizScalarFieldEnum[]
  }

  /**
   * Quiz.question
   */
  export type Quiz$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    countDown: number | null
    correctAnswerIndex: number | null
    marks: number | null
    quizId: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    countDown: number | null
    correctAnswerIndex: number | null
    marks: number | null
    quizId: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    title: string | null
    countDown: number | null
    correctAnswerIndex: number | null
    marks: number | null
    quizId: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    countDown: number | null
    correctAnswerIndex: number | null
    marks: number | null
    quizId: number | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    title: number
    answers: number
    countDown: number
    correctAnswerIndex: number
    marks: number
    quizId: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    countDown?: true
    correctAnswerIndex?: true
    marks?: true
    quizId?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    countDown?: true
    correctAnswerIndex?: true
    marks?: true
    quizId?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    title?: true
    countDown?: true
    correctAnswerIndex?: true
    marks?: true
    quizId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    title?: true
    countDown?: true
    correctAnswerIndex?: true
    marks?: true
    quizId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    title?: true
    answers?: true
    countDown?: true
    correctAnswerIndex?: true
    marks?: true
    quizId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    title: string
    answers: string[]
    countDown: number | null
    correctAnswerIndex: number
    marks: number
    quizId: number
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    answers?: boolean
    countDown?: boolean
    correctAnswerIndex?: boolean
    marks?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    responses?: boolean | Question$responsesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    answers?: boolean
    countDown?: boolean
    correctAnswerIndex?: boolean
    marks?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    answers?: boolean
    countDown?: boolean
    correctAnswerIndex?: boolean
    marks?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    title?: boolean
    answers?: boolean
    countDown?: boolean
    correctAnswerIndex?: boolean
    marks?: boolean
    quizId?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "answers" | "countDown" | "correctAnswerIndex" | "marks" | "quizId", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    responses?: boolean | Question$responsesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      responses: Prisma.$ResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      answers: string[]
      countDown: number | null
      correctAnswerIndex: number
      marks: number
      quizId: number
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends Question$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Question$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly title: FieldRef<"Question", 'String'>
    readonly answers: FieldRef<"Question", 'String[]'>
    readonly countDown: FieldRef<"Question", 'Float'>
    readonly correctAnswerIndex: FieldRef<"Question", 'Int'>
    readonly marks: FieldRef<"Question", 'Int'>
    readonly quizId: FieldRef<"Question", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.responses
   */
  export type Question$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    cursor?: ResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model StudentQuiz
   */

  export type AggregateStudentQuiz = {
    _count: StudentQuizCountAggregateOutputType | null
    _avg: StudentQuizAvgAggregateOutputType | null
    _sum: StudentQuizSumAggregateOutputType | null
    _min: StudentQuizMinAggregateOutputType | null
    _max: StudentQuizMaxAggregateOutputType | null
  }

  export type StudentQuizAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    quizId: number | null
    score: number | null
  }

  export type StudentQuizSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    quizId: number | null
    score: number | null
  }

  export type StudentQuizMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    quizId: number | null
    score: number | null
  }

  export type StudentQuizMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    quizId: number | null
    score: number | null
  }

  export type StudentQuizCountAggregateOutputType = {
    id: number
    studentId: number
    quizId: number
    score: number
    _all: number
  }


  export type StudentQuizAvgAggregateInputType = {
    id?: true
    studentId?: true
    quizId?: true
    score?: true
  }

  export type StudentQuizSumAggregateInputType = {
    id?: true
    studentId?: true
    quizId?: true
    score?: true
  }

  export type StudentQuizMinAggregateInputType = {
    id?: true
    studentId?: true
    quizId?: true
    score?: true
  }

  export type StudentQuizMaxAggregateInputType = {
    id?: true
    studentId?: true
    quizId?: true
    score?: true
  }

  export type StudentQuizCountAggregateInputType = {
    id?: true
    studentId?: true
    quizId?: true
    score?: true
    _all?: true
  }

  export type StudentQuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentQuiz to aggregate.
     */
    where?: StudentQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQuizs to fetch.
     */
    orderBy?: StudentQuizOrderByWithRelationInput | StudentQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentQuizs
    **/
    _count?: true | StudentQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentQuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentQuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentQuizMaxAggregateInputType
  }

  export type GetStudentQuizAggregateType<T extends StudentQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentQuiz[P]>
      : GetScalarType<T[P], AggregateStudentQuiz[P]>
  }




  export type StudentQuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentQuizWhereInput
    orderBy?: StudentQuizOrderByWithAggregationInput | StudentQuizOrderByWithAggregationInput[]
    by: StudentQuizScalarFieldEnum[] | StudentQuizScalarFieldEnum
    having?: StudentQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentQuizCountAggregateInputType | true
    _avg?: StudentQuizAvgAggregateInputType
    _sum?: StudentQuizSumAggregateInputType
    _min?: StudentQuizMinAggregateInputType
    _max?: StudentQuizMaxAggregateInputType
  }

  export type StudentQuizGroupByOutputType = {
    id: number
    studentId: number
    quizId: number
    score: number
    _count: StudentQuizCountAggregateOutputType | null
    _avg: StudentQuizAvgAggregateOutputType | null
    _sum: StudentQuizSumAggregateOutputType | null
    _min: StudentQuizMinAggregateOutputType | null
    _max: StudentQuizMaxAggregateOutputType | null
  }

  type GetStudentQuizGroupByPayload<T extends StudentQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentQuizGroupByOutputType[P]>
            : GetScalarType<T[P], StudentQuizGroupByOutputType[P]>
        }
      >
    >


  export type StudentQuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    quizId?: boolean
    score?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentQuiz"]>

  export type StudentQuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    quizId?: boolean
    score?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentQuiz"]>

  export type StudentQuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    quizId?: boolean
    score?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentQuiz"]>

  export type StudentQuizSelectScalar = {
    id?: boolean
    studentId?: boolean
    quizId?: boolean
    score?: boolean
  }

  export type StudentQuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "quizId" | "score", ExtArgs["result"]["studentQuiz"]>
  export type StudentQuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type StudentQuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type StudentQuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $StudentQuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentQuiz"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      quizId: number
      score: number
    }, ExtArgs["result"]["studentQuiz"]>
    composites: {}
  }

  type StudentQuizGetPayload<S extends boolean | null | undefined | StudentQuizDefaultArgs> = $Result.GetResult<Prisma.$StudentQuizPayload, S>

  type StudentQuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentQuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentQuizCountAggregateInputType | true
    }

  export interface StudentQuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentQuiz'], meta: { name: 'StudentQuiz' } }
    /**
     * Find zero or one StudentQuiz that matches the filter.
     * @param {StudentQuizFindUniqueArgs} args - Arguments to find a StudentQuiz
     * @example
     * // Get one StudentQuiz
     * const studentQuiz = await prisma.studentQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentQuizFindUniqueArgs>(args: SelectSubset<T, StudentQuizFindUniqueArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentQuiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentQuizFindUniqueOrThrowArgs} args - Arguments to find a StudentQuiz
     * @example
     * // Get one StudentQuiz
     * const studentQuiz = await prisma.studentQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentQuizFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentQuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizFindFirstArgs} args - Arguments to find a StudentQuiz
     * @example
     * // Get one StudentQuiz
     * const studentQuiz = await prisma.studentQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentQuizFindFirstArgs>(args?: SelectSubset<T, StudentQuizFindFirstArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentQuiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizFindFirstOrThrowArgs} args - Arguments to find a StudentQuiz
     * @example
     * // Get one StudentQuiz
     * const studentQuiz = await prisma.studentQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentQuizFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentQuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentQuizs
     * const studentQuizs = await prisma.studentQuiz.findMany()
     * 
     * // Get first 10 StudentQuizs
     * const studentQuizs = await prisma.studentQuiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentQuizWithIdOnly = await prisma.studentQuiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentQuizFindManyArgs>(args?: SelectSubset<T, StudentQuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentQuiz.
     * @param {StudentQuizCreateArgs} args - Arguments to create a StudentQuiz.
     * @example
     * // Create one StudentQuiz
     * const StudentQuiz = await prisma.studentQuiz.create({
     *   data: {
     *     // ... data to create a StudentQuiz
     *   }
     * })
     * 
     */
    create<T extends StudentQuizCreateArgs>(args: SelectSubset<T, StudentQuizCreateArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentQuizs.
     * @param {StudentQuizCreateManyArgs} args - Arguments to create many StudentQuizs.
     * @example
     * // Create many StudentQuizs
     * const studentQuiz = await prisma.studentQuiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentQuizCreateManyArgs>(args?: SelectSubset<T, StudentQuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentQuizs and returns the data saved in the database.
     * @param {StudentQuizCreateManyAndReturnArgs} args - Arguments to create many StudentQuizs.
     * @example
     * // Create many StudentQuizs
     * const studentQuiz = await prisma.studentQuiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentQuizs and only return the `id`
     * const studentQuizWithIdOnly = await prisma.studentQuiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentQuizCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentQuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentQuiz.
     * @param {StudentQuizDeleteArgs} args - Arguments to delete one StudentQuiz.
     * @example
     * // Delete one StudentQuiz
     * const StudentQuiz = await prisma.studentQuiz.delete({
     *   where: {
     *     // ... filter to delete one StudentQuiz
     *   }
     * })
     * 
     */
    delete<T extends StudentQuizDeleteArgs>(args: SelectSubset<T, StudentQuizDeleteArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentQuiz.
     * @param {StudentQuizUpdateArgs} args - Arguments to update one StudentQuiz.
     * @example
     * // Update one StudentQuiz
     * const studentQuiz = await prisma.studentQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentQuizUpdateArgs>(args: SelectSubset<T, StudentQuizUpdateArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentQuizs.
     * @param {StudentQuizDeleteManyArgs} args - Arguments to filter StudentQuizs to delete.
     * @example
     * // Delete a few StudentQuizs
     * const { count } = await prisma.studentQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentQuizDeleteManyArgs>(args?: SelectSubset<T, StudentQuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentQuizs
     * const studentQuiz = await prisma.studentQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentQuizUpdateManyArgs>(args: SelectSubset<T, StudentQuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentQuizs and returns the data updated in the database.
     * @param {StudentQuizUpdateManyAndReturnArgs} args - Arguments to update many StudentQuizs.
     * @example
     * // Update many StudentQuizs
     * const studentQuiz = await prisma.studentQuiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentQuizs and only return the `id`
     * const studentQuizWithIdOnly = await prisma.studentQuiz.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentQuizUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentQuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentQuiz.
     * @param {StudentQuizUpsertArgs} args - Arguments to update or create a StudentQuiz.
     * @example
     * // Update or create a StudentQuiz
     * const studentQuiz = await prisma.studentQuiz.upsert({
     *   create: {
     *     // ... data to create a StudentQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentQuiz we want to update
     *   }
     * })
     */
    upsert<T extends StudentQuizUpsertArgs>(args: SelectSubset<T, StudentQuizUpsertArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizCountArgs} args - Arguments to filter StudentQuizs to count.
     * @example
     * // Count the number of StudentQuizs
     * const count = await prisma.studentQuiz.count({
     *   where: {
     *     // ... the filter for the StudentQuizs we want to count
     *   }
     * })
    **/
    count<T extends StudentQuizCountArgs>(
      args?: Subset<T, StudentQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentQuizAggregateArgs>(args: Subset<T, StudentQuizAggregateArgs>): Prisma.PrismaPromise<GetStudentQuizAggregateType<T>>

    /**
     * Group by StudentQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizGroupByArgs} args - Group by arguments.
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
      T extends StudentQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentQuizGroupByArgs['orderBy'] }
        : { orderBy?: StudentQuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentQuiz model
   */
  readonly fields: StudentQuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentQuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentQuiz model
   */
  interface StudentQuizFieldRefs {
    readonly id: FieldRef<"StudentQuiz", 'Int'>
    readonly studentId: FieldRef<"StudentQuiz", 'Int'>
    readonly quizId: FieldRef<"StudentQuiz", 'Int'>
    readonly score: FieldRef<"StudentQuiz", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StudentQuiz findUnique
   */
  export type StudentQuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuiz to fetch.
     */
    where: StudentQuizWhereUniqueInput
  }

  /**
   * StudentQuiz findUniqueOrThrow
   */
  export type StudentQuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuiz to fetch.
     */
    where: StudentQuizWhereUniqueInput
  }

  /**
   * StudentQuiz findFirst
   */
  export type StudentQuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuiz to fetch.
     */
    where?: StudentQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQuizs to fetch.
     */
    orderBy?: StudentQuizOrderByWithRelationInput | StudentQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentQuizs.
     */
    cursor?: StudentQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentQuizs.
     */
    distinct?: StudentQuizScalarFieldEnum | StudentQuizScalarFieldEnum[]
  }

  /**
   * StudentQuiz findFirstOrThrow
   */
  export type StudentQuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuiz to fetch.
     */
    where?: StudentQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQuizs to fetch.
     */
    orderBy?: StudentQuizOrderByWithRelationInput | StudentQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentQuizs.
     */
    cursor?: StudentQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentQuizs.
     */
    distinct?: StudentQuizScalarFieldEnum | StudentQuizScalarFieldEnum[]
  }

  /**
   * StudentQuiz findMany
   */
  export type StudentQuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuizs to fetch.
     */
    where?: StudentQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQuizs to fetch.
     */
    orderBy?: StudentQuizOrderByWithRelationInput | StudentQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentQuizs.
     */
    cursor?: StudentQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQuizs.
     */
    skip?: number
    distinct?: StudentQuizScalarFieldEnum | StudentQuizScalarFieldEnum[]
  }

  /**
   * StudentQuiz create
   */
  export type StudentQuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentQuiz.
     */
    data: XOR<StudentQuizCreateInput, StudentQuizUncheckedCreateInput>
  }

  /**
   * StudentQuiz createMany
   */
  export type StudentQuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentQuizs.
     */
    data: StudentQuizCreateManyInput | StudentQuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentQuiz createManyAndReturn
   */
  export type StudentQuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * The data used to create many StudentQuizs.
     */
    data: StudentQuizCreateManyInput | StudentQuizCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentQuiz update
   */
  export type StudentQuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentQuiz.
     */
    data: XOR<StudentQuizUpdateInput, StudentQuizUncheckedUpdateInput>
    /**
     * Choose, which StudentQuiz to update.
     */
    where: StudentQuizWhereUniqueInput
  }

  /**
   * StudentQuiz updateMany
   */
  export type StudentQuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentQuizs.
     */
    data: XOR<StudentQuizUpdateManyMutationInput, StudentQuizUncheckedUpdateManyInput>
    /**
     * Filter which StudentQuizs to update
     */
    where?: StudentQuizWhereInput
    /**
     * Limit how many StudentQuizs to update.
     */
    limit?: number
  }

  /**
   * StudentQuiz updateManyAndReturn
   */
  export type StudentQuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * The data used to update StudentQuizs.
     */
    data: XOR<StudentQuizUpdateManyMutationInput, StudentQuizUncheckedUpdateManyInput>
    /**
     * Filter which StudentQuizs to update
     */
    where?: StudentQuizWhereInput
    /**
     * Limit how many StudentQuizs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentQuiz upsert
   */
  export type StudentQuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentQuiz to update in case it exists.
     */
    where: StudentQuizWhereUniqueInput
    /**
     * In case the StudentQuiz found by the `where` argument doesn't exist, create a new StudentQuiz with this data.
     */
    create: XOR<StudentQuizCreateInput, StudentQuizUncheckedCreateInput>
    /**
     * In case the StudentQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentQuizUpdateInput, StudentQuizUncheckedUpdateInput>
  }

  /**
   * StudentQuiz delete
   */
  export type StudentQuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * Filter which StudentQuiz to delete.
     */
    where: StudentQuizWhereUniqueInput
  }

  /**
   * StudentQuiz deleteMany
   */
  export type StudentQuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentQuizs to delete
     */
    where?: StudentQuizWhereInput
    /**
     * Limit how many StudentQuizs to delete.
     */
    limit?: number
  }

  /**
   * StudentQuiz without action
   */
  export type StudentQuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
  }


  /**
   * Model Response
   */

  export type AggregateResponse = {
    _count: ResponseCountAggregateOutputType | null
    _avg: ResponseAvgAggregateOutputType | null
    _sum: ResponseSumAggregateOutputType | null
    _min: ResponseMinAggregateOutputType | null
    _max: ResponseMaxAggregateOutputType | null
  }

  export type ResponseAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    questionId: number | null
    answeredIndex: number | null
  }

  export type ResponseSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    questionId: number | null
    answeredIndex: number | null
  }

  export type ResponseMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    questionId: number | null
    answeredIndex: number | null
    createdAt: Date | null
  }

  export type ResponseMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    questionId: number | null
    answeredIndex: number | null
    createdAt: Date | null
  }

  export type ResponseCountAggregateOutputType = {
    id: number
    studentId: number
    questionId: number
    answeredIndex: number
    createdAt: number
    _all: number
  }


  export type ResponseAvgAggregateInputType = {
    id?: true
    studentId?: true
    questionId?: true
    answeredIndex?: true
  }

  export type ResponseSumAggregateInputType = {
    id?: true
    studentId?: true
    questionId?: true
    answeredIndex?: true
  }

  export type ResponseMinAggregateInputType = {
    id?: true
    studentId?: true
    questionId?: true
    answeredIndex?: true
    createdAt?: true
  }

  export type ResponseMaxAggregateInputType = {
    id?: true
    studentId?: true
    questionId?: true
    answeredIndex?: true
    createdAt?: true
  }

  export type ResponseCountAggregateInputType = {
    id?: true
    studentId?: true
    questionId?: true
    answeredIndex?: true
    createdAt?: true
    _all?: true
  }

  export type ResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Response to aggregate.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Responses
    **/
    _count?: true | ResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponseMaxAggregateInputType
  }

  export type GetResponseAggregateType<T extends ResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponse[P]>
      : GetScalarType<T[P], AggregateResponse[P]>
  }




  export type ResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithAggregationInput | ResponseOrderByWithAggregationInput[]
    by: ResponseScalarFieldEnum[] | ResponseScalarFieldEnum
    having?: ResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponseCountAggregateInputType | true
    _avg?: ResponseAvgAggregateInputType
    _sum?: ResponseSumAggregateInputType
    _min?: ResponseMinAggregateInputType
    _max?: ResponseMaxAggregateInputType
  }

  export type ResponseGroupByOutputType = {
    id: number
    studentId: number
    questionId: number
    answeredIndex: number
    createdAt: Date
    _count: ResponseCountAggregateOutputType | null
    _avg: ResponseAvgAggregateOutputType | null
    _sum: ResponseSumAggregateOutputType | null
    _min: ResponseMinAggregateOutputType | null
    _max: ResponseMaxAggregateOutputType | null
  }

  type GetResponseGroupByPayload<T extends ResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponseGroupByOutputType[P]>
            : GetScalarType<T[P], ResponseGroupByOutputType[P]>
        }
      >
    >


  export type ResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    questionId?: boolean
    answeredIndex?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    questionId?: boolean
    answeredIndex?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    questionId?: boolean
    answeredIndex?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectScalar = {
    id?: boolean
    studentId?: boolean
    questionId?: boolean
    answeredIndex?: boolean
    createdAt?: boolean
  }

  export type ResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "questionId" | "answeredIndex" | "createdAt", ExtArgs["result"]["response"]>
  export type ResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type ResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type ResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $ResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Response"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      questionId: number
      answeredIndex: number
      createdAt: Date
    }, ExtArgs["result"]["response"]>
    composites: {}
  }

  type ResponseGetPayload<S extends boolean | null | undefined | ResponseDefaultArgs> = $Result.GetResult<Prisma.$ResponsePayload, S>

  type ResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResponseCountAggregateInputType | true
    }

  export interface ResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Response'], meta: { name: 'Response' } }
    /**
     * Find zero or one Response that matches the filter.
     * @param {ResponseFindUniqueArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponseFindUniqueArgs>(args: SelectSubset<T, ResponseFindUniqueArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Response that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResponseFindUniqueOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, ResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Response that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponseFindFirstArgs>(args?: SelectSubset<T, ResponseFindFirstArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Response that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, ResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responses
     * const responses = await prisma.response.findMany()
     * 
     * // Get first 10 Responses
     * const responses = await prisma.response.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responseWithIdOnly = await prisma.response.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResponseFindManyArgs>(args?: SelectSubset<T, ResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Response.
     * @param {ResponseCreateArgs} args - Arguments to create a Response.
     * @example
     * // Create one Response
     * const Response = await prisma.response.create({
     *   data: {
     *     // ... data to create a Response
     *   }
     * })
     * 
     */
    create<T extends ResponseCreateArgs>(args: SelectSubset<T, ResponseCreateArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Responses.
     * @param {ResponseCreateManyArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const response = await prisma.response.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResponseCreateManyArgs>(args?: SelectSubset<T, ResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Responses and returns the data saved in the database.
     * @param {ResponseCreateManyAndReturnArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const response = await prisma.response.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Responses and only return the `id`
     * const responseWithIdOnly = await prisma.response.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, ResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Response.
     * @param {ResponseDeleteArgs} args - Arguments to delete one Response.
     * @example
     * // Delete one Response
     * const Response = await prisma.response.delete({
     *   where: {
     *     // ... filter to delete one Response
     *   }
     * })
     * 
     */
    delete<T extends ResponseDeleteArgs>(args: SelectSubset<T, ResponseDeleteArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Response.
     * @param {ResponseUpdateArgs} args - Arguments to update one Response.
     * @example
     * // Update one Response
     * const response = await prisma.response.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResponseUpdateArgs>(args: SelectSubset<T, ResponseUpdateArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Responses.
     * @param {ResponseDeleteManyArgs} args - Arguments to filter Responses to delete.
     * @example
     * // Delete a few Responses
     * const { count } = await prisma.response.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResponseDeleteManyArgs>(args?: SelectSubset<T, ResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responses
     * const response = await prisma.response.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResponseUpdateManyArgs>(args: SelectSubset<T, ResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responses and returns the data updated in the database.
     * @param {ResponseUpdateManyAndReturnArgs} args - Arguments to update many Responses.
     * @example
     * // Update many Responses
     * const response = await prisma.response.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Responses and only return the `id`
     * const responseWithIdOnly = await prisma.response.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, ResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Response.
     * @param {ResponseUpsertArgs} args - Arguments to update or create a Response.
     * @example
     * // Update or create a Response
     * const response = await prisma.response.upsert({
     *   create: {
     *     // ... data to create a Response
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Response we want to update
     *   }
     * })
     */
    upsert<T extends ResponseUpsertArgs>(args: SelectSubset<T, ResponseUpsertArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseCountArgs} args - Arguments to filter Responses to count.
     * @example
     * // Count the number of Responses
     * const count = await prisma.response.count({
     *   where: {
     *     // ... the filter for the Responses we want to count
     *   }
     * })
    **/
    count<T extends ResponseCountArgs>(
      args?: Subset<T, ResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResponseAggregateArgs>(args: Subset<T, ResponseAggregateArgs>): Prisma.PrismaPromise<GetResponseAggregateType<T>>

    /**
     * Group by Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseGroupByArgs} args - Group by arguments.
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
      T extends ResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponseGroupByArgs['orderBy'] }
        : { orderBy?: ResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Response model
   */
  readonly fields: ResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Response.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Response model
   */
  interface ResponseFieldRefs {
    readonly id: FieldRef<"Response", 'Int'>
    readonly studentId: FieldRef<"Response", 'Int'>
    readonly questionId: FieldRef<"Response", 'Int'>
    readonly answeredIndex: FieldRef<"Response", 'Int'>
    readonly createdAt: FieldRef<"Response", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Response findUnique
   */
  export type ResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response findUniqueOrThrow
   */
  export type ResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response findFirst
   */
  export type ResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response findFirstOrThrow
   */
  export type ResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response findMany
   */
  export type ResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Responses to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response create
   */
  export type ResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a Response.
     */
    data: XOR<ResponseCreateInput, ResponseUncheckedCreateInput>
  }

  /**
   * Response createMany
   */
  export type ResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Responses.
     */
    data: ResponseCreateManyInput | ResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Response createManyAndReturn
   */
  export type ResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * The data used to create many Responses.
     */
    data: ResponseCreateManyInput | ResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Response update
   */
  export type ResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a Response.
     */
    data: XOR<ResponseUpdateInput, ResponseUncheckedUpdateInput>
    /**
     * Choose, which Response to update.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response updateMany
   */
  export type ResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Responses.
     */
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyInput>
    /**
     * Filter which Responses to update
     */
    where?: ResponseWhereInput
    /**
     * Limit how many Responses to update.
     */
    limit?: number
  }

  /**
   * Response updateManyAndReturn
   */
  export type ResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * The data used to update Responses.
     */
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyInput>
    /**
     * Filter which Responses to update
     */
    where?: ResponseWhereInput
    /**
     * Limit how many Responses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Response upsert
   */
  export type ResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the Response to update in case it exists.
     */
    where: ResponseWhereUniqueInput
    /**
     * In case the Response found by the `where` argument doesn't exist, create a new Response with this data.
     */
    create: XOR<ResponseCreateInput, ResponseUncheckedCreateInput>
    /**
     * In case the Response was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponseUpdateInput, ResponseUncheckedUpdateInput>
  }

  /**
   * Response delete
   */
  export type ResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter which Response to delete.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response deleteMany
   */
  export type ResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responses to delete
     */
    where?: ResponseWhereInput
    /**
     * Limit how many Responses to delete.
     */
    limit?: number
  }

  /**
   * Response without action
   */
  export type ResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    uniqueCode: 'uniqueCode',
    authorId: 'authorId',
    realTime: 'realTime'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    answers: 'answers',
    countDown: 'countDown',
    correctAnswerIndex: 'correctAnswerIndex',
    marks: 'marks',
    quizId: 'quizId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const StudentQuizScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    quizId: 'quizId',
    score: 'score'
  };

  export type StudentQuizScalarFieldEnum = (typeof StudentQuizScalarFieldEnum)[keyof typeof StudentQuizScalarFieldEnum]


  export const ResponseScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    questionId: 'questionId',
    answeredIndex: 'answeredIndex',
    createdAt: 'createdAt'
  };

  export type ResponseScalarFieldEnum = (typeof ResponseScalarFieldEnum)[keyof typeof ResponseScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    Response?: ResponseListRelationFilter
    studentQuizzes?: StudentQuizListRelationFilter
    createdRooms?: QuizListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    Response?: ResponseOrderByRelationAggregateInput
    studentQuizzes?: StudentQuizOrderByRelationAggregateInput
    createdRooms?: QuizOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    Response?: ResponseListRelationFilter
    studentQuizzes?: StudentQuizListRelationFilter
    createdRooms?: QuizListRelationFilter
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: IntFilter<"Quiz"> | number
    title?: StringFilter<"Quiz"> | string
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    uniqueCode?: StringFilter<"Quiz"> | string
    authorId?: IntFilter<"Quiz"> | number
    realTime?: BoolFilter<"Quiz"> | boolean
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    studentQuizzes?: StudentQuizListRelationFilter
    question?: QuestionListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    uniqueCode?: SortOrder
    authorId?: SortOrder
    realTime?: SortOrder
    author?: UserOrderByWithRelationInput
    studentQuizzes?: StudentQuizOrderByRelationAggregateInput
    question?: QuestionOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uniqueCode?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    title?: StringFilter<"Quiz"> | string
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    authorId?: IntFilter<"Quiz"> | number
    realTime?: BoolFilter<"Quiz"> | boolean
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    studentQuizzes?: StudentQuizListRelationFilter
    question?: QuestionListRelationFilter
  }, "id" | "id" | "uniqueCode">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    uniqueCode?: SortOrder
    authorId?: SortOrder
    realTime?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quiz"> | number
    title?: StringWithAggregatesFilter<"Quiz"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    uniqueCode?: StringWithAggregatesFilter<"Quiz"> | string
    authorId?: IntWithAggregatesFilter<"Quiz"> | number
    realTime?: BoolWithAggregatesFilter<"Quiz"> | boolean
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    title?: StringFilter<"Question"> | string
    answers?: StringNullableListFilter<"Question">
    countDown?: FloatNullableFilter<"Question"> | number | null
    correctAnswerIndex?: IntFilter<"Question"> | number
    marks?: IntFilter<"Question"> | number
    quizId?: IntFilter<"Question"> | number
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    responses?: ResponseListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    answers?: SortOrder
    countDown?: SortOrderInput | SortOrder
    correctAnswerIndex?: SortOrder
    marks?: SortOrder
    quizId?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    responses?: ResponseOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    title?: StringFilter<"Question"> | string
    answers?: StringNullableListFilter<"Question">
    countDown?: FloatNullableFilter<"Question"> | number | null
    correctAnswerIndex?: IntFilter<"Question"> | number
    marks?: IntFilter<"Question"> | number
    quizId?: IntFilter<"Question"> | number
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    responses?: ResponseListRelationFilter
  }, "id" | "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    answers?: SortOrder
    countDown?: SortOrderInput | SortOrder
    correctAnswerIndex?: SortOrder
    marks?: SortOrder
    quizId?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    title?: StringWithAggregatesFilter<"Question"> | string
    answers?: StringNullableListFilter<"Question">
    countDown?: FloatNullableWithAggregatesFilter<"Question"> | number | null
    correctAnswerIndex?: IntWithAggregatesFilter<"Question"> | number
    marks?: IntWithAggregatesFilter<"Question"> | number
    quizId?: IntWithAggregatesFilter<"Question"> | number
  }

  export type StudentQuizWhereInput = {
    AND?: StudentQuizWhereInput | StudentQuizWhereInput[]
    OR?: StudentQuizWhereInput[]
    NOT?: StudentQuizWhereInput | StudentQuizWhereInput[]
    id?: IntFilter<"StudentQuiz"> | number
    studentId?: IntFilter<"StudentQuiz"> | number
    quizId?: IntFilter<"StudentQuiz"> | number
    score?: IntFilter<"StudentQuiz"> | number
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type StudentQuizOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    student?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
  }

  export type StudentQuizWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_quizId?: StudentQuizStudentIdQuizIdCompoundUniqueInput
    AND?: StudentQuizWhereInput | StudentQuizWhereInput[]
    OR?: StudentQuizWhereInput[]
    NOT?: StudentQuizWhereInput | StudentQuizWhereInput[]
    studentId?: IntFilter<"StudentQuiz"> | number
    quizId?: IntFilter<"StudentQuiz"> | number
    score?: IntFilter<"StudentQuiz"> | number
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id" | "studentId_quizId">

  export type StudentQuizOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    _count?: StudentQuizCountOrderByAggregateInput
    _avg?: StudentQuizAvgOrderByAggregateInput
    _max?: StudentQuizMaxOrderByAggregateInput
    _min?: StudentQuizMinOrderByAggregateInput
    _sum?: StudentQuizSumOrderByAggregateInput
  }

  export type StudentQuizScalarWhereWithAggregatesInput = {
    AND?: StudentQuizScalarWhereWithAggregatesInput | StudentQuizScalarWhereWithAggregatesInput[]
    OR?: StudentQuizScalarWhereWithAggregatesInput[]
    NOT?: StudentQuizScalarWhereWithAggregatesInput | StudentQuizScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentQuiz"> | number
    studentId?: IntWithAggregatesFilter<"StudentQuiz"> | number
    quizId?: IntWithAggregatesFilter<"StudentQuiz"> | number
    score?: IntWithAggregatesFilter<"StudentQuiz"> | number
  }

  export type ResponseWhereInput = {
    AND?: ResponseWhereInput | ResponseWhereInput[]
    OR?: ResponseWhereInput[]
    NOT?: ResponseWhereInput | ResponseWhereInput[]
    id?: IntFilter<"Response"> | number
    studentId?: IntFilter<"Response"> | number
    questionId?: IntFilter<"Response"> | number
    answeredIndex?: IntFilter<"Response"> | number
    createdAt?: DateTimeFilter<"Response"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type ResponseOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    questionId?: SortOrder
    answeredIndex?: SortOrder
    createdAt?: SortOrder
    student?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type ResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResponseWhereInput | ResponseWhereInput[]
    OR?: ResponseWhereInput[]
    NOT?: ResponseWhereInput | ResponseWhereInput[]
    studentId?: IntFilter<"Response"> | number
    questionId?: IntFilter<"Response"> | number
    answeredIndex?: IntFilter<"Response"> | number
    createdAt?: DateTimeFilter<"Response"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "id">

  export type ResponseOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    questionId?: SortOrder
    answeredIndex?: SortOrder
    createdAt?: SortOrder
    _count?: ResponseCountOrderByAggregateInput
    _avg?: ResponseAvgOrderByAggregateInput
    _max?: ResponseMaxOrderByAggregateInput
    _min?: ResponseMinOrderByAggregateInput
    _sum?: ResponseSumOrderByAggregateInput
  }

  export type ResponseScalarWhereWithAggregatesInput = {
    AND?: ResponseScalarWhereWithAggregatesInput | ResponseScalarWhereWithAggregatesInput[]
    OR?: ResponseScalarWhereWithAggregatesInput[]
    NOT?: ResponseScalarWhereWithAggregatesInput | ResponseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Response"> | number
    studentId?: IntWithAggregatesFilter<"Response"> | number
    questionId?: IntWithAggregatesFilter<"Response"> | number
    answeredIndex?: IntWithAggregatesFilter<"Response"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Response"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    Response?: ResponseCreateNestedManyWithoutStudentInput
    studentQuizzes?: StudentQuizCreateNestedManyWithoutStudentInput
    createdRooms?: QuizCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    Response?: ResponseUncheckedCreateNestedManyWithoutStudentInput
    studentQuizzes?: StudentQuizUncheckedCreateNestedManyWithoutStudentInput
    createdRooms?: QuizUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Response?: ResponseUpdateManyWithoutStudentNestedInput
    studentQuizzes?: StudentQuizUpdateManyWithoutStudentNestedInput
    createdRooms?: QuizUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Response?: ResponseUncheckedUpdateManyWithoutStudentNestedInput
    studentQuizzes?: StudentQuizUncheckedUpdateManyWithoutStudentNestedInput
    createdRooms?: QuizUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    title: string
    createdAt?: Date | string
    uniqueCode: string
    realTime?: boolean
    author: UserCreateNestedOneWithoutCreatedRoomsInput
    studentQuizzes?: StudentQuizCreateNestedManyWithoutQuizInput
    question?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    uniqueCode: string
    authorId: number
    realTime?: boolean
    studentQuizzes?: StudentQuizUncheckedCreateNestedManyWithoutQuizInput
    question?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    realTime?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
    studentQuizzes?: StudentQuizUpdateManyWithoutQuizNestedInput
    question?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    realTime?: BoolFieldUpdateOperationsInput | boolean
    studentQuizzes?: StudentQuizUncheckedUpdateManyWithoutQuizNestedInput
    question?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: number
    title: string
    createdAt?: Date | string
    uniqueCode: string
    authorId: number
    realTime?: boolean
  }

  export type QuizUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    realTime?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    realTime?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionCreateInput = {
    title: string
    answers?: QuestionCreateanswersInput | string[]
    countDown?: number | null
    correctAnswerIndex: number
    marks: number
    quiz: QuizCreateNestedOneWithoutQuestionInput
    responses?: ResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    title: string
    answers?: QuestionCreateanswersInput | string[]
    countDown?: number | null
    correctAnswerIndex: number
    marks: number
    quizId: number
    responses?: ResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    answers?: QuestionUpdateanswersInput | string[]
    countDown?: NullableFloatFieldUpdateOperationsInput | number | null
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    marks?: IntFieldUpdateOperationsInput | number
    quiz?: QuizUpdateOneRequiredWithoutQuestionNestedInput
    responses?: ResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    answers?: QuestionUpdateanswersInput | string[]
    countDown?: NullableFloatFieldUpdateOperationsInput | number | null
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    marks?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    responses?: ResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    title: string
    answers?: QuestionCreateanswersInput | string[]
    countDown?: number | null
    correctAnswerIndex: number
    marks: number
    quizId: number
  }

  export type QuestionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    answers?: QuestionUpdateanswersInput | string[]
    countDown?: NullableFloatFieldUpdateOperationsInput | number | null
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    marks?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    answers?: QuestionUpdateanswersInput | string[]
    countDown?: NullableFloatFieldUpdateOperationsInput | number | null
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    marks?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentQuizCreateInput = {
    score?: number
    student: UserCreateNestedOneWithoutStudentQuizzesInput
    quiz: QuizCreateNestedOneWithoutStudentQuizzesInput
  }

  export type StudentQuizUncheckedCreateInput = {
    id?: number
    studentId: number
    quizId: number
    score?: number
  }

  export type StudentQuizUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    student?: UserUpdateOneRequiredWithoutStudentQuizzesNestedInput
    quiz?: QuizUpdateOneRequiredWithoutStudentQuizzesNestedInput
  }

  export type StudentQuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type StudentQuizCreateManyInput = {
    id?: number
    studentId: number
    quizId: number
    score?: number
  }

  export type StudentQuizUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
  }

  export type StudentQuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type ResponseCreateInput = {
    answeredIndex: number
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutResponseInput
    question: QuestionCreateNestedOneWithoutResponsesInput
  }

  export type ResponseUncheckedCreateInput = {
    id?: number
    studentId: number
    questionId: number
    answeredIndex: number
    createdAt?: Date | string
  }

  export type ResponseUpdateInput = {
    answeredIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutResponseNestedInput
    question?: QuestionUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ResponseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answeredIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseCreateManyInput = {
    id?: number
    studentId: number
    questionId: number
    answeredIndex: number
    createdAt?: Date | string
  }

  export type ResponseUpdateManyMutationInput = {
    answeredIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answeredIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ResponseListRelationFilter = {
    every?: ResponseWhereInput
    some?: ResponseWhereInput
    none?: ResponseWhereInput
  }

  export type StudentQuizListRelationFilter = {
    every?: StudentQuizWhereInput
    some?: StudentQuizWhereInput
    none?: StudentQuizWhereInput
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type ResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentQuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    uniqueCode?: SortOrder
    authorId?: SortOrder
    realTime?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    uniqueCode?: SortOrder
    authorId?: SortOrder
    realTime?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    uniqueCode?: SortOrder
    authorId?: SortOrder
    realTime?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    answers?: SortOrder
    countDown?: SortOrder
    correctAnswerIndex?: SortOrder
    marks?: SortOrder
    quizId?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    countDown?: SortOrder
    correctAnswerIndex?: SortOrder
    marks?: SortOrder
    quizId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    countDown?: SortOrder
    correctAnswerIndex?: SortOrder
    marks?: SortOrder
    quizId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    countDown?: SortOrder
    correctAnswerIndex?: SortOrder
    marks?: SortOrder
    quizId?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    countDown?: SortOrder
    correctAnswerIndex?: SortOrder
    marks?: SortOrder
    quizId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StudentQuizStudentIdQuizIdCompoundUniqueInput = {
    studentId: number
    quizId: number
  }

  export type StudentQuizCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
  }

  export type StudentQuizAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
  }

  export type StudentQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
  }

  export type StudentQuizMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
  }

  export type StudentQuizSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type ResponseCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    questionId?: SortOrder
    answeredIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type ResponseAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    questionId?: SortOrder
    answeredIndex?: SortOrder
  }

  export type ResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    questionId?: SortOrder
    answeredIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type ResponseMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    questionId?: SortOrder
    answeredIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type ResponseSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    questionId?: SortOrder
    answeredIndex?: SortOrder
  }

  export type ResponseCreateNestedManyWithoutStudentInput = {
    create?: XOR<ResponseCreateWithoutStudentInput, ResponseUncheckedCreateWithoutStudentInput> | ResponseCreateWithoutStudentInput[] | ResponseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutStudentInput | ResponseCreateOrConnectWithoutStudentInput[]
    createMany?: ResponseCreateManyStudentInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type StudentQuizCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentQuizCreateWithoutStudentInput, StudentQuizUncheckedCreateWithoutStudentInput> | StudentQuizCreateWithoutStudentInput[] | StudentQuizUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutStudentInput | StudentQuizCreateOrConnectWithoutStudentInput[]
    createMany?: StudentQuizCreateManyStudentInputEnvelope
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuizCreateWithoutAuthorInput, QuizUncheckedCreateWithoutAuthorInput> | QuizCreateWithoutAuthorInput[] | QuizUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutAuthorInput | QuizCreateOrConnectWithoutAuthorInput[]
    createMany?: QuizCreateManyAuthorInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type ResponseUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ResponseCreateWithoutStudentInput, ResponseUncheckedCreateWithoutStudentInput> | ResponseCreateWithoutStudentInput[] | ResponseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutStudentInput | ResponseCreateOrConnectWithoutStudentInput[]
    createMany?: ResponseCreateManyStudentInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type StudentQuizUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentQuizCreateWithoutStudentInput, StudentQuizUncheckedCreateWithoutStudentInput> | StudentQuizCreateWithoutStudentInput[] | StudentQuizUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutStudentInput | StudentQuizCreateOrConnectWithoutStudentInput[]
    createMany?: StudentQuizCreateManyStudentInputEnvelope
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuizCreateWithoutAuthorInput, QuizUncheckedCreateWithoutAuthorInput> | QuizCreateWithoutAuthorInput[] | QuizUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutAuthorInput | QuizCreateOrConnectWithoutAuthorInput[]
    createMany?: QuizCreateManyAuthorInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResponseUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ResponseCreateWithoutStudentInput, ResponseUncheckedCreateWithoutStudentInput> | ResponseCreateWithoutStudentInput[] | ResponseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutStudentInput | ResponseCreateOrConnectWithoutStudentInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutStudentInput | ResponseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ResponseCreateManyStudentInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutStudentInput | ResponseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutStudentInput | ResponseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type StudentQuizUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentQuizCreateWithoutStudentInput, StudentQuizUncheckedCreateWithoutStudentInput> | StudentQuizCreateWithoutStudentInput[] | StudentQuizUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutStudentInput | StudentQuizCreateOrConnectWithoutStudentInput[]
    upsert?: StudentQuizUpsertWithWhereUniqueWithoutStudentInput | StudentQuizUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentQuizCreateManyStudentInputEnvelope
    set?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    disconnect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    delete?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    update?: StudentQuizUpdateWithWhereUniqueWithoutStudentInput | StudentQuizUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentQuizUpdateManyWithWhereWithoutStudentInput | StudentQuizUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentQuizScalarWhereInput | StudentQuizScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuizCreateWithoutAuthorInput, QuizUncheckedCreateWithoutAuthorInput> | QuizCreateWithoutAuthorInput[] | QuizUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutAuthorInput | QuizCreateOrConnectWithoutAuthorInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutAuthorInput | QuizUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuizCreateManyAuthorInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutAuthorInput | QuizUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutAuthorInput | QuizUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResponseUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ResponseCreateWithoutStudentInput, ResponseUncheckedCreateWithoutStudentInput> | ResponseCreateWithoutStudentInput[] | ResponseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutStudentInput | ResponseCreateOrConnectWithoutStudentInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutStudentInput | ResponseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ResponseCreateManyStudentInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutStudentInput | ResponseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutStudentInput | ResponseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type StudentQuizUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentQuizCreateWithoutStudentInput, StudentQuizUncheckedCreateWithoutStudentInput> | StudentQuizCreateWithoutStudentInput[] | StudentQuizUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutStudentInput | StudentQuizCreateOrConnectWithoutStudentInput[]
    upsert?: StudentQuizUpsertWithWhereUniqueWithoutStudentInput | StudentQuizUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentQuizCreateManyStudentInputEnvelope
    set?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    disconnect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    delete?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    update?: StudentQuizUpdateWithWhereUniqueWithoutStudentInput | StudentQuizUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentQuizUpdateManyWithWhereWithoutStudentInput | StudentQuizUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentQuizScalarWhereInput | StudentQuizScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuizCreateWithoutAuthorInput, QuizUncheckedCreateWithoutAuthorInput> | QuizCreateWithoutAuthorInput[] | QuizUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutAuthorInput | QuizCreateOrConnectWithoutAuthorInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutAuthorInput | QuizUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuizCreateManyAuthorInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutAuthorInput | QuizUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutAuthorInput | QuizUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedRoomsInput = {
    create?: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type StudentQuizCreateNestedManyWithoutQuizInput = {
    create?: XOR<StudentQuizCreateWithoutQuizInput, StudentQuizUncheckedCreateWithoutQuizInput> | StudentQuizCreateWithoutQuizInput[] | StudentQuizUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutQuizInput | StudentQuizCreateOrConnectWithoutQuizInput[]
    createMany?: StudentQuizCreateManyQuizInputEnvelope
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type StudentQuizUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<StudentQuizCreateWithoutQuizInput, StudentQuizUncheckedCreateWithoutQuizInput> | StudentQuizCreateWithoutQuizInput[] | StudentQuizUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutQuizInput | StudentQuizCreateOrConnectWithoutQuizInput[]
    createMany?: StudentQuizCreateManyQuizInputEnvelope
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCreatedRoomsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRoomsInput
    upsert?: UserUpsertWithoutCreatedRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedRoomsInput, UserUpdateWithoutCreatedRoomsInput>, UserUncheckedUpdateWithoutCreatedRoomsInput>
  }

  export type StudentQuizUpdateManyWithoutQuizNestedInput = {
    create?: XOR<StudentQuizCreateWithoutQuizInput, StudentQuizUncheckedCreateWithoutQuizInput> | StudentQuizCreateWithoutQuizInput[] | StudentQuizUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutQuizInput | StudentQuizCreateOrConnectWithoutQuizInput[]
    upsert?: StudentQuizUpsertWithWhereUniqueWithoutQuizInput | StudentQuizUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: StudentQuizCreateManyQuizInputEnvelope
    set?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    disconnect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    delete?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    update?: StudentQuizUpdateWithWhereUniqueWithoutQuizInput | StudentQuizUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: StudentQuizUpdateManyWithWhereWithoutQuizInput | StudentQuizUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: StudentQuizScalarWhereInput | StudentQuizScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type StudentQuizUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<StudentQuizCreateWithoutQuizInput, StudentQuizUncheckedCreateWithoutQuizInput> | StudentQuizCreateWithoutQuizInput[] | StudentQuizUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutQuizInput | StudentQuizCreateOrConnectWithoutQuizInput[]
    upsert?: StudentQuizUpsertWithWhereUniqueWithoutQuizInput | StudentQuizUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: StudentQuizCreateManyQuizInputEnvelope
    set?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    disconnect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    delete?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    update?: StudentQuizUpdateWithWhereUniqueWithoutQuizInput | StudentQuizUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: StudentQuizUpdateManyWithWhereWithoutQuizInput | StudentQuizUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: StudentQuizScalarWhereInput | StudentQuizScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionCreateanswersInput = {
    set: string[]
  }

  export type QuizCreateNestedOneWithoutQuestionInput = {
    create?: XOR<QuizCreateWithoutQuestionInput, QuizUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionInput
    connect?: QuizWhereUniqueInput
  }

  export type ResponseCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ResponseCreateWithoutQuestionInput, ResponseUncheckedCreateWithoutQuestionInput> | ResponseCreateWithoutQuestionInput[] | ResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutQuestionInput | ResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: ResponseCreateManyQuestionInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type ResponseUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ResponseCreateWithoutQuestionInput, ResponseUncheckedCreateWithoutQuestionInput> | ResponseCreateWithoutQuestionInput[] | ResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutQuestionInput | ResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: ResponseCreateManyQuestionInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type QuestionUpdateanswersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuizUpdateOneRequiredWithoutQuestionNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionInput, QuizUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionInput
    upsert?: QuizUpsertWithoutQuestionInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionInput, QuizUpdateWithoutQuestionInput>, QuizUncheckedUpdateWithoutQuestionInput>
  }

  export type ResponseUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ResponseCreateWithoutQuestionInput, ResponseUncheckedCreateWithoutQuestionInput> | ResponseCreateWithoutQuestionInput[] | ResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutQuestionInput | ResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutQuestionInput | ResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ResponseCreateManyQuestionInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutQuestionInput | ResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutQuestionInput | ResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type ResponseUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ResponseCreateWithoutQuestionInput, ResponseUncheckedCreateWithoutQuestionInput> | ResponseCreateWithoutQuestionInput[] | ResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutQuestionInput | ResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutQuestionInput | ResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ResponseCreateManyQuestionInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutQuestionInput | ResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutQuestionInput | ResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentQuizzesInput = {
    create?: XOR<UserCreateWithoutStudentQuizzesInput, UserUncheckedCreateWithoutStudentQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentQuizzesInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutStudentQuizzesInput = {
    create?: XOR<QuizCreateWithoutStudentQuizzesInput, QuizUncheckedCreateWithoutStudentQuizzesInput>
    connectOrCreate?: QuizCreateOrConnectWithoutStudentQuizzesInput
    connect?: QuizWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStudentQuizzesNestedInput = {
    create?: XOR<UserCreateWithoutStudentQuizzesInput, UserUncheckedCreateWithoutStudentQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentQuizzesInput
    upsert?: UserUpsertWithoutStudentQuizzesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentQuizzesInput, UserUpdateWithoutStudentQuizzesInput>, UserUncheckedUpdateWithoutStudentQuizzesInput>
  }

  export type QuizUpdateOneRequiredWithoutStudentQuizzesNestedInput = {
    create?: XOR<QuizCreateWithoutStudentQuizzesInput, QuizUncheckedCreateWithoutStudentQuizzesInput>
    connectOrCreate?: QuizCreateOrConnectWithoutStudentQuizzesInput
    upsert?: QuizUpsertWithoutStudentQuizzesInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutStudentQuizzesInput, QuizUpdateWithoutStudentQuizzesInput>, QuizUncheckedUpdateWithoutStudentQuizzesInput>
  }

  export type UserCreateNestedOneWithoutResponseInput = {
    create?: XOR<UserCreateWithoutResponseInput, UserUncheckedCreateWithoutResponseInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponseInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutResponsesInput = {
    create?: XOR<QuestionCreateWithoutResponsesInput, QuestionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutResponsesInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutResponseNestedInput = {
    create?: XOR<UserCreateWithoutResponseInput, UserUncheckedCreateWithoutResponseInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponseInput
    upsert?: UserUpsertWithoutResponseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResponseInput, UserUpdateWithoutResponseInput>, UserUncheckedUpdateWithoutResponseInput>
  }

  export type QuestionUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<QuestionCreateWithoutResponsesInput, QuestionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutResponsesInput
    upsert?: QuestionUpsertWithoutResponsesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutResponsesInput, QuestionUpdateWithoutResponsesInput>, QuestionUncheckedUpdateWithoutResponsesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type ResponseCreateWithoutStudentInput = {
    answeredIndex: number
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutResponsesInput
  }

  export type ResponseUncheckedCreateWithoutStudentInput = {
    id?: number
    questionId: number
    answeredIndex: number
    createdAt?: Date | string
  }

  export type ResponseCreateOrConnectWithoutStudentInput = {
    where: ResponseWhereUniqueInput
    create: XOR<ResponseCreateWithoutStudentInput, ResponseUncheckedCreateWithoutStudentInput>
  }

  export type ResponseCreateManyStudentInputEnvelope = {
    data: ResponseCreateManyStudentInput | ResponseCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentQuizCreateWithoutStudentInput = {
    score?: number
    quiz: QuizCreateNestedOneWithoutStudentQuizzesInput
  }

  export type StudentQuizUncheckedCreateWithoutStudentInput = {
    id?: number
    quizId: number
    score?: number
  }

  export type StudentQuizCreateOrConnectWithoutStudentInput = {
    where: StudentQuizWhereUniqueInput
    create: XOR<StudentQuizCreateWithoutStudentInput, StudentQuizUncheckedCreateWithoutStudentInput>
  }

  export type StudentQuizCreateManyStudentInputEnvelope = {
    data: StudentQuizCreateManyStudentInput | StudentQuizCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutAuthorInput = {
    title: string
    createdAt?: Date | string
    uniqueCode: string
    realTime?: boolean
    studentQuizzes?: StudentQuizCreateNestedManyWithoutQuizInput
    question?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    createdAt?: Date | string
    uniqueCode: string
    realTime?: boolean
    studentQuizzes?: StudentQuizUncheckedCreateNestedManyWithoutQuizInput
    question?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutAuthorInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutAuthorInput, QuizUncheckedCreateWithoutAuthorInput>
  }

  export type QuizCreateManyAuthorInputEnvelope = {
    data: QuizCreateManyAuthorInput | QuizCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ResponseUpsertWithWhereUniqueWithoutStudentInput = {
    where: ResponseWhereUniqueInput
    update: XOR<ResponseUpdateWithoutStudentInput, ResponseUncheckedUpdateWithoutStudentInput>
    create: XOR<ResponseCreateWithoutStudentInput, ResponseUncheckedCreateWithoutStudentInput>
  }

  export type ResponseUpdateWithWhereUniqueWithoutStudentInput = {
    where: ResponseWhereUniqueInput
    data: XOR<ResponseUpdateWithoutStudentInput, ResponseUncheckedUpdateWithoutStudentInput>
  }

  export type ResponseUpdateManyWithWhereWithoutStudentInput = {
    where: ResponseScalarWhereInput
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyWithoutStudentInput>
  }

  export type ResponseScalarWhereInput = {
    AND?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
    OR?: ResponseScalarWhereInput[]
    NOT?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
    id?: IntFilter<"Response"> | number
    studentId?: IntFilter<"Response"> | number
    questionId?: IntFilter<"Response"> | number
    answeredIndex?: IntFilter<"Response"> | number
    createdAt?: DateTimeFilter<"Response"> | Date | string
  }

  export type StudentQuizUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentQuizWhereUniqueInput
    update: XOR<StudentQuizUpdateWithoutStudentInput, StudentQuizUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentQuizCreateWithoutStudentInput, StudentQuizUncheckedCreateWithoutStudentInput>
  }

  export type StudentQuizUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentQuizWhereUniqueInput
    data: XOR<StudentQuizUpdateWithoutStudentInput, StudentQuizUncheckedUpdateWithoutStudentInput>
  }

  export type StudentQuizUpdateManyWithWhereWithoutStudentInput = {
    where: StudentQuizScalarWhereInput
    data: XOR<StudentQuizUpdateManyMutationInput, StudentQuizUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentQuizScalarWhereInput = {
    AND?: StudentQuizScalarWhereInput | StudentQuizScalarWhereInput[]
    OR?: StudentQuizScalarWhereInput[]
    NOT?: StudentQuizScalarWhereInput | StudentQuizScalarWhereInput[]
    id?: IntFilter<"StudentQuiz"> | number
    studentId?: IntFilter<"StudentQuiz"> | number
    quizId?: IntFilter<"StudentQuiz"> | number
    score?: IntFilter<"StudentQuiz"> | number
  }

  export type QuizUpsertWithWhereUniqueWithoutAuthorInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutAuthorInput, QuizUncheckedUpdateWithoutAuthorInput>
    create: XOR<QuizCreateWithoutAuthorInput, QuizUncheckedCreateWithoutAuthorInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutAuthorInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutAuthorInput, QuizUncheckedUpdateWithoutAuthorInput>
  }

  export type QuizUpdateManyWithWhereWithoutAuthorInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutAuthorInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: IntFilter<"Quiz"> | number
    title?: StringFilter<"Quiz"> | string
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    uniqueCode?: StringFilter<"Quiz"> | string
    authorId?: IntFilter<"Quiz"> | number
    realTime?: BoolFilter<"Quiz"> | boolean
  }

  export type UserCreateWithoutCreatedRoomsInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    Response?: ResponseCreateNestedManyWithoutStudentInput
    studentQuizzes?: StudentQuizCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutCreatedRoomsInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    Response?: ResponseUncheckedCreateNestedManyWithoutStudentInput
    studentQuizzes?: StudentQuizUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutCreatedRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
  }

  export type StudentQuizCreateWithoutQuizInput = {
    score?: number
    student: UserCreateNestedOneWithoutStudentQuizzesInput
  }

  export type StudentQuizUncheckedCreateWithoutQuizInput = {
    id?: number
    studentId: number
    score?: number
  }

  export type StudentQuizCreateOrConnectWithoutQuizInput = {
    where: StudentQuizWhereUniqueInput
    create: XOR<StudentQuizCreateWithoutQuizInput, StudentQuizUncheckedCreateWithoutQuizInput>
  }

  export type StudentQuizCreateManyQuizInputEnvelope = {
    data: StudentQuizCreateManyQuizInput | StudentQuizCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutQuizInput = {
    title: string
    answers?: QuestionCreateanswersInput | string[]
    countDown?: number | null
    correctAnswerIndex: number
    marks: number
    responses?: ResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuizInput = {
    id?: number
    title: string
    answers?: QuestionCreateanswersInput | string[]
    countDown?: number | null
    correctAnswerIndex: number
    marks: number
    responses?: ResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateManyQuizInputEnvelope = {
    data: QuestionCreateManyQuizInput | QuestionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedRoomsInput = {
    update: XOR<UserUpdateWithoutCreatedRoomsInput, UserUncheckedUpdateWithoutCreatedRoomsInput>
    create: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedRoomsInput, UserUncheckedUpdateWithoutCreatedRoomsInput>
  }

  export type UserUpdateWithoutCreatedRoomsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Response?: ResponseUpdateManyWithoutStudentNestedInput
    studentQuizzes?: StudentQuizUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Response?: ResponseUncheckedUpdateManyWithoutStudentNestedInput
    studentQuizzes?: StudentQuizUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentQuizUpsertWithWhereUniqueWithoutQuizInput = {
    where: StudentQuizWhereUniqueInput
    update: XOR<StudentQuizUpdateWithoutQuizInput, StudentQuizUncheckedUpdateWithoutQuizInput>
    create: XOR<StudentQuizCreateWithoutQuizInput, StudentQuizUncheckedCreateWithoutQuizInput>
  }

  export type StudentQuizUpdateWithWhereUniqueWithoutQuizInput = {
    where: StudentQuizWhereUniqueInput
    data: XOR<StudentQuizUpdateWithoutQuizInput, StudentQuizUncheckedUpdateWithoutQuizInput>
  }

  export type StudentQuizUpdateManyWithWhereWithoutQuizInput = {
    where: StudentQuizScalarWhereInput
    data: XOR<StudentQuizUpdateManyMutationInput, StudentQuizUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: IntFilter<"Question"> | number
    title?: StringFilter<"Question"> | string
    answers?: StringNullableListFilter<"Question">
    countDown?: FloatNullableFilter<"Question"> | number | null
    correctAnswerIndex?: IntFilter<"Question"> | number
    marks?: IntFilter<"Question"> | number
    quizId?: IntFilter<"Question"> | number
  }

  export type QuizCreateWithoutQuestionInput = {
    title: string
    createdAt?: Date | string
    uniqueCode: string
    realTime?: boolean
    author: UserCreateNestedOneWithoutCreatedRoomsInput
    studentQuizzes?: StudentQuizCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuestionInput = {
    id?: number
    title: string
    createdAt?: Date | string
    uniqueCode: string
    authorId: number
    realTime?: boolean
    studentQuizzes?: StudentQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuestionInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionInput, QuizUncheckedCreateWithoutQuestionInput>
  }

  export type ResponseCreateWithoutQuestionInput = {
    answeredIndex: number
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutResponseInput
  }

  export type ResponseUncheckedCreateWithoutQuestionInput = {
    id?: number
    studentId: number
    answeredIndex: number
    createdAt?: Date | string
  }

  export type ResponseCreateOrConnectWithoutQuestionInput = {
    where: ResponseWhereUniqueInput
    create: XOR<ResponseCreateWithoutQuestionInput, ResponseUncheckedCreateWithoutQuestionInput>
  }

  export type ResponseCreateManyQuestionInputEnvelope = {
    data: ResponseCreateManyQuestionInput | ResponseCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithoutQuestionInput = {
    update: XOR<QuizUpdateWithoutQuestionInput, QuizUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuizCreateWithoutQuestionInput, QuizUncheckedCreateWithoutQuestionInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionInput, QuizUncheckedUpdateWithoutQuestionInput>
  }

  export type QuizUpdateWithoutQuestionInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    realTime?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
    studentQuizzes?: StudentQuizUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    realTime?: BoolFieldUpdateOperationsInput | boolean
    studentQuizzes?: StudentQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type ResponseUpsertWithWhereUniqueWithoutQuestionInput = {
    where: ResponseWhereUniqueInput
    update: XOR<ResponseUpdateWithoutQuestionInput, ResponseUncheckedUpdateWithoutQuestionInput>
    create: XOR<ResponseCreateWithoutQuestionInput, ResponseUncheckedCreateWithoutQuestionInput>
  }

  export type ResponseUpdateWithWhereUniqueWithoutQuestionInput = {
    where: ResponseWhereUniqueInput
    data: XOR<ResponseUpdateWithoutQuestionInput, ResponseUncheckedUpdateWithoutQuestionInput>
  }

  export type ResponseUpdateManyWithWhereWithoutQuestionInput = {
    where: ResponseScalarWhereInput
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserCreateWithoutStudentQuizzesInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    Response?: ResponseCreateNestedManyWithoutStudentInput
    createdRooms?: QuizCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutStudentQuizzesInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    Response?: ResponseUncheckedCreateNestedManyWithoutStudentInput
    createdRooms?: QuizUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutStudentQuizzesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentQuizzesInput, UserUncheckedCreateWithoutStudentQuizzesInput>
  }

  export type QuizCreateWithoutStudentQuizzesInput = {
    title: string
    createdAt?: Date | string
    uniqueCode: string
    realTime?: boolean
    author: UserCreateNestedOneWithoutCreatedRoomsInput
    question?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutStudentQuizzesInput = {
    id?: number
    title: string
    createdAt?: Date | string
    uniqueCode: string
    authorId: number
    realTime?: boolean
    question?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutStudentQuizzesInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutStudentQuizzesInput, QuizUncheckedCreateWithoutStudentQuizzesInput>
  }

  export type UserUpsertWithoutStudentQuizzesInput = {
    update: XOR<UserUpdateWithoutStudentQuizzesInput, UserUncheckedUpdateWithoutStudentQuizzesInput>
    create: XOR<UserCreateWithoutStudentQuizzesInput, UserUncheckedCreateWithoutStudentQuizzesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentQuizzesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentQuizzesInput, UserUncheckedUpdateWithoutStudentQuizzesInput>
  }

  export type UserUpdateWithoutStudentQuizzesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Response?: ResponseUpdateManyWithoutStudentNestedInput
    createdRooms?: QuizUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentQuizzesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Response?: ResponseUncheckedUpdateManyWithoutStudentNestedInput
    createdRooms?: QuizUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type QuizUpsertWithoutStudentQuizzesInput = {
    update: XOR<QuizUpdateWithoutStudentQuizzesInput, QuizUncheckedUpdateWithoutStudentQuizzesInput>
    create: XOR<QuizCreateWithoutStudentQuizzesInput, QuizUncheckedCreateWithoutStudentQuizzesInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutStudentQuizzesInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutStudentQuizzesInput, QuizUncheckedUpdateWithoutStudentQuizzesInput>
  }

  export type QuizUpdateWithoutStudentQuizzesInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    realTime?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
    question?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutStudentQuizzesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    realTime?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type UserCreateWithoutResponseInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    studentQuizzes?: StudentQuizCreateNestedManyWithoutStudentInput
    createdRooms?: QuizCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutResponseInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    studentQuizzes?: StudentQuizUncheckedCreateNestedManyWithoutStudentInput
    createdRooms?: QuizUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutResponseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResponseInput, UserUncheckedCreateWithoutResponseInput>
  }

  export type QuestionCreateWithoutResponsesInput = {
    title: string
    answers?: QuestionCreateanswersInput | string[]
    countDown?: number | null
    correctAnswerIndex: number
    marks: number
    quiz: QuizCreateNestedOneWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutResponsesInput = {
    id?: number
    title: string
    answers?: QuestionCreateanswersInput | string[]
    countDown?: number | null
    correctAnswerIndex: number
    marks: number
    quizId: number
  }

  export type QuestionCreateOrConnectWithoutResponsesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutResponsesInput, QuestionUncheckedCreateWithoutResponsesInput>
  }

  export type UserUpsertWithoutResponseInput = {
    update: XOR<UserUpdateWithoutResponseInput, UserUncheckedUpdateWithoutResponseInput>
    create: XOR<UserCreateWithoutResponseInput, UserUncheckedCreateWithoutResponseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResponseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResponseInput, UserUncheckedUpdateWithoutResponseInput>
  }

  export type UserUpdateWithoutResponseInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentQuizzes?: StudentQuizUpdateManyWithoutStudentNestedInput
    createdRooms?: QuizUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutResponseInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentQuizzes?: StudentQuizUncheckedUpdateManyWithoutStudentNestedInput
    createdRooms?: QuizUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type QuestionUpsertWithoutResponsesInput = {
    update: XOR<QuestionUpdateWithoutResponsesInput, QuestionUncheckedUpdateWithoutResponsesInput>
    create: XOR<QuestionCreateWithoutResponsesInput, QuestionUncheckedCreateWithoutResponsesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutResponsesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutResponsesInput, QuestionUncheckedUpdateWithoutResponsesInput>
  }

  export type QuestionUpdateWithoutResponsesInput = {
    title?: StringFieldUpdateOperationsInput | string
    answers?: QuestionUpdateanswersInput | string[]
    countDown?: NullableFloatFieldUpdateOperationsInput | number | null
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    marks?: IntFieldUpdateOperationsInput | number
    quiz?: QuizUpdateOneRequiredWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    answers?: QuestionUpdateanswersInput | string[]
    countDown?: NullableFloatFieldUpdateOperationsInput | number | null
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    marks?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
  }

  export type ResponseCreateManyStudentInput = {
    id?: number
    questionId: number
    answeredIndex: number
    createdAt?: Date | string
  }

  export type StudentQuizCreateManyStudentInput = {
    id?: number
    quizId: number
    score?: number
  }

  export type QuizCreateManyAuthorInput = {
    id?: number
    title: string
    createdAt?: Date | string
    uniqueCode: string
    realTime?: boolean
  }

  export type ResponseUpdateWithoutStudentInput = {
    answeredIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ResponseUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answeredIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answeredIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentQuizUpdateWithoutStudentInput = {
    score?: IntFieldUpdateOperationsInput | number
    quiz?: QuizUpdateOneRequiredWithoutStudentQuizzesNestedInput
  }

  export type StudentQuizUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type StudentQuizUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type QuizUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    realTime?: BoolFieldUpdateOperationsInput | boolean
    studentQuizzes?: StudentQuizUpdateManyWithoutQuizNestedInput
    question?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    realTime?: BoolFieldUpdateOperationsInput | boolean
    studentQuizzes?: StudentQuizUncheckedUpdateManyWithoutQuizNestedInput
    question?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    realTime?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentQuizCreateManyQuizInput = {
    id?: number
    studentId: number
    score?: number
  }

  export type QuestionCreateManyQuizInput = {
    id?: number
    title: string
    answers?: QuestionCreateanswersInput | string[]
    countDown?: number | null
    correctAnswerIndex: number
    marks: number
  }

  export type StudentQuizUpdateWithoutQuizInput = {
    score?: IntFieldUpdateOperationsInput | number
    student?: UserUpdateOneRequiredWithoutStudentQuizzesNestedInput
  }

  export type StudentQuizUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type StudentQuizUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUpdateWithoutQuizInput = {
    title?: StringFieldUpdateOperationsInput | string
    answers?: QuestionUpdateanswersInput | string[]
    countDown?: NullableFloatFieldUpdateOperationsInput | number | null
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    marks?: IntFieldUpdateOperationsInput | number
    responses?: ResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    answers?: QuestionUpdateanswersInput | string[]
    countDown?: NullableFloatFieldUpdateOperationsInput | number | null
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    marks?: IntFieldUpdateOperationsInput | number
    responses?: ResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    answers?: QuestionUpdateanswersInput | string[]
    countDown?: NullableFloatFieldUpdateOperationsInput | number | null
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    marks?: IntFieldUpdateOperationsInput | number
  }

  export type ResponseCreateManyQuestionInput = {
    id?: number
    studentId: number
    answeredIndex: number
    createdAt?: Date | string
  }

  export type ResponseUpdateWithoutQuestionInput = {
    answeredIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutResponseNestedInput
  }

  export type ResponseUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    answeredIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    answeredIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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