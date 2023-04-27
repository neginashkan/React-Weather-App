function Search() {
    return (
    <div className="Search">
            <div className="location"><i class="fa-solid fa-location-dot"></i> Iran, Urmia</div>
        <form>
            <input className="search-input" type="text" autoComplete="off" autoFocus />
                <button className="button-input" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>)
}
export default Search;