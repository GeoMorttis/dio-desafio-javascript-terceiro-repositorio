const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {            // Script utilizando 'try'...
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json ();
        return json.webpurl;        
    }   catch (e) {
        console.log(e.message);
    } 
};                                      // ...Script utilizando 'try'.

/*const getCats = async () => {         // Script utilizando 'then'...
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));
    return data.webpurl;
};*/                                    // ...Script utilizando 'then'.

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();