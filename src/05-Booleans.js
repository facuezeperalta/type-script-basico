
(function () {
    var isEnable = true;
    isEnable = false;
    var isNew = false;
    console.log('is New?', isNew);
    isNew = true;
    console.log('Is new?', isNew);
    var random = Math.random();
    console.log('Random numer', random);
    isNew = random >= 0.5 ? true : false;
    console.log('Is new?', isNew);
})();
