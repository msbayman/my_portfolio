import './Card.css';


interface CardProps {
  date: string;         
  title: string;        
  description: string;  
  children: React.ReactNode; 
}

const Card: React.FC<CardProps> = ({ date, title, description, children }) => {
  return (
    <div>
      <div className="main_card flex py-6 ">
        <div className="date flex" style={{ flex: 1 }}>
          <p className="text-xs date mt-1">{date}</p>
        </div>
        <div className=" text-xs card_info flex flex-col" style={{ flex: 3 }}>
          <div className="tit_card text-white font-normal">{title}</div>
          <div className="text-sm desc_card my-5">{description}</div>
          <div className="languages flex">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
