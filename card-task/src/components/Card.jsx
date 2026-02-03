function Card(props) {
  return (
    <div className="card">
      <div className="top">
        {props.availability === "available" && (
          <div className="available-cap">{props.availability}</div>
        )}

        <div className="rate">{props.pricePerHour}$</div>
      </div>
      <div className="middle">
        <img
          src={props.image}
          alt=""
        />
        <h1 className="username">{props.name}</h1>
        <h4 className="expertice">{props.profession}</h4>
        <h4 className="designation">Freelancer</h4>
        <div className="skill-capsule">
          <span>{props.skills[0]}</span>
          <span>{props.skills[1]}</span>
          <span>{props.skills[2]}</span>
          <span className="additional-skills">+{props.extraSkillsCount}</span>
        </div>
        <h5 className="detail">
          {props.info}
        </h5>
        <hr />
      </div>
      <div className="bottom">
        <h4>VIEW PROFILE</h4>
      </div>
    </div>
  );
}

export default Card;
