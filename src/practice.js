function checkDomain (url){
  console.log(url.replace(/.+\/\/|www.|\..+/g, ''));
}
checkDomain('www.sweety.com');