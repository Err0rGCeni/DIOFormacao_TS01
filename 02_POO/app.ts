import { AccountPF } from './class/AccPF'
import { AccountPJ } from './class/AccPJ'

const user01: AccountPF = new AccountPF(1, 'José', 1)
const user02: AccountPF = new AccountPF(2, 'Maria', 2)
const user03: AccountPF = new AccountPF(3, 'João', 3)

console.log(user01, user02, user03)

user02.getBalance()

const inc01: AccountPJ = new AccountPJ('DIO', 20)

user01.deposit()
inc01.deposit()

user01.setName('Gnomius')

user02.deposit()
