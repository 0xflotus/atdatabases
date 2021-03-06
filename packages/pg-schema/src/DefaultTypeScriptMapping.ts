// autognerated by getTypes test

import {DataTypeID} from '@databases/pg';

const DefaultTypeScriptMapping: {[key in DataTypeID]?: string} = {
  [DataTypeID._bool]: 'Array<boolean | nul>',
  [DataTypeID._bpchar]: 'Array<string | null>',
  [DataTypeID._bytea]: 'Array<Buffer | null>',
  [DataTypeID._cidr]: 'Array<string | null>',
  [DataTypeID._date]: 'Array<Date | null>',
  [DataTypeID._float4]: 'Array<number | null>',
  [DataTypeID._float8]: 'Array<number | null>',
  [DataTypeID._inet]: 'Array<string | null>',
  [DataTypeID._int2]: 'Array<number | null>',
  [DataTypeID._int4]: 'Array<number | null>',
  [DataTypeID._int8]: 'Array<number | null>',
  [DataTypeID._json]: 'Array<any | null>',
  [DataTypeID._jsonb]: 'Array<any | null>',
  [DataTypeID._macaddr]: 'Array<string | null>',
  [DataTypeID._money]: 'Array<string | null>',
  [DataTypeID._numeric]: 'Array<number | null>',
  [DataTypeID._numrange]: 'Array<string | null>',
  [DataTypeID._oid]: 'Array<number | null>',
  [DataTypeID._point]: 'Array<{x: number, y: number} | null>',
  [DataTypeID._regproc]: 'Array<string | null>',
  [DataTypeID._text]: 'Array<string | null>',
  [DataTypeID._time]: 'Array<string | null>',
  [DataTypeID._timestamp]: 'Array<Date | null>',
  [DataTypeID._timestamptz]: 'Array<Date | null>',
  [DataTypeID._timetz]: 'Array<string | null>',
  [DataTypeID._uuid]: 'Array<string | null>',
  [DataTypeID._varchar]: 'Array<string | null>',
  [DataTypeID.bool]: 'boolean',
  [DataTypeID.bytea]: 'Buffer',
  [DataTypeID.circle]: '{x: number, y: number, radius: number}',
  [DataTypeID.date]: 'Date',
  [DataTypeID.float4]: 'number',
  [DataTypeID.float8]: 'number',
  [DataTypeID.int2]: 'number',
  [DataTypeID.int4]: 'number',
  [DataTypeID.int8]: 'number',
  [DataTypeID.interval]: '{years: number,months: number,days: number,hours: number,minutes: number,seconds: number,milliseconds: number, toPostgres: () => string, toISO: () => string}',
  [DataTypeID.json]: 'any',
  [DataTypeID.jsonb]: 'any',
  [DataTypeID.oid]: 'number',
  [DataTypeID.point]: '{x: number, y: number}',
  [DataTypeID.timestamp]: 'Date',
  [DataTypeID.timestamptz]: 'Date',
};

export default DefaultTypeScriptMapping;