

const Player = ({player}) => {
    const {battingType ,biddingPrice, bowlingType, country, image, name, playerId, role} = player;
    return (
        <div>
            <h3>Player:{battingType}</h3>
            <img src={image} alt={name}className="player-image" />
            <p>{biddingPrice}</p>
            <p>{country}</p>

        
            
        </div>
    );
};

export default Player;