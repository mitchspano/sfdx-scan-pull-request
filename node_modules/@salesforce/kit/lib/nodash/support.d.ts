/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// Support types specific to lodash constructs -- not intended for general reuse.
export type NotVoid = {} | null | undefined;
export type ValueIterateeCustom<T, R> = ((value: T) => R) | IterateeShorthand<T>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IterateeShorthand<T> = PropertyKey | [PropertyKey, any] | PartialDeep<T>;
export type PartialDeep<T> = { [P in keyof T]?: PartialDeep<T[P]> };
export type ObjectIterator<T, R> = (value: NonNullable<T[keyof T]>, key: string, collection: T) => R;
export type ObjectIteratee<T> = ObjectIterator<T, NotVoid> | IterateeShorthand<T[keyof T]>;
export type ListIterator<T, R> = (value: T, index: number, collection: ArrayLike<T>) => R;
export type ListIteratee<T> = ListIterator<T, NotVoid> | IterateeShorthand<T>;
export type ValueIteratee<T> = ((value: T) => NotVoid) | IterateeShorthand<T>;
export type Omit<T, K extends keyof T> = Pick<
  T,
  ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never })[keyof T]
>;
export type NumericDictionary<T> = { [key: number]: T };
