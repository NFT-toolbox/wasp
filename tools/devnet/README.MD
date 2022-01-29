# WASP build
 * build the wasp-cli with `make` command
 * init wallet 
```
./wasp-cli init

./wasp-cli set goshimmer.api 127.0.0.1:8080
./wasp-cli set wasp.0.api 127.0.0.1:9090
./wasp-cli set wasp.0.nanomsg 127.0.0.1:5550
./wasp-cli set wasp.0.peering 127.0.0.1:4000
```

 * trust peer
```
PUBKEY=$(./wasp-cli peering info |grep PubKey| cut -d " " -f 2)
./wasp-cli peering trust $PUBKEY 127.0.0.1:4000

./wasp-cli peering list-trusted
```
 
 * deploy chain
 ```
./wasp-cli request-funds
./wasp-cli chain deploy --committee=0 --quorum=1 --chain=mychain --description="Mychain"
./wasp-cli chain deposit IOTA:10000
./wasp-cli chain deploy-contract wasmtime inccounter "inccounter SC" ../../cluster/tests/wasm/inccounter_bg.wasm
```
 * deploy evm chain
 ```
 ./wasp-cli chain evm deploy -a mychain --alloc 0xAa400a0f3cEd8a39Ea2A2e44a10Cb635A2827449:1000000000000000000000000
 ```
 
