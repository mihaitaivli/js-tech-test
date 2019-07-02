export interface IEvent {
    "eventId": number
    "name": string
    "displayOrder": number
    "sort": string
    "linkedEventId": number
    "classId": number
    "className": string
    "typeId": number
    "typeName": string
    "linkedEventTypeId": number
    "linkedEventTypeName": string
    "startTime": string
    "scores": {
        "home": number
        "away": number
    }
    "competitors": {
        "name": string
        "position": string
    }[]
    "status": {
        "active": boolean
        "started": boolean
        "live": boolean
        "resulted": boolean
        "finished": boolean
        "cashoutable": boolean
        "displayable": boolean
        "suspended": boolean
        "requestabet": false
    },
    "boostCount": number
    "superBoostCount": number
    "markets": number[]
}