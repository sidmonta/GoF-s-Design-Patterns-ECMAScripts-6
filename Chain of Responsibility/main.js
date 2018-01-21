import ClientAccountManager from 'ClientAccountManager'
import SalesManager from 'SalesManager'
import Customer from 'Customer'
import Vendor from 'Vendor'

const clientAccountMgr = new ClientAccountManager()
const salesManager = new SalesManager()
const vendor = new Vendor()

vendor.setSuperiorRequestHandler(salesManager)
salesManager.setSuperiorRequestHandler(clientAccountMgr)

const customer = new Customer()
let i = 500
while (i <= 2500) {
  console.log(`Credit request for $${i}`)
  customer.requestCredit(vendor, i)
  i += 500
}
