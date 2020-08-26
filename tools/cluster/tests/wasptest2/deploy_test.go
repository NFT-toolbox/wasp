package wasptest2

import (
	"github.com/iotaledger/goshimmer/dapps/valuetransfers/packages/balance"
	waspapi "github.com/iotaledger/wasp/packages/apilib"
	"github.com/iotaledger/wasp/packages/hashing"
	"github.com/iotaledger/wasp/packages/kv"
	"github.com/iotaledger/wasp/packages/testutil"
	_ "github.com/iotaledger/wasp/packages/vm/examples"
	"github.com/iotaledger/wasp/packages/vm/examples/inccounter"
	"github.com/iotaledger/wasp/packages/vm/examples/tokenregistry"
	"github.com/iotaledger/wasp/packages/vm/vmconst"
	"github.com/iotaledger/wasp/tools/cluster/tests/wasptest"
	"github.com/mr-tron/base58"
	"math/rand"
	"os"
	"testing"
	"time"
)

func TestDeploySC(t *testing.T) {
	var seed [32]byte
	rand.Read(seed[:])
	seed58 := base58.Encode(seed[:])
	wallet1 := testutil.NewWallet(seed58)
	scOwner = wallet1.WithIndex(0)

	// setup
	wasps := setup(t, "test_cluster2", "TestDeploySC")

	err := wasps.ListenToMessages(map[string]int{
		"bootuprec":           1,
		"active_committee":    1,
		"dismissed_committee": 0,
		"request_in":          1,
		"request_out":         2,
		"state":               -1,
		"vmmsg":               -1,
	})
	check(err, t)

	programHash, err := hashing.HashValueFromBase58(tokenregistry.ProgramHash)
	check(err, t)

	scOwnerAddr := scOwner.Address()
	err = wasps.NodeClient.RequestFunds(&scOwnerAddr)
	check(err, t)

	if !wasps.VerifyAddressBalances(scOwnerAddr, testutil.RequestFundsAmount, map[balance.Color]int64{
		balance.ColorIOTA: testutil.RequestFundsAmount,
	}, "sc owner in the beginning") {
		t.Fail()
		return
	}

	scAddr, scColor, err := waspapi.CreateAndDeploySC(waspapi.CreateAndDeploySCParams{
		Node:                    wasps.NodeClient,
		CommitteeApiHosts:       wasps.ApiHosts(),
		CommitteePeeringHosts:   wasps.PeeringHosts(),
		N:                       4,
		T:                       3,
		OwnerSigScheme:          scOwner.SigScheme(),
		ProgramHash:             programHash,
		Textout:                 os.Stdout,
		Prefix:                  "[deploy] ",
		WaitForInitialization:   true,
		CommitteePublisherHosts: wasps.PublisherHosts(),
		Timeout:                 20 * time.Second,
	})
	check(err, t)

	wasps.WaitUntilExpectationsMet()
	//wasps.CollectMessages(60 * time.Second)
	//if !wasps.Report() {
	//	t.Fail()
	//}

	if !wasps.VerifyAddressBalances(scOwnerAddr, testutil.RequestFundsAmount-1, map[balance.Color]int64{
		balance.ColorIOTA: testutil.RequestFundsAmount - 1,
	}, "sc owner in the end") {
		t.Fail()
		return
	}

	if !wasps.VerifyAddressBalances(*scAddr, 1, map[balance.Color]int64{
		*scColor: 1,
	}, "sc in the end") {
		t.Fail()
		return
	}

	ph, err := hashing.HashValueFromBase58(tokenregistry.ProgramHash)
	check(err, t)

	if !wasps.VerifySCStateVariables2(scAddr, map[kv.Key]interface{}{
		vmconst.VarNameOwnerAddress: scOwnerAddr[:],
		vmconst.VarNameProgramHash:  ph[:],
	}) {
		t.Fail()
	}
}

const numRequests = 5

func TestSend5ReqInc0SecDeploy(t *testing.T) {
	var seed [32]byte
	rand.Read(seed[:])
	seed58 := base58.Encode(seed[:])
	wallet1 := testutil.NewWallet(seed58)
	scOwner = wallet1.WithIndex(0)

	// setup
	wasps := setup(t, "test_cluster2", "TestSend5ReqInc0SecDeploy")

	err := wasps.ListenToMessages(map[string]int{
		"bootuprec":           1,
		"active_committee":    1,
		"dismissed_committee": 0,
		"request_in":          1 + numRequests,
		"request_out":         2 + numRequests,
		"state":               -1,
		"vmmsg":               -1,
	})
	check(err, t)

	programHash, err := hashing.HashValueFromBase58(inccounter.ProgramHash)
	check(err, t)

	scOwnerAddr := scOwner.Address()
	err = wasps.NodeClient.RequestFunds(&scOwnerAddr)
	check(err, t)

	if !wasps.VerifyAddressBalances(scOwnerAddr, testutil.RequestFundsAmount, map[balance.Color]int64{
		balance.ColorIOTA: testutil.RequestFundsAmount,
	}, "sc owner in the beginning") {
		t.Fail()
		return
	}

	t.Logf("peering hosts: %+v", wasps.PeeringHosts())
	scAddr, scColor, err := waspapi.CreateAndDeploySC(waspapi.CreateAndDeploySCParams{
		Node:                  wasps.NodeClient,
		CommitteeApiHosts:     wasps.ApiHosts(),
		CommitteePeeringHosts: wasps.PeeringHosts(),
		N:                     4,
		T:                     3,
		OwnerSigScheme:        scOwner.SigScheme(),
		ProgramHash:           programHash,
		Textout:               os.Stdout,
		Prefix:                "[deploy] ",
	})
	check(err, t)

	for i := 0; i < numRequests; i++ {
		err = wasptest.SendSimpleRequest(wasps, scOwner.SigScheme(), waspapi.CreateSimpleRequestParams{
			SCAddress:   scAddr,
			RequestCode: inccounter.RequestInc,
		})
		check(err, t)
	}

	//wasps.WaitUntilExpectationsMet()
	wasps.CollectMessages(20 * time.Second)
	if !wasps.Report() {
		t.Fail()
	}

	if !wasps.VerifyAddressBalances(scOwnerAddr, testutil.RequestFundsAmount-1, map[balance.Color]int64{
		balance.ColorIOTA: testutil.RequestFundsAmount - 1,
	}, "sc owner in the end") {
		t.Fail()
		return
	}

	if !wasps.VerifyAddressBalances(*scAddr, 1, map[balance.Color]int64{
		*scColor: 1,
	}, "sc in the end") {
		t.Fail()
		return
	}

	if !wasps.VerifySCStateVariables2(scAddr, map[kv.Key]interface{}{
		vmconst.VarNameOwnerAddress: scOwnerAddr[:],
		vmconst.VarNameProgramHash:  programHash[:],
	}) {
		t.Fail()
	}
}

const numRequestsInTheBlock = 100

func TestSend100ReqMulti(t *testing.T) {
	var seed [32]byte
	rand.Read(seed[:])
	seed58 := base58.Encode(seed[:])
	wallet1 := testutil.NewWallet(seed58)
	scOwner = wallet1.WithIndex(0)

	// setup
	wasps := setup(t, "test_cluster2", "TestSend5ReqInc0SecDeploy")

	err := wasps.ListenToMessages(map[string]int{
		"bootuprec":           1,
		"active_committee":    1,
		"dismissed_committee": 0,
		"request_in":          1 + numRequestsInTheBlock,
		"request_out":         2 + numRequestsInTheBlock,
		"state":               -1,
		"vmmsg":               -1,
	})
	check(err, t)

	programHash, err := hashing.HashValueFromBase58(inccounter.ProgramHash)
	check(err, t)

	scOwnerAddr := scOwner.Address()
	err = wasps.NodeClient.RequestFunds(&scOwnerAddr)
	check(err, t)

	if !wasps.VerifyAddressBalances(scOwnerAddr, testutil.RequestFundsAmount, map[balance.Color]int64{
		balance.ColorIOTA: testutil.RequestFundsAmount,
	}, "sc owner in the beginning") {
		t.Fail()
		return
	}

	t.Logf("peering hosts: %+v", wasps.PeeringHosts())
	scAddr, scColor, err := waspapi.CreateAndDeploySC(waspapi.CreateAndDeploySCParams{
		Node:                  wasps.NodeClient,
		CommitteeApiHosts:     wasps.ApiHosts(),
		CommitteePeeringHosts: wasps.PeeringHosts(),
		N:                     4,
		T:                     3,
		OwnerSigScheme:        scOwner.SigScheme(),
		ProgramHash:           programHash,
		Textout:               os.Stdout,
		Prefix:                "[deploy] ",
	})
	check(err, t)

	pars := make([]waspapi.CreateSimpleRequestParams, numRequestsInTheBlock)
	for i := 0; i < numRequestsInTheBlock; i++ {
		pars[i] = waspapi.CreateSimpleRequestParams{
			SCAddress:   scAddr,
			RequestCode: inccounter.RequestInc,
		}
	}
	err = wasptest.SendSimpleRequestMulti(wasps, scOwner.SigScheme(), pars)
	check(err, t)

	//wasps.WaitUntilExpectationsMet()
	wasps.CollectMessages(20 * time.Second)
	if !wasps.Report() {
		t.Fail()
	}

	if !wasps.VerifyAddressBalances(scOwnerAddr, testutil.RequestFundsAmount-1, map[balance.Color]int64{
		balance.ColorIOTA: testutil.RequestFundsAmount - 1,
	}, "sc owner in the end") {
		t.Fail()
		return
	}

	if !wasps.VerifyAddressBalances(*scAddr, 1, map[balance.Color]int64{
		*scColor: 1,
	}, "sc in the end") {
		t.Fail()
		return
	}

	if !wasps.VerifySCStateVariables2(scAddr, map[kv.Key]interface{}{
		vmconst.VarNameOwnerAddress: scOwnerAddr[:],
		vmconst.VarNameProgramHash:  programHash[:],
	}) {
		t.Fail()
	}
}