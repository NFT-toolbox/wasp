// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib"
import * as sc from "./index";

export const IdxResultTimestamp = 0;
export const IdxStateTimestamp  = 1;

export let keyMap: string[] = [
    sc.ResultTimestamp,
    sc.StateTimestamp,
];

export let idxMap: wasmlib.Key32[] = new Array(keyMap.length);