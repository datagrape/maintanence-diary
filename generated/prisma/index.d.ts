
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
 * Model Year
 * 
 */
export type Year = $Result.DefaultSelection<Prisma.$YearPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model QuarterlyType
 * 
 */
export type QuarterlyType = $Result.DefaultSelection<Prisma.$QuarterlyTypePayload>
/**
 * Model ActivityData
 * 
 */
export type ActivityData = $Result.DefaultSelection<Prisma.$ActivityDataPayload>
/**
 * Model TableData
 * 
 */
export type TableData = $Result.DefaultSelection<Prisma.$TableDataPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model Ad
 * 
 */
export type Ad = $Result.DefaultSelection<Prisma.$AdPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  Superadmin: 'Superadmin',
  Admin: 'Admin',
  User: 'User'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const SubscriptionType: {
  Free: 'Free',
  Professional_monthly: 'Professional_monthly',
  Professional_yearly: 'Professional_yearly',
  Premium_monthly: 'Premium_monthly',
  Premium_yearly: 'Premium_yearly'
};

export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType]


export const ActivityType: {
  Monthly: 'Monthly',
  Quarterly: 'Quarterly',
  Yearly: 'Yearly',
  admin: 'admin'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]


export const MonthType: {
  January: 'January',
  February: 'February',
  March: 'March',
  April: 'April',
  May: 'May',
  June: 'June',
  July: 'July',
  August: 'August',
  September: 'September',
  October: 'October',
  November: 'November',
  December: 'December'
};

