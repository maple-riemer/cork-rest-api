import { getAssets, getAsset, deleteAsset, addAsset } from './cyber_model'

export const getDBAsset = (req, res) => {
    try {
        let resp = getAsset(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const listDBAssets = (req, res) => {
    try {
        const resp = getAssets()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteDBAsset = (req, res) => {
    try {
        deleteAsset(parseInt(req.params.id))
        res.status(200)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addDBAsset = (req, res) => {
    try {
        addAsset(parseInt(req.params.id))
        res.status(200)

    } catch (err) {
        res.status(500).send(err)
    }
}