export default function UserInfo() {
    //fetching data from local storage
    const UserData = JSON.parse(window.localStorage.getItem("userInfo"));
    const selectedMovies = JSON.parse(window.localStorage.getItem("selectedMovies"));
    //console.log(UserData, selectedMovies);
    return (
        <>
            <div style={{background : "skyblue", width : "200px", height : "200px"}}>
                <p>{UserData.name}</p>
                <p>{UserData.email}</p>
                <p>{UserData.username}</p>
                {/* to iterate over selected movies */}
                {selectedMovies.map((movie) => {
                    return (
                        <div key = {movie} style = {{
                            background : "white",
                            width: "fit-content",
                            marginBottom : "6px"
                        }}>
                            {movie}
                        </div>
                    );
                })}
                
            </div>
        </>
    );
}