export type MonthType = (typeof MonthType)[keyof typeof MonthType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type SubscriptionType = $Enums.SubscriptionType

export const SubscriptionType: typeof $Enums.SubscriptionType

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

export type MonthType = $Enums.MonthType

export const MonthType: typeof $Enums.MonthType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Years
 * const years = await prisma.year.findMany()
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
   * // Fetch zero or more Years
   * const years = await prisma.year.findMany()
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
   * `prisma.year`: Exposes CRUD operations for the **Year** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Years
    * const years = await prisma.year.findMany()
    * ```
    */
  get year(): Prisma.YearDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quarterlyType`: Exposes CRUD operations for the **QuarterlyType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuarterlyTypes
    * const quarterlyTypes = await prisma.quarterlyType.findMany()
    * ```
    */
  get quarterlyType(): Prisma.QuarterlyTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityData`: Exposes CRUD operations for the **ActivityData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityData
    * const activityData = await prisma.activityData.findMany()
    * ```
    */
  get activityData(): Prisma.ActivityDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tableData`: Exposes CRUD operations for the **TableData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TableData
    * const tableData = await prisma.tableData.findMany()
    * ```
    */
  get tableData(): Prisma.TableDataDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ad`: Exposes CRUD operations for the **Ad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ads
    * const ads = await prisma.ad.findMany()
    * ```
    */
  get ad(): Prisma.AdDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Year: 'Year',
    Activity: 'Activity',
    QuarterlyType: 'QuarterlyType',
    ActivityData: 'ActivityData',
    TableData: 'TableData',
    User: 'User',
    Subscription: 'Subscription',
    Payment: 'Payment',
    Link: 'Link',
    Ad: 'Ad'
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
      modelProps: "year" | "activity" | "quarterlyType" | "activityData" | "tableData" | "user" | "subscription" | "payment" | "link" | "ad"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Year: {
        payload: Prisma.$YearPayload<ExtArgs>
        fields: Prisma.YearFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YearFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YearFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          findFirst: {
            args: Prisma.YearFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YearFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          findMany: {
            args: Prisma.YearFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>[]
          }
          create: {
            args: Prisma.YearCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          createMany: {
            args: Prisma.YearCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YearCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>[]
          }
          delete: {
            args: Prisma.YearDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          update: {
            args: Prisma.YearUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          deleteMany: {
            args: Prisma.YearDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YearUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YearUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>[]
          }
          upsert: {
            args: Prisma.YearUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          aggregate: {
            args: Prisma.YearAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYear>
          }
          groupBy: {
            args: Prisma.YearGroupByArgs<ExtArgs>
            result: $Utils.Optional<YearGroupByOutputType>[]
          }
          count: {
            args: Prisma.YearCountArgs<ExtArgs>
            result: $Utils.Optional<YearCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      QuarterlyType: {
        payload: Prisma.$QuarterlyTypePayload<ExtArgs>
        fields: Prisma.QuarterlyTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuarterlyTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterlyTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuarterlyTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterlyTypePayload>
          }
          findFirst: {
            args: Prisma.QuarterlyTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterlyTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuarterlyTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterlyTypePayload>
          }
          findMany: {
            args: Prisma.QuarterlyTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterlyTypePayload>[]
          }
          create: {
            args: Prisma.QuarterlyTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterlyTypePayload>
          }
          createMany: {
            args: Prisma.QuarterlyTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuarterlyTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterlyTypePayload>[]
          }
          delete: {
            args: Prisma.QuarterlyTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterlyTypePayload>
          }
          update: {
            args: Prisma.QuarterlyTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterlyTypePayload>
          }
          deleteMany: {
            args: Prisma.QuarterlyTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuarterlyTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuarterlyTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterlyTypePayload>[]
          }
          upsert: {
            args: Prisma.QuarterlyTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterlyTypePayload>
          }
          aggregate: {
            args: Prisma.QuarterlyTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuarterlyType>
          }
          groupBy: {
            args: Prisma.QuarterlyTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuarterlyTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuarterlyTypeCountArgs<ExtArgs>
            result: $Utils.Optional<QuarterlyTypeCountAggregateOutputType> | number
          }
        }
      }
      ActivityData: {
        payload: Prisma.$ActivityDataPayload<ExtArgs>
        fields: Prisma.ActivityDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDataPayload>
          }
          findFirst: {
            args: Prisma.ActivityDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDataPayload>
          }
          findMany: {
            args: Prisma.ActivityDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDataPayload>[]
          }
          create: {
            args: Prisma.ActivityDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDataPayload>
          }
          createMany: {
            args: Prisma.ActivityDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDataPayload>[]
          }
          delete: {
            args: Prisma.ActivityDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDataPayload>
          }
          update: {
            args: Prisma.ActivityDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDataPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDataPayload>[]
          }
          upsert: {
            args: Prisma.ActivityDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDataPayload>
          }
          aggregate: {
            args: Prisma.ActivityDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityData>
          }
          groupBy: {
            args: Prisma.ActivityDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityDataCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityDataCountAggregateOutputType> | number
          }
        }
      }
      TableData: {
        payload: Prisma.$TableDataPayload<ExtArgs>
        fields: Prisma.TableDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableDataPayload>
          }
          findFirst: {
            args: Prisma.TableDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableDataPayload>
          }
          findMany: {
            args: Prisma.TableDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableDataPayload>[]
          }
          create: {
            args: Prisma.TableDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableDataPayload>
          }
          createMany: {
            args: Prisma.TableDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableDataPayload>[]
          }
          delete: {
            args: Prisma.TableDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableDataPayload>
          }
          update: {
            args: Prisma.TableDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableDataPayload>
          }
          deleteMany: {
            args: Prisma.TableDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableDataPayload>[]
          }
          upsert: {
            args: Prisma.TableDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableDataPayload>
          }
          aggregate: {
            args: Prisma.TableDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTableData>
          }
          groupBy: {
            args: Prisma.TableDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableDataCountArgs<ExtArgs>
            result: $Utils.Optional<TableDataCountAggregateOutputType> | number
          }
        }
      }
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
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      Ad: {
        payload: Prisma.$AdPayload<ExtArgs>
        fields: Prisma.AdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          findFirst: {
            args: Prisma.AdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          findMany: {
            args: Prisma.AdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>[]
          }
          create: {
            args: Prisma.AdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          createMany: {
            args: Prisma.AdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>[]
          }
          delete: {
            args: Prisma.AdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          update: {
            args: Prisma.AdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          deleteMany: {
            args: Prisma.AdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>[]
          }
          upsert: {
            args: Prisma.AdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          aggregate: {
            args: Prisma.AdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAd>
          }
          groupBy: {
            args: Prisma.AdGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdCountArgs<ExtArgs>
            result: $Utils.Optional<AdCountAggregateOutputType> | number
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
    year?: YearOmit
    activity?: ActivityOmit
    quarterlyType?: QuarterlyTypeOmit
    activityData?: ActivityDataOmit
    tableData?: TableDataOmit
    user?: UserOmit
    subscription?: SubscriptionOmit
    payment?: PaymentOmit
    link?: LinkOmit
    ad?: AdOmit
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
   * Count Type YearCountOutputType
   */

  export type YearCountOutputType = {
    activityData: number
  }

  export type YearCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityData?: boolean | YearCountOutputTypeCountActivityDataArgs
  }

  // Custom InputTypes
  /**
   * YearCountOutputType without action
   */
  export type YearCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearCountOutputType
     */
    select?: YearCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * YearCountOutputType without action
   */
  export type YearCountOutputTypeCountActivityDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityDataWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    activityData: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityData?: boolean | ActivityCountOutputTypeCountActivityDataArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountActivityDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityDataWhereInput
  }


  /**
   * Count Type QuarterlyTypeCountOutputType
   */

  export type QuarterlyTypeCountOutputType = {
    activityData: number
  }

  export type QuarterlyTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityData?: boolean | QuarterlyTypeCountOutputTypeCountActivityDataArgs
  }

  // Custom InputTypes
  /**
   * QuarterlyTypeCountOutputType without action
   */
  export type QuarterlyTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyTypeCountOutputType
     */
    select?: QuarterlyTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuarterlyTypeCountOutputType without action
   */
  export type QuarterlyTypeCountOutputTypeCountActivityDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityDataWhereInput
  }


  /**
   * Count Type TableDataCountOutputType
   */

  export type TableDataCountOutputType = {
    user: number
  }

  export type TableDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TableDataCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * TableDataCountOutputType without action
   */
  export type TableDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableDataCountOutputType
     */
    select?: TableDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableDataCountOutputType without action
   */
  export type TableDataCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subscriptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
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
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    payments: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | SubscriptionCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Year
   */

  export type AggregateYear = {
    _count: YearCountAggregateOutputType | null
    _avg: YearAvgAggregateOutputType | null
    _sum: YearSumAggregateOutputType | null
    _min: YearMinAggregateOutputType | null
    _max: YearMaxAggregateOutputType | null
  }

  export type YearAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type YearSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type YearMinAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type YearMaxAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type YearCountAggregateOutputType = {
    id: number
    year: number
    _all: number
  }


  export type YearAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type YearSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type YearMinAggregateInputType = {
    id?: true
    year?: true
  }

  export type YearMaxAggregateInputType = {
    id?: true
    year?: true
  }

  export type YearCountAggregateInputType = {
    id?: true
    year?: true
    _all?: true
  }

  export type YearAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Year to aggregate.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Years
    **/
    _count?: true | YearCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YearAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YearSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YearMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YearMaxAggregateInputType
  }

  export type GetYearAggregateType<T extends YearAggregateArgs> = {
        [P in keyof T & keyof AggregateYear]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYear[P]>
      : GetScalarType<T[P], AggregateYear[P]>
  }




  export type YearGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YearWhereInput
    orderBy?: YearOrderByWithAggregationInput | YearOrderByWithAggregationInput[]
    by: YearScalarFieldEnum[] | YearScalarFieldEnum
    having?: YearScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YearCountAggregateInputType | true
    _avg?: YearAvgAggregateInputType
    _sum?: YearSumAggregateInputType
    _min?: YearMinAggregateInputType
    _max?: YearMaxAggregateInputType
  }

  export type YearGroupByOutputType = {
    id: number
    year: number
    _count: YearCountAggregateOutputType | null
    _avg: YearAvgAggregateOutputType | null
    _sum: YearSumAggregateOutputType | null
    _min: YearMinAggregateOutputType | null
    _max: YearMaxAggregateOutputType | null
  }

  type GetYearGroupByPayload<T extends YearGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YearGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YearGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YearGroupByOutputType[P]>
            : GetScalarType<T[P], YearGroupByOutputType[P]>
        }
      >
    >


  export type YearSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    activityData?: boolean | Year$activityDataArgs<ExtArgs>
    _count?: boolean | YearCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["year"]>

  export type YearSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
  }, ExtArgs["result"]["year"]>

  export type YearSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
  }, ExtArgs["result"]["year"]>

  export type YearSelectScalar = {
    id?: boolean
    year?: boolean
  }

  export type YearOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year", ExtArgs["result"]["year"]>
  export type YearInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityData?: boolean | Year$activityDataArgs<ExtArgs>
    _count?: boolean | YearCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type YearIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type YearIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $YearPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Year"
    objects: {
      activityData: Prisma.$ActivityDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: number
    }, ExtArgs["result"]["year"]>
    composites: {}
  }

  type YearGetPayload<S extends boolean | null | undefined | YearDefaultArgs> = $Result.GetResult<Prisma.$YearPayload, S>

  type YearCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YearFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YearCountAggregateInputType | true
    }

  export interface YearDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Year'], meta: { name: 'Year' } }
    /**
     * Find zero or one Year that matches the filter.
     * @param {YearFindUniqueArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YearFindUniqueArgs>(args: SelectSubset<T, YearFindUniqueArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Year that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YearFindUniqueOrThrowArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YearFindUniqueOrThrowArgs>(args: SelectSubset<T, YearFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Year that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearFindFirstArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YearFindFirstArgs>(args?: SelectSubset<T, YearFindFirstArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Year that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearFindFirstOrThrowArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YearFindFirstOrThrowArgs>(args?: SelectSubset<T, YearFindFirstOrThrowArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Years that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Years
     * const years = await prisma.year.findMany()
     * 
     * // Get first 10 Years
     * const years = await prisma.year.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yearWithIdOnly = await prisma.year.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YearFindManyArgs>(args?: SelectSubset<T, YearFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Year.
     * @param {YearCreateArgs} args - Arguments to create a Year.
     * @example
     * // Create one Year
     * const Year = await prisma.year.create({
     *   data: {
     *     // ... data to create a Year
     *   }
     * })
     * 
     */
    create<T extends YearCreateArgs>(args: SelectSubset<T, YearCreateArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Years.
     * @param {YearCreateManyArgs} args - Arguments to create many Years.
     * @example
     * // Create many Years
     * const year = await prisma.year.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YearCreateManyArgs>(args?: SelectSubset<T, YearCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Years and returns the data saved in the database.
     * @param {YearCreateManyAndReturnArgs} args - Arguments to create many Years.
     * @example
     * // Create many Years
     * const year = await prisma.year.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Years and only return the `id`
     * const yearWithIdOnly = await prisma.year.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YearCreateManyAndReturnArgs>(args?: SelectSubset<T, YearCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Year.
     * @param {YearDeleteArgs} args - Arguments to delete one Year.
     * @example
     * // Delete one Year
     * const Year = await prisma.year.delete({
     *   where: {
     *     // ... filter to delete one Year
     *   }
     * })
     * 
     */
    delete<T extends YearDeleteArgs>(args: SelectSubset<T, YearDeleteArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Year.
     * @param {YearUpdateArgs} args - Arguments to update one Year.
     * @example
     * // Update one Year
     * const year = await prisma.year.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YearUpdateArgs>(args: SelectSubset<T, YearUpdateArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Years.
     * @param {YearDeleteManyArgs} args - Arguments to filter Years to delete.
     * @example
     * // Delete a few Years
     * const { count } = await prisma.year.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YearDeleteManyArgs>(args?: SelectSubset<T, YearDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Years
     * const year = await prisma.year.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YearUpdateManyArgs>(args: SelectSubset<T, YearUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Years and returns the data updated in the database.
     * @param {YearUpdateManyAndReturnArgs} args - Arguments to update many Years.
     * @example
     * // Update many Years
     * const year = await prisma.year.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Years and only return the `id`
     * const yearWithIdOnly = await prisma.year.updateManyAndReturn({
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
    updateManyAndReturn<T extends YearUpdateManyAndReturnArgs>(args: SelectSubset<T, YearUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Year.
     * @param {YearUpsertArgs} args - Arguments to update or create a Year.
     * @example
     * // Update or create a Year
     * const year = await prisma.year.upsert({
     *   create: {
     *     // ... data to create a Year
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Year we want to update
     *   }
     * })
     */
    upsert<T extends YearUpsertArgs>(args: SelectSubset<T, YearUpsertArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearCountArgs} args - Arguments to filter Years to count.
     * @example
     * // Count the number of Years
     * const count = await prisma.year.count({
     *   where: {
     *     // ... the filter for the Years we want to count
     *   }
     * })
    **/
    count<T extends YearCountArgs>(
      args?: Subset<T, YearCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YearCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Year.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YearAggregateArgs>(args: Subset<T, YearAggregateArgs>): Prisma.PrismaPromise<GetYearAggregateType<T>>

    /**
     * Group by Year.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearGroupByArgs} args - Group by arguments.
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
      T extends YearGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YearGroupByArgs['orderBy'] }
        : { orderBy?: YearGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYearGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Year model
   */
  readonly fields: YearFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Year.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YearClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activityData<T extends Year$activityDataArgs<ExtArgs> = {}>(args?: Subset<T, Year$activityDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Year model
   */
  interface YearFieldRefs {
    readonly id: FieldRef<"Year", 'Int'>
    readonly year: FieldRef<"Year", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Year findUnique
   */
  export type YearFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year findUniqueOrThrow
   */
  export type YearFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year findFirst
   */
  export type YearFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Years.
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Years.
     */
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * Year findFirstOrThrow
   */
  export type YearFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Years.
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Years.
     */
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * Year findMany
   */
  export type YearFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Years to fetch.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Years.
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * Year create
   */
  export type YearCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * The data needed to create a Year.
     */
    data: XOR<YearCreateInput, YearUncheckedCreateInput>
  }

  /**
   * Year createMany
   */
  export type YearCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Years.
     */
    data: YearCreateManyInput | YearCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Year createManyAndReturn
   */
  export type YearCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * The data used to create many Years.
     */
    data: YearCreateManyInput | YearCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Year update
   */
  export type YearUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * The data needed to update a Year.
     */
    data: XOR<YearUpdateInput, YearUncheckedUpdateInput>
    /**
     * Choose, which Year to update.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year updateMany
   */
  export type YearUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Years.
     */
    data: XOR<YearUpdateManyMutationInput, YearUncheckedUpdateManyInput>
    /**
     * Filter which Years to update
     */
    where?: YearWhereInput
    /**
     * Limit how many Years to update.
     */
    limit?: number
  }

  /**
   * Year updateManyAndReturn
   */
  export type YearUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * The data used to update Years.
     */
    data: XOR<YearUpdateManyMutationInput, YearUncheckedUpdateManyInput>
    /**
     * Filter which Years to update
     */
    where?: YearWhereInput
    /**
     * Limit how many Years to update.
     */
    limit?: number
  }

  /**
   * Year upsert
   */
  export type YearUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * The filter to search for the Year to update in case it exists.
     */
    where: YearWhereUniqueInput
    /**
     * In case the Year found by the `where` argument doesn't exist, create a new Year with this data.
     */
    create: XOR<YearCreateInput, YearUncheckedCreateInput>
    /**
     * In case the Year was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YearUpdateInput, YearUncheckedUpdateInput>
  }

  /**
   * Year delete
   */
  export type YearDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter which Year to delete.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year deleteMany
   */
  export type YearDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Years to delete
     */
    where?: YearWhereInput
    /**
     * Limit how many Years to delete.
     */
    limit?: number
  }

  /**
   * Year.activityData
   */
  export type Year$activityDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
    where?: ActivityDataWhereInput
    orderBy?: ActivityDataOrderByWithRelationInput | ActivityDataOrderByWithRelationInput[]
    cursor?: ActivityDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityDataScalarFieldEnum | ActivityDataScalarFieldEnum[]
  }

  /**
   * Year without action
   */
  export type YearDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    id: number | null
  }

  export type ActivitySumAggregateOutputType = {
    id: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ActivityType | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ActivityType | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    name: number
    type: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    id?: true
  }

  export type ActivitySumAggregateInputType = {
    id?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: number
    name: string
    type: $Enums.ActivityType
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    activityData?: boolean | Activity$activityDataArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityData?: boolean | Activity$activityDataArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      activityData: Prisma.$ActivityDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.ActivityType
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activityData<T extends Activity$activityDataArgs<ExtArgs> = {}>(args?: Subset<T, Activity$activityDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'Int'>
    readonly name: FieldRef<"Activity", 'String'>
    readonly type: FieldRef<"Activity", 'ActivityType'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.activityData
   */
  export type Activity$activityDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
    where?: ActivityDataWhereInput
    orderBy?: ActivityDataOrderByWithRelationInput | ActivityDataOrderByWithRelationInput[]
    cursor?: ActivityDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityDataScalarFieldEnum | ActivityDataScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model QuarterlyType
   */

  export type AggregateQuarterlyType = {
    _count: QuarterlyTypeCountAggregateOutputType | null
    _avg: QuarterlyTypeAvgAggregateOutputType | null
    _sum: QuarterlyTypeSumAggregateOutputType | null
    _min: QuarterlyTypeMinAggregateOutputType | null
    _max: QuarterlyTypeMaxAggregateOutputType | null
  }

  export type QuarterlyTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type QuarterlyTypeSumAggregateOutputType = {
    id: number | null
  }

  export type QuarterlyTypeMinAggregateOutputType = {
    id: number | null
    startMonth: $Enums.MonthType | null
    endMonth: $Enums.MonthType | null
  }

  export type QuarterlyTypeMaxAggregateOutputType = {
    id: number | null
    startMonth: $Enums.MonthType | null
    endMonth: $Enums.MonthType | null
  }

  export type QuarterlyTypeCountAggregateOutputType = {
    id: number
    startMonth: number
    endMonth: number
    _all: number
  }


  export type QuarterlyTypeAvgAggregateInputType = {
    id?: true
  }

  export type QuarterlyTypeSumAggregateInputType = {
    id?: true
  }

  export type QuarterlyTypeMinAggregateInputType = {
    id?: true
    startMonth?: true
    endMonth?: true
  }

  export type QuarterlyTypeMaxAggregateInputType = {
    id?: true
    startMonth?: true
    endMonth?: true
  }

  export type QuarterlyTypeCountAggregateInputType = {
    id?: true
    startMonth?: true
    endMonth?: true
    _all?: true
  }

  export type QuarterlyTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuarterlyType to aggregate.
     */
    where?: QuarterlyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuarterlyTypes to fetch.
     */
    orderBy?: QuarterlyTypeOrderByWithRelationInput | QuarterlyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuarterlyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuarterlyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuarterlyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuarterlyTypes
    **/
    _count?: true | QuarterlyTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuarterlyTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuarterlyTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuarterlyTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuarterlyTypeMaxAggregateInputType
  }

  export type GetQuarterlyTypeAggregateType<T extends QuarterlyTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateQuarterlyType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuarterlyType[P]>
      : GetScalarType<T[P], AggregateQuarterlyType[P]>
  }




  export type QuarterlyTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuarterlyTypeWhereInput
    orderBy?: QuarterlyTypeOrderByWithAggregationInput | QuarterlyTypeOrderByWithAggregationInput[]
    by: QuarterlyTypeScalarFieldEnum[] | QuarterlyTypeScalarFieldEnum
    having?: QuarterlyTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuarterlyTypeCountAggregateInputType | true
    _avg?: QuarterlyTypeAvgAggregateInputType
    _sum?: QuarterlyTypeSumAggregateInputType
    _min?: QuarterlyTypeMinAggregateInputType
    _max?: QuarterlyTypeMaxAggregateInputType
  }

  export type QuarterlyTypeGroupByOutputType = {
    id: number
    startMonth: $Enums.MonthType
    endMonth: $Enums.MonthType
    _count: QuarterlyTypeCountAggregateOutputType | null
    _avg: QuarterlyTypeAvgAggregateOutputType | null
    _sum: QuarterlyTypeSumAggregateOutputType | null
    _min: QuarterlyTypeMinAggregateOutputType | null
    _max: QuarterlyTypeMaxAggregateOutputType | null
  }

  type GetQuarterlyTypeGroupByPayload<T extends QuarterlyTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuarterlyTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuarterlyTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuarterlyTypeGroupByOutputType[P]>
            : GetScalarType<T[P], QuarterlyTypeGroupByOutputType[P]>
        }
      >
    >


  export type QuarterlyTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startMonth?: boolean
    endMonth?: boolean
    activityData?: boolean | QuarterlyType$activityDataArgs<ExtArgs>
    _count?: boolean | QuarterlyTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quarterlyType"]>

  export type QuarterlyTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startMonth?: boolean
    endMonth?: boolean
  }, ExtArgs["result"]["quarterlyType"]>

  export type QuarterlyTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startMonth?: boolean
    endMonth?: boolean
  }, ExtArgs["result"]["quarterlyType"]>

  export type QuarterlyTypeSelectScalar = {
    id?: boolean
    startMonth?: boolean
    endMonth?: boolean
  }

  export type QuarterlyTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startMonth" | "endMonth", ExtArgs["result"]["quarterlyType"]>
  export type QuarterlyTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityData?: boolean | QuarterlyType$activityDataArgs<ExtArgs>
    _count?: boolean | QuarterlyTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuarterlyTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuarterlyTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuarterlyTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuarterlyType"
    objects: {
      activityData: Prisma.$ActivityDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startMonth: $Enums.MonthType
      endMonth: $Enums.MonthType
    }, ExtArgs["result"]["quarterlyType"]>
    composites: {}
  }

  type QuarterlyTypeGetPayload<S extends boolean | null | undefined | QuarterlyTypeDefaultArgs> = $Result.GetResult<Prisma.$QuarterlyTypePayload, S>

  type QuarterlyTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuarterlyTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuarterlyTypeCountAggregateInputType | true
    }

  export interface QuarterlyTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuarterlyType'], meta: { name: 'QuarterlyType' } }
    /**
     * Find zero or one QuarterlyType that matches the filter.
     * @param {QuarterlyTypeFindUniqueArgs} args - Arguments to find a QuarterlyType
     * @example
     * // Get one QuarterlyType
     * const quarterlyType = await prisma.quarterlyType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuarterlyTypeFindUniqueArgs>(args: SelectSubset<T, QuarterlyTypeFindUniqueArgs<ExtArgs>>): Prisma__QuarterlyTypeClient<$Result.GetResult<Prisma.$QuarterlyTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuarterlyType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuarterlyTypeFindUniqueOrThrowArgs} args - Arguments to find a QuarterlyType
     * @example
     * // Get one QuarterlyType
     * const quarterlyType = await prisma.quarterlyType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuarterlyTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, QuarterlyTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuarterlyTypeClient<$Result.GetResult<Prisma.$QuarterlyTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuarterlyType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterlyTypeFindFirstArgs} args - Arguments to find a QuarterlyType
     * @example
     * // Get one QuarterlyType
     * const quarterlyType = await prisma.quarterlyType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuarterlyTypeFindFirstArgs>(args?: SelectSubset<T, QuarterlyTypeFindFirstArgs<ExtArgs>>): Prisma__QuarterlyTypeClient<$Result.GetResult<Prisma.$QuarterlyTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuarterlyType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterlyTypeFindFirstOrThrowArgs} args - Arguments to find a QuarterlyType
     * @example
     * // Get one QuarterlyType
     * const quarterlyType = await prisma.quarterlyType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuarterlyTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, QuarterlyTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuarterlyTypeClient<$Result.GetResult<Prisma.$QuarterlyTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuarterlyTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterlyTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuarterlyTypes
     * const quarterlyTypes = await prisma.quarterlyType.findMany()
     * 
     * // Get first 10 QuarterlyTypes
     * const quarterlyTypes = await prisma.quarterlyType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quarterlyTypeWithIdOnly = await prisma.quarterlyType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuarterlyTypeFindManyArgs>(args?: SelectSubset<T, QuarterlyTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuarterlyTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuarterlyType.
     * @param {QuarterlyTypeCreateArgs} args - Arguments to create a QuarterlyType.
     * @example
     * // Create one QuarterlyType
     * const QuarterlyType = await prisma.quarterlyType.create({
     *   data: {
     *     // ... data to create a QuarterlyType
     *   }
     * })
     * 
     */
    create<T extends QuarterlyTypeCreateArgs>(args: SelectSubset<T, QuarterlyTypeCreateArgs<ExtArgs>>): Prisma__QuarterlyTypeClient<$Result.GetResult<Prisma.$QuarterlyTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuarterlyTypes.
     * @param {QuarterlyTypeCreateManyArgs} args - Arguments to create many QuarterlyTypes.
     * @example
     * // Create many QuarterlyTypes
     * const quarterlyType = await prisma.quarterlyType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuarterlyTypeCreateManyArgs>(args?: SelectSubset<T, QuarterlyTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuarterlyTypes and returns the data saved in the database.
     * @param {QuarterlyTypeCreateManyAndReturnArgs} args - Arguments to create many QuarterlyTypes.
     * @example
     * // Create many QuarterlyTypes
     * const quarterlyType = await prisma.quarterlyType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuarterlyTypes and only return the `id`
     * const quarterlyTypeWithIdOnly = await prisma.quarterlyType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuarterlyTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, QuarterlyTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuarterlyTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuarterlyType.
     * @param {QuarterlyTypeDeleteArgs} args - Arguments to delete one QuarterlyType.
     * @example
     * // Delete one QuarterlyType
     * const QuarterlyType = await prisma.quarterlyType.delete({
     *   where: {
     *     // ... filter to delete one QuarterlyType
     *   }
     * })
     * 
     */
    delete<T extends QuarterlyTypeDeleteArgs>(args: SelectSubset<T, QuarterlyTypeDeleteArgs<ExtArgs>>): Prisma__QuarterlyTypeClient<$Result.GetResult<Prisma.$QuarterlyTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuarterlyType.
     * @param {QuarterlyTypeUpdateArgs} args - Arguments to update one QuarterlyType.
     * @example
     * // Update one QuarterlyType
     * const quarterlyType = await prisma.quarterlyType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuarterlyTypeUpdateArgs>(args: SelectSubset<T, QuarterlyTypeUpdateArgs<ExtArgs>>): Prisma__QuarterlyTypeClient<$Result.GetResult<Prisma.$QuarterlyTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuarterlyTypes.
     * @param {QuarterlyTypeDeleteManyArgs} args - Arguments to filter QuarterlyTypes to delete.
     * @example
     * // Delete a few QuarterlyTypes
     * const { count } = await prisma.quarterlyType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuarterlyTypeDeleteManyArgs>(args?: SelectSubset<T, QuarterlyTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuarterlyTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterlyTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuarterlyTypes
     * const quarterlyType = await prisma.quarterlyType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuarterlyTypeUpdateManyArgs>(args: SelectSubset<T, QuarterlyTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuarterlyTypes and returns the data updated in the database.
     * @param {QuarterlyTypeUpdateManyAndReturnArgs} args - Arguments to update many QuarterlyTypes.
     * @example
     * // Update many QuarterlyTypes
     * const quarterlyType = await prisma.quarterlyType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuarterlyTypes and only return the `id`
     * const quarterlyTypeWithIdOnly = await prisma.quarterlyType.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuarterlyTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, QuarterlyTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuarterlyTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuarterlyType.
     * @param {QuarterlyTypeUpsertArgs} args - Arguments to update or create a QuarterlyType.
     * @example
     * // Update or create a QuarterlyType
     * const quarterlyType = await prisma.quarterlyType.upsert({
     *   create: {
     *     // ... data to create a QuarterlyType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuarterlyType we want to update
     *   }
     * })
     */
    upsert<T extends QuarterlyTypeUpsertArgs>(args: SelectSubset<T, QuarterlyTypeUpsertArgs<ExtArgs>>): Prisma__QuarterlyTypeClient<$Result.GetResult<Prisma.$QuarterlyTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuarterlyTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterlyTypeCountArgs} args - Arguments to filter QuarterlyTypes to count.
     * @example
     * // Count the number of QuarterlyTypes
     * const count = await prisma.quarterlyType.count({
     *   where: {
     *     // ... the filter for the QuarterlyTypes we want to count
     *   }
     * })
    **/
    count<T extends QuarterlyTypeCountArgs>(
      args?: Subset<T, QuarterlyTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuarterlyTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuarterlyType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterlyTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuarterlyTypeAggregateArgs>(args: Subset<T, QuarterlyTypeAggregateArgs>): Prisma.PrismaPromise<GetQuarterlyTypeAggregateType<T>>

    /**
     * Group by QuarterlyType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterlyTypeGroupByArgs} args - Group by arguments.
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
      T extends QuarterlyTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuarterlyTypeGroupByArgs['orderBy'] }
        : { orderBy?: QuarterlyTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuarterlyTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuarterlyTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuarterlyType model
   */
  readonly fields: QuarterlyTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuarterlyType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuarterlyTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activityData<T extends QuarterlyType$activityDataArgs<ExtArgs> = {}>(args?: Subset<T, QuarterlyType$activityDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuarterlyType model
   */
  interface QuarterlyTypeFieldRefs {
    readonly id: FieldRef<"QuarterlyType", 'Int'>
    readonly startMonth: FieldRef<"QuarterlyType", 'MonthType'>
    readonly endMonth: FieldRef<"QuarterlyType", 'MonthType'>
  }
    

  // Custom InputTypes
  /**
   * QuarterlyType findUnique
   */
  export type QuarterlyTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterlyTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuarterlyType to fetch.
     */
    where: QuarterlyTypeWhereUniqueInput
  }

  /**
   * QuarterlyType findUniqueOrThrow
   */
  export type QuarterlyTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterlyTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuarterlyType to fetch.
     */
    where: QuarterlyTypeWhereUniqueInput
  }

  /**
   * QuarterlyType findFirst
   */
  export type QuarterlyTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterlyTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuarterlyType to fetch.
     */
    where?: QuarterlyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuarterlyTypes to fetch.
     */
    orderBy?: QuarterlyTypeOrderByWithRelationInput | QuarterlyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuarterlyTypes.
     */
    cursor?: QuarterlyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuarterlyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuarterlyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuarterlyTypes.
     */
    distinct?: QuarterlyTypeScalarFieldEnum | QuarterlyTypeScalarFieldEnum[]
  }

  /**
   * QuarterlyType findFirstOrThrow
   */
  export type QuarterlyTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterlyTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuarterlyType to fetch.
     */
    where?: QuarterlyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuarterlyTypes to fetch.
     */
    orderBy?: QuarterlyTypeOrderByWithRelationInput | QuarterlyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuarterlyTypes.
     */
    cursor?: QuarterlyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuarterlyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuarterlyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuarterlyTypes.
     */
    distinct?: QuarterlyTypeScalarFieldEnum | QuarterlyTypeScalarFieldEnum[]
  }

  /**
   * QuarterlyType findMany
   */
  export type QuarterlyTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterlyTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuarterlyTypes to fetch.
     */
    where?: QuarterlyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuarterlyTypes to fetch.
     */
    orderBy?: QuarterlyTypeOrderByWithRelationInput | QuarterlyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuarterlyTypes.
     */
    cursor?: QuarterlyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuarterlyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuarterlyTypes.
     */
    skip?: number
    distinct?: QuarterlyTypeScalarFieldEnum | QuarterlyTypeScalarFieldEnum[]
  }

  /**
   * QuarterlyType create
   */
  export type QuarterlyTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterlyTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a QuarterlyType.
     */
    data: XOR<QuarterlyTypeCreateInput, QuarterlyTypeUncheckedCreateInput>
  }

  /**
   * QuarterlyType createMany
   */
  export type QuarterlyTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuarterlyTypes.
     */
    data: QuarterlyTypeCreateManyInput | QuarterlyTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuarterlyType createManyAndReturn
   */
  export type QuarterlyTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * The data used to create many QuarterlyTypes.
     */
    data: QuarterlyTypeCreateManyInput | QuarterlyTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuarterlyType update
   */
  export type QuarterlyTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterlyTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a QuarterlyType.
     */
    data: XOR<QuarterlyTypeUpdateInput, QuarterlyTypeUncheckedUpdateInput>
    /**
     * Choose, which QuarterlyType to update.
     */
    where: QuarterlyTypeWhereUniqueInput
  }

  /**
   * QuarterlyType updateMany
   */
  export type QuarterlyTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuarterlyTypes.
     */
    data: XOR<QuarterlyTypeUpdateManyMutationInput, QuarterlyTypeUncheckedUpdateManyInput>
    /**
     * Filter which QuarterlyTypes to update
     */
    where?: QuarterlyTypeWhereInput
    /**
     * Limit how many QuarterlyTypes to update.
     */
    limit?: number
  }

  /**
   * QuarterlyType updateManyAndReturn
   */
  export type QuarterlyTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * The data used to update QuarterlyTypes.
     */
    data: XOR<QuarterlyTypeUpdateManyMutationInput, QuarterlyTypeUncheckedUpdateManyInput>
    /**
     * Filter which QuarterlyTypes to update
     */
    where?: QuarterlyTypeWhereInput
    /**
     * Limit how many QuarterlyTypes to update.
     */
    limit?: number
  }

  /**
   * QuarterlyType upsert
   */
  export type QuarterlyTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterlyTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the QuarterlyType to update in case it exists.
     */
    where: QuarterlyTypeWhereUniqueInput
    /**
     * In case the QuarterlyType found by the `where` argument doesn't exist, create a new QuarterlyType with this data.
     */
    create: XOR<QuarterlyTypeCreateInput, QuarterlyTypeUncheckedCreateInput>
    /**
     * In case the QuarterlyType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuarterlyTypeUpdateInput, QuarterlyTypeUncheckedUpdateInput>
  }

  /**
   * QuarterlyType delete
   */
  export type QuarterlyTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterlyTypeInclude<ExtArgs> | null
    /**
     * Filter which QuarterlyType to delete.
     */
    where: QuarterlyTypeWhereUniqueInput
  }

  /**
   * QuarterlyType deleteMany
   */
  export type QuarterlyTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuarterlyTypes to delete
     */
    where?: QuarterlyTypeWhereInput
    /**
     * Limit how many QuarterlyTypes to delete.
     */
    limit?: number
  }

  /**
   * QuarterlyType.activityData
   */
  export type QuarterlyType$activityDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
    where?: ActivityDataWhereInput
    orderBy?: ActivityDataOrderByWithRelationInput | ActivityDataOrderByWithRelationInput[]
    cursor?: ActivityDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityDataScalarFieldEnum | ActivityDataScalarFieldEnum[]
  }

  /**
   * QuarterlyType without action
   */
  export type QuarterlyTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterlyTypeInclude<ExtArgs> | null
  }


  /**
   * Model ActivityData
   */

  export type AggregateActivityData = {
    _count: ActivityDataCountAggregateOutputType | null
    _avg: ActivityDataAvgAggregateOutputType | null
    _sum: ActivityDataSumAggregateOutputType | null
    _min: ActivityDataMinAggregateOutputType | null
    _max: ActivityDataMaxAggregateOutputType | null
  }

  export type ActivityDataAvgAggregateOutputType = {
    id: number | null
    yearId: number | null
    activityId: number | null
    quarterlyTypeId: number | null
  }

  export type ActivityDataSumAggregateOutputType = {
    id: number | null
    yearId: number | null
    activityId: number | null
    quarterlyTypeId: number | null
  }

  export type ActivityDataMinAggregateOutputType = {
    id: number | null
    taskName: string | null
    type: $Enums.ActivityType | null
    yearId: number | null
    month: $Enums.MonthType | null
    dueDate: Date | null
    activityId: number | null
    quarterlyTypeId: number | null
  }

  export type ActivityDataMaxAggregateOutputType = {
    id: number | null
    taskName: string | null
    type: $Enums.ActivityType | null
    yearId: number | null
    month: $Enums.MonthType | null
    dueDate: Date | null
    activityId: number | null
    quarterlyTypeId: number | null
  }

  export type ActivityDataCountAggregateOutputType = {
    id: number
    taskName: number
    type: number
    yearId: number
    month: number
    dueDate: number
    activityId: number
    quarterlyTypeId: number
    _all: number
  }


  export type ActivityDataAvgAggregateInputType = {
    id?: true
    yearId?: true
    activityId?: true
    quarterlyTypeId?: true
  }

  export type ActivityDataSumAggregateInputType = {
    id?: true
    yearId?: true
    activityId?: true
    quarterlyTypeId?: true
  }

  export type ActivityDataMinAggregateInputType = {
    id?: true
    taskName?: true
    type?: true
    yearId?: true
    month?: true
    dueDate?: true
    activityId?: true
    quarterlyTypeId?: true
  }

  export type ActivityDataMaxAggregateInputType = {
    id?: true
    taskName?: true
    type?: true
    yearId?: true
    month?: true
    dueDate?: true
    activityId?: true
    quarterlyTypeId?: true
  }

  export type ActivityDataCountAggregateInputType = {
    id?: true
    taskName?: true
    type?: true
    yearId?: true
    month?: true
    dueDate?: true
    activityId?: true
    quarterlyTypeId?: true
    _all?: true
  }

  export type ActivityDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityData to aggregate.
     */
    where?: ActivityDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityData to fetch.
     */
    orderBy?: ActivityDataOrderByWithRelationInput | ActivityDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityData
    **/
    _count?: true | ActivityDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityDataMaxAggregateInputType
  }

  export type GetActivityDataAggregateType<T extends ActivityDataAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityData[P]>
      : GetScalarType<T[P], AggregateActivityData[P]>
  }




  export type ActivityDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityDataWhereInput
    orderBy?: ActivityDataOrderByWithAggregationInput | ActivityDataOrderByWithAggregationInput[]
    by: ActivityDataScalarFieldEnum[] | ActivityDataScalarFieldEnum
    having?: ActivityDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityDataCountAggregateInputType | true
    _avg?: ActivityDataAvgAggregateInputType
    _sum?: ActivityDataSumAggregateInputType
    _min?: ActivityDataMinAggregateInputType
    _max?: ActivityDataMaxAggregateInputType
  }

  export type ActivityDataGroupByOutputType = {
    id: number
    taskName: string
    type: $Enums.ActivityType
    yearId: number
    month: $Enums.MonthType | null
    dueDate: Date
    activityId: number
    quarterlyTypeId: number | null
    _count: ActivityDataCountAggregateOutputType | null
    _avg: ActivityDataAvgAggregateOutputType | null
    _sum: ActivityDataSumAggregateOutputType | null
    _min: ActivityDataMinAggregateOutputType | null
    _max: ActivityDataMaxAggregateOutputType | null
  }

  type GetActivityDataGroupByPayload<T extends ActivityDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityDataGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityDataGroupByOutputType[P]>
        }
      >
    >


  export type ActivityDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskName?: boolean
    type?: boolean
    yearId?: boolean
    month?: boolean
    dueDate?: boolean
    activityId?: boolean
    quarterlyTypeId?: boolean
    year?: boolean | YearDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    quarterlyType?: boolean | ActivityData$quarterlyTypeArgs<ExtArgs>
  }, ExtArgs["result"]["activityData"]>

  export type ActivityDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskName?: boolean
    type?: boolean
    yearId?: boolean
    month?: boolean
    dueDate?: boolean
    activityId?: boolean
    quarterlyTypeId?: boolean
    year?: boolean | YearDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    quarterlyType?: boolean | ActivityData$quarterlyTypeArgs<ExtArgs>
  }, ExtArgs["result"]["activityData"]>

  export type ActivityDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskName?: boolean
    type?: boolean
    yearId?: boolean
    month?: boolean
    dueDate?: boolean
    activityId?: boolean
    quarterlyTypeId?: boolean
    year?: boolean | YearDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    quarterlyType?: boolean | ActivityData$quarterlyTypeArgs<ExtArgs>
  }, ExtArgs["result"]["activityData"]>

  export type ActivityDataSelectScalar = {
    id?: boolean
    taskName?: boolean
    type?: boolean
    yearId?: boolean
    month?: boolean
    dueDate?: boolean
    activityId?: boolean
    quarterlyTypeId?: boolean
  }

  export type ActivityDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskName" | "type" | "yearId" | "month" | "dueDate" | "activityId" | "quarterlyTypeId", ExtArgs["result"]["activityData"]>
  export type ActivityDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    year?: boolean | YearDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    quarterlyType?: boolean | ActivityData$quarterlyTypeArgs<ExtArgs>
  }
  export type ActivityDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    year?: boolean | YearDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    quarterlyType?: boolean | ActivityData$quarterlyTypeArgs<ExtArgs>
  }
  export type ActivityDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    year?: boolean | YearDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    quarterlyType?: boolean | ActivityData$quarterlyTypeArgs<ExtArgs>
  }

  export type $ActivityDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityData"
    objects: {
      year: Prisma.$YearPayload<ExtArgs>
      activity: Prisma.$ActivityPayload<ExtArgs>
      quarterlyType: Prisma.$QuarterlyTypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskName: string
      type: $Enums.ActivityType
      yearId: number
      month: $Enums.MonthType | null
      dueDate: Date
      activityId: number
      quarterlyTypeId: number | null
    }, ExtArgs["result"]["activityData"]>
    composites: {}
  }

  type ActivityDataGetPayload<S extends boolean | null | undefined | ActivityDataDefaultArgs> = $Result.GetResult<Prisma.$ActivityDataPayload, S>

  type ActivityDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityDataCountAggregateInputType | true
    }

  export interface ActivityDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityData'], meta: { name: 'ActivityData' } }
    /**
     * Find zero or one ActivityData that matches the filter.
     * @param {ActivityDataFindUniqueArgs} args - Arguments to find a ActivityData
     * @example
     * // Get one ActivityData
     * const activityData = await prisma.activityData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityDataFindUniqueArgs>(args: SelectSubset<T, ActivityDataFindUniqueArgs<ExtArgs>>): Prisma__ActivityDataClient<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityDataFindUniqueOrThrowArgs} args - Arguments to find a ActivityData
     * @example
     * // Get one ActivityData
     * const activityData = await prisma.activityData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityDataFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityDataClient<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDataFindFirstArgs} args - Arguments to find a ActivityData
     * @example
     * // Get one ActivityData
     * const activityData = await prisma.activityData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityDataFindFirstArgs>(args?: SelectSubset<T, ActivityDataFindFirstArgs<ExtArgs>>): Prisma__ActivityDataClient<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDataFindFirstOrThrowArgs} args - Arguments to find a ActivityData
     * @example
     * // Get one ActivityData
     * const activityData = await prisma.activityData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityDataFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityDataClient<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityData
     * const activityData = await prisma.activityData.findMany()
     * 
     * // Get first 10 ActivityData
     * const activityData = await prisma.activityData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityDataWithIdOnly = await prisma.activityData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityDataFindManyArgs>(args?: SelectSubset<T, ActivityDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityData.
     * @param {ActivityDataCreateArgs} args - Arguments to create a ActivityData.
     * @example
     * // Create one ActivityData
     * const ActivityData = await prisma.activityData.create({
     *   data: {
     *     // ... data to create a ActivityData
     *   }
     * })
     * 
     */
    create<T extends ActivityDataCreateArgs>(args: SelectSubset<T, ActivityDataCreateArgs<ExtArgs>>): Prisma__ActivityDataClient<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityData.
     * @param {ActivityDataCreateManyArgs} args - Arguments to create many ActivityData.
     * @example
     * // Create many ActivityData
     * const activityData = await prisma.activityData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityDataCreateManyArgs>(args?: SelectSubset<T, ActivityDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityData and returns the data saved in the database.
     * @param {ActivityDataCreateManyAndReturnArgs} args - Arguments to create many ActivityData.
     * @example
     * // Create many ActivityData
     * const activityData = await prisma.activityData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityData and only return the `id`
     * const activityDataWithIdOnly = await prisma.activityData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityDataCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityData.
     * @param {ActivityDataDeleteArgs} args - Arguments to delete one ActivityData.
     * @example
     * // Delete one ActivityData
     * const ActivityData = await prisma.activityData.delete({
     *   where: {
     *     // ... filter to delete one ActivityData
     *   }
     * })
     * 
     */
    delete<T extends ActivityDataDeleteArgs>(args: SelectSubset<T, ActivityDataDeleteArgs<ExtArgs>>): Prisma__ActivityDataClient<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityData.
     * @param {ActivityDataUpdateArgs} args - Arguments to update one ActivityData.
     * @example
     * // Update one ActivityData
     * const activityData = await prisma.activityData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityDataUpdateArgs>(args: SelectSubset<T, ActivityDataUpdateArgs<ExtArgs>>): Prisma__ActivityDataClient<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityData.
     * @param {ActivityDataDeleteManyArgs} args - Arguments to filter ActivityData to delete.
     * @example
     * // Delete a few ActivityData
     * const { count } = await prisma.activityData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDataDeleteManyArgs>(args?: SelectSubset<T, ActivityDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityData
     * const activityData = await prisma.activityData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityDataUpdateManyArgs>(args: SelectSubset<T, ActivityDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityData and returns the data updated in the database.
     * @param {ActivityDataUpdateManyAndReturnArgs} args - Arguments to update many ActivityData.
     * @example
     * // Update many ActivityData
     * const activityData = await prisma.activityData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityData and only return the `id`
     * const activityDataWithIdOnly = await prisma.activityData.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityDataUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityData.
     * @param {ActivityDataUpsertArgs} args - Arguments to update or create a ActivityData.
     * @example
     * // Update or create a ActivityData
     * const activityData = await prisma.activityData.upsert({
     *   create: {
     *     // ... data to create a ActivityData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityData we want to update
     *   }
     * })
     */
    upsert<T extends ActivityDataUpsertArgs>(args: SelectSubset<T, ActivityDataUpsertArgs<ExtArgs>>): Prisma__ActivityDataClient<$Result.GetResult<Prisma.$ActivityDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDataCountArgs} args - Arguments to filter ActivityData to count.
     * @example
     * // Count the number of ActivityData
     * const count = await prisma.activityData.count({
     *   where: {
     *     // ... the filter for the ActivityData we want to count
     *   }
     * })
    **/
    count<T extends ActivityDataCountArgs>(
      args?: Subset<T, ActivityDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityDataAggregateArgs>(args: Subset<T, ActivityDataAggregateArgs>): Prisma.PrismaPromise<GetActivityDataAggregateType<T>>

    /**
     * Group by ActivityData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDataGroupByArgs} args - Group by arguments.
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
      T extends ActivityDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityDataGroupByArgs['orderBy'] }
        : { orderBy?: ActivityDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityData model
   */
  readonly fields: ActivityDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    year<T extends YearDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YearDefaultArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quarterlyType<T extends ActivityData$quarterlyTypeArgs<ExtArgs> = {}>(args?: Subset<T, ActivityData$quarterlyTypeArgs<ExtArgs>>): Prisma__QuarterlyTypeClient<$Result.GetResult<Prisma.$QuarterlyTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityData model
   */
  interface ActivityDataFieldRefs {
    readonly id: FieldRef<"ActivityData", 'Int'>
    readonly taskName: FieldRef<"ActivityData", 'String'>
    readonly type: FieldRef<"ActivityData", 'ActivityType'>
    readonly yearId: FieldRef<"ActivityData", 'Int'>
    readonly month: FieldRef<"ActivityData", 'MonthType'>
    readonly dueDate: FieldRef<"ActivityData", 'DateTime'>
    readonly activityId: FieldRef<"ActivityData", 'Int'>
    readonly quarterlyTypeId: FieldRef<"ActivityData", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ActivityData findUnique
   */
  export type ActivityDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
    /**
     * Filter, which ActivityData to fetch.
     */
    where: ActivityDataWhereUniqueInput
  }

  /**
   * ActivityData findUniqueOrThrow
   */
  export type ActivityDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
    /**
     * Filter, which ActivityData to fetch.
     */
    where: ActivityDataWhereUniqueInput
  }

  /**
   * ActivityData findFirst
   */
  export type ActivityDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
    /**
     * Filter, which ActivityData to fetch.
     */
    where?: ActivityDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityData to fetch.
     */
    orderBy?: ActivityDataOrderByWithRelationInput | ActivityDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityData.
     */
    cursor?: ActivityDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityData.
     */
    distinct?: ActivityDataScalarFieldEnum | ActivityDataScalarFieldEnum[]
  }

  /**
   * ActivityData findFirstOrThrow
   */
  export type ActivityDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
    /**
     * Filter, which ActivityData to fetch.
     */
    where?: ActivityDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityData to fetch.
     */
    orderBy?: ActivityDataOrderByWithRelationInput | ActivityDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityData.
     */
    cursor?: ActivityDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityData.
     */
    distinct?: ActivityDataScalarFieldEnum | ActivityDataScalarFieldEnum[]
  }

  /**
   * ActivityData findMany
   */
  export type ActivityDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
    /**
     * Filter, which ActivityData to fetch.
     */
    where?: ActivityDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityData to fetch.
     */
    orderBy?: ActivityDataOrderByWithRelationInput | ActivityDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityData.
     */
    cursor?: ActivityDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityData.
     */
    skip?: number
    distinct?: ActivityDataScalarFieldEnum | ActivityDataScalarFieldEnum[]
  }

  /**
   * ActivityData create
   */
  export type ActivityDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityData.
     */
    data: XOR<ActivityDataCreateInput, ActivityDataUncheckedCreateInput>
  }

  /**
   * ActivityData createMany
   */
  export type ActivityDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityData.
     */
    data: ActivityDataCreateManyInput | ActivityDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityData createManyAndReturn
   */
  export type ActivityDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityData.
     */
    data: ActivityDataCreateManyInput | ActivityDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityData update
   */
  export type ActivityDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityData.
     */
    data: XOR<ActivityDataUpdateInput, ActivityDataUncheckedUpdateInput>
    /**
     * Choose, which ActivityData to update.
     */
    where: ActivityDataWhereUniqueInput
  }

  /**
   * ActivityData updateMany
   */
  export type ActivityDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityData.
     */
    data: XOR<ActivityDataUpdateManyMutationInput, ActivityDataUncheckedUpdateManyInput>
    /**
     * Filter which ActivityData to update
     */
    where?: ActivityDataWhereInput
    /**
     * Limit how many ActivityData to update.
     */
    limit?: number
  }

  /**
   * ActivityData updateManyAndReturn
   */
  export type ActivityDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * The data used to update ActivityData.
     */
    data: XOR<ActivityDataUpdateManyMutationInput, ActivityDataUncheckedUpdateManyInput>
    /**
     * Filter which ActivityData to update
     */
    where?: ActivityDataWhereInput
    /**
     * Limit how many ActivityData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityData upsert
   */
  export type ActivityDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityData to update in case it exists.
     */
    where: ActivityDataWhereUniqueInput
    /**
     * In case the ActivityData found by the `where` argument doesn't exist, create a new ActivityData with this data.
     */
    create: XOR<ActivityDataCreateInput, ActivityDataUncheckedCreateInput>
    /**
     * In case the ActivityData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityDataUpdateInput, ActivityDataUncheckedUpdateInput>
  }

  /**
   * ActivityData delete
   */
  export type ActivityDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
    /**
     * Filter which ActivityData to delete.
     */
    where: ActivityDataWhereUniqueInput
  }

  /**
   * ActivityData deleteMany
   */
  export type ActivityDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityData to delete
     */
    where?: ActivityDataWhereInput
    /**
     * Limit how many ActivityData to delete.
     */
    limit?: number
  }

  /**
   * ActivityData.quarterlyType
   */
  export type ActivityData$quarterlyTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterlyType
     */
    select?: QuarterlyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuarterlyType
     */
    omit?: QuarterlyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterlyTypeInclude<ExtArgs> | null
    where?: QuarterlyTypeWhereInput
  }

  /**
   * ActivityData without action
   */
  export type ActivityDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityData
     */
    select?: ActivityDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityData
     */
    omit?: ActivityDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDataInclude<ExtArgs> | null
  }


  /**
   * Model TableData
   */

  export type AggregateTableData = {
    _count: TableDataCountAggregateOutputType | null
    _avg: TableDataAvgAggregateOutputType | null
    _sum: TableDataSumAggregateOutputType | null
    _min: TableDataMinAggregateOutputType | null
    _max: TableDataMaxAggregateOutputType | null
  }

  export type TableDataAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type TableDataSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type TableDataMinAggregateOutputType = {
    id: number | null
    key: string | null
    companyName: string | null
    activityName: string | null
    year: number | null
    month: $Enums.MonthType | null
    selectedActivityType: $Enums.ActivityType | null
    data: string | null
  }

  export type TableDataMaxAggregateOutputType = {
    id: number | null
    key: string | null
    companyName: string | null
    activityName: string | null
    year: number | null
    month: $Enums.MonthType | null
    selectedActivityType: $Enums.ActivityType | null
    data: string | null
  }

  export type TableDataCountAggregateOutputType = {
    id: number
    key: number
    companyName: number
    activityName: number
    year: number
    month: number
    selectedActivityType: number
    data: number
    _all: number
  }


  export type TableDataAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type TableDataSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type TableDataMinAggregateInputType = {
    id?: true
    key?: true
    companyName?: true
    activityName?: true
    year?: true
    month?: true
    selectedActivityType?: true
    data?: true
  }

  export type TableDataMaxAggregateInputType = {
    id?: true
    key?: true
    companyName?: true
    activityName?: true
    year?: true
    month?: true
    selectedActivityType?: true
    data?: true
  }

  export type TableDataCountAggregateInputType = {
    id?: true
    key?: true
    companyName?: true
    activityName?: true
    year?: true
    month?: true
    selectedActivityType?: true
    data?: true
    _all?: true
  }

  export type TableDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableData to aggregate.
     */
    where?: TableDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableData to fetch.
     */
    orderBy?: TableDataOrderByWithRelationInput | TableDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TableData
    **/
    _count?: true | TableDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableDataMaxAggregateInputType
  }

  export type GetTableDataAggregateType<T extends TableDataAggregateArgs> = {
        [P in keyof T & keyof AggregateTableData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTableData[P]>
      : GetScalarType<T[P], AggregateTableData[P]>
  }




  export type TableDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableDataWhereInput
    orderBy?: TableDataOrderByWithAggregationInput | TableDataOrderByWithAggregationInput[]
    by: TableDataScalarFieldEnum[] | TableDataScalarFieldEnum
    having?: TableDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableDataCountAggregateInputType | true
    _avg?: TableDataAvgAggregateInputType
    _sum?: TableDataSumAggregateInputType
    _min?: TableDataMinAggregateInputType
    _max?: TableDataMaxAggregateInputType
  }

  export type TableDataGroupByOutputType = {
    id: number
    key: string | null
    companyName: string | null
    activityName: string | null
    year: number | null
    month: $Enums.MonthType | null
    selectedActivityType: $Enums.ActivityType
    data: string
    _count: TableDataCountAggregateOutputType | null
    _avg: TableDataAvgAggregateOutputType | null
    _sum: TableDataSumAggregateOutputType | null
    _min: TableDataMinAggregateOutputType | null
    _max: TableDataMaxAggregateOutputType | null
  }

  type GetTableDataGroupByPayload<T extends TableDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableDataGroupByOutputType[P]>
            : GetScalarType<T[P], TableDataGroupByOutputType[P]>
        }
      >
    >


  export type TableDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    companyName?: boolean
    activityName?: boolean
    year?: boolean
    month?: boolean
    selectedActivityType?: boolean
    data?: boolean
    user?: boolean | TableData$userArgs<ExtArgs>
    _count?: boolean | TableDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tableData"]>

  export type TableDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    companyName?: boolean
    activityName?: boolean
    year?: boolean
    month?: boolean
    selectedActivityType?: boolean
    data?: boolean
  }, ExtArgs["result"]["tableData"]>

  export type TableDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    companyName?: boolean
    activityName?: boolean
    year?: boolean
    month?: boolean
    selectedActivityType?: boolean
    data?: boolean
  }, ExtArgs["result"]["tableData"]>

  export type TableDataSelectScalar = {
    id?: boolean
    key?: boolean
    companyName?: boolean
    activityName?: boolean
    year?: boolean
    month?: boolean
    selectedActivityType?: boolean
    data?: boolean
  }

  export type TableDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "companyName" | "activityName" | "year" | "month" | "selectedActivityType" | "data", ExtArgs["result"]["tableData"]>
  export type TableDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TableData$userArgs<ExtArgs>
    _count?: boolean | TableDataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TableDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TableDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TableDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TableData"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string | null
      companyName: string | null
      activityName: string | null
      year: number | null
      month: $Enums.MonthType | null
      selectedActivityType: $Enums.ActivityType
      data: string
    }, ExtArgs["result"]["tableData"]>
    composites: {}
  }

  type TableDataGetPayload<S extends boolean | null | undefined | TableDataDefaultArgs> = $Result.GetResult<Prisma.$TableDataPayload, S>

  type TableDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableDataCountAggregateInputType | true
    }

  export interface TableDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TableData'], meta: { name: 'TableData' } }
    /**
     * Find zero or one TableData that matches the filter.
     * @param {TableDataFindUniqueArgs} args - Arguments to find a TableData
     * @example
     * // Get one TableData
     * const tableData = await prisma.tableData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableDataFindUniqueArgs>(args: SelectSubset<T, TableDataFindUniqueArgs<ExtArgs>>): Prisma__TableDataClient<$Result.GetResult<Prisma.$TableDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TableData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableDataFindUniqueOrThrowArgs} args - Arguments to find a TableData
     * @example
     * // Get one TableData
     * const tableData = await prisma.tableData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableDataFindUniqueOrThrowArgs>(args: SelectSubset<T, TableDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableDataClient<$Result.GetResult<Prisma.$TableDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableDataFindFirstArgs} args - Arguments to find a TableData
     * @example
     * // Get one TableData
     * const tableData = await prisma.tableData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableDataFindFirstArgs>(args?: SelectSubset<T, TableDataFindFirstArgs<ExtArgs>>): Prisma__TableDataClient<$Result.GetResult<Prisma.$TableDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableDataFindFirstOrThrowArgs} args - Arguments to find a TableData
     * @example
     * // Get one TableData
     * const tableData = await prisma.tableData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableDataFindFirstOrThrowArgs>(args?: SelectSubset<T, TableDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableDataClient<$Result.GetResult<Prisma.$TableDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TableData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TableData
     * const tableData = await prisma.tableData.findMany()
     * 
     * // Get first 10 TableData
     * const tableData = await prisma.tableData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableDataWithIdOnly = await prisma.tableData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableDataFindManyArgs>(args?: SelectSubset<T, TableDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TableData.
     * @param {TableDataCreateArgs} args - Arguments to create a TableData.
     * @example
     * // Create one TableData
     * const TableData = await prisma.tableData.create({
     *   data: {
     *     // ... data to create a TableData
     *   }
     * })
     * 
     */
    create<T extends TableDataCreateArgs>(args: SelectSubset<T, TableDataCreateArgs<ExtArgs>>): Prisma__TableDataClient<$Result.GetResult<Prisma.$TableDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TableData.
     * @param {TableDataCreateManyArgs} args - Arguments to create many TableData.
     * @example
     * // Create many TableData
     * const tableData = await prisma.tableData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableDataCreateManyArgs>(args?: SelectSubset<T, TableDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TableData and returns the data saved in the database.
     * @param {TableDataCreateManyAndReturnArgs} args - Arguments to create many TableData.
     * @example
     * // Create many TableData
     * const tableData = await prisma.tableData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TableData and only return the `id`
     * const tableDataWithIdOnly = await prisma.tableData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableDataCreateManyAndReturnArgs>(args?: SelectSubset<T, TableDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TableData.
     * @param {TableDataDeleteArgs} args - Arguments to delete one TableData.
     * @example
     * // Delete one TableData
     * const TableData = await prisma.tableData.delete({
     *   where: {
     *     // ... filter to delete one TableData
     *   }
     * })
     * 
     */
    delete<T extends TableDataDeleteArgs>(args: SelectSubset<T, TableDataDeleteArgs<ExtArgs>>): Prisma__TableDataClient<$Result.GetResult<Prisma.$TableDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TableData.
     * @param {TableDataUpdateArgs} args - Arguments to update one TableData.
     * @example
     * // Update one TableData
     * const tableData = await prisma.tableData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableDataUpdateArgs>(args: SelectSubset<T, TableDataUpdateArgs<ExtArgs>>): Prisma__TableDataClient<$Result.GetResult<Prisma.$TableDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TableData.
     * @param {TableDataDeleteManyArgs} args - Arguments to filter TableData to delete.
     * @example
     * // Delete a few TableData
     * const { count } = await prisma.tableData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableDataDeleteManyArgs>(args?: SelectSubset<T, TableDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TableData
     * const tableData = await prisma.tableData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableDataUpdateManyArgs>(args: SelectSubset<T, TableDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableData and returns the data updated in the database.
     * @param {TableDataUpdateManyAndReturnArgs} args - Arguments to update many TableData.
     * @example
     * // Update many TableData
     * const tableData = await prisma.tableData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TableData and only return the `id`
     * const tableDataWithIdOnly = await prisma.tableData.updateManyAndReturn({
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
    updateManyAndReturn<T extends TableDataUpdateManyAndReturnArgs>(args: SelectSubset<T, TableDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TableData.
     * @param {TableDataUpsertArgs} args - Arguments to update or create a TableData.
     * @example
     * // Update or create a TableData
     * const tableData = await prisma.tableData.upsert({
     *   create: {
     *     // ... data to create a TableData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TableData we want to update
     *   }
     * })
     */
    upsert<T extends TableDataUpsertArgs>(args: SelectSubset<T, TableDataUpsertArgs<ExtArgs>>): Prisma__TableDataClient<$Result.GetResult<Prisma.$TableDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TableData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableDataCountArgs} args - Arguments to filter TableData to count.
     * @example
     * // Count the number of TableData
     * const count = await prisma.tableData.count({
     *   where: {
     *     // ... the filter for the TableData we want to count
     *   }
     * })
    **/
    count<T extends TableDataCountArgs>(
      args?: Subset<T, TableDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TableData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableDataAggregateArgs>(args: Subset<T, TableDataAggregateArgs>): Prisma.PrismaPromise<GetTableDataAggregateType<T>>

    /**
     * Group by TableData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableDataGroupByArgs} args - Group by arguments.
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
      T extends TableDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableDataGroupByArgs['orderBy'] }
        : { orderBy?: TableDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TableDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TableData model
   */
  readonly fields: TableDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TableData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends TableData$userArgs<ExtArgs> = {}>(args?: Subset<T, TableData$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TableData model
   */
  interface TableDataFieldRefs {
    readonly id: FieldRef<"TableData", 'Int'>
    readonly key: FieldRef<"TableData", 'String'>
    readonly companyName: FieldRef<"TableData", 'String'>
    readonly activityName: FieldRef<"TableData", 'String'>
    readonly year: FieldRef<"TableData", 'Int'>
    readonly month: FieldRef<"TableData", 'MonthType'>
    readonly selectedActivityType: FieldRef<"TableData", 'ActivityType'>
    readonly data: FieldRef<"TableData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TableData findUnique
   */
  export type TableDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableDataInclude<ExtArgs> | null
    /**
     * Filter, which TableData to fetch.
     */
    where: TableDataWhereUniqueInput
  }

  /**
   * TableData findUniqueOrThrow
   */
  export type TableDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableDataInclude<ExtArgs> | null
    /**
     * Filter, which TableData to fetch.
     */
    where: TableDataWhereUniqueInput
  }

  /**
   * TableData findFirst
   */
  export type TableDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableDataInclude<ExtArgs> | null
    /**
     * Filter, which TableData to fetch.
     */
    where?: TableDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableData to fetch.
     */
    orderBy?: TableDataOrderByWithRelationInput | TableDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableData.
     */
    cursor?: TableDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableData.
     */
    distinct?: TableDataScalarFieldEnum | TableDataScalarFieldEnum[]
  }

  /**
   * TableData findFirstOrThrow
   */
  export type TableDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableDataInclude<ExtArgs> | null
    /**
     * Filter, which TableData to fetch.
     */
    where?: TableDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableData to fetch.
     */
    orderBy?: TableDataOrderByWithRelationInput | TableDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableData.
     */
    cursor?: TableDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableData.
     */
    distinct?: TableDataScalarFieldEnum | TableDataScalarFieldEnum[]
  }

  /**
   * TableData findMany
   */
  export type TableDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableDataInclude<ExtArgs> | null
    /**
     * Filter, which TableData to fetch.
     */
    where?: TableDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableData to fetch.
     */
    orderBy?: TableDataOrderByWithRelationInput | TableDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TableData.
     */
    cursor?: TableDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableData.
     */
    skip?: number
    distinct?: TableDataScalarFieldEnum | TableDataScalarFieldEnum[]
  }

  /**
   * TableData create
   */
  export type TableDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableDataInclude<ExtArgs> | null
    /**
     * The data needed to create a TableData.
     */
    data: XOR<TableDataCreateInput, TableDataUncheckedCreateInput>
  }

  /**
   * TableData createMany
   */
  export type TableDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TableData.
     */
    data: TableDataCreateManyInput | TableDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableData createManyAndReturn
   */
  export type TableDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * The data used to create many TableData.
     */
    data: TableDataCreateManyInput | TableDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableData update
   */
  export type TableDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableDataInclude<ExtArgs> | null
    /**
     * The data needed to update a TableData.
     */
    data: XOR<TableDataUpdateInput, TableDataUncheckedUpdateInput>
    /**
     * Choose, which TableData to update.
     */
    where: TableDataWhereUniqueInput
  }

  /**
   * TableData updateMany
   */
  export type TableDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TableData.
     */
    data: XOR<TableDataUpdateManyMutationInput, TableDataUncheckedUpdateManyInput>
    /**
     * Filter which TableData to update
     */
    where?: TableDataWhereInput
    /**
     * Limit how many TableData to update.
     */
    limit?: number
  }

  /**
   * TableData updateManyAndReturn
   */
  export type TableDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * The data used to update TableData.
     */
    data: XOR<TableDataUpdateManyMutationInput, TableDataUncheckedUpdateManyInput>
    /**
     * Filter which TableData to update
     */
    where?: TableDataWhereInput
    /**
     * Limit how many TableData to update.
     */
    limit?: number
  }

  /**
   * TableData upsert
   */
  export type TableDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableDataInclude<ExtArgs> | null
    /**
     * The filter to search for the TableData to update in case it exists.
     */
    where: TableDataWhereUniqueInput
    /**
     * In case the TableData found by the `where` argument doesn't exist, create a new TableData with this data.
     */
    create: XOR<TableDataCreateInput, TableDataUncheckedCreateInput>
    /**
     * In case the TableData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableDataUpdateInput, TableDataUncheckedUpdateInput>
  }

  /**
   * TableData delete
   */
  export type TableDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableDataInclude<ExtArgs> | null
    /**
     * Filter which TableData to delete.
     */
    where: TableDataWhereUniqueInput
  }

  /**
   * TableData deleteMany
   */
  export type TableDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableData to delete
     */
    where?: TableDataWhereInput
    /**
     * Limit how many TableData to delete.
     */
    limit?: number
  }

  /**
   * TableData.user
   */
  export type TableData$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * TableData without action
   */
  export type TableDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableDataInclude<ExtArgs> | null
  }


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
    tableDataId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    tableDataId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    userType: $Enums.UserType | null
    link: string | null
    subscriptionType: $Enums.SubscriptionType | null
    lastPaymentDate: Date | null
    cancellationReason: string | null
    tableDataId: number | null
    otp: string | null
    otpExpiration: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    userType: $Enums.UserType | null
    link: string | null
    subscriptionType: $Enums.SubscriptionType | null
    lastPaymentDate: Date | null
    cancellationReason: string | null
    tableDataId: number | null
    otp: string | null
    otpExpiration: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    userType: number
    link: number
    subscriptionType: number
    lastPaymentDate: number
    cancellationReason: number
    tableDataId: number
    otp: number
    otpExpiration: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    tableDataId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    tableDataId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    userType?: true
    link?: true
    subscriptionType?: true
    lastPaymentDate?: true
    cancellationReason?: true
    tableDataId?: true
    otp?: true
    otpExpiration?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    userType?: true
    link?: true
    subscriptionType?: true
    lastPaymentDate?: true
    cancellationReason?: true
    tableDataId?: true
    otp?: true
    otpExpiration?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    userType?: true
    link?: true
    subscriptionType?: true
    lastPaymentDate?: true
    cancellationReason?: true
    tableDataId?: true
    otp?: true
    otpExpiration?: true
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
    name: string | null
    email: string
    password: string | null
    userType: $Enums.UserType
    link: string | null
    subscriptionType: $Enums.SubscriptionType
    lastPaymentDate: Date | null
    cancellationReason: string | null
    tableDataId: number | null
    otp: string | null
    otpExpiration: Date | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    link?: boolean
    subscriptionType?: boolean
    lastPaymentDate?: boolean
    cancellationReason?: boolean
    tableDataId?: boolean
    otp?: boolean
    otpExpiration?: boolean
    tableData?: boolean | User$tableDataArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    link?: boolean
    subscriptionType?: boolean
    lastPaymentDate?: boolean
    cancellationReason?: boolean
    tableDataId?: boolean
    otp?: boolean
    otpExpiration?: boolean
    tableData?: boolean | User$tableDataArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    link?: boolean
    subscriptionType?: boolean
    lastPaymentDate?: boolean
    cancellationReason?: boolean
    tableDataId?: boolean
    otp?: boolean
    otpExpiration?: boolean
    tableData?: boolean | User$tableDataArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    link?: boolean
    subscriptionType?: boolean
    lastPaymentDate?: boolean
    cancellationReason?: boolean
    tableDataId?: boolean
    otp?: boolean
    otpExpiration?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "userType" | "link" | "subscriptionType" | "lastPaymentDate" | "cancellationReason" | "tableDataId" | "otp" | "otpExpiration", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tableData?: boolean | User$tableDataArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tableData?: boolean | User$tableDataArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tableData?: boolean | User$tableDataArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tableData: Prisma.$TableDataPayload<ExtArgs> | null
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string | null
      userType: $Enums.UserType
      link: string | null
      subscriptionType: $Enums.SubscriptionType
      lastPaymentDate: Date | null
      cancellationReason: string | null
      tableDataId: number | null
      otp: string | null
      otpExpiration: Date | null
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
    tableData<T extends User$tableDataArgs<ExtArgs> = {}>(args?: Subset<T, User$tableDataArgs<ExtArgs>>): Prisma__TableDataClient<$Result.GetResult<Prisma.$TableDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly link: FieldRef<"User", 'String'>
    readonly subscriptionType: FieldRef<"User", 'SubscriptionType'>
    readonly lastPaymentDate: FieldRef<"User", 'DateTime'>
    readonly cancellationReason: FieldRef<"User", 'String'>
    readonly tableDataId: FieldRef<"User", 'Int'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpiration: FieldRef<"User", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.tableData
   */
  export type User$tableDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableData
     */
    select?: TableDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableData
     */
    omit?: TableDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableDataInclude<ExtArgs> | null
    where?: TableDataWhereInput
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
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
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    renewalCount: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    renewalCount: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    razorpayCustomerId: string | null
    planId: string | null
    startDate: Date | null
    endDate: Date | null
    amount: number | null
    status: string | null
    autoRenew: boolean | null
    renewalCount: number | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    razorpayCustomerId: string | null
    planId: string | null
    startDate: Date | null
    endDate: Date | null
    amount: number | null
    status: string | null
    autoRenew: boolean | null
    renewalCount: number | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    razorpayCustomerId: number
    planId: number
    startDate: number
    endDate: number
    amount: number
    status: number
    autoRenew: number
    renewalCount: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    renewalCount?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    renewalCount?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    razorpayCustomerId?: true
    planId?: true
    startDate?: true
    endDate?: true
    amount?: true
    status?: true
    autoRenew?: true
    renewalCount?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    razorpayCustomerId?: true
    planId?: true
    startDate?: true
    endDate?: true
    amount?: true
    status?: true
    autoRenew?: true
    renewalCount?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    razorpayCustomerId?: true
    planId?: true
    startDate?: true
    endDate?: true
    amount?: true
    status?: true
    autoRenew?: true
    renewalCount?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    userId: number
    razorpayCustomerId: string
    planId: string
    startDate: Date
    endDate: Date | null
    amount: number
    status: string
    autoRenew: boolean
    renewalCount: number
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    razorpayCustomerId?: boolean
    planId?: boolean
    startDate?: boolean
    endDate?: boolean
    amount?: boolean
    status?: boolean
    autoRenew?: boolean
    renewalCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    razorpayCustomerId?: boolean
    planId?: boolean
    startDate?: boolean
    endDate?: boolean
    amount?: boolean
    status?: boolean
    autoRenew?: boolean
    renewalCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    razorpayCustomerId?: boolean
    planId?: boolean
    startDate?: boolean
    endDate?: boolean
    amount?: boolean
    status?: boolean
    autoRenew?: boolean
    renewalCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    razorpayCustomerId?: boolean
    planId?: boolean
    startDate?: boolean
    endDate?: boolean
    amount?: boolean
    status?: boolean
    autoRenew?: boolean
    renewalCount?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "razorpayCustomerId" | "planId" | "startDate" | "endDate" | "amount" | "status" | "autoRenew" | "renewalCount", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      razorpayCustomerId: string
      planId: string
      startDate: Date
      endDate: Date | null
      amount: number
      status: string
      autoRenew: boolean
      renewalCount: number
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Subscription$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'Int'>
    readonly userId: FieldRef<"Subscription", 'Int'>
    readonly razorpayCustomerId: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
    readonly amount: FieldRef<"Subscription", 'Int'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly autoRenew: FieldRef<"Subscription", 'Boolean'>
    readonly renewalCount: FieldRef<"Subscription", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.payments
   */
  export type Subscription$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
    amount: number | null
    paymentDate: Date | null
    status: string | null
    razorpayPaymentId: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
    amount: number | null
    paymentDate: Date | null
    status: string | null
    razorpayPaymentId: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    subscriptionId: number
    amount: number
    paymentDate: number
    status: number
    razorpayPaymentId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    subscriptionId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    subscriptionId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    amount?: true
    paymentDate?: true
    status?: true
    razorpayPaymentId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    amount?: true
    paymentDate?: true
    status?: true
    razorpayPaymentId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    amount?: true
    paymentDate?: true
    status?: true
    razorpayPaymentId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    subscriptionId: number
    amount: number
    paymentDate: Date
    status: string
    razorpayPaymentId: string | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    amount?: boolean
    paymentDate?: boolean
    status?: boolean
    razorpayPaymentId?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    amount?: boolean
    paymentDate?: boolean
    status?: boolean
    razorpayPaymentId?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    amount?: boolean
    paymentDate?: boolean
    status?: boolean
    razorpayPaymentId?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    amount?: boolean
    paymentDate?: boolean
    status?: boolean
    razorpayPaymentId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionId" | "amount" | "paymentDate" | "status" | "razorpayPaymentId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subscriptionId: number
      amount: number
      paymentDate: Date
      status: string
      razorpayPaymentId: string | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly subscriptionId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly razorpayPaymentId: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkAvgAggregateOutputType = {
    id: number | null
  }

  export type LinkSumAggregateOutputType = {
    id: number | null
  }

  export type LinkMinAggregateOutputType = {
    id: number | null
    link: string | null
    owner: string | null
  }

  export type LinkMaxAggregateOutputType = {
    id: number | null
    link: string | null
    owner: string | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    link: number
    owner: number
    recievers: number
    data: number
    _all: number
  }


  export type LinkAvgAggregateInputType = {
    id?: true
  }

  export type LinkSumAggregateInputType = {
    id?: true
  }

  export type LinkMinAggregateInputType = {
    id?: true
    link?: true
    owner?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    link?: true
    owner?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    link?: true
    owner?: true
    recievers?: true
    data?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _avg?: LinkAvgAggregateInputType
    _sum?: LinkSumAggregateInputType
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: number
    link: string
    owner: string | null
    recievers: JsonValue | null
    data: JsonValue
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    owner?: boolean
    recievers?: boolean
    data?: boolean
  }, ExtArgs["result"]["link"]>

  export type LinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    owner?: boolean
    recievers?: boolean
    data?: boolean
  }, ExtArgs["result"]["link"]>

  export type LinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    owner?: boolean
    recievers?: boolean
    data?: boolean
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    id?: boolean
    link?: boolean
    owner?: boolean
    recievers?: boolean
    data?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "link" | "owner" | "recievers" | "data", ExtArgs["result"]["link"]>

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      link: string
      owner: string | null
      recievers: Prisma.JsonValue | null
      data: Prisma.JsonValue
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinkCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinkUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.updateManyAndReturn({
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
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
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
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'Int'>
    readonly link: FieldRef<"Link", 'String'>
    readonly owner: FieldRef<"Link", 'String'>
    readonly recievers: FieldRef<"Link", 'Json'>
    readonly data: FieldRef<"Link", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link createManyAndReturn
   */
  export type LinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link updateManyAndReturn
   */
  export type LinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
  }


  /**
   * Model Ad
   */

  export type AggregateAd = {
    _count: AdCountAggregateOutputType | null
    _avg: AdAvgAggregateOutputType | null
    _sum: AdSumAggregateOutputType | null
    _min: AdMinAggregateOutputType | null
    _max: AdMaxAggregateOutputType | null
  }

  export type AdAvgAggregateOutputType = {
    id: number | null
  }

  export type AdSumAggregateOutputType = {
    id: number | null
  }

  export type AdMinAggregateOutputType = {
    id: number | null
    contentUrl: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdMaxAggregateOutputType = {
    id: number | null
    contentUrl: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdCountAggregateOutputType = {
    id: number
    contentUrl: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdAvgAggregateInputType = {
    id?: true
  }

  export type AdSumAggregateInputType = {
    id?: true
  }

  export type AdMinAggregateInputType = {
    id?: true
    contentUrl?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdMaxAggregateInputType = {
    id?: true
    contentUrl?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdCountAggregateInputType = {
    id?: true
    contentUrl?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ad to aggregate.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ads
    **/
    _count?: true | AdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdMaxAggregateInputType
  }

  export type GetAdAggregateType<T extends AdAggregateArgs> = {
        [P in keyof T & keyof AggregateAd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAd[P]>
      : GetScalarType<T[P], AggregateAd[P]>
  }




  export type AdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdWhereInput
    orderBy?: AdOrderByWithAggregationInput | AdOrderByWithAggregationInput[]
    by: AdScalarFieldEnum[] | AdScalarFieldEnum
    having?: AdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdCountAggregateInputType | true
    _avg?: AdAvgAggregateInputType
    _sum?: AdSumAggregateInputType
    _min?: AdMinAggregateInputType
    _max?: AdMaxAggregateInputType
  }

  export type AdGroupByOutputType = {
    id: number
    contentUrl: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: AdCountAggregateOutputType | null
    _avg: AdAvgAggregateOutputType | null
    _sum: AdSumAggregateOutputType | null
    _min: AdMinAggregateOutputType | null
    _max: AdMaxAggregateOutputType | null
  }

  type GetAdGroupByPayload<T extends AdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdGroupByOutputType[P]>
            : GetScalarType<T[P], AdGroupByOutputType[P]>
        }
      >
    >


  export type AdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ad"]>

  export type AdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ad"]>

  export type AdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ad"]>

  export type AdSelectScalar = {
    id?: boolean
    contentUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contentUrl" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["ad"]>

  export type $AdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ad"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contentUrl: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ad"]>
    composites: {}
  }

  type AdGetPayload<S extends boolean | null | undefined | AdDefaultArgs> = $Result.GetResult<Prisma.$AdPayload, S>

  type AdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdCountAggregateInputType | true
    }

  export interface AdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ad'], meta: { name: 'Ad' } }
    /**
     * Find zero or one Ad that matches the filter.
     * @param {AdFindUniqueArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdFindUniqueArgs>(args: SelectSubset<T, AdFindUniqueArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdFindUniqueOrThrowArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdFindUniqueOrThrowArgs>(args: SelectSubset<T, AdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindFirstArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdFindFirstArgs>(args?: SelectSubset<T, AdFindFirstArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindFirstOrThrowArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdFindFirstOrThrowArgs>(args?: SelectSubset<T, AdFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ads
     * const ads = await prisma.ad.findMany()
     * 
     * // Get first 10 Ads
     * const ads = await prisma.ad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adWithIdOnly = await prisma.ad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdFindManyArgs>(args?: SelectSubset<T, AdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ad.
     * @param {AdCreateArgs} args - Arguments to create a Ad.
     * @example
     * // Create one Ad
     * const Ad = await prisma.ad.create({
     *   data: {
     *     // ... data to create a Ad
     *   }
     * })
     * 
     */
    create<T extends AdCreateArgs>(args: SelectSubset<T, AdCreateArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ads.
     * @param {AdCreateManyArgs} args - Arguments to create many Ads.
     * @example
     * // Create many Ads
     * const ad = await prisma.ad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdCreateManyArgs>(args?: SelectSubset<T, AdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ads and returns the data saved in the database.
     * @param {AdCreateManyAndReturnArgs} args - Arguments to create many Ads.
     * @example
     * // Create many Ads
     * const ad = await prisma.ad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ads and only return the `id`
     * const adWithIdOnly = await prisma.ad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdCreateManyAndReturnArgs>(args?: SelectSubset<T, AdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ad.
     * @param {AdDeleteArgs} args - Arguments to delete one Ad.
     * @example
     * // Delete one Ad
     * const Ad = await prisma.ad.delete({
     *   where: {
     *     // ... filter to delete one Ad
     *   }
     * })
     * 
     */
    delete<T extends AdDeleteArgs>(args: SelectSubset<T, AdDeleteArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ad.
     * @param {AdUpdateArgs} args - Arguments to update one Ad.
     * @example
     * // Update one Ad
     * const ad = await prisma.ad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdUpdateArgs>(args: SelectSubset<T, AdUpdateArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ads.
     * @param {AdDeleteManyArgs} args - Arguments to filter Ads to delete.
     * @example
     * // Delete a few Ads
     * const { count } = await prisma.ad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdDeleteManyArgs>(args?: SelectSubset<T, AdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ads
     * const ad = await prisma.ad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdUpdateManyArgs>(args: SelectSubset<T, AdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ads and returns the data updated in the database.
     * @param {AdUpdateManyAndReturnArgs} args - Arguments to update many Ads.
     * @example
     * // Update many Ads
     * const ad = await prisma.ad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ads and only return the `id`
     * const adWithIdOnly = await prisma.ad.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdUpdateManyAndReturnArgs>(args: SelectSubset<T, AdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ad.
     * @param {AdUpsertArgs} args - Arguments to update or create a Ad.
     * @example
     * // Update or create a Ad
     * const ad = await prisma.ad.upsert({
     *   create: {
     *     // ... data to create a Ad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ad we want to update
     *   }
     * })
     */
    upsert<T extends AdUpsertArgs>(args: SelectSubset<T, AdUpsertArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdCountArgs} args - Arguments to filter Ads to count.
     * @example
     * // Count the number of Ads
     * const count = await prisma.ad.count({
     *   where: {
     *     // ... the filter for the Ads we want to count
     *   }
     * })
    **/
    count<T extends AdCountArgs>(
      args?: Subset<T, AdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdAggregateArgs>(args: Subset<T, AdAggregateArgs>): Prisma.PrismaPromise<GetAdAggregateType<T>>

    /**
     * Group by Ad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupByArgs} args - Group by arguments.
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
      T extends AdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdGroupByArgs['orderBy'] }
        : { orderBy?: AdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ad model
   */
  readonly fields: AdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Ad model
   */
  interface AdFieldRefs {
    readonly id: FieldRef<"Ad", 'Int'>
    readonly contentUrl: FieldRef<"Ad", 'String'>
    readonly startDate: FieldRef<"Ad", 'DateTime'>
    readonly endDate: FieldRef<"Ad", 'DateTime'>
    readonly createdAt: FieldRef<"Ad", 'DateTime'>
    readonly updatedAt: FieldRef<"Ad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ad findUnique
   */
  export type AdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where: AdWhereUniqueInput
  }

  /**
   * Ad findUniqueOrThrow
   */
  export type AdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where: AdWhereUniqueInput
  }

  /**
   * Ad findFirst
   */
  export type AdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ads.
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ads.
     */
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }

  /**
   * Ad findFirstOrThrow
   */
  export type AdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ads.
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ads.
     */
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }

  /**
   * Ad findMany
   */
  export type AdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Filter, which Ads to fetch.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ads.
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }

  /**
   * Ad create
   */
  export type AdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * The data needed to create a Ad.
     */
    data: XOR<AdCreateInput, AdUncheckedCreateInput>
  }

  /**
   * Ad createMany
   */
  export type AdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ads.
     */
    data: AdCreateManyInput | AdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ad createManyAndReturn
   */
  export type AdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * The data used to create many Ads.
     */
    data: AdCreateManyInput | AdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ad update
   */
  export type AdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * The data needed to update a Ad.
     */
    data: XOR<AdUpdateInput, AdUncheckedUpdateInput>
    /**
     * Choose, which Ad to update.
     */
    where: AdWhereUniqueInput
  }

  /**
   * Ad updateMany
   */
  export type AdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ads.
     */
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyInput>
    /**
     * Filter which Ads to update
     */
    where?: AdWhereInput
    /**
     * Limit how many Ads to update.
     */
    limit?: number
  }

  /**
   * Ad updateManyAndReturn
   */
  export type AdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * The data used to update Ads.
     */
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyInput>
    /**
     * Filter which Ads to update
     */
    where?: AdWhereInput
    /**
     * Limit how many Ads to update.
     */
    limit?: number
  }

  /**
   * Ad upsert
   */
  export type AdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * The filter to search for the Ad to update in case it exists.
     */
    where: AdWhereUniqueInput
    /**
     * In case the Ad found by the `where` argument doesn't exist, create a new Ad with this data.
     */
    create: XOR<AdCreateInput, AdUncheckedCreateInput>
    /**
     * In case the Ad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdUpdateInput, AdUncheckedUpdateInput>
  }

  /**
   * Ad delete
   */
  export type AdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Filter which Ad to delete.
     */
    where: AdWhereUniqueInput
  }

  /**
   * Ad deleteMany
   */
  export type AdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ads to delete
     */
    where?: AdWhereInput
    /**
     * Limit how many Ads to delete.
     */
    limit?: number
  }

  /**
   * Ad without action
   */
  export type AdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
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


  export const YearScalarFieldEnum: {
    id: 'id',
    year: 'year'
  };

  export type YearScalarFieldEnum = (typeof YearScalarFieldEnum)[keyof typeof YearScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const QuarterlyTypeScalarFieldEnum: {
    id: 'id',
    startMonth: 'startMonth',
    endMonth: 'endMonth'
  };

  export type QuarterlyTypeScalarFieldEnum = (typeof QuarterlyTypeScalarFieldEnum)[keyof typeof QuarterlyTypeScalarFieldEnum]


  export const ActivityDataScalarFieldEnum: {
    id: 'id',
    taskName: 'taskName',
    type: 'type',
    yearId: 'yearId',
    month: 'month',
    dueDate: 'dueDate',
    activityId: 'activityId',
    quarterlyTypeId: 'quarterlyTypeId'
  };

  export type ActivityDataScalarFieldEnum = (typeof ActivityDataScalarFieldEnum)[keyof typeof ActivityDataScalarFieldEnum]


  export const TableDataScalarFieldEnum: {
    id: 'id',
    key: 'key',
    companyName: 'companyName',
    activityName: 'activityName',
    year: 'year',
    month: 'month',
    selectedActivityType: 'selectedActivityType',
    data: 'data'
  };

  export type TableDataScalarFieldEnum = (typeof TableDataScalarFieldEnum)[keyof typeof TableDataScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    userType: 'userType',
    link: 'link',
    subscriptionType: 'subscriptionType',
    lastPaymentDate: 'lastPaymentDate',
    cancellationReason: 'cancellationReason',
    tableDataId: 'tableDataId',
    otp: 'otp',
    otpExpiration: 'otpExpiration'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    razorpayCustomerId: 'razorpayCustomerId',
    planId: 'planId',
    startDate: 'startDate',
    endDate: 'endDate',
    amount: 'amount',
    status: 'status',
    autoRenew: 'autoRenew',
    renewalCount: 'renewalCount'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    amount: 'amount',
    paymentDate: 'paymentDate',
    status: 'status',
    razorpayPaymentId: 'razorpayPaymentId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    link: 'link',
    owner: 'owner',
    recievers: 'recievers',
    data: 'data'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const AdScalarFieldEnum: {
    id: 'id',
    contentUrl: 'contentUrl',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdScalarFieldEnum = (typeof AdScalarFieldEnum)[keyof typeof AdScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'MonthType'
   */
  export type EnumMonthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MonthType'>
    


  /**
   * Reference to a field of type 'MonthType[]'
   */
  export type ListEnumMonthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MonthType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'SubscriptionType'
   */
  export type EnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType'>
    


  /**
   * Reference to a field of type 'SubscriptionType[]'
   */
  export type ListEnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type YearWhereInput = {
    AND?: YearWhereInput | YearWhereInput[]
    OR?: YearWhereInput[]
    NOT?: YearWhereInput | YearWhereInput[]
    id?: IntFilter<"Year"> | number
    year?: IntFilter<"Year"> | number
    activityData?: ActivityDataListRelationFilter
  }

  export type YearOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    activityData?: ActivityDataOrderByRelationAggregateInput
  }

  export type YearWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    year?: number
    AND?: YearWhereInput | YearWhereInput[]
    OR?: YearWhereInput[]
    NOT?: YearWhereInput | YearWhereInput[]
    activityData?: ActivityDataListRelationFilter
  }, "id" | "year">

  export type YearOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    _count?: YearCountOrderByAggregateInput
    _avg?: YearAvgOrderByAggregateInput
    _max?: YearMaxOrderByAggregateInput
    _min?: YearMinOrderByAggregateInput
    _sum?: YearSumOrderByAggregateInput
  }

  export type YearScalarWhereWithAggregatesInput = {
    AND?: YearScalarWhereWithAggregatesInput | YearScalarWhereWithAggregatesInput[]
    OR?: YearScalarWhereWithAggregatesInput[]
    NOT?: YearScalarWhereWithAggregatesInput | YearScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Year"> | number
    year?: IntWithAggregatesFilter<"Year"> | number
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: IntFilter<"Activity"> | number
    name?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    activityData?: ActivityDataListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    activityData?: ActivityDataOrderByRelationAggregateInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    name?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    activityData?: ActivityDataListRelationFilter
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Activity"> | number
    name?: StringWithAggregatesFilter<"Activity"> | string
    type?: EnumActivityTypeWithAggregatesFilter<"Activity"> | $Enums.ActivityType
  }

  export type QuarterlyTypeWhereInput = {
    AND?: QuarterlyTypeWhereInput | QuarterlyTypeWhereInput[]
    OR?: QuarterlyTypeWhereInput[]
    NOT?: QuarterlyTypeWhereInput | QuarterlyTypeWhereInput[]
    id?: IntFilter<"QuarterlyType"> | number
    startMonth?: EnumMonthTypeFilter<"QuarterlyType"> | $Enums.MonthType
    endMonth?: EnumMonthTypeFilter<"QuarterlyType"> | $Enums.MonthType
    activityData?: ActivityDataListRelationFilter
  }

  export type QuarterlyTypeOrderByWithRelationInput = {
    id?: SortOrder
    startMonth?: SortOrder
    endMonth?: SortOrder
    activityData?: ActivityDataOrderByRelationAggregateInput
  }

  export type QuarterlyTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuarterlyTypeWhereInput | QuarterlyTypeWhereInput[]
    OR?: QuarterlyTypeWhereInput[]
    NOT?: QuarterlyTypeWhereInput | QuarterlyTypeWhereInput[]
    startMonth?: EnumMonthTypeFilter<"QuarterlyType"> | $Enums.MonthType
    endMonth?: EnumMonthTypeFilter<"QuarterlyType"> | $Enums.MonthType
    activityData?: ActivityDataListRelationFilter
  }, "id">

  export type QuarterlyTypeOrderByWithAggregationInput = {
    id?: SortOrder
    startMonth?: SortOrder
    endMonth?: SortOrder
    _count?: QuarterlyTypeCountOrderByAggregateInput
    _avg?: QuarterlyTypeAvgOrderByAggregateInput
    _max?: QuarterlyTypeMaxOrderByAggregateInput
    _min?: QuarterlyTypeMinOrderByAggregateInput
    _sum?: QuarterlyTypeSumOrderByAggregateInput
  }

  export type QuarterlyTypeScalarWhereWithAggregatesInput = {
    AND?: QuarterlyTypeScalarWhereWithAggregatesInput | QuarterlyTypeScalarWhereWithAggregatesInput[]
    OR?: QuarterlyTypeScalarWhereWithAggregatesInput[]
    NOT?: QuarterlyTypeScalarWhereWithAggregatesInput | QuarterlyTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuarterlyType"> | number
    startMonth?: EnumMonthTypeWithAggregatesFilter<"QuarterlyType"> | $Enums.MonthType
    endMonth?: EnumMonthTypeWithAggregatesFilter<"QuarterlyType"> | $Enums.MonthType
  }

  export type ActivityDataWhereInput = {
    AND?: ActivityDataWhereInput | ActivityDataWhereInput[]
    OR?: ActivityDataWhereInput[]
    NOT?: ActivityDataWhereInput | ActivityDataWhereInput[]
    id?: IntFilter<"ActivityData"> | number
    taskName?: StringFilter<"ActivityData"> | string
    type?: EnumActivityTypeFilter<"ActivityData"> | $Enums.ActivityType
    yearId?: IntFilter<"ActivityData"> | number
    month?: EnumMonthTypeNullableFilter<"ActivityData"> | $Enums.MonthType | null
    dueDate?: DateTimeFilter<"ActivityData"> | Date | string
    activityId?: IntFilter<"ActivityData"> | number
    quarterlyTypeId?: IntNullableFilter<"ActivityData"> | number | null
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
    quarterlyType?: XOR<QuarterlyTypeNullableScalarRelationFilter, QuarterlyTypeWhereInput> | null
  }

  export type ActivityDataOrderByWithRelationInput = {
    id?: SortOrder
    taskName?: SortOrder
    type?: SortOrder
    yearId?: SortOrder
    month?: SortOrderInput | SortOrder
    dueDate?: SortOrder
    activityId?: SortOrder
    quarterlyTypeId?: SortOrderInput | SortOrder
    year?: YearOrderByWithRelationInput
    activity?: ActivityOrderByWithRelationInput
    quarterlyType?: QuarterlyTypeOrderByWithRelationInput
  }

  export type ActivityDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityDataWhereInput | ActivityDataWhereInput[]
    OR?: ActivityDataWhereInput[]
    NOT?: ActivityDataWhereInput | ActivityDataWhereInput[]
    taskName?: StringFilter<"ActivityData"> | string
    type?: EnumActivityTypeFilter<"ActivityData"> | $Enums.ActivityType
    yearId?: IntFilter<"ActivityData"> | number
    month?: EnumMonthTypeNullableFilter<"ActivityData"> | $Enums.MonthType | null
    dueDate?: DateTimeFilter<"ActivityData"> | Date | string
    activityId?: IntFilter<"ActivityData"> | number
    quarterlyTypeId?: IntNullableFilter<"ActivityData"> | number | null
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
    quarterlyType?: XOR<QuarterlyTypeNullableScalarRelationFilter, QuarterlyTypeWhereInput> | null
  }, "id">

  export type ActivityDataOrderByWithAggregationInput = {
    id?: SortOrder
    taskName?: SortOrder
    type?: SortOrder
    yearId?: SortOrder
    month?: SortOrderInput | SortOrder
    dueDate?: SortOrder
    activityId?: SortOrder
    quarterlyTypeId?: SortOrderInput | SortOrder
    _count?: ActivityDataCountOrderByAggregateInput
    _avg?: ActivityDataAvgOrderByAggregateInput
    _max?: ActivityDataMaxOrderByAggregateInput
    _min?: ActivityDataMinOrderByAggregateInput
    _sum?: ActivityDataSumOrderByAggregateInput
  }

  export type ActivityDataScalarWhereWithAggregatesInput = {
    AND?: ActivityDataScalarWhereWithAggregatesInput | ActivityDataScalarWhereWithAggregatesInput[]
    OR?: ActivityDataScalarWhereWithAggregatesInput[]
    NOT?: ActivityDataScalarWhereWithAggregatesInput | ActivityDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityData"> | number
    taskName?: StringWithAggregatesFilter<"ActivityData"> | string
    type?: EnumActivityTypeWithAggregatesFilter<"ActivityData"> | $Enums.ActivityType
    yearId?: IntWithAggregatesFilter<"ActivityData"> | number
    month?: EnumMonthTypeNullableWithAggregatesFilter<"ActivityData"> | $Enums.MonthType | null
    dueDate?: DateTimeWithAggregatesFilter<"ActivityData"> | Date | string
    activityId?: IntWithAggregatesFilter<"ActivityData"> | number
    quarterlyTypeId?: IntNullableWithAggregatesFilter<"ActivityData"> | number | null
  }

  export type TableDataWhereInput = {
    AND?: TableDataWhereInput | TableDataWhereInput[]
    OR?: TableDataWhereInput[]
    NOT?: TableDataWhereInput | TableDataWhereInput[]
    id?: IntFilter<"TableData"> | number
    key?: StringNullableFilter<"TableData"> | string | null
    companyName?: StringNullableFilter<"TableData"> | string | null
    activityName?: StringNullableFilter<"TableData"> | string | null
    year?: IntNullableFilter<"TableData"> | number | null
    month?: EnumMonthTypeNullableFilter<"TableData"> | $Enums.MonthType | null
    selectedActivityType?: EnumActivityTypeFilter<"TableData"> | $Enums.ActivityType
    data?: StringFilter<"TableData"> | string
    user?: UserListRelationFilter
  }

  export type TableDataOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    activityName?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    month?: SortOrderInput | SortOrder
    selectedActivityType?: SortOrder
    data?: SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type TableDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TableDataWhereInput | TableDataWhereInput[]
    OR?: TableDataWhereInput[]
    NOT?: TableDataWhereInput | TableDataWhereInput[]
    key?: StringNullableFilter<"TableData"> | string | null
    companyName?: StringNullableFilter<"TableData"> | string | null
    activityName?: StringNullableFilter<"TableData"> | string | null
    year?: IntNullableFilter<"TableData"> | number | null
    month?: EnumMonthTypeNullableFilter<"TableData"> | $Enums.MonthType | null
    selectedActivityType?: EnumActivityTypeFilter<"TableData"> | $Enums.ActivityType
    data?: StringFilter<"TableData"> | string
    user?: UserListRelationFilter
  }, "id">

  export type TableDataOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    activityName?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    month?: SortOrderInput | SortOrder
    selectedActivityType?: SortOrder
    data?: SortOrder
    _count?: TableDataCountOrderByAggregateInput
    _avg?: TableDataAvgOrderByAggregateInput
    _max?: TableDataMaxOrderByAggregateInput
    _min?: TableDataMinOrderByAggregateInput
    _sum?: TableDataSumOrderByAggregateInput
  }

  export type TableDataScalarWhereWithAggregatesInput = {
    AND?: TableDataScalarWhereWithAggregatesInput | TableDataScalarWhereWithAggregatesInput[]
    OR?: TableDataScalarWhereWithAggregatesInput[]
    NOT?: TableDataScalarWhereWithAggregatesInput | TableDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TableData"> | number
    key?: StringNullableWithAggregatesFilter<"TableData"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"TableData"> | string | null
    activityName?: StringNullableWithAggregatesFilter<"TableData"> | string | null
    year?: IntNullableWithAggregatesFilter<"TableData"> | number | null
    month?: EnumMonthTypeNullableWithAggregatesFilter<"TableData"> | $Enums.MonthType | null
    selectedActivityType?: EnumActivityTypeWithAggregatesFilter<"TableData"> | $Enums.ActivityType
    data?: StringWithAggregatesFilter<"TableData"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    link?: StringNullableFilter<"User"> | string | null
    subscriptionType?: EnumSubscriptionTypeFilter<"User"> | $Enums.SubscriptionType
    lastPaymentDate?: DateTimeNullableFilter<"User"> | Date | string | null
    cancellationReason?: StringNullableFilter<"User"> | string | null
    tableDataId?: IntNullableFilter<"User"> | number | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiration?: DateTimeNullableFilter<"User"> | Date | string | null
    tableData?: XOR<TableDataNullableScalarRelationFilter, TableDataWhereInput> | null
    subscriptions?: SubscriptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    userType?: SortOrder
    link?: SortOrderInput | SortOrder
    subscriptionType?: SortOrder
    lastPaymentDate?: SortOrderInput | SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    tableDataId?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiration?: SortOrderInput | SortOrder
    tableData?: TableDataOrderByWithRelationInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    link?: StringNullableFilter<"User"> | string | null
    subscriptionType?: EnumSubscriptionTypeFilter<"User"> | $Enums.SubscriptionType
    lastPaymentDate?: DateTimeNullableFilter<"User"> | Date | string | null
    cancellationReason?: StringNullableFilter<"User"> | string | null
    tableDataId?: IntNullableFilter<"User"> | number | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiration?: DateTimeNullableFilter<"User"> | Date | string | null
    tableData?: XOR<TableDataNullableScalarRelationFilter, TableDataWhereInput> | null
    subscriptions?: SubscriptionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    userType?: SortOrder
    link?: SortOrderInput | SortOrder
    subscriptionType?: SortOrder
    lastPaymentDate?: SortOrderInput | SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    tableDataId?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiration?: SortOrderInput | SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    link?: StringNullableWithAggregatesFilter<"User"> | string | null
    subscriptionType?: EnumSubscriptionTypeWithAggregatesFilter<"User"> | $Enums.SubscriptionType
    lastPaymentDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    cancellationReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    tableDataId?: IntNullableWithAggregatesFilter<"User"> | number | null
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpiration?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: IntFilter<"Subscription"> | number
    userId?: IntFilter<"Subscription"> | number
    razorpayCustomerId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    amount?: IntFilter<"Subscription"> | number
    status?: StringFilter<"Subscription"> | string
    autoRenew?: BoolFilter<"Subscription"> | boolean
    renewalCount?: IntFilter<"Subscription"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayCustomerId?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    renewalCount?: SortOrder
    user?: UserOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: IntFilter<"Subscription"> | number
    razorpayCustomerId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    amount?: IntFilter<"Subscription"> | number
    status?: StringFilter<"Subscription"> | string
    autoRenew?: BoolFilter<"Subscription"> | boolean
    renewalCount?: IntFilter<"Subscription"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayCustomerId?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    renewalCount?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscription"> | number
    userId?: IntWithAggregatesFilter<"Subscription"> | number
    razorpayCustomerId?: StringWithAggregatesFilter<"Subscription"> | string
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    amount?: IntWithAggregatesFilter<"Subscription"> | number
    status?: StringWithAggregatesFilter<"Subscription"> | string
    autoRenew?: BoolWithAggregatesFilter<"Subscription"> | boolean
    renewalCount?: IntWithAggregatesFilter<"Subscription"> | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    subscriptionId?: IntFilter<"Payment"> | number
    amount?: IntFilter<"Payment"> | number
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    status?: StringFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    subscriptionId?: IntFilter<"Payment"> | number
    amount?: IntFilter<"Payment"> | number
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    status?: StringFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    subscriptionId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: IntWithAggregatesFilter<"Payment"> | number
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: IntFilter<"Link"> | number
    link?: StringFilter<"Link"> | string
    owner?: StringNullableFilter<"Link"> | string | null
    recievers?: JsonNullableFilter<"Link">
    data?: JsonFilter<"Link">
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    link?: SortOrder
    owner?: SortOrderInput | SortOrder
    recievers?: SortOrderInput | SortOrder
    data?: SortOrder
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    link?: string
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    owner?: StringNullableFilter<"Link"> | string | null
    recievers?: JsonNullableFilter<"Link">
    data?: JsonFilter<"Link">
  }, "id" | "link">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    link?: SortOrder
    owner?: SortOrderInput | SortOrder
    recievers?: SortOrderInput | SortOrder
    data?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _avg?: LinkAvgOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
    _sum?: LinkSumOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Link"> | number
    link?: StringWithAggregatesFilter<"Link"> | string
    owner?: StringNullableWithAggregatesFilter<"Link"> | string | null
    recievers?: JsonNullableWithAggregatesFilter<"Link">
    data?: JsonWithAggregatesFilter<"Link">
  }

  export type AdWhereInput = {
    AND?: AdWhereInput | AdWhereInput[]
    OR?: AdWhereInput[]
    NOT?: AdWhereInput | AdWhereInput[]
    id?: IntFilter<"Ad"> | number
    contentUrl?: StringFilter<"Ad"> | string
    startDate?: DateTimeFilter<"Ad"> | Date | string
    endDate?: DateTimeFilter<"Ad"> | Date | string
    createdAt?: DateTimeFilter<"Ad"> | Date | string
    updatedAt?: DateTimeFilter<"Ad"> | Date | string
  }

  export type AdOrderByWithRelationInput = {
    id?: SortOrder
    contentUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdWhereInput | AdWhereInput[]
    OR?: AdWhereInput[]
    NOT?: AdWhereInput | AdWhereInput[]
    contentUrl?: StringFilter<"Ad"> | string
    startDate?: DateTimeFilter<"Ad"> | Date | string
    endDate?: DateTimeFilter<"Ad"> | Date | string
    createdAt?: DateTimeFilter<"Ad"> | Date | string
    updatedAt?: DateTimeFilter<"Ad"> | Date | string
  }, "id">

  export type AdOrderByWithAggregationInput = {
    id?: SortOrder
    contentUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdCountOrderByAggregateInput
    _avg?: AdAvgOrderByAggregateInput
    _max?: AdMaxOrderByAggregateInput
    _min?: AdMinOrderByAggregateInput
    _sum?: AdSumOrderByAggregateInput
  }

  export type AdScalarWhereWithAggregatesInput = {
    AND?: AdScalarWhereWithAggregatesInput | AdScalarWhereWithAggregatesInput[]
    OR?: AdScalarWhereWithAggregatesInput[]
    NOT?: AdScalarWhereWithAggregatesInput | AdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ad"> | number
    contentUrl?: StringWithAggregatesFilter<"Ad"> | string
    startDate?: DateTimeWithAggregatesFilter<"Ad"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Ad"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Ad"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ad"> | Date | string
  }

  export type YearCreateInput = {
    year: number
    activityData?: ActivityDataCreateNestedManyWithoutYearInput
  }

  export type YearUncheckedCreateInput = {
    id?: number
    year: number
    activityData?: ActivityDataUncheckedCreateNestedManyWithoutYearInput
  }

  export type YearUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    activityData?: ActivityDataUpdateManyWithoutYearNestedInput
  }

  export type YearUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    activityData?: ActivityDataUncheckedUpdateManyWithoutYearNestedInput
  }

  export type YearCreateManyInput = {
    id?: number
    year: number
  }

  export type YearUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
  }

  export type YearUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityCreateInput = {
    name: string
    type: $Enums.ActivityType
    activityData?: ActivityDataCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.ActivityType
    activityData?: ActivityDataUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityData?: ActivityDataUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityData?: ActivityDataUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: number
    name: string
    type: $Enums.ActivityType
  }

  export type ActivityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
  }

  export type QuarterlyTypeCreateInput = {
    startMonth: $Enums.MonthType
    endMonth: $Enums.MonthType
    activityData?: ActivityDataCreateNestedManyWithoutQuarterlyTypeInput
  }

  export type QuarterlyTypeUncheckedCreateInput = {
    id?: number
    startMonth: $Enums.MonthType
    endMonth: $Enums.MonthType
    activityData?: ActivityDataUncheckedCreateNestedManyWithoutQuarterlyTypeInput
  }

  export type QuarterlyTypeUpdateInput = {
    startMonth?: EnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType
    endMonth?: EnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType
    activityData?: ActivityDataUpdateManyWithoutQuarterlyTypeNestedInput
  }

  export type QuarterlyTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startMonth?: EnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType
    endMonth?: EnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType
    activityData?: ActivityDataUncheckedUpdateManyWithoutQuarterlyTypeNestedInput
  }

  export type QuarterlyTypeCreateManyInput = {
    id?: number
    startMonth: $Enums.MonthType
    endMonth: $Enums.MonthType
  }

  export type QuarterlyTypeUpdateManyMutationInput = {
    startMonth?: EnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType
    endMonth?: EnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType
  }

  export type QuarterlyTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startMonth?: EnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType
    endMonth?: EnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType
  }

  export type ActivityDataCreateInput = {
    taskName: string
    type: $Enums.ActivityType
    month?: $Enums.MonthType | null
    dueDate: Date | string
    year: YearCreateNestedOneWithoutActivityDataInput
    activity: ActivityCreateNestedOneWithoutActivityDataInput
    quarterlyType?: QuarterlyTypeCreateNestedOneWithoutActivityDataInput
  }

  export type ActivityDataUncheckedCreateInput = {
    id?: number
    taskName: string
    type: $Enums.ActivityType
    yearId: number
    month?: $Enums.MonthType | null
    dueDate: Date | string
    activityId: number
    quarterlyTypeId?: number | null
  }

  export type ActivityDataUpdateInput = {
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: YearUpdateOneRequiredWithoutActivityDataNestedInput
    activity?: ActivityUpdateOneRequiredWithoutActivityDataNestedInput
    quarterlyType?: QuarterlyTypeUpdateOneWithoutActivityDataNestedInput
  }

  export type ActivityDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    yearId?: IntFieldUpdateOperationsInput | number
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activityId?: IntFieldUpdateOperationsInput | number
    quarterlyTypeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActivityDataCreateManyInput = {
    id?: number
    taskName: string
    type: $Enums.ActivityType
    yearId: number
    month?: $Enums.MonthType | null
    dueDate: Date | string
    activityId: number
    quarterlyTypeId?: number | null
  }

  export type ActivityDataUpdateManyMutationInput = {
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    yearId?: IntFieldUpdateOperationsInput | number
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activityId?: IntFieldUpdateOperationsInput | number
    quarterlyTypeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TableDataCreateInput = {
    key?: string | null
    companyName?: string | null
    activityName?: string | null
    year?: number | null
    month?: $Enums.MonthType | null
    selectedActivityType: $Enums.ActivityType
    data: string
    user?: UserCreateNestedManyWithoutTableDataInput
  }

  export type TableDataUncheckedCreateInput = {
    id?: number
    key?: string | null
    companyName?: string | null
    activityName?: string | null
    year?: number | null
    month?: $Enums.MonthType | null
    selectedActivityType: $Enums.ActivityType
    data: string
    user?: UserUncheckedCreateNestedManyWithoutTableDataInput
  }

  export type TableDataUpdateInput = {
    key?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    selectedActivityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutTableDataNestedInput
  }

  export type TableDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    selectedActivityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutTableDataNestedInput
  }

  export type TableDataCreateManyInput = {
    id?: number
    key?: string | null
    companyName?: string | null
    activityName?: string | null
    year?: number | null
    month?: $Enums.MonthType | null
    selectedActivityType: $Enums.ActivityType
    data: string
  }

  export type TableDataUpdateManyMutationInput = {
    key?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    selectedActivityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: StringFieldUpdateOperationsInput | string
  }

  export type TableDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    selectedActivityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    name?: string | null
    email: string
    password?: string | null
    userType: $Enums.UserType
    link?: string | null
    subscriptionType: $Enums.SubscriptionType
    lastPaymentDate?: Date | string | null
    cancellationReason?: string | null
    otp?: string | null
    otpExpiration?: Date | string | null
    tableData?: TableDataCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    userType: $Enums.UserType
    link?: string | null
    subscriptionType: $Enums.SubscriptionType
    lastPaymentDate?: Date | string | null
    cancellationReason?: string | null
    tableDataId?: number | null
    otp?: string | null
    otpExpiration?: Date | string | null
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tableData?: TableDataUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    tableDataId?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    userType: $Enums.UserType
    link?: string | null
    subscriptionType: $Enums.SubscriptionType
    lastPaymentDate?: Date | string | null
    cancellationReason?: string | null
    tableDataId?: number | null
    otp?: string | null
    otpExpiration?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    tableDataId?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionCreateInput = {
    razorpayCustomerId: string
    planId: string
    startDate?: Date | string
    endDate?: Date | string | null
    amount: number
    status: string
    autoRenew?: boolean
    renewalCount?: number
    user: UserCreateNestedOneWithoutSubscriptionsInput
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: number
    userId: number
    razorpayCustomerId: string
    planId: string
    startDate?: Date | string
    endDate?: Date | string | null
    amount: number
    status: string
    autoRenew?: boolean
    renewalCount?: number
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    razorpayCustomerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    razorpayCustomerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalCount?: IntFieldUpdateOperationsInput | number
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: number
    userId: number
    razorpayCustomerId: string
    planId: string
    startDate?: Date | string
    endDate?: Date | string | null
    amount: number
    status: string
    autoRenew?: boolean
    renewalCount?: number
  }

  export type SubscriptionUpdateManyMutationInput = {
    razorpayCustomerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalCount?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    razorpayCustomerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalCount?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateInput = {
    amount: number
    paymentDate?: Date | string
    status: string
    razorpayPaymentId?: string | null
    subscription: SubscriptionCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    subscriptionId: number
    amount: number
    paymentDate?: Date | string
    status: string
    razorpayPaymentId?: string | null
  }

  export type PaymentUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    subscription?: SubscriptionUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateManyInput = {
    id?: number
    subscriptionId: number
    amount: number
    paymentDate?: Date | string
    status: string
    razorpayPaymentId?: string | null
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkCreateInput = {
    link: string
    owner?: string | null
    recievers?: NullableJsonNullValueInput | InputJsonValue
    data: JsonNullValueInput | InputJsonValue
  }

  export type LinkUncheckedCreateInput = {
    id?: number
    link: string
    owner?: string | null
    recievers?: NullableJsonNullValueInput | InputJsonValue
    data: JsonNullValueInput | InputJsonValue
  }

  export type LinkUpdateInput = {
    link?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    recievers?: NullableJsonNullValueInput | InputJsonValue
    data?: JsonNullValueInput | InputJsonValue
  }

  export type LinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    recievers?: NullableJsonNullValueInput | InputJsonValue
    data?: JsonNullValueInput | InputJsonValue
  }

  export type LinkCreateManyInput = {
    id?: number
    link: string
    owner?: string | null
    recievers?: NullableJsonNullValueInput | InputJsonValue
    data: JsonNullValueInput | InputJsonValue
  }

  export type LinkUpdateManyMutationInput = {
    link?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    recievers?: NullableJsonNullValueInput | InputJsonValue
    data?: JsonNullValueInput | InputJsonValue
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    recievers?: NullableJsonNullValueInput | InputJsonValue
    data?: JsonNullValueInput | InputJsonValue
  }

  export type AdCreateInput = {
    contentUrl: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdUncheckedCreateInput = {
    id?: number
    contentUrl: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdUpdateInput = {
    contentUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contentUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdCreateManyInput = {
    id?: number
    contentUrl: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdUpdateManyMutationInput = {
    contentUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contentUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ActivityDataListRelationFilter = {
    every?: ActivityDataWhereInput
    some?: ActivityDataWhereInput
    none?: ActivityDataWhereInput
  }

  export type ActivityDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YearCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type YearAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type YearMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type YearMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type YearSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
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

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }

  export type EnumMonthTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MonthType | EnumMonthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMonthTypeFilter<$PrismaModel> | $Enums.MonthType
  }

  export type QuarterlyTypeCountOrderByAggregateInput = {
    id?: SortOrder
    startMonth?: SortOrder
    endMonth?: SortOrder
  }

  export type QuarterlyTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuarterlyTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    startMonth?: SortOrder
    endMonth?: SortOrder
  }

  export type QuarterlyTypeMinOrderByAggregateInput = {
    id?: SortOrder
    startMonth?: SortOrder
    endMonth?: SortOrder
  }

  export type QuarterlyTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumMonthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MonthType | EnumMonthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMonthTypeWithAggregatesFilter<$PrismaModel> | $Enums.MonthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMonthTypeFilter<$PrismaModel>
    _max?: NestedEnumMonthTypeFilter<$PrismaModel>
  }

  export type EnumMonthTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MonthType | EnumMonthTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMonthTypeNullableFilter<$PrismaModel> | $Enums.MonthType | null
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type YearScalarRelationFilter = {
    is?: YearWhereInput
    isNot?: YearWhereInput
  }

  export type ActivityScalarRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type QuarterlyTypeNullableScalarRelationFilter = {
    is?: QuarterlyTypeWhereInput | null
    isNot?: QuarterlyTypeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivityDataCountOrderByAggregateInput = {
    id?: SortOrder
    taskName?: SortOrder
    type?: SortOrder
    yearId?: SortOrder
    month?: SortOrder
    dueDate?: SortOrder
    activityId?: SortOrder
    quarterlyTypeId?: SortOrder
  }

  export type ActivityDataAvgOrderByAggregateInput = {
    id?: SortOrder
    yearId?: SortOrder
    activityId?: SortOrder
    quarterlyTypeId?: SortOrder
  }

  export type ActivityDataMaxOrderByAggregateInput = {
    id?: SortOrder
    taskName?: SortOrder
    type?: SortOrder
    yearId?: SortOrder
    month?: SortOrder
    dueDate?: SortOrder
    activityId?: SortOrder
    quarterlyTypeId?: SortOrder
  }

  export type ActivityDataMinOrderByAggregateInput = {
    id?: SortOrder
    taskName?: SortOrder
    type?: SortOrder
    yearId?: SortOrder
    month?: SortOrder
    dueDate?: SortOrder
    activityId?: SortOrder
    quarterlyTypeId?: SortOrder
  }

  export type ActivityDataSumOrderByAggregateInput = {
    id?: SortOrder
    yearId?: SortOrder
    activityId?: SortOrder
    quarterlyTypeId?: SortOrder
  }

  export type EnumMonthTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MonthType | EnumMonthTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMonthTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.MonthType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMonthTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumMonthTypeNullableFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableDataCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    companyName?: SortOrder
    activityName?: SortOrder
    year?: SortOrder
    month?: SortOrder
    selectedActivityType?: SortOrder
    data?: SortOrder
  }

  export type TableDataAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type TableDataMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    companyName?: SortOrder
    activityName?: SortOrder
    year?: SortOrder
    month?: SortOrder
    selectedActivityType?: SortOrder
    data?: SortOrder
  }

  export type TableDataMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    companyName?: SortOrder
    activityName?: SortOrder
    year?: SortOrder
    month?: SortOrder
    selectedActivityType?: SortOrder
    data?: SortOrder
  }

  export type TableDataSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
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

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type EnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TableDataNullableScalarRelationFilter = {
    is?: TableDataWhereInput | null
    isNot?: TableDataWhereInput | null
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    link?: SortOrder
    subscriptionType?: SortOrder
    lastPaymentDate?: SortOrder
    cancellationReason?: SortOrder
    tableDataId?: SortOrder
    otp?: SortOrder
    otpExpiration?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    tableDataId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    link?: SortOrder
    subscriptionType?: SortOrder
    lastPaymentDate?: SortOrder
    cancellationReason?: SortOrder
    tableDataId?: SortOrder
    otp?: SortOrder
    otpExpiration?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    link?: SortOrder
    subscriptionType?: SortOrder
    lastPaymentDate?: SortOrder
    cancellationReason?: SortOrder
    tableDataId?: SortOrder
    otp?: SortOrder
    otpExpiration?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    tableDataId?: SortOrder
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type EnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayCustomerId?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    renewalCount?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    renewalCount?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayCustomerId?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    renewalCount?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayCustomerId?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    renewalCount?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    renewalCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    razorpayPaymentId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    razorpayPaymentId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    razorpayPaymentId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    owner?: SortOrder
    recievers?: SortOrder
    data?: SortOrder
  }

  export type LinkAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    owner?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    owner?: SortOrder
  }

  export type LinkSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type AdCountOrderByAggregateInput = {
    id?: SortOrder
    contentUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdMaxOrderByAggregateInput = {
    id?: SortOrder
    contentUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdMinOrderByAggregateInput = {
    id?: SortOrder
    contentUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityDataCreateNestedManyWithoutYearInput = {
    create?: XOR<ActivityDataCreateWithoutYearInput, ActivityDataUncheckedCreateWithoutYearInput> | ActivityDataCreateWithoutYearInput[] | ActivityDataUncheckedCreateWithoutYearInput[]
    connectOrCreate?: ActivityDataCreateOrConnectWithoutYearInput | ActivityDataCreateOrConnectWithoutYearInput[]
    createMany?: ActivityDataCreateManyYearInputEnvelope
    connect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
  }

  export type ActivityDataUncheckedCreateNestedManyWithoutYearInput = {
    create?: XOR<ActivityDataCreateWithoutYearInput, ActivityDataUncheckedCreateWithoutYearInput> | ActivityDataCreateWithoutYearInput[] | ActivityDataUncheckedCreateWithoutYearInput[]
    connectOrCreate?: ActivityDataCreateOrConnectWithoutYearInput | ActivityDataCreateOrConnectWithoutYearInput[]
    createMany?: ActivityDataCreateManyYearInputEnvelope
    connect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ActivityDataUpdateManyWithoutYearNestedInput = {
    create?: XOR<ActivityDataCreateWithoutYearInput, ActivityDataUncheckedCreateWithoutYearInput> | ActivityDataCreateWithoutYearInput[] | ActivityDataUncheckedCreateWithoutYearInput[]
    connectOrCreate?: ActivityDataCreateOrConnectWithoutYearInput | ActivityDataCreateOrConnectWithoutYearInput[]
    upsert?: ActivityDataUpsertWithWhereUniqueWithoutYearInput | ActivityDataUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: ActivityDataCreateManyYearInputEnvelope
    set?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    disconnect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    delete?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    connect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    update?: ActivityDataUpdateWithWhereUniqueWithoutYearInput | ActivityDataUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: ActivityDataUpdateManyWithWhereWithoutYearInput | ActivityDataUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: ActivityDataScalarWhereInput | ActivityDataScalarWhereInput[]
  }

  export type ActivityDataUncheckedUpdateManyWithoutYearNestedInput = {
    create?: XOR<ActivityDataCreateWithoutYearInput, ActivityDataUncheckedCreateWithoutYearInput> | ActivityDataCreateWithoutYearInput[] | ActivityDataUncheckedCreateWithoutYearInput[]
    connectOrCreate?: ActivityDataCreateOrConnectWithoutYearInput | ActivityDataCreateOrConnectWithoutYearInput[]
    upsert?: ActivityDataUpsertWithWhereUniqueWithoutYearInput | ActivityDataUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: ActivityDataCreateManyYearInputEnvelope
    set?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    disconnect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    delete?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    connect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    update?: ActivityDataUpdateWithWhereUniqueWithoutYearInput | ActivityDataUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: ActivityDataUpdateManyWithWhereWithoutYearInput | ActivityDataUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: ActivityDataScalarWhereInput | ActivityDataScalarWhereInput[]
  }

  export type ActivityDataCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityDataCreateWithoutActivityInput, ActivityDataUncheckedCreateWithoutActivityInput> | ActivityDataCreateWithoutActivityInput[] | ActivityDataUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDataCreateOrConnectWithoutActivityInput | ActivityDataCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityDataCreateManyActivityInputEnvelope
    connect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
  }

  export type ActivityDataUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityDataCreateWithoutActivityInput, ActivityDataUncheckedCreateWithoutActivityInput> | ActivityDataCreateWithoutActivityInput[] | ActivityDataUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDataCreateOrConnectWithoutActivityInput | ActivityDataCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityDataCreateManyActivityInputEnvelope
    connect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type ActivityDataUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityDataCreateWithoutActivityInput, ActivityDataUncheckedCreateWithoutActivityInput> | ActivityDataCreateWithoutActivityInput[] | ActivityDataUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDataCreateOrConnectWithoutActivityInput | ActivityDataCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityDataUpsertWithWhereUniqueWithoutActivityInput | ActivityDataUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityDataCreateManyActivityInputEnvelope
    set?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    disconnect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    delete?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    connect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    update?: ActivityDataUpdateWithWhereUniqueWithoutActivityInput | ActivityDataUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityDataUpdateManyWithWhereWithoutActivityInput | ActivityDataUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityDataScalarWhereInput | ActivityDataScalarWhereInput[]
  }

  export type ActivityDataUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityDataCreateWithoutActivityInput, ActivityDataUncheckedCreateWithoutActivityInput> | ActivityDataCreateWithoutActivityInput[] | ActivityDataUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDataCreateOrConnectWithoutActivityInput | ActivityDataCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityDataUpsertWithWhereUniqueWithoutActivityInput | ActivityDataUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityDataCreateManyActivityInputEnvelope
    set?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    disconnect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    delete?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    connect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    update?: ActivityDataUpdateWithWhereUniqueWithoutActivityInput | ActivityDataUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityDataUpdateManyWithWhereWithoutActivityInput | ActivityDataUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityDataScalarWhereInput | ActivityDataScalarWhereInput[]
  }

  export type ActivityDataCreateNestedManyWithoutQuarterlyTypeInput = {
    create?: XOR<ActivityDataCreateWithoutQuarterlyTypeInput, ActivityDataUncheckedCreateWithoutQuarterlyTypeInput> | ActivityDataCreateWithoutQuarterlyTypeInput[] | ActivityDataUncheckedCreateWithoutQuarterlyTypeInput[]
    connectOrCreate?: ActivityDataCreateOrConnectWithoutQuarterlyTypeInput | ActivityDataCreateOrConnectWithoutQuarterlyTypeInput[]
    createMany?: ActivityDataCreateManyQuarterlyTypeInputEnvelope
    connect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
  }

  export type ActivityDataUncheckedCreateNestedManyWithoutQuarterlyTypeInput = {
    create?: XOR<ActivityDataCreateWithoutQuarterlyTypeInput, ActivityDataUncheckedCreateWithoutQuarterlyTypeInput> | ActivityDataCreateWithoutQuarterlyTypeInput[] | ActivityDataUncheckedCreateWithoutQuarterlyTypeInput[]
    connectOrCreate?: ActivityDataCreateOrConnectWithoutQuarterlyTypeInput | ActivityDataCreateOrConnectWithoutQuarterlyTypeInput[]
    createMany?: ActivityDataCreateManyQuarterlyTypeInputEnvelope
    connect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
  }

  export type EnumMonthTypeFieldUpdateOperationsInput = {
    set?: $Enums.MonthType
  }

  export type ActivityDataUpdateManyWithoutQuarterlyTypeNestedInput = {
    create?: XOR<ActivityDataCreateWithoutQuarterlyTypeInput, ActivityDataUncheckedCreateWithoutQuarterlyTypeInput> | ActivityDataCreateWithoutQuarterlyTypeInput[] | ActivityDataUncheckedCreateWithoutQuarterlyTypeInput[]
    connectOrCreate?: ActivityDataCreateOrConnectWithoutQuarterlyTypeInput | ActivityDataCreateOrConnectWithoutQuarterlyTypeInput[]
    upsert?: ActivityDataUpsertWithWhereUniqueWithoutQuarterlyTypeInput | ActivityDataUpsertWithWhereUniqueWithoutQuarterlyTypeInput[]
    createMany?: ActivityDataCreateManyQuarterlyTypeInputEnvelope
    set?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    disconnect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    delete?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    connect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    update?: ActivityDataUpdateWithWhereUniqueWithoutQuarterlyTypeInput | ActivityDataUpdateWithWhereUniqueWithoutQuarterlyTypeInput[]
    updateMany?: ActivityDataUpdateManyWithWhereWithoutQuarterlyTypeInput | ActivityDataUpdateManyWithWhereWithoutQuarterlyTypeInput[]
    deleteMany?: ActivityDataScalarWhereInput | ActivityDataScalarWhereInput[]
  }

  export type ActivityDataUncheckedUpdateManyWithoutQuarterlyTypeNestedInput = {
    create?: XOR<ActivityDataCreateWithoutQuarterlyTypeInput, ActivityDataUncheckedCreateWithoutQuarterlyTypeInput> | ActivityDataCreateWithoutQuarterlyTypeInput[] | ActivityDataUncheckedCreateWithoutQuarterlyTypeInput[]
    connectOrCreate?: ActivityDataCreateOrConnectWithoutQuarterlyTypeInput | ActivityDataCreateOrConnectWithoutQuarterlyTypeInput[]
    upsert?: ActivityDataUpsertWithWhereUniqueWithoutQuarterlyTypeInput | ActivityDataUpsertWithWhereUniqueWithoutQuarterlyTypeInput[]
    createMany?: ActivityDataCreateManyQuarterlyTypeInputEnvelope
    set?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    disconnect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    delete?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    connect?: ActivityDataWhereUniqueInput | ActivityDataWhereUniqueInput[]
    update?: ActivityDataUpdateWithWhereUniqueWithoutQuarterlyTypeInput | ActivityDataUpdateWithWhereUniqueWithoutQuarterlyTypeInput[]
    updateMany?: ActivityDataUpdateManyWithWhereWithoutQuarterlyTypeInput | ActivityDataUpdateManyWithWhereWithoutQuarterlyTypeInput[]
    deleteMany?: ActivityDataScalarWhereInput | ActivityDataScalarWhereInput[]
  }

  export type YearCreateNestedOneWithoutActivityDataInput = {
    create?: XOR<YearCreateWithoutActivityDataInput, YearUncheckedCreateWithoutActivityDataInput>
    connectOrCreate?: YearCreateOrConnectWithoutActivityDataInput
    connect?: YearWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutActivityDataInput = {
    create?: XOR<ActivityCreateWithoutActivityDataInput, ActivityUncheckedCreateWithoutActivityDataInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutActivityDataInput
    connect?: ActivityWhereUniqueInput
  }

  export type QuarterlyTypeCreateNestedOneWithoutActivityDataInput = {
    create?: XOR<QuarterlyTypeCreateWithoutActivityDataInput, QuarterlyTypeUncheckedCreateWithoutActivityDataInput>
    connectOrCreate?: QuarterlyTypeCreateOrConnectWithoutActivityDataInput
    connect?: QuarterlyTypeWhereUniqueInput
  }

  export type NullableEnumMonthTypeFieldUpdateOperationsInput = {
    set?: $Enums.MonthType | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type YearUpdateOneRequiredWithoutActivityDataNestedInput = {
    create?: XOR<YearCreateWithoutActivityDataInput, YearUncheckedCreateWithoutActivityDataInput>
    connectOrCreate?: YearCreateOrConnectWithoutActivityDataInput
    upsert?: YearUpsertWithoutActivityDataInput
    connect?: YearWhereUniqueInput
    update?: XOR<XOR<YearUpdateToOneWithWhereWithoutActivityDataInput, YearUpdateWithoutActivityDataInput>, YearUncheckedUpdateWithoutActivityDataInput>
  }

  export type ActivityUpdateOneRequiredWithoutActivityDataNestedInput = {
    create?: XOR<ActivityCreateWithoutActivityDataInput, ActivityUncheckedCreateWithoutActivityDataInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutActivityDataInput
    upsert?: ActivityUpsertWithoutActivityDataInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutActivityDataInput, ActivityUpdateWithoutActivityDataInput>, ActivityUncheckedUpdateWithoutActivityDataInput>
  }

  export type QuarterlyTypeUpdateOneWithoutActivityDataNestedInput = {
    create?: XOR<QuarterlyTypeCreateWithoutActivityDataInput, QuarterlyTypeUncheckedCreateWithoutActivityDataInput>
    connectOrCreate?: QuarterlyTypeCreateOrConnectWithoutActivityDataInput
    upsert?: QuarterlyTypeUpsertWithoutActivityDataInput
    disconnect?: QuarterlyTypeWhereInput | boolean
    delete?: QuarterlyTypeWhereInput | boolean
    connect?: QuarterlyTypeWhereUniqueInput
    update?: XOR<XOR<QuarterlyTypeUpdateToOneWithWhereWithoutActivityDataInput, QuarterlyTypeUpdateWithoutActivityDataInput>, QuarterlyTypeUncheckedUpdateWithoutActivityDataInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutTableDataInput = {
    create?: XOR<UserCreateWithoutTableDataInput, UserUncheckedCreateWithoutTableDataInput> | UserCreateWithoutTableDataInput[] | UserUncheckedCreateWithoutTableDataInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTableDataInput | UserCreateOrConnectWithoutTableDataInput[]
    createMany?: UserCreateManyTableDataInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTableDataInput = {
    create?: XOR<UserCreateWithoutTableDataInput, UserUncheckedCreateWithoutTableDataInput> | UserCreateWithoutTableDataInput[] | UserUncheckedCreateWithoutTableDataInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTableDataInput | UserCreateOrConnectWithoutTableDataInput[]
    createMany?: UserCreateManyTableDataInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateManyWithoutTableDataNestedInput = {
    create?: XOR<UserCreateWithoutTableDataInput, UserUncheckedCreateWithoutTableDataInput> | UserCreateWithoutTableDataInput[] | UserUncheckedCreateWithoutTableDataInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTableDataInput | UserCreateOrConnectWithoutTableDataInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTableDataInput | UserUpsertWithWhereUniqueWithoutTableDataInput[]
    createMany?: UserCreateManyTableDataInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTableDataInput | UserUpdateWithWhereUniqueWithoutTableDataInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTableDataInput | UserUpdateManyWithWhereWithoutTableDataInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTableDataNestedInput = {
    create?: XOR<UserCreateWithoutTableDataInput, UserUncheckedCreateWithoutTableDataInput> | UserCreateWithoutTableDataInput[] | UserUncheckedCreateWithoutTableDataInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTableDataInput | UserCreateOrConnectWithoutTableDataInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTableDataInput | UserUpsertWithWhereUniqueWithoutTableDataInput[]
    createMany?: UserCreateManyTableDataInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTableDataInput | UserUpdateWithWhereUniqueWithoutTableDataInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTableDataInput | UserUpdateManyWithWhereWithoutTableDataInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TableDataCreateNestedOneWithoutUserInput = {
    create?: XOR<TableDataCreateWithoutUserInput, TableDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: TableDataCreateOrConnectWithoutUserInput
    connect?: TableDataWhereUniqueInput
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type EnumSubscriptionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TableDataUpdateOneWithoutUserNestedInput = {
    create?: XOR<TableDataCreateWithoutUserInput, TableDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: TableDataCreateOrConnectWithoutUserInput
    upsert?: TableDataUpsertWithoutUserInput
    disconnect?: TableDataWhereInput | boolean
    delete?: TableDataWhereInput | boolean
    connect?: TableDataWhereUniqueInput
    update?: XOR<XOR<TableDataUpdateToOneWithWhereWithoutUserInput, TableDataUpdateWithoutUserInput>, TableDataUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PaymentUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SubscriptionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type SubscriptionUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    upsert?: SubscriptionUpsertWithoutPaymentsInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutPaymentsInput, SubscriptionUpdateWithoutPaymentsInput>, SubscriptionUncheckedUpdateWithoutPaymentsInput>
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

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
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

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }

  export type NestedEnumMonthTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MonthType | EnumMonthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMonthTypeFilter<$PrismaModel> | $Enums.MonthType
  }

  export type NestedEnumMonthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MonthType | EnumMonthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMonthTypeWithAggregatesFilter<$PrismaModel> | $Enums.MonthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMonthTypeFilter<$PrismaModel>
    _max?: NestedEnumMonthTypeFilter<$PrismaModel>
  }

  export type NestedEnumMonthTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MonthType | EnumMonthTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMonthTypeNullableFilter<$PrismaModel> | $Enums.MonthType | null
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

  export type NestedEnumMonthTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MonthType | EnumMonthTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MonthType[] | ListEnumMonthTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMonthTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.MonthType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMonthTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumMonthTypeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedEnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ActivityDataCreateWithoutYearInput = {
    taskName: string
    type: $Enums.ActivityType
    month?: $Enums.MonthType | null
    dueDate: Date | string
    activity: ActivityCreateNestedOneWithoutActivityDataInput
    quarterlyType?: QuarterlyTypeCreateNestedOneWithoutActivityDataInput
  }

  export type ActivityDataUncheckedCreateWithoutYearInput = {
    id?: number
    taskName: string
    type: $Enums.ActivityType
    month?: $Enums.MonthType | null
    dueDate: Date | string
    activityId: number
    quarterlyTypeId?: number | null
  }

  export type ActivityDataCreateOrConnectWithoutYearInput = {
    where: ActivityDataWhereUniqueInput
    create: XOR<ActivityDataCreateWithoutYearInput, ActivityDataUncheckedCreateWithoutYearInput>
  }

  export type ActivityDataCreateManyYearInputEnvelope = {
    data: ActivityDataCreateManyYearInput | ActivityDataCreateManyYearInput[]
    skipDuplicates?: boolean
  }

  export type ActivityDataUpsertWithWhereUniqueWithoutYearInput = {
    where: ActivityDataWhereUniqueInput
    update: XOR<ActivityDataUpdateWithoutYearInput, ActivityDataUncheckedUpdateWithoutYearInput>
    create: XOR<ActivityDataCreateWithoutYearInput, ActivityDataUncheckedCreateWithoutYearInput>
  }

  export type ActivityDataUpdateWithWhereUniqueWithoutYearInput = {
    where: ActivityDataWhereUniqueInput
    data: XOR<ActivityDataUpdateWithoutYearInput, ActivityDataUncheckedUpdateWithoutYearInput>
  }

  export type ActivityDataUpdateManyWithWhereWithoutYearInput = {
    where: ActivityDataScalarWhereInput
    data: XOR<ActivityDataUpdateManyMutationInput, ActivityDataUncheckedUpdateManyWithoutYearInput>
  }

  export type ActivityDataScalarWhereInput = {
    AND?: ActivityDataScalarWhereInput | ActivityDataScalarWhereInput[]
    OR?: ActivityDataScalarWhereInput[]
    NOT?: ActivityDataScalarWhereInput | ActivityDataScalarWhereInput[]
    id?: IntFilter<"ActivityData"> | number
    taskName?: StringFilter<"ActivityData"> | string
    type?: EnumActivityTypeFilter<"ActivityData"> | $Enums.ActivityType
    yearId?: IntFilter<"ActivityData"> | number
    month?: EnumMonthTypeNullableFilter<"ActivityData"> | $Enums.MonthType | null
    dueDate?: DateTimeFilter<"ActivityData"> | Date | string
    activityId?: IntFilter<"ActivityData"> | number
    quarterlyTypeId?: IntNullableFilter<"ActivityData"> | number | null
  }

  export type ActivityDataCreateWithoutActivityInput = {
    taskName: string
    type: $Enums.ActivityType
    month?: $Enums.MonthType | null
    dueDate: Date | string
    year: YearCreateNestedOneWithoutActivityDataInput
    quarterlyType?: QuarterlyTypeCreateNestedOneWithoutActivityDataInput
  }

  export type ActivityDataUncheckedCreateWithoutActivityInput = {
    id?: number
    taskName: string
    type: $Enums.ActivityType
    yearId: number
    month?: $Enums.MonthType | null
    dueDate: Date | string
    quarterlyTypeId?: number | null
  }

  export type ActivityDataCreateOrConnectWithoutActivityInput = {
    where: ActivityDataWhereUniqueInput
    create: XOR<ActivityDataCreateWithoutActivityInput, ActivityDataUncheckedCreateWithoutActivityInput>
  }

  export type ActivityDataCreateManyActivityInputEnvelope = {
    data: ActivityDataCreateManyActivityInput | ActivityDataCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type ActivityDataUpsertWithWhereUniqueWithoutActivityInput = {
    where: ActivityDataWhereUniqueInput
    update: XOR<ActivityDataUpdateWithoutActivityInput, ActivityDataUncheckedUpdateWithoutActivityInput>
    create: XOR<ActivityDataCreateWithoutActivityInput, ActivityDataUncheckedCreateWithoutActivityInput>
  }

  export type ActivityDataUpdateWithWhereUniqueWithoutActivityInput = {
    where: ActivityDataWhereUniqueInput
    data: XOR<ActivityDataUpdateWithoutActivityInput, ActivityDataUncheckedUpdateWithoutActivityInput>
  }

  export type ActivityDataUpdateManyWithWhereWithoutActivityInput = {
    where: ActivityDataScalarWhereInput
    data: XOR<ActivityDataUpdateManyMutationInput, ActivityDataUncheckedUpdateManyWithoutActivityInput>
  }

  export type ActivityDataCreateWithoutQuarterlyTypeInput = {
    taskName: string
    type: $Enums.ActivityType
    month?: $Enums.MonthType | null
    dueDate: Date | string
    year: YearCreateNestedOneWithoutActivityDataInput
    activity: ActivityCreateNestedOneWithoutActivityDataInput
  }

  export type ActivityDataUncheckedCreateWithoutQuarterlyTypeInput = {
    id?: number
    taskName: string
    type: $Enums.ActivityType
    yearId: number
    month?: $Enums.MonthType | null
    dueDate: Date | string
    activityId: number
  }

  export type ActivityDataCreateOrConnectWithoutQuarterlyTypeInput = {
    where: ActivityDataWhereUniqueInput
    create: XOR<ActivityDataCreateWithoutQuarterlyTypeInput, ActivityDataUncheckedCreateWithoutQuarterlyTypeInput>
  }

  export type ActivityDataCreateManyQuarterlyTypeInputEnvelope = {
    data: ActivityDataCreateManyQuarterlyTypeInput | ActivityDataCreateManyQuarterlyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ActivityDataUpsertWithWhereUniqueWithoutQuarterlyTypeInput = {
    where: ActivityDataWhereUniqueInput
    update: XOR<ActivityDataUpdateWithoutQuarterlyTypeInput, ActivityDataUncheckedUpdateWithoutQuarterlyTypeInput>
    create: XOR<ActivityDataCreateWithoutQuarterlyTypeInput, ActivityDataUncheckedCreateWithoutQuarterlyTypeInput>
  }

  export type ActivityDataUpdateWithWhereUniqueWithoutQuarterlyTypeInput = {
    where: ActivityDataWhereUniqueInput
    data: XOR<ActivityDataUpdateWithoutQuarterlyTypeInput, ActivityDataUncheckedUpdateWithoutQuarterlyTypeInput>
  }

  export type ActivityDataUpdateManyWithWhereWithoutQuarterlyTypeInput = {
    where: ActivityDataScalarWhereInput
    data: XOR<ActivityDataUpdateManyMutationInput, ActivityDataUncheckedUpdateManyWithoutQuarterlyTypeInput>
  }

  export type YearCreateWithoutActivityDataInput = {
    year: number
  }

  export type YearUncheckedCreateWithoutActivityDataInput = {
    id?: number
    year: number
  }

  export type YearCreateOrConnectWithoutActivityDataInput = {
    where: YearWhereUniqueInput
    create: XOR<YearCreateWithoutActivityDataInput, YearUncheckedCreateWithoutActivityDataInput>
  }

  export type ActivityCreateWithoutActivityDataInput = {
    name: string
    type: $Enums.ActivityType
  }

  export type ActivityUncheckedCreateWithoutActivityDataInput = {
    id?: number
    name: string
    type: $Enums.ActivityType
  }

  export type ActivityCreateOrConnectWithoutActivityDataInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutActivityDataInput, ActivityUncheckedCreateWithoutActivityDataInput>
  }

  export type QuarterlyTypeCreateWithoutActivityDataInput = {
    startMonth: $Enums.MonthType
    endMonth: $Enums.MonthType
  }

  export type QuarterlyTypeUncheckedCreateWithoutActivityDataInput = {
    id?: number
    startMonth: $Enums.MonthType
    endMonth: $Enums.MonthType
  }

  export type QuarterlyTypeCreateOrConnectWithoutActivityDataInput = {
    where: QuarterlyTypeWhereUniqueInput
    create: XOR<QuarterlyTypeCreateWithoutActivityDataInput, QuarterlyTypeUncheckedCreateWithoutActivityDataInput>
  }

  export type YearUpsertWithoutActivityDataInput = {
    update: XOR<YearUpdateWithoutActivityDataInput, YearUncheckedUpdateWithoutActivityDataInput>
    create: XOR<YearCreateWithoutActivityDataInput, YearUncheckedCreateWithoutActivityDataInput>
    where?: YearWhereInput
  }

  export type YearUpdateToOneWithWhereWithoutActivityDataInput = {
    where?: YearWhereInput
    data: XOR<YearUpdateWithoutActivityDataInput, YearUncheckedUpdateWithoutActivityDataInput>
  }

  export type YearUpdateWithoutActivityDataInput = {
    year?: IntFieldUpdateOperationsInput | number
  }

  export type YearUncheckedUpdateWithoutActivityDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityUpsertWithoutActivityDataInput = {
    update: XOR<ActivityUpdateWithoutActivityDataInput, ActivityUncheckedUpdateWithoutActivityDataInput>
    create: XOR<ActivityCreateWithoutActivityDataInput, ActivityUncheckedCreateWithoutActivityDataInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutActivityDataInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutActivityDataInput, ActivityUncheckedUpdateWithoutActivityDataInput>
  }

  export type ActivityUpdateWithoutActivityDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
  }

  export type ActivityUncheckedUpdateWithoutActivityDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
  }

  export type QuarterlyTypeUpsertWithoutActivityDataInput = {
    update: XOR<QuarterlyTypeUpdateWithoutActivityDataInput, QuarterlyTypeUncheckedUpdateWithoutActivityDataInput>
    create: XOR<QuarterlyTypeCreateWithoutActivityDataInput, QuarterlyTypeUncheckedCreateWithoutActivityDataInput>
    where?: QuarterlyTypeWhereInput
  }

  export type QuarterlyTypeUpdateToOneWithWhereWithoutActivityDataInput = {
    where?: QuarterlyTypeWhereInput
    data: XOR<QuarterlyTypeUpdateWithoutActivityDataInput, QuarterlyTypeUncheckedUpdateWithoutActivityDataInput>
  }

  export type QuarterlyTypeUpdateWithoutActivityDataInput = {
    startMonth?: EnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType
    endMonth?: EnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType
  }

  export type QuarterlyTypeUncheckedUpdateWithoutActivityDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    startMonth?: EnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType
    endMonth?: EnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType
  }

  export type UserCreateWithoutTableDataInput = {
    name?: string | null
    email: string
    password?: string | null
    userType: $Enums.UserType
    link?: string | null
    subscriptionType: $Enums.SubscriptionType
    lastPaymentDate?: Date | string | null
    cancellationReason?: string | null
    otp?: string | null
    otpExpiration?: Date | string | null
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTableDataInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    userType: $Enums.UserType
    link?: string | null
    subscriptionType: $Enums.SubscriptionType
    lastPaymentDate?: Date | string | null
    cancellationReason?: string | null
    otp?: string | null
    otpExpiration?: Date | string | null
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTableDataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTableDataInput, UserUncheckedCreateWithoutTableDataInput>
  }

  export type UserCreateManyTableDataInputEnvelope = {
    data: UserCreateManyTableDataInput | UserCreateManyTableDataInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTableDataInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTableDataInput, UserUncheckedUpdateWithoutTableDataInput>
    create: XOR<UserCreateWithoutTableDataInput, UserUncheckedCreateWithoutTableDataInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTableDataInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTableDataInput, UserUncheckedUpdateWithoutTableDataInput>
  }

  export type UserUpdateManyWithWhereWithoutTableDataInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTableDataInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    link?: StringNullableFilter<"User"> | string | null
    subscriptionType?: EnumSubscriptionTypeFilter<"User"> | $Enums.SubscriptionType
    lastPaymentDate?: DateTimeNullableFilter<"User"> | Date | string | null
    cancellationReason?: StringNullableFilter<"User"> | string | null
    tableDataId?: IntNullableFilter<"User"> | number | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiration?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type TableDataCreateWithoutUserInput = {
    key?: string | null
    companyName?: string | null
    activityName?: string | null
    year?: number | null
    month?: $Enums.MonthType | null
    selectedActivityType: $Enums.ActivityType
    data: string
  }

  export type TableDataUncheckedCreateWithoutUserInput = {
    id?: number
    key?: string | null
    companyName?: string | null
    activityName?: string | null
    year?: number | null
    month?: $Enums.MonthType | null
    selectedActivityType: $Enums.ActivityType
    data: string
  }

  export type TableDataCreateOrConnectWithoutUserInput = {
    where: TableDataWhereUniqueInput
    create: XOR<TableDataCreateWithoutUserInput, TableDataUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateWithoutUserInput = {
    razorpayCustomerId: string
    planId: string
    startDate?: Date | string
    endDate?: Date | string | null
    amount: number
    status: string
    autoRenew?: boolean
    renewalCount?: number
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: number
    razorpayCustomerId: string
    planId: string
    startDate?: Date | string
    endDate?: Date | string | null
    amount: number
    status: string
    autoRenew?: boolean
    renewalCount?: number
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TableDataUpsertWithoutUserInput = {
    update: XOR<TableDataUpdateWithoutUserInput, TableDataUncheckedUpdateWithoutUserInput>
    create: XOR<TableDataCreateWithoutUserInput, TableDataUncheckedCreateWithoutUserInput>
    where?: TableDataWhereInput
  }

  export type TableDataUpdateToOneWithWhereWithoutUserInput = {
    where?: TableDataWhereInput
    data: XOR<TableDataUpdateWithoutUserInput, TableDataUncheckedUpdateWithoutUserInput>
  }

  export type TableDataUpdateWithoutUserInput = {
    key?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    selectedActivityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: StringFieldUpdateOperationsInput | string
  }

  export type TableDataUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    activityName?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    selectedActivityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: IntFilter<"Subscription"> | number
    userId?: IntFilter<"Subscription"> | number
    razorpayCustomerId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    amount?: IntFilter<"Subscription"> | number
    status?: StringFilter<"Subscription"> | string
    autoRenew?: BoolFilter<"Subscription"> | boolean
    renewalCount?: IntFilter<"Subscription"> | number
  }

  export type UserCreateWithoutSubscriptionsInput = {
    name?: string | null
    email: string
    password?: string | null
    userType: $Enums.UserType
    link?: string | null
    subscriptionType: $Enums.SubscriptionType
    lastPaymentDate?: Date | string | null
    cancellationReason?: string | null
    otp?: string | null
    otpExpiration?: Date | string | null
    tableData?: TableDataCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    userType: $Enums.UserType
    link?: string | null
    subscriptionType: $Enums.SubscriptionType
    lastPaymentDate?: Date | string | null
    cancellationReason?: string | null
    tableDataId?: number | null
    otp?: string | null
    otpExpiration?: Date | string | null
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type PaymentCreateWithoutSubscriptionInput = {
    amount: number
    paymentDate?: Date | string
    status: string
    razorpayPaymentId?: string | null
  }

  export type PaymentUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    amount: number
    paymentDate?: Date | string
    status: string
    razorpayPaymentId?: string | null
  }

  export type PaymentCreateOrConnectWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentCreateManySubscriptionInputEnvelope = {
    data: PaymentCreateManySubscriptionInput | PaymentCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tableData?: TableDataUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    tableDataId?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentUpdateManyWithWhereWithoutSubscriptionInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    subscriptionId?: IntFilter<"Payment"> | number
    amount?: IntFilter<"Payment"> | number
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    status?: StringFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
  }

  export type SubscriptionCreateWithoutPaymentsInput = {
    razorpayCustomerId: string
    planId: string
    startDate?: Date | string
    endDate?: Date | string | null
    amount: number
    status: string
    autoRenew?: boolean
    renewalCount?: number
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutPaymentsInput = {
    id?: number
    userId: number
    razorpayCustomerId: string
    planId: string
    startDate?: Date | string
    endDate?: Date | string | null
    amount: number
    status: string
    autoRenew?: boolean
    renewalCount?: number
  }

  export type SubscriptionCreateOrConnectWithoutPaymentsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
  }

  export type SubscriptionUpsertWithoutPaymentsInput = {
    update: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionUpdateWithoutPaymentsInput = {
    razorpayCustomerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    razorpayCustomerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalCount?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityDataCreateManyYearInput = {
    id?: number
    taskName: string
    type: $Enums.ActivityType
    month?: $Enums.MonthType | null
    dueDate: Date | string
    activityId: number
    quarterlyTypeId?: number | null
  }

  export type ActivityDataUpdateWithoutYearInput = {
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutActivityDataNestedInput
    quarterlyType?: QuarterlyTypeUpdateOneWithoutActivityDataNestedInput
  }

  export type ActivityDataUncheckedUpdateWithoutYearInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activityId?: IntFieldUpdateOperationsInput | number
    quarterlyTypeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActivityDataUncheckedUpdateManyWithoutYearInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activityId?: IntFieldUpdateOperationsInput | number
    quarterlyTypeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActivityDataCreateManyActivityInput = {
    id?: number
    taskName: string
    type: $Enums.ActivityType
    yearId: number
    month?: $Enums.MonthType | null
    dueDate: Date | string
    quarterlyTypeId?: number | null
  }

  export type ActivityDataUpdateWithoutActivityInput = {
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: YearUpdateOneRequiredWithoutActivityDataNestedInput
    quarterlyType?: QuarterlyTypeUpdateOneWithoutActivityDataNestedInput
  }

  export type ActivityDataUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    yearId?: IntFieldUpdateOperationsInput | number
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quarterlyTypeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActivityDataUncheckedUpdateManyWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    yearId?: IntFieldUpdateOperationsInput | number
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quarterlyTypeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActivityDataCreateManyQuarterlyTypeInput = {
    id?: number
    taskName: string
    type: $Enums.ActivityType
    yearId: number
    month?: $Enums.MonthType | null
    dueDate: Date | string
    activityId: number
  }

  export type ActivityDataUpdateWithoutQuarterlyTypeInput = {
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: YearUpdateOneRequiredWithoutActivityDataNestedInput
    activity?: ActivityUpdateOneRequiredWithoutActivityDataNestedInput
  }

  export type ActivityDataUncheckedUpdateWithoutQuarterlyTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    yearId?: IntFieldUpdateOperationsInput | number
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityDataUncheckedUpdateManyWithoutQuarterlyTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    yearId?: IntFieldUpdateOperationsInput | number
    month?: NullableEnumMonthTypeFieldUpdateOperationsInput | $Enums.MonthType | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyTableDataInput = {
    id?: number
    name?: string | null
    email: string
    password?: string | null
    userType: $Enums.UserType
    link?: string | null
    subscriptionType: $Enums.SubscriptionType
    lastPaymentDate?: Date | string | null
    cancellationReason?: string | null
    otp?: string | null
    otpExpiration?: Date | string | null
  }

  export type UserUpdateWithoutTableDataInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTableDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTableDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionCreateManyUserInput = {
    id?: number
    razorpayCustomerId: string
    planId: string
    startDate?: Date | string
    endDate?: Date | string | null
    amount: number
    status: string
    autoRenew?: boolean
    renewalCount?: number
  }

  export type SubscriptionUpdateWithoutUserInput = {
    razorpayCustomerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalCount?: IntFieldUpdateOperationsInput | number
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    razorpayCustomerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalCount?: IntFieldUpdateOperationsInput | number
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    razorpayCustomerId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    renewalCount?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManySubscriptionInput = {
    id?: number
    amount: number
    paymentDate?: Date | string
    status: string
    razorpayPaymentId?: string | null
  }

  export type PaymentUpdateWithoutSubscriptionInput = {
    amount?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
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