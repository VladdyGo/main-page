import BigDialogWindow from '../Dialog/BigDialogWindow/DialogWindow';
import CommonStyles from './CommonStyles/CommonStyles.module.css';

const About = (props) => {
  return (
    <div className={`${props.bodyStyle} ${props.font} ${CommonStyles.SecondaryComponentWindow}`}>
      <BigDialogWindow title="About me">
        <p>
          My name is Vladislav Goteiner, I'm a full stack web developer.
          It's about time I created my website. This is my play ground for web proggraming, designing, 3D modeling and basically anything i will put my hands on.
          Here I will post my projects and show off my work.
        </p>
        <h3>How about a little background ?</h3>
        <p>I live in Israel, Russian born. I graduated from Holon Institute of technology with a degree in applied mathematics. I wear glasses.</p>
        <h4 style={{color:'#C34A36'}}>I'm Looking for a job!</h4>
        <p>If you have a cool project in mind and you want to collaborate with me don't hesitate!
           Contact me.</p>
      </BigDialogWindow>
    </div>
  );
};

export default About;
