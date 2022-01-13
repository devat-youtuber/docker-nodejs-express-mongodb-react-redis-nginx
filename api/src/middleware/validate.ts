export const checkProductData = async (req, res, next) => {
  // const { title, price, description, category, image } = req.body;

  const errors = [];
  // for..in, for..of, for..each
  for(const key in req.body){
    if(!req.body[key]){
      errors.push(`Please add product ${key}.`)
    }
  }
  // Object.entries(req.body).forEach(([key, value]) => {
  //   if(!value){
  //     errors.push(`Please add product ${key}.`)
  //   }
  // })

  // for (const key of Object.keys(req.body)) {
  //   // console.log(key, req.body[key]);
  //   if(!req.body[key]){
  //     errors.push(`Please add product ${key}.`)
  //   }
  // }

  if(errors.length > 0)
    return res.status(401).json({msg: errors})

  next();
}