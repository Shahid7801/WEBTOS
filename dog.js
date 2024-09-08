let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
        let link = await getImage();
        // console.log(fact);
        let img = document.querySelector("#result");
        img.setAttribute("src",link);
        img.innerHTML = fact;
        // console.log("click me");
});

// console.log(url);

async function getImage() {
        try {
                let res = await axios.get(url);
                return res.data.message;
                // console.log(res.data.fact);
        }
        catch (e) {
                console.log("error -", e);
                return "no fact found";
        }
};