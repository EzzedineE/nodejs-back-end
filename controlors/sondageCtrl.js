const Sondage = require('../modeles/sondageModele')

exports.createSondages = (req, res, next) => {
    delete req.body._id;
    const sondage = new Sondage({
        ...req.body
    });
    sondage.save()
        .then((result) => res.status(201).json(result))
        .catch(error => res.status(400).json({ error }));
}
exports.getSondages = (req, res, next) => {
    Sondage.find()
        .then(sondages => res.status(200).json(sondages))
        .catch(error => res.status(400).json({ error }));
}
exports.voter = async (req, res, next) => {
    try {
        if (req.body.choix === true) {

            sondageRes = await Sondage.findByIdAndUpdate(req.params.ids, { $inc: { oui: 1 } }, {
                new: true
            }
            ).exec();
            res.status(200).json(sondageRes)
        } else {
            sondageRes = await Sondage.findByIdAndUpdate(req.params.ids, { $inc: { non: 1 } }, {
                new: true
            }
            ).exec();
            res.status(200).json(sondageRes)

        }
    } catch (error) {
        res.status(500).json(error)
    }


}
