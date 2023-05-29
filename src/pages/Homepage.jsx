import '../styles/homepage.css'

export default function Homepage() {
    return (
        <div className='homepage-container'>
            <div>
                <h1 className='user'>SilencedKhan</h1>
            </div>
            <div className='homepage-cards'>
                <div className='card-container'>
                    <p className='heading'>games</p>
                    <div className='card'>
                        <div className='game'>
                            <p>10/15/2022</p>
                        </div>
                    </div>
                </div>
                <div className='card-container'>
                    <p className='heading'>game details</p>
                    <div className='card'>
                        <p>details</p>
                        <div className='details-img'>
                            <p>img</p>
                        </div>
                    </div>
                </div>
                <div className='card-container'>
                    <p className='heading'>friends</p>
                    <div className='card'>
                        <p>friend list</p>
                    </div>
                </div>
            </div>
        </div>
    )
}