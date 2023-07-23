export abstract class DIOAccount {
    private name: string
    readonly accountNumber: number
    balance: number = 0
    status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
        this.balance++
    }

    setName = (name: string): void => {
        this.name = name
        console.log("Nome alteradoo com sucesso!")
    }

    getName = (): string => {
        return this.name
    }

    deposit = (): void => {
        if (this.validateStatus()) {
            console.log('Depositou')
        }
    }

    withdraw = (): void => {
        console.log('Sacou')
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error("Conta Inválida!");
    }
}