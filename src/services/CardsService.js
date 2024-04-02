import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { AppState } from "../AppState"
import { Card } from "../models/Card"

const MDI = 'v2/list?limit=15'

class CardsService{
    async getCards(){
        logger.log('get cards from service')
        const res = await api.get(MDI)
        logger.log(res)
        AppState.cards = res.data.map( c => new Card(c))
        logger.log(AppState.cards)
    }

}

export const cardsService = new CardsService()