
// Первый промис

const callbackPromise = (resolve, reject) => {
  // функция executor для нашего Промиса
  const resultOK = "супер секретные данные об успешной операции";
  const resultBad = "супер секретные данные о провале";

  const sum = factorial(1000);

  resolve(sum);

  // setTimeout(() => {
  //   console.log("Промис собирается 'разрешиться' (перейти в состояние resolve)");
  //
  //   resolve(resultOK);
  // }, 2000);

}

const mySuperPromise = new Promise(callbackPromise);
console.log("My first promise: ", mySuperPromise);



//////////


const myPromise2 = new Promise((resolve, reject) => {
  // функция executor для нашего Промиса
  const resultOK = "супер секретные данные об успешной операции";
  const resultBad = "супер секретные данные о провале";

  const resFromServer = true;
  /// все пошло не так как надо, значит надо выполнить reject

  if(resFromServer) {

    resolve(resultOK);

  } else {

    reject(resultBad);

  }

});

  myPromise2.then((data) => {

    console.log("myPromise2:: Промис успешно разрезолвился")
    console.log("Выполняется метод resolve(), полученые данные из промиса (из функции executor): ", data);

  }).catch((err) => {

    console.log("myPromise2:: Промис разрезолвился ОТРИЦАТЕЛЬНО")
    console.log("Выполняется метод reject(), полученые данные об ошибке из промиса (из функции executor): ", err);

  });

  function factorial (n) {

    let res = BigInt(n);

    for(let i = n - 1; i > 0; i--) {
      res *= BigInt(i);
    }

    return res;
  }

console.log(factorial(4));




//////////////////// PROMISE - FINALLY

const myPromiseFinally = new Promise((resolve, reject) => {
  // функция executor для нашего Промиса

  const resultOK = "супер секретные данные об успешной операции";
  const resultBad = "супер секретные данные о провале";

  const resFromServer = false;
  /// все пошло не так как надо, значит надо выполнить reject

  if(resFromServer) {

    resolve(resultOK);

  } else {

    reject(resultBad);

  }

});


myPromiseFinally.then((data) => {

  console.log("myPromiseFinally:: Промис успешно разрезолвился")
  console.log("Выполняется метод resolve(), полученые данные из промиса (из функции executor): ", data);

}).catch((err) => {

  console.log("myPromiseFinally:: Промис разрезолвился ОТРИЦАТЕЛЬНО")
  console.log("Выполняется метод reject(), полученые данные об ошибке из промиса (из функции executor): ", err);

}).finally(() => {
  console.log("Промис разрезолвился окончательно, тут происходят действия по \"зачистке кода (убираем setTimeout или removeEventListener)\"");
});


////////// Chaining - цепочка промисов

const chainingPromisses = new Promise((res, rej) => {
  // res("Sucess");
  rej("Fail");
});


chainingPromisses.then((data) => {
  console.log("chainingPromisses:: Промис разрезолвился: успех, шаг 1", data);

  return `посылка из 1го шага: ${ data }`;
}).then((data) => {
  console.log("chainingPromisses:: Промис разрезолвился: успех, шаг 2", data);

  return `посылка из 2го шага: ${ data }`;
  // return new Promise(() => {.....}) - можно вернуть новый промис в качестве результата операции
}).then((data) => {
  console.log("chainingPromisses:: Промис разрезолвился: успех, шаг 3", data);

  return `посылка из 3го шага: ${ data }`;
}).then((data) => {
  console.log("chainingPromisses:: Промис разрезолвился: успех, шаг 4", data);

  return `посылка из 4го шага: ${ data }`;
}).catch((err) => {
  console.log("chainingPromisses:: Промис разрезолвился: провал", err);
  return 'ошибка из catch'
}).then((data) => {
  console.log("chainingPromisses:: шаг после CATCH", data);

  return `посылка из 4го шага: ${ data }`;
})


const fetchResult = fetch(`https://api.tvmaze.com/search/shows?q=batman`);

console.log("Fetching Batman data:: ", fetchResult);

fetchResult.then((data) => {
  console.log("Fetching Batman, server response: ", data);

  const res = data.json();
  console.log("Checking format from json method::", res)

  return res;

}).then((jsonData) => {
  console.log("Fetching Batman, response converted to JSON: ", jsonData);

}).catch((err) => {
  console.log("Fetching Batman, произошла ошибка: ", err);
});

/////////////////////// Промисификация - оборачивание какого-то отложенного действия в промис


const loadImage = ( url ) => {
  return new Promise( (resolve, reject) => {
    const img = new Image( );

    const resultData = {
      url,
      img,
      status: 'success',
    };

    img.onload = () => {
      return resolve( resultData );
    }

    img.onerror = () => {
      resultData.status = 'error';
      return reject(resultData);
    }

    img.src = url; });
}

function loadAndAppendImage(url, parent, { width = '300px', height = null } = {} ) {
  const img1 = loadImage(url); //
  img1.then((data) => {

    const { img } = data;

    console.log("loadImage, успех: ", data);

    img.style.width = width;
    if (height) {
      img.style.height = height;
    }

    parent.appendChild(img);

  }).catch((data) => {

    console.log("loadImage, провал: ", data);

  });
}

loadAndAppendImage('/img/humster.png', document.querySelector('body'));


async function loadAndAppendImageAsync(url, parent, { width = '300px', height = null } = {} ) {
  let img1 = null;

  try {
    img1 = await loadImage(url); //
  } catch (e) {
    console.log("loadImage, ошибка загрузки картинки: ", url);
    return null;
  }

    const { img } = img1;
    console.log("loadImage, успех: ", img1);

    img.style.width = width;
    if (height) {
      img.style.height = height;
    }
    parent.appendChild(img);

}

loadAndAppendImageAsync('/img/humster1.png', document.querySelector('body'));

console.log("Тест: окончание кода");

////////////////// Promise.all - статический метод для промисов
// all() - метод, который принимает в качестве параметра массив из других промисов
// Promise.all - работает до "первой ошибки" в одном из элментов-промисов (детей из массива)

Promise.all([
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log("1й готов");
      // res("результат от 1го");
      rej("провал от 1го");
    }, 1000);
  }),
  new Promise((res) => {
    setTimeout(() => {
      console.log("2й готов");
      res("результат от 2го");
    }, 5000);
  }),
  new Promise((res) => {
    setTimeout(() => {
      console.log("3й готов");
      res("результат от 3го");
    }, 8000);
  }),
]).then((data) => {
  console.log("Promise.all:: успех", data);

}).catch((err) => {
  console.log("Promise.all:: провал", err);

})

// Promise.allSettled - делает ровно тоже самое что и Promise.all, НО всегда дожидается исполнения всех детей-просмисов
// не зависимо от возникновения ошибок в одном из детей-промисов
// для Promise.allSettled не нужно указывать catch() потому что он выполняется ВСЕГДА не зависимо от ошибки.
// в качестве результата Promise.allSettled выдает объект в котором есть 2 поля
// { status: 'fulfilled', value: массив_от_всех_детей_промисов}
// { status: 'rejected', value: массив_от_всех_детей_промисов}

