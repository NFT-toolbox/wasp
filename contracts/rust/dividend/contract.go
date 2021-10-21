// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package dividend

import "github.com/iotaledger/wasp/packages/vm/wasmlib"

type DivideCall struct {
	Func *wasmlib.ScFunc
}

type InitCall struct {
	Func   *wasmlib.ScInitFunc
	Params MutableInitParams
}

type MemberCall struct {
	Func   *wasmlib.ScFunc
	Params MutableMemberParams
}

type SetOwnerCall struct {
	Func   *wasmlib.ScFunc
	Params MutableSetOwnerParams
}

type GetFactorCall struct {
	Func    *wasmlib.ScView
	Params  MutableGetFactorParams
	Results ImmutableGetFactorResults
}

type GetOwnerCall struct {
	Func    *wasmlib.ScView
	Results ImmutableGetOwnerResults
}

type Funcs struct{}

var ScFuncs Funcs

func (sc Funcs) Divide(ctx wasmlib.ScFuncCallContext) *DivideCall {
	return &DivideCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncDivide)}
}

func (sc Funcs) Init(ctx wasmlib.ScFuncCallContext) *InitCall {
	f := &InitCall{Func: wasmlib.NewScInitFunc(ctx, HScName, HFuncInit, keyMap[:], idxMap[:])}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) Member(ctx wasmlib.ScFuncCallContext) *MemberCall {
	f := &MemberCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncMember)}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) SetOwner(ctx wasmlib.ScFuncCallContext) *SetOwnerCall {
	f := &SetOwnerCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncSetOwner)}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) GetFactor(ctx wasmlib.ScViewCallContext) *GetFactorCall {
	f := &GetFactorCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetFactor)}
	f.Func.SetPtrs(&f.Params.id, &f.Results.id)
	return f
}

func (sc Funcs) GetOwner(ctx wasmlib.ScViewCallContext) *GetOwnerCall {
	f := &GetOwnerCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetOwner)}
	f.Func.SetPtrs(nil, &f.Results.id)
	return f
}
