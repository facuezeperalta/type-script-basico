(()=>{
  let isEnable = true;
  isEnable = false;

  let isNew:boolean = false;
  console.log('is New?',isNew);
  isNew = true;
  console.log('Is new?',isNew);

  const random = Math.random();
  console.log('Random numer',random);
  isNew = random >= 0.5 ? true : false;
  console.log('Is new?',isNew);
})();
