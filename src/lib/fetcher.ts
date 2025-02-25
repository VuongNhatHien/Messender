const fetcher = (url: string) =>
    fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((res) => res.json())
        .then((result) => result.data);

export default fetcher;
