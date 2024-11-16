fetch("https://gist.githubusercontent.com/EssadeqBillouche/72ca6ff79f3f364c962fb11de46982ee/raw/product.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(HTTP`error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Fetched Data:", data); // Logs the entire data object
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });