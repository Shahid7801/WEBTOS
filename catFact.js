let btn = document.querySelector("button");             //button selec
let url = "https://catfact.ninja/fact";                 //api link

btn.addEventListener("click", async () => {             // add action
        let fact = await getFacts();
        console.log(fact);
        let p = document.querySelector("#result");
        p.innerHTML = fact;
      
});
async function getFacts() {
        try {
                let res = await axios.get(url);
                return res.data.fact;
                // console.log(res.data.fact);
        }
        catch (e) {
                console.log("error -", e);
                return "no fact found";
        }
};