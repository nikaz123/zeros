module.exports = function getZerosCount(number) {

    let countZero = 0;


    for (let i = 5; i <= number; i = i + 5) {

        let j = 0;
        let k = 5;
        let ii = i;
        do {
            if (ii % k === 0) // "x" - Число, которое нам требуется разложить. Должно задаваться заранее.
            {

                j++;
                ii = ii / k;
            }

        }

        while (ii % k === 0);
        countZero = countZero + j;

    }


    return (countZero);


}



