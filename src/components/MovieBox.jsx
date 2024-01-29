export default function Box({ data, selectedMovies, setSelectedMovies }) {
    const handleClick = () => {
        // if box is already select, remove it from the array, else add it
        if (selectedMovies.includes(data.id)) {
            setSelectedMovies((prev) => prev.filter((item) => item !== data.id));
        }
        else {
            setSelectedMovies((prev) => [...prev, data.id]);
        }

    }
    return (
        <div style={{ background: data.color,
                         textAlign: "center" ,
                            //if box selected, brown color, else black
                         border : `${selectedMovies.includes(data.id) ? "4px solid brown" : "4px solid black"}`
                        }}
            onClick={handleClick}>
            <h1>{data.id}</h1>
            {data.image}
        </div>
    );
}