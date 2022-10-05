const { calcftrpsrrbs, ptlim, limitingdepthna, mulimbd2 } = require('../utils/beamFunctions');
// flexureTensionReinforcementPercentageSinglyReinforcedRectangularBeamSections ftrpsrrbs
const ftrpsrrbs = (req, res, next) => {
    const fck = [20, 25];
    const fy = [250, 415, 500];
    const totalArray = [];
    for (var R100 = 30; R100 <= 378; R100=R100+2)
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
        data: totalArray
    });
};  
  
module.exports = {ftrpsrrbs};