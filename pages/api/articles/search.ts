import { NextApiRequest, NextApiResponse } from 'next'
import { articles_search } from '../../../util/sample-data'

export default function search(_req: NextApiRequest, res: NextApiResponse) {
    try {
        if(_req.method == 'POST'){
            res.status(200).json(articles_search)
        }
    } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
    }
}
