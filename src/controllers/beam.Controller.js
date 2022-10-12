const { calcftrpsrrbs, ptlim, limitingdepthna, mulimbd2 } = require('../utils/beamFunctions');
const dotenv = require('dotenv');
dotenv.config({path : '../config/config'});

// flexureTensionReinforcementPercentageSinglyReinforcedRectangularBeamSections ftrpsrrbs
const ftrpsrrbs = (req, res, next) => {
    const fck = process.env.fck.split(", ");
    const fy = process.env.fy.split(", ");
    const RLOWER = Number(process.env.RLOWER);
    const RUPPER = Number(process.env.RUPPER);
    const totalArray = [];
    for (var R100 = RLOWER; R100 <= RUPPER; R100=R100+1)
    {
        fck.map(fck=>{
            fy.map(fy=>{
                const total = calcftrpsrrbs(fck, fy, R100);
                const ldna = limitingdepthna(fy);
                const pt = ptlim(fck, fy);
                const mulim = mulimbd2(fck, fy);                
                totalArray.push({R100: (R100/100).toFixed(2),
                    fck: fck,
                    fy : fy,
                    total : total,
                    ldna : ldna.toFixed(3),
                    pt: pt.toFixed(3),
                    mulim: mulim.toFixed(3)
                  });
            });
        });

    };

    res.status(200).json({
        message : 'Tension Reinforcement Percentage for Singly Reinforced Rectangular Beam Sections in Flexure',
        value: totalArray
    });
};  
  
module.exports = {ftrpsrrbs};