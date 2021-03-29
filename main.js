async function getChinese(length) {
    let res = [];
    for (let i = 0; i < length; i++) {


        const promise = new Promise((resolve) => {
            setTimeout(() => {
                let date = 0;

                date = Date.now().toString();
                date = +date.split('').splice(-5).join('')

                const chr = String.fromCharCode(date)
                resolve(chr)


            }, 50);

        });
        await promise.then((chr) => res += chr)
    }
    console.log(res);
}

getChinese(5)