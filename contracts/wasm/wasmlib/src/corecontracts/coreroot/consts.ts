// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "../wasmlib"

export const ScName        = "root";
export const ScDescription = "Core root contract";
export const HScName       = new wasmlib.ScHname(0xcebf5908);

export const ParamDeployer    = "dp";
export const ParamDescription = "ds";
export const ParamHname       = "hn";
export const ParamName        = "nm";
export const ParamProgramHash = "ph";

export const ResultContractFound    = "cf";
export const ResultContractRecData  = "dt";
export const ResultContractRegistry = "r";

export const FuncDeployContract         = "deployContract";
export const FuncGrantDeployPermission  = "grantDeployPermission";
export const FuncRevokeDeployPermission = "revokeDeployPermission";
export const ViewFindContract           = "findContract";
export const ViewGetContractRecords     = "getContractRecords";

export const HFuncDeployContract         = new wasmlib.ScHname(0x28232c27);
export const HFuncGrantDeployPermission  = new wasmlib.ScHname(0xf440263a);
export const HFuncRevokeDeployPermission = new wasmlib.ScHname(0x850744f1);
export const HViewFindContract           = new wasmlib.ScHname(0xc145ca00);
export const HViewGetContractRecords     = new wasmlib.ScHname(0x078b3ef3);
