var promise = require('bluebird');

var options ={

    // Initialization options

    promiseLib: promise
};

var postgre= require ('pg-promise')(options);
// i changed to sever 
var conString ='postgres://oobiqyssqllgww:39ba48245f964cc96f988decbcfbac8870d364fd6e8871deb96c8ee2ad277fc2@ec2-184-73-247-240.compute-1.amazonaws.com:5432/df77foabj62uo8';
var db = postgre(conString);


//query functions 

module.exports={
    getAllStudents:getAllStudents,
    getSingleStudent:getSingleStudent,
    createStudents:createStudents,
    updateStudents:updateStudents,
    delStudents:delStudents,
   
};

function getAllStudents(req, res, next){
    db.any('select * from studentresource')
        .then(function(data){
            res.status(200)
                .json(data);
        })
        .catch(function(err){
            return next(err);
        });
}

function getSingleStudent(req, res, next){
    var studId = parseInt(req.params.id);
    db.one('select * from studentresource where id = $1', studId)
        .then(function(data){
            res.status(200)
                .json(data);
        })
        .catch(function(err){
            return next(err);
        });
}



function createStudents(req, res, next) {
    db.none('insert into studentresource(firstname, gender, nameofschl, dateofbirth, middlename, lastname, address, stateorigin, email, department, faculty, level, cgpa, phonenum)' +
        'values(${firstname}, ${gender}, ${nameofschl}, ${dateofbirth}, ${middlename}, ${lastname}, ${address}, ${stateorigin}, ${email}, ${department}, ${faculty}, ${level}, ${cgpa}, ${phonenum})', req.body)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Inserted one Student'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }
  function updateStudents(req, res, next){
      db.none('update studentresource set firstname=$1, gender=$2, nameofschl=$3, dateofbirth=$4, middlename=$5, lastname=$6, address=$7, stateorigin=$8, email=$9, department=$10, faculty=$11, level=$12, cgpa=$13, phonenum=$14 where id=$15',
      [
      req.body.firstname, req.body.gender, req.body.nameofschl, 
      req.body.dateofbirth, req.body.middlename, req.body.lastname, 
      req.body.address, req.body.stateorigin, req.body.email, req.body.department, 
      req.body.faculty, parseInt(req.body.level), req.body.cgpa, 
      req.body.phonenum, parseInt(req.params.id)
        ])
        .then (function(){
            res.status(200)
                .json({
                    status:'success',
                    message:'Updated Successfully'
                })
        })
        .catch(function(err){
            return next (err);
        })
      
  }
  function delStudents(req, res, next){
    var studId = parseInt(req.params.id);
    db.result('Delete from studentresource where id = $1', studId)
        .then(function(result){
            res.status(200)
                .json({
                    status: 'Success',
                    message: `Student Deleted ${result.rowCount} Succesfully`
                   
                });
        })
        .catch(function(err){
            return next(err);
        });
}