import "./styles.css";
import Card from "../../../components/card";
import Title from "../../../components/Title";
import Text from "../../../components/text"
import Date from "../../../components/Date";
import heart from "../../../images/heart.png"
import LikeButton from "../../../components/LikeButton";

function CardNews({ date, title, description }) {
  return (
    <Card>
      <div className="first-line">
       <Date>{date}</Date> 
        <LikeButton/>
      </div>
      <div className="card-header">
        <Title> {title} </Title>
      </div>
      <div className="card-text">
        <Text>{description}</Text>
      </div>
    </Card>
  );
}

export default CardNews;
