

// Get all Jobs => /api/v1/jobs
const getJobs = (req, res, next) => {
    res.status(200).json({
        success : true,
        message : 'This route will display all jobs in future.'
    });
};

module.exports ={getJobs};