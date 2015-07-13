// GET /quizes/quiestion

exports.question = function (req, res) {
  res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answer = function (req, res) {
  if (req.query.respuesta === 'Roma'){
    res.render('quizes/answer', {respuesta: 'Correcto'});
  }else{
    res.render('quizes/answer', {respuesta: 'Incorrecto'});
  }
};

// GET /author
exports.author = function (req, res) {
  var data = {
    name: 'Juan Diego Gonzalez Gallardo',
    picture: '/images/profile.png'
  };
  res.render('quizes/author', data);
};
