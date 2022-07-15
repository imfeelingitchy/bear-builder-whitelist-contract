'reach 0.1'
'use strict'

export const main = Reach.App(() => {
  setOptions({untrustworthyMaps: true})

  const Admin = Participant('Admin', {
    ready: Fun([], Null),
    tokenID: Token,
    tokenQuantity: UInt, // how much each whitelisted address will get
    howManyWhitelisted: UInt // as per spec, this will be 5
  })
  const UserAPI = API('UserAPI', {
    submit: Fun([], Null),
    claim: Fun([], Null)
  })
  const AdminAPI = API('AdminAPI', {
    disburse: Fun([], Null)
  })
  const vMain = View({stage: UInt})

  init()

  Admin.only(() => {
    const [tokenID, tokenQuantity, howManyWhitelisted] = declassify([interact.tokenID, interact.tokenQuantity, interact.howManyWhitelisted])
  })
  Admin.publish(tokenID, tokenQuantity, howManyWhitelisted)
  commit()
  Admin.pay([[tokenQuantity * howManyWhitelisted, tokenID]])
  Admin.interact.ready()
  vMain.stage.set(0)

  const addresses = new Set()

  var whitelistsMade = 0
  invariant(balance(tokenID) == howManyWhitelisted * tokenQuantity && balance() == 0)
  while (whitelistsMade < howManyWhitelisted) {
    commit()

    const [[], k] = call(UserAPI.submit)
    .check(() => {check(!addresses.member(this))})
    k(null)

    addresses.insert(this)
    whitelistsMade = whitelistsMade + 1
    continue
  }

  vMain.stage.set(1)
  commit()

  const [[], k_] = call(AdminAPI.disburse)
  .check(() => {check(this == Admin)})
  k_(null)

  var payoutsLeft = howManyWhitelisted
  invariant(balance(tokenID) == payoutsLeft * tokenQuantity && balance() == 0)
  while (payoutsLeft > 0) {
    commit()

    const [[], k] = call(UserAPI.claim)
    .check(() => {check(addresses.member(this))})
    k(null)

    addresses.remove(this)
    transfer(tokenQuantity, tokenID).to(this)
    payoutsLeft = payoutsLeft - 1
    continue
  }

  transfer(balance(tokenID), tokenID).to(Admin)
  commit()
  exit()
});
