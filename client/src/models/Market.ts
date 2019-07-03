export interface IMarket {
    marketId: number
    eventId: number
    name: string
    displayOrder: number
    type: string
    status: {
        active: boolean
        resulted: boolean
        cashoutable: boolean
        displayable: boolean
        suspended: boolean
        noExtraTime: boolean
        live: boolean
    }
    liabilities: {
        livePriceLimit: number
    }
    spAvail: false
    outcomes: number[]
}