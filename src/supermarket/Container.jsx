export default function Container({children}){
    return(
        <div className="card">
            <h1 className="card2">Artikel Buah</h1>
            <br/>
                {children}
            <br/>
            <footer>
              <center><p>2025 - Politeknik Caltex Riau</p></center>  
            </footer>
        </div>
    )
}